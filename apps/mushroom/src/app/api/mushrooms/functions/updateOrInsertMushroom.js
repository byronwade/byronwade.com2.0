import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

function formatNameWithRemoval(name) {
  const wordsToRemove = ['Mushroom', 'mushroom', 'Shroom', 'shroom', 'Magic', 'magic']; // Words to remove

  return name
    .split(/(\W+)/)
    .filter((word) => !wordsToRemove.includes(word.toLowerCase())) // Filter out specific words
    .map((word, index, array) => formatWord(word, index, array))
    .join('');
}

function formatNameWithoutRemoval(name) {
  return name
    .split(/(\W+)/)
    .map((word, index, array) => formatWord(word, index, array))
    .join('');
}

function formatWord(word, index, array) {
  if (array[index - 1] === "'" && word.toLowerCase() === 's') {
    return word.toLowerCase();
  }
  return word.match(/\w+/) ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word;
}

function formatClassification(classification) {
  let formattedClassification = {};
  for (const key in classification) {
    if (
      Object.prototype.hasOwnProperty.call(classification, key) &&
      typeof classification[key] === 'string'
    ) {
      formattedClassification[key] = formatNameWithRemoval(classification[key]);
    } else {
      formattedClassification[key] = classification[key];
    }
  }
  return formattedClassification;
}

function formatScientificProfile(scientificProfile) {
  let formattedProfile = {};
  for (const key in scientificProfile) {
    if (Object.prototype.hasOwnProperty.call(scientificProfile, key)) {
      if (Array.isArray(scientificProfile[key])) {
        formattedProfile[key] = removeDuplicates(
          scientificProfile[key].map((item) => formatNameWithoutRemoval(item))
        );
      } else if (typeof scientificProfile[key] === 'string') {
        formattedProfile[key] = formatNameWithoutRemoval(scientificProfile[key]);
      } else {
        formattedProfile[key] = scientificProfile[key];
      }
    }
  }
  return formattedProfile;
}

function convertToSlug(text) {
  if (!text) return ''; // Handle null or empty strings
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

// Helper function to remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * Updates an existing mushroom record or inserts a new one based on the slug.
 *
 * @param {object} existingMushroomResponse - The response from Supabase for an existing mushroom.
 * @param {object} newMushroomResponse - The new mushroom data to be inserted or used for updating.
 * @returns {object}
 */
export async function updateOrInsertMushroom(existingMushroomResponse, newMushroomResponse) {
  try {
    let newData = newMushroomResponse.openAIResponse;
    const currentTime = new Date().toISOString();
    const slug = convertToSlug(newData.common_name);

    // Format data
    if (newData.common_name) {
      newData.common_name = formatNameWithRemoval(newData.common_name);
      console.log('newData.common_name', newData.common_name);
    }
    if (newData.classification) {
      newData.classification = formatClassification(newData.classification);
      console.log('newData.classification', newData.classification);
    }
    if (newData.scientific_profile) {
      newData.scientific_profile = formatScientificProfile(newData.scientific_profile);
      console.log('newData.scientific_profile', newData.scientific_profile);
    }
    if (newData.slug) {
      newData.slug = slug;
      console.log('newData.slug', newData.slug);
    }

    // Validate the data before insert/update
    if (isDataInvalid(newData)) {
      console.error('Invalid data detected. Aborting database operation.');
      return { error: 'Invalid data' };
    }

    if (existingMushroomResponse) {
      // Update existing mushroom record
      const updateData = {
        ...mergeData(existingMushroomResponse, newData),
        slug: existingMushroomResponse.slug || slug,
        created_at: existingMushroomResponse.created_at || currentTime,
        updated_at: currentTime
      };

      const { data, error } = await supabase.from('mushrooms').update(updateData).eq('slug', slug);

      if (error) throw error;
      return { mushroomId: existingMushroomResponse.id, data };
    } else {
      // Insert new mushroom record
      const insertData = {
        ...newData,
        slug: slug,
        created_at: currentTime,
        updated_at: currentTime
      };

      const { data, error } = await supabase.from('mushrooms').insert([insertData]);

      if (error) throw error;
      return { data };
    }
  } catch (error) {
    console.error('Database operation failed:', error.message);
    return { error: 'Internal Server Error' };
  }
}

/**
 * Merges new mushroom data into existing data.
 *
 * @param {object} existingData - The existing mushroom data.
 * @param {object} newData - The new mushroom data to be merged.
 * @returns {object} - The merged mushroom data.
 */
function mergeData(existingData, newData) {
  const mergedData = JSON.parse(JSON.stringify(existingData));

  const isObject = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj);

  const recursiveMerge = (target, source, path = '') => {
    Object.keys(source).forEach((key) => {
      const targetValue = target[key];
      const sourceValue = source[key];
      const currentPath = path ? `${path}.${key}` : key;

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = mergeArrays(targetValue, sourceValue, currentPath);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = recursiveMerge({ ...targetValue }, sourceValue, currentPath);
      } else if (!isInvalidValue(sourceValue) && isInvalidValue(targetValue)) {
        console.log(`${currentPath}: ${targetValue} => ${sourceValue}`);
        target[key] = sourceValue;
      }
    });
    return target;
  };

  const mergeArrays = (arr1, arr2, path) => {
    const combined = [...arr1, ...arr2];
    const uniqueArray = combined.reduce((acc, item, index) => {
      const itemIdentifier = isObject(item) ? item.id || JSON.stringify(item) : item;
      if (
        !acc.find((x) =>
          isObject(x)
            ? x.id === itemIdentifier || JSON.stringify(x) === JSON.stringify(item)
            : x === item
        )
      ) {
        if (index >= arr1.length) {
          console.log(`${path}[${index - arr1.length}]: null => ${JSON.stringify(item)}`);
        }
        acc.push(item);
      }
      return acc;
    }, []);
    return uniqueArray;
  };

  return recursiveMerge(mergedData, newData);
}

function isDataInvalid(data) {
  return (
    isInvalidValue(data.common_name) || isInvalidValue(data.scientific_profile.scientific_name)
  );
}

function isInvalidValue(value) {
  const invalidValues = [
    'Not available',
    'Information not available',
    'N/A',
    'Null',
    'null',
    'NULL',
    undefined,
    null,
    false,
    '',
    ' ',
    '[]',
    '{}'
  ];
  return invalidValues.includes(value) || (typeof value === 'string' && value.trim() === '');
}
