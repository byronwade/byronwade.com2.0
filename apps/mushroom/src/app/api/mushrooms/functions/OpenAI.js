import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

export async function fetchOpenAIContent(wikiData, existingMushroomResponse, term) {
  let combinedData;

  if (wikiData) {
    combinedData = {
      searchTerm: term,
      wikiData: wikiData,
      existingMushroomData: existingMushroomResponse
    };
  } else {
    combinedData = { searchTerm: term };
  }

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `
          Initial Instruction for OpenAI
          "As a professional mycologist, you are tasked with gathering the most accurate and detailed information possible for specific mushroom species. Your responses should reflect expert knowledge and precision in the field of mycology. Ensure that all details are filled in according to the following JSON structure."
          
          Prompts for Each Section
          Identification:
          
          "Generate a comprehensive identification profile for a specific mushroom species, filling in the common name, detailed scientific classification, a thorough description, visual identifiers (images, color patterns, shape descriptions), habitat and ecology, physical characteristics, and genetic identifiers in the provided JSON format."
          General Information:
          
          "Provide a detailed overview of the origin, year of discovery, description, categories, tags, legal status, and an educational summary highlighting the significance and safety information of a specific mushroom species, following the JSON structure."
          Toxicity:
          
          "Elaborate on the toxicity profile of a specific mushroom species, detailing its poisonous nature, effects, symptoms, treatment methods, death rate, edible status, and any poisonous lookalikes, as per the JSON format."
          Growth Information:
          
          "Describe the growth characteristics of a specific mushroom species, including growth season, difficulty of cultivation, yield, cultivation time, substrate preferences, mycelium appearance, and various fruiting conditions, in alignment with the JSON structure."
          Psychoactive Information:
          
          "Detail the psychoactive properties of a specific mushroom species, covering potency levels, effects, psychoactive compounds, dosage recommendations, individual sensitivity, user experience, subjective effects, and duration of effects, following the JSON format."
          Storage:
          
          "Provide storage recommendations for both spore and harvested forms of a specific mushroom species, detailing optimal conditions for temperature, environment, and shelf life, as outlined in the JSON structure."
          Additional Information:
          
          "Give additional details about a specific mushroom species, such as its flavor profile, medical effects, cultural significance, availability, intended uses, historical significance, and conservation status, following the JSON format."
          Cite Sources:
          
          "List credible sources for information on a specific mushroom species, including titles, URLs, and the dates data was gathered, as per the JSON structure."
          Research Data:
          
          "Compile in-depth research data for a specific mushroom species, focusing on genetic information, habitat and distribution, morphological details, and psychoactive properties, in alignment with the JSON structure."
          Growth Conditions:
          
          "Describe the ideal growth conditions for a specific mushroom species, focusing on altitude range, soil type, pH preference, and light intensity, following the JSON format."
          Nutritional Value:
          
          "Detail the nutritional content of a specific mushroom species, including information on protein, carbohydrates, vitamins, and minerals, as per the JSON structure."
          Medicinal Properties:
          
          "Explain the medicinal properties and active compounds of a specific mushroom species, including any known traditional uses and clinical trials, in alignment with the JSON structure."
          Pricing:
          
          "Provide current market pricing for a specific mushroom species, including rates per gram, ounce, and pound, as outlined in the JSON structure."
          Psychoactive Experience:
          
          "Describe the psychoactive experience related to a specific mushroom species, detailing subjective effects, potency levels, duration of effects, and psychological impact, following the JSON format."
          Culinary Uses:
          
          "Outline the culinary applications of a specific mushroom species, including recommended recipes, cooking methods, flavor pairings, and nutritional benefits, as per the JSON structure."
          Mycological Research:
          
          "Summarize the mycological research surrounding a specific mushroom species, including research studies, academic publications, molecular structure, chemical analysis, biodiversity conservation efforts, historical use in research, ongoing studies, and research funding sources, in alignment with the JSON structure."
{
  identification: {
    common_name: '',
    scientific_profile: {
      strain_name: '',
      scientific_name: '',
      nicknames: [''],
      synonyms: ['']
    },
    classification: {
      kingdom: '',
      division: '',
      class: '',
      order: '',
      family: '',
      genus: '',
      species: ''
    },
    detailed_description: '',
    visual_identifiers: {
      images: [''],
      color_patterns: '',
      shape_descriptions: ''
    },
    genetic_identifiers: {
      genetic_lineage: '',
      DNA_sequence_data: ['']
    }
  },
  habitat_and_ecology: {
    habitat: '',
    ecology: '',
    physical_characteristics: {
      morphology: {
        cap: {
          size: '',
          shape: '',
          color: '',
          surface: '',
          margin: ''
        },
        gills: {
          attachment: '',
          spacing: '',
          color: ''
        },
        stem: {
          size: '',
          color: '',
          surface: '',
          veil: '',
          mycelium: ''
        },
        flesh: {
          color: '',
          changes: ''
        }
      },
      odor_and_taste: '',
      spore_print: ''
    }
  },
  general_info: {
    origin: "",
    year_discovered: "",
    description: "",
    categories: [""],
    tags: [""],
    legal_status: {
      general: "",
      note: "",
      specific_regulations: "",
      legal_resources_links: "",
    },
    educational_summary: {
      significance: "",
      safety_information: "",
    },
  },
  toxicity: {
    is_poisonous: false,
    effects: "",
    symptoms: "",
    treatment: "",
    death_rate: "",
    poisonous_lookalikes: "",
    edible: false,
  },
  growth_info: {
    season: "",
    difficulty: "",
    yield: "",
    cultivation_time: "",
    substrate: "",
    mycelium_appearance: "",
    fruiting_conditions: {
      temperature_range: "",
      relative_humidity: "",
      lighting: "",
    },
    incubation_period: "",
    fruiting_time: "",
    typical_yield: "",
    spawn_type: "",
    fruiting_frequency: "",
    common_contaminants: "",
  },
  psychoactive_info: {
    potency_level: "",
    effects: [""],
    psychoactive_compounds: "",
    dosage_recommendations: {
      very_low: "",
      low: "",
      medium: "",
      high: "",
      very_high: "",
    },
    individual_sensitivity: "",
    user_experience: {
      common_reports: [""],
      suitability: "",
      trip_reports: "",
      risk_profile: "",
      safety_precautions: "",
    },
    subjective_effects: [""],
    duration_of_effects: {
      onset: "",
      peak: "",
      total_duration: "",
    },
    psychological_effects: [""],
  },
  storage: {
    spore_storage: { temperature: "", environment: "", shelf_life: "" },
    harvested_mushroom_storage: {
      fresh: { temperature: "", humidity: "", shelf_life: "" },
      dried: { environment: "", shelf_life: "" },
    },
  },
  additional_info: {
    flavor_profile: "",
    medical_effects: "",
    cultural_significance: "",
    availability: "",
    category: "",
    intended_use: "",
    historical_significance: "",
    preparation_methods: "",
    recipes: "",
    conservation_status: "",
  },
  cite_sources: {
    sources: [
      { title: "", url: "", data_gathered: "" },
      { title: "", url: "", data_gathered: "" },
      { title: "", url: "", data_gathered: "" },
    ],
  },
  research_data: {
    genetic_information: "",
    habitat_and_distribution: "",
    morphological_details: "",
    psychoactive_properties: "",
  },
  growth_conditions: {
    altitude_range: "",
    soil_type: "",
    pH_preference: "",
    light_intensity: "",
  },
  nutritional_value: {
    protein_content: "",
    carbohydrate_content: "",
    vitamin_content: "",
    mineral_content: "",
  },
  medicinal_properties: {
    active_compounds: "",
    traditional_uses: "",
    clinical_trials: "",
  },
  pricing: {
    per_gram: { low: 4.38, high: 7.71 },
    per_ounce: { low: 123.5, high: 217.0 },
    per_pound: { low: 1975, high: 3475 },
  },
  culinary_uses: {
    recommended_recipes: [""],
    cooking_methods: [""],
    flavor_pairings: [""],
    preparation_tips: "",
    nutritional_benefits: "",
    dietary_considerations: {
      vegan: false,
      gluten_free: false,
      low_carb: false,
      others: [""],
    },
    preservation_methods: [""],
    common_culinary_uses: "",
    cultural_significance_in_cuisine: "",
  },
  mycological_research: {
    research_studies: [""],
    academic_publications: [""],
    molecular_structure: "",
    chemical_analysis: "",
    biodiversity_conservation: "",
    historical_use_in_research: "",
    ongoing_studies: [""],
    research_funding_sources: [""],
  },
}`
        },
        {
          role: 'user',
          content: JSON.stringify(combinedData) // Ensure this is a string
        }
      ],
      model: 'gpt-3.5-turbo-1106', //gpt-3.5-turbo-1106
      response_format: { type: 'json_object' }
    });
    //prompt: "" // It should follow this structure for Dall-E "Create a picture of a <strain_name> mushroom with <cap_color> cap and <stem_color> stem. The mushroom should be <cap_shape> and have a <veil_type> veil. The spore print should be <spore_print_color>. The mushroom should be growing on <substrate> substrate. The mushroom should be <description>. The mushroom should be <difficulty> to grow. The mushroom should have a <level> potency. The mushroom should have a <suitability> user experience. The mushroom should be <legal_status>. The mushroom should have a <flavor_profile> flavor profile. The mushroom should have <medical_effects> medical effects. The mushroom should have <cultural_significance> cultural significance. The mushroom should have <availability> availability. The mushroom should be <category> category. The mushroom should be <intended_use> intended use."

    // const mushroomPrompt = JSON.parse(response.choices[0].message.content);

    // console.log(mushroomPrompt.prompt);

    // const image = await openai.images.generate({
    //   model: 'dall-e-3',
    //   prompt: mushroomPrompt.prompt,
    //   size: '1024x1024'
    // });
    // const image_url = image.data;

    // Validate response before parsing
    if (!response || !response.choices || response.choices.length === 0) {
      console.error('Invalid or empty response from OpenAI API');
      return {
        openAIResponse: null,
        openAIEstimatedCost: null
      };
    }

    // Parse the response
    const openAIResponse = JSON.parse(response.choices[0].message.content);
    //console.log(openAIResponse);

    // Cost calculation for gpt-3.5-turbo-1106
    const gpt35turboInputCostPerThousandTokens = 0.001;
    const gpt35turboOutputCostPerThousandTokens = 0.002;

    // Cost calculation for gpt-4-1106-preview
    const gpt4InputCostPerThousandTokens = 0.01;
    const gpt4OutputCostPerThousandTokens = 0.03;

    // You should determine which model is used in the response
    // For this example, I'm assuming a variable 'modelUsed' which should be 'gpt35turbo' or 'gpt4'
    const modelUsed = 'gpt35turbo'; // or 'gpt35turbo'

    // Response token count
    const tokenCount = response.usage.total_tokens;

    // Calculate cost based on the model used
    let openAIEstimatedCost = 0;
    if (modelUsed === 'gpt35turbo') {
      openAIEstimatedCost =
        (tokenCount / 1000) *
        (gpt35turboInputCostPerThousandTokens + gpt35turboOutputCostPerThousandTokens);
    } else if (modelUsed === 'gpt4') {
      openAIEstimatedCost =
        (tokenCount / 1000) * (gpt4InputCostPerThousandTokens + gpt4OutputCostPerThousandTokens);
    }
    return {
      //image_url,
      openAIResponse,
      openAIEstimatedCost
    };
  } catch (error) {
    console.error('Error in OpenAI API call:', error);
    return {
      openAIResponse: null, // Return default structure in case of an error
      openAIEstimatedCost: null
    };
  }
}
