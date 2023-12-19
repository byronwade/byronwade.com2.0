import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://xmyialnxjvkyxmpbuvis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhteWlhbG54anZreXhtcGJ1dmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1MzYxNTMsImV4cCI6MjAxODExMjE1M30.hZ3-vMSXeVHIEoPAwEaaH6kUrNLNGwFnWPswbuvoLg4';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function updateOrInsertMushroom(existingMushroomResponse, newMushroomResponse) {
  try {
    if (existingMushroomResponse) {
      // Extract existing data
      const existingData = existingMushroomResponse; // Make sure it's an object
      const newData = newMushroomResponse.openAIResponse;

      console.log('existingData.origin', existingData.physical_characteristics.gills);
      console.log('newData.origin', newData.physical_characteristics.gills);

      if (
        newData.scientific_profile.contentQuality > existingData.scientific_profile.contentQuality
      ) {
        // Proceed with the update
        const data = {
          common_name: !isInvalidValue(existingData.common_name)
            ? newData?.common_name
            : existingData?.common_name,
          scientific_profile: {
            strain_name: !isInvalidValue(existingData?.common_name)
              ? newData?.scientific_profile?.strain_name
              : existingData?.scientific_profile?.strain_name,
            scientific_name: !isInvalidValue(existingData?.common_name)
              ? newData?.scientific_profile?.scientific_name
              : existingData?.scientific_profile?.scientific_name,
            nicknames: !isInvalidValue(existingData?.nicknames)
              ? newData?.scientific_profile?.nicknames
              : existingData?.scientific_profile?.nicknames,
            synonyms: !isInvalidValue(existingData?.synonyms)
              ? newData?.scientific_profile?.synonyms
              : existingData?.scientific_profile?.synonyms,
            contentQuality: 0.87
          },
          classification: {
            kingdom: !isInvalidValue(existingData?.classification?.kingdom)
              ? newData?.classification?.kingdom
              : existingData?.classification?.kingdom,
            division: !isInvalidValue(existingData?.classification?.division)
              ? newData?.classification?.division
              : existingData?.classification?.division,
            class: !isInvalidValue(existingData?.classification?.class)
              ? newData?.classification?.class
              : existingData?.classification?.class,
            order: !isInvalidValue(existingData?.classification?.order)
              ? newData?.classification?.order
              : existingData?.classification?.order,
            family: !isInvalidValue(existingData?.classification?.family)
              ? newData?.classification?.family
              : existingData?.classification?.family,
            genus: !isInvalidValue(existingData?.classification?.genus)
              ? newData?.classification?.genus
              : existingData?.classification?.genus,
            species: !isInvalidValue(existingData?.classification?.species)
              ? newData?.classification?.species
              : existingData?.classification?.species,
            contentQuality: 0.89
          },
          origin: !isInvalidValue(existingData?.origin) ? newData?.origin : existingData?.origin,
          genetic_lineage: !isInvalidValue(existingData?.genetic_lineage)
            ? newData?.genetic_lineage
            : existingData?.genetic_lineage,
          year_discovered: !isInvalidValue(existingData?.year_discovered)
            ? newData?.year_discovered
            : existingData?.year_discovered,
          description: !isInvalidValue(existingData?.description)
            ? newData?.description
            : existingData?.description,
          poisonous: {
            is_poisonous: false,
            effects: !isInvalidValue(existingData?.poisonous?.effects)
              ? newData?.poisonous?.effects
              : existingData?.poisonous?.effects,
            symptoms: !isInvalidValue(existingData?.poisonous?.symptoms)
              ? newData?.poisonous?.symptoms
              : existingData?.poisonous?.symptoms,
            treatment: !isInvalidValue(existingData?.poisonous?.treatment)
              ? newData?.poisonous?.treatment
              : existingData?.poisonous?.treatment,
            death_rate: !isInvalidValue(existingData?.poisonous?.death_rate)
              ? newData?.poisonous?.death_rate
              : existingData?.poisonous?.death_rate,
            poisonous_lookalikes: !isInvalidValue(existingData?.poisonous?.poisonous_lookalikes)
              ? newData?.poisonous?.poisonous_lookalikes
              : existingData?.poisonous?.poisonous_lookalikes,
            contentQuality: 0.95
          },
          edible: true,
          categories: !isInvalidValue(existingData?.categories)
            ? newData?.categories
            : existingData?.categories,
          tags: !isInvalidValue(existingData?.tags) ? newData?.tags : existingData?.tags,
          pricing: {
            per_gram: 1.8,
            our_price_per_gram: 1.8,
            contentQuality: 0.84
          },
          physical_characteristics: {
            habitat: !isInvalidValue(existingData?.physical_characteristics?.habitat)
              ? newData?.physical_characteristics?.habitat
              : existingData?.physical_characteristics?.habitat,
            ecology: !isInvalidValue(existingData?.physical_characteristics?.ecology)
              ? newData?.physical_characteristics?.ecology
              : existingData?.physical_characteristics?.ecology,
            cap: !isInvalidValue(existingData?.physical_characteristics?.cap)
              ? newData?.physical_characteristics?.cap
              : existingData?.physical_characteristics?.cap,
            gills: !isInvalidValue(existingData?.physical_characteristics?.gills)
              ? newData?.physical_characteristics?.gills
              : existingData?.physical_characteristics?.gills,
            stem: !isInvalidValue(existingData?.physical_characteristics?.stem)
              ? newData?.physical_characteristics?.stem
              : existingData?.physical_characteristics?.stem,
            flesh: !isInvalidValue(existingData?.physical_characteristics?.flesh)
              ? newData?.physical_characteristics?.flesh
              : existingData?.physical_characteristics?.flesh,
            odor_and_taste: !isInvalidValue(existingData?.physical_characteristics?.odor_and_taste)
              ? newData?.physical_characteristics?.odor_and_taste
              : existingData?.physical_characteristics?.odor_and_taste,
            spore_print: !isInvalidValue(existingData?.physical_characteristics?.spore_print)
              ? newData?.physical_characteristics?.spore_print
              : existingData?.physical_characteristics?.spore_print,
            contentQuality: 0.75
          },
          growth_info: {
            season: !isInvalidValue(existingData?.growth_info?.season)
              ? newData?.growth_info?.season
              : existingData?.growth_info?.season,
            difficulty: !isInvalidValue(existingData?.growth_info?.difficulty)
              ? newData?.growth_info?.difficulty
              : existingData?.growth_info?.difficulty,
            yield: !isInvalidValue(existingData?.growth_info?.yield)
              ? newData?.growth_info?.yield
              : existingData?.growth_info?.yield,
            cultivation_time: !isInvalidValue(existingData?.growth_info?.cultivation_time)
              ? newData?.growth_info?.cultivation_time
              : existingData?.growth_info?.cultivation_time,
            substrate: !isInvalidValue(existingData?.growth_info?.substrate)
              ? newData?.growth_info?.substrate
              : existingData?.growth_info?.substrate,
            mycelium_appearance: !isInvalidValue(existingData?.growth_info?.mycelium_appearance)
              ? newData?.growth_info?.mycelium_appearance
              : existingData?.growth_info?.mycelium_appearance,
            fruiting_conditions: !isInvalidValue(existingData?.growth_info?.fruiting_conditions)
              ? newData?.growth_info?.fruiting_conditions
              : existingData?.growth_info?.fruiting_conditions,
            incubation_period: !isInvalidValue(existingData?.growth_info?.incubation_period)
              ? newData?.growth_info?.incubation_period
              : existingData?.growth_info?.incubation_period,
            fruiting_time: !isInvalidValue(existingData?.growth_info?.fruiting_time)
              ? newData?.growth_info?.fruiting_time
              : existingData?.growth_info?.fruiting_time,
            typical_yield: !isInvalidValue(existingData?.growth_info?.typical_yield)
              ? newData?.growth_info?.typical_yield
              : existingData?.growth_info?.typical_yield,
            spawn_type: !isInvalidValue(existingData?.growth_info?.spawn_type)
              ? newData?.growth_info?.spawn_type
              : existingData?.growth_info?.spawn_type,
            fruiting_frequency: !isInvalidValue(existingData?.growth_info?.fruiting_frequency)
              ? newData?.growth_info?.fruiting_frequency
              : existingData?.growth_info?.fruiting_frequency,
            common_contaminants: !isInvalidValue(existingData?.growth_info?.common_contaminants)
              ? newData?.growth_info?.common_contaminants
              : existingData?.growth_info?.common_contaminants,
            contentQuality: 0.82
          },
          // potency_info: {
          //   level: !isInvalidValue(existingData?.potency_info?.level)
          //     ? newData?.potency_info?.level
          //     : existingData?.potency_info?.level,
          //   effects: !isInvalidValue(existingData?.potency_info?.effects)
          //     ? newData?.potency_info?.effects
          //     : existingData?.potency_info?.effects,
          //   psychoactive_compounds: !isInvalidValue(existingData?.potency_info?.psychoactive_compounds)
          //     ? newData?.potency_info?.psychoactive_compounds
          //     : existingData?.potency_info?.psychoactive_compounds,
          //   dosage_recommendations_specific_effects: !isInvalidValue(
          //     existingData?.potency_info?.dosage_recommendations_specific_effects
          //   )
          //     ? newData?.potency_info?.dosage_recommendations_specific_effects
          //     : existingData?.potency_info?.dosage_recommendations_specific_effects,
          //   individual_sensitivity: !isInvalidValue(existingData?.potency_info?.individual_sensitivity)
          //     ? newData?.potency_info?.individual_sensitivity
          //     : existingData?.potency_info?.individual_sensitivity,
          //   contentQuality: 0.93
          // },
          dosage_recommendations: {
            very_low: !isInvalidValue(existingData?.dosage_recommendations?.very_low)
              ? newData?.dosage_recommendations?.very_low
              : existingData?.dosage_recommendations?.very_low,
            low: !isInvalidValue(existingData?.dosage_recommendations?.low)
              ? newData?.dosage_recommendations?.low
              : existingData?.dosage_recommendations?.low,
            medium: !isInvalidValue(existingData?.dosage_recommendations?.medium)
              ? newData?.dosage_recommendations?.medium
              : existingData?.dosage_recommendations?.medium,
            high: !isInvalidValue(existingData?.dosage_recommendations?.high)
              ? newData?.dosage_recommendations?.high
              : existingData?.dosage_recommendations?.high,
            very_high: !isInvalidValue(existingData?.dosage_recommendations?.very_high)
              ? newData?.dosage_recommendations?.very_high
              : existingData?.dosage_recommendations?.very_high,
            contentQuality: 0.86
          },
          storage: {
            spore_storage: !isInvalidValue(existingData?.storage?.spore_storage)
              ? newData?.storage?.spore_storage
              : existingData?.storage?.spore_storage,
            harvested_mushroom_storage: !isInvalidValue(
              existingData?.storage?.harvested_mushroom_storage
            )
              ? newData?.storage?.harvested_mushroom_storage
              : existingData?.storage?.harvested_mushroom_storage,
            contentQuality: 0.83
          },
          user_experience: {
            common_reports: !isInvalidValue(existingData?.user_experience?.common_reports)
              ? newData?.user_experience?.common_reports
              : existingData?.user_experience?.common_reports,
            suitability: !isInvalidValue(existingData?.user_experience?.suitability)
              ? newData?.user_experience?.suitability
              : existingData?.user_experience?.suitability,
            trip_reports: !isInvalidValue(existingData?.user_experience?.trip_reports)
              ? newData?.user_experience?.trip_reports
              : existingData?.user_experience?.trip_reports,
            risk_profile: !isInvalidValue(existingData?.user_experience?.risk_profile)
              ? newData?.user_experience?.risk_profile
              : existingData?.user_experience?.risk_profile,
            safety_precautions: !isInvalidValue(existingData?.user_experience?.safety_precautions)
              ? newData?.user_experience?.safety_precautions
              : existingData?.user_experience?.safety_precautions,
            contentQuality: 0.68
          },
          legal_status: {
            general: !isInvalidValue(existingData?.legal_status?.general)
              ? newData?.legal_status?.general
              : existingData?.legal_status?.general,
            note: !isInvalidValue(existingData?.legal_status?.note)
              ? newData?.legal_status?.note
              : existingData?.legal_status?.note,
            specific_regulations: !isInvalidValue(existingData?.legal_status?.specific_regulations)
              ? newData?.legal_status?.specific_regulations
              : existingData?.legal_status?.specific_regulations,
            legal_resources_links: !isInvalidValue(
              existingData?.legal_status?.legal_resources_links
            )
              ? newData?.legal_status?.legal_resources_links
              : existingData?.legal_status?.legal_resources_links,
            contentQuality: 0.75
          },
          additional_info: {
            flavor_profile: !isInvalidValue(existingData?.additional_info?.flavor_profile)
              ? newData?.additional_info?.flavor_profile
              : existingData?.additional_info?.flavor_profile,
            medical_effects: !isInvalidValue(existingData?.additional_info?.medical_effects)
              ? newData?.additional_info?.medical_effects
              : existingData?.additional_info?.medical_effects,
            cultural_significance: !isInvalidValue(
              existingData?.additional_info?.cultural_significance
            )
              ? newData?.additional_info?.cultural_significance
              : existingData?.additional_info?.cultural_significance,
            availability: !isInvalidValue(existingData?.additional_info?.availability)
              ? newData?.additional_info?.availability
              : existingData?.additional_info?.availability,
            category: !isInvalidValue(existingData?.additional_info?.category)
              ? newData?.additional_info?.category
              : existingData?.additional_info?.category,
            intended_use: !isInvalidValue(existingData?.additional_info?.intended_use)
              ? newData?.additional_info?.intended_use
              : existingData?.additional_info?.intended_use,
            contentQuality: 0.71
          },
          cite_sources: {
            source_1: !isInvalidValue(existingData?.cite_sources?.source_1)
              ? newData?.cite_sources?.source_1
              : existingData?.cite_sources?.source_1,
            source_2: !isInvalidValue(existingData?.cite_sources?.source_2)
              ? newData?.cite_sources?.source_2
              : existingData?.cite_sources?.source_2,
            source_3: !isInvalidValue(existingData?.cite_sources?.source_3)
              ? newData?.cite_sources?.source_3
              : existingData?.cite_sources?.source_3,
            contentQuality: 0.86
          },
          educational_summary: {
            description: !isInvalidValue(existingData?.educational_summary?.description)
              ? newData?.educational_summary?.description
              : existingData?.educational_summary?.description,
            significance: !isInvalidValue(existingData?.educational_summary?.significance)
              ? newData?.educational_summary?.significance
              : existingData?.educational_summary?.significance,
            safety_information: !isInvalidValue(
              existingData?.educational_summary?.safety_information
            )
              ? newData?.educational_summary?.safety_information
              : existingData?.educational_summary?.safety_information,
            contentQuality: 0.84
          },
          research_data: {
            genetic_information: !isInvalidValue(existingData?.research_data?.genetic_information)
              ? newData?.research_data?.genetic_information
              : existingData?.research_data?.genetic_information,
            habitat_and_distribution: !isInvalidValue(
              existingData?.research_data?.habitat_and_distribution
            )
              ? newData?.research_data?.habitat_and_distribution
              : existingData?.research_data?.habitat_and_distribution,
            morphological_details: !isInvalidValue(
              existingData?.research_data?.morphological_details
            )
              ? newData?.research_data?.morphological_details
              : existingData?.research_data?.morphological_details,
            psychoactive_properties: !isInvalidValue(
              existingData?.research_data?.psychoactive_properties
            )
              ? newData?.research_data?.psychoactive_properties
              : existingData?.research_data?.psychoactive_properties,
            contentQuality: 0.82
          },
          growth_conditions: {
            altitude_range: !isInvalidValue(existingData?.growth_conditions?.altitude_range)
              ? newData?.growth_conditions?.altitude_range
              : existingData?.growth_conditions?.altitude_range,
            soil_type: !isInvalidValue(existingData?.growth_conditions?.soil_type)
              ? newData?.growth_conditions?.soil_type
              : existingData?.growth_conditions?.soil_type,
            pH_preference: !isInvalidValue(existingData?.growth_conditions?.pH_preference)
              ? newData?.growth_conditions?.pH_preference
              : existingData?.growth_conditions?.pH_preference,
            light_intensity: !isInvalidValue(existingData?.growth_conditions?.light_intensity)
              ? newData?.growth_conditions?.light_intensity
              : existingData?.growth_conditions?.light_intensity,
            contentQuality: 0.79
          },
          nutritional_value: {
            protein_content: !isInvalidValue(existingData?.nutritional_value?.protein_content)
              ? newData?.nutritional_value?.protein_content
              : existingData?.nutritional_value?.protein_content,
            carbohydrate_content: !isInvalidValue(
              existingData?.nutritional_value?.carbohydrate_content
            )
              ? newData?.nutritional_value?.carbohydrate_content
              : existingData?.nutritional_value?.carbohydrate_content,
            vitamin_content: !isInvalidValue(existingData?.nutritional_value?.vitamin_content)
              ? newData?.nutritional_value?.vitamin_content
              : existingData?.nutritional_value?.vitamin_content,
            mineral_content: !isInvalidValue(existingData?.nutritional_value?.mineral_content)
              ? newData?.nutritional_value?.mineral_content
              : existingData?.nutritional_value?.mineral_content,
            contentQuality: 0.77
          },
          medicinal_properties: {
            active_compounds: !isInvalidValue(existingData?.medicinal_properties?.active_compounds)
              ? newData?.medicinal_properties?.active_compounds
              : existingData?.medicinal_properties?.active_compounds,
            traditional_uses: !isInvalidValue(existingData?.medicinal_properties?.traditional_uses)
              ? newData?.medicinal_properties?.traditional_uses
              : existingData?.medicinal_properties?.traditional_uses,
            clinical_trials: !isInvalidValue(existingData?.medicinal_properties?.clinical_trials)
              ? newData?.medicinal_properties?.clinical_trials
              : existingData?.medicinal_properties?.clinical_trials,
            contentQuality: 0.81
          },
          confidence_score: 1,
          overall_content_quality_score: 0.81
        };

        // Update the row in the database
        const { data: updatedData, error } = await supabase
          .from('mushrooms')
          .update(data)
          .eq('id', existingMushroomResponse.id);

        if (error) {
          console.error('Error updating Supabase row:', error.message);
          throw error;
        }

        console.log('Updated data:', updatedData);

        return { mushroomId: existingMushroomResponse.id };
      } else {
        console.log('New data does not meet content quality threshold for update.');
        return { mushroomId: existingMushroomResponse.id };
      }
    } else {
      console.log('newMushroomResponse else', newMushroomResponse);
      // Insert data into the "mushrooms" table if it doesn't exist
      const { data, error } = await supabase.from('mushrooms').upsert(
        [
          {
            ...newMushroomResponse.openAIResponse
          }
        ],
        { onConflict: ['id'] }
      ); // Use upsert to insert or update if conflict by id

      if (error) {
        console.error('Error inserting Supabase row:', error.message);
        throw error;
      }

      console.log('insertResponse', data);
    }

    return { mushroomId: existingMushroomResponse ? existingMushroomResponse.id : null };
  } catch (error) {
    console.error('Error:', error.message);
    return { error: 'Internal Server Error' };
  }
}

function isInvalidValue(value) {
  // Define your invalid value checks here
  const invalidValues = ['Not available', 'Information not available', 'N/A', 'Null'];
  return invalidValues.includes(value) || value === false; // Consider "false" as an invalid value
}
