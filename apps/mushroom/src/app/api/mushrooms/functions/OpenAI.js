import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

export async function fetchOpenAIContent(businessData, existingMushroomResponse, term) {
  let combinedData;

  if (businessData) {
    combinedData = {
      searchTerm: term,
      checkMetadata: businessData.websiteData.checkMetadata,
      companyData: businessData.websiteData.companyData,
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
          content: `You are to assume the role of a mycological expert tasked with synthesizing comprehensive information about various mushroom strains into a structured JSON object. Your primary responsibilities include:

          Referencing Existing Data: Utilize existing mushroom data as a benchmark. If the new data lacks certain information present in the existing data, maintain the existing details in your final JSON output.
          
          Data Evaluation Algorithm:
          
          Incorporate new data into the final JSON object if it offers more accurate or additional insights compared to the existing data.
          Retain existing data if it proves to be more informative or accurate than the new data.
          Use "NULL" as a placeholder for missing information in both new and existing data.
          Content Quality Calculation:
          
          Assign a Content Quality score (0-100) to each key, reflecting the data's accuracy, completeness, and reliability.
          Assign lower scores to data marked "NULL".
          Significantly lower the score for keys with null or empty values.
          Compute an Overall Content Quality Score for the entire JSON object, representing the average quality of all keys.
          Consistent Format Maintenance:
          
          Ensure all keys are included in the final JSON object, even if their Content Quality score is 0.0.
          JSON Object Components:
          Your JSON object should encompass the following aspects for each mushroom strain:
          
          Mushroom Identity: Common name, strain name, scientific name, nicknames, synonyms.
          Classification: Kingdom, division, class, order, family, genus, species.
          Origin: Geographical origin, genetic lineage, year of discovery.
          Description: A concise strain description.
          Edibility: Poisonous or edible status, effects, symptoms.
          Physical Characteristics: Habitat, ecology, cap, gills, stem, flesh, odor and taste, spore print.
          Microscopic Features: Spores, basidia, cheilocystidia, pileipellis, clamp connections.
          Growth Information: Season, difficulty, yield, cultivation time, substrate, mycelium appearance, fruiting conditions.
          Potency Information: Level, effects, psychoactive compounds.
          Legal Status: General legal status, specific regulations.
          Additional Information: Flavor profile, medical effects, cultural significance, availability, category, intended use, historical significance, preparation methods, recipes, conservation status.
          Nutritional Value: Protein, carbohydrate, vitamin, and mineral content.
          Medicinal Properties: Active compounds, traditional uses, clinical trials.
          Overall Content Quality: A composite score reflecting the quality of the entire JSON object.
          Task: Calculate and provide the Content Quality for each key in the JSON object and the Overall Content Quality for the entire response. Ensure your response adheres to the format exemplified in the openAIResponse example.    

          {
            "common_name": "Thai", // The name of the mushroom but without the mushroom part (e.g. "Thai" instead of "Thai Mushroom"), the name should be what is most commonly used to refer to this mushroom as, count the most commonly used name and whatever is used most use that as the name, if there is no common name, this should be the Scientific Name. First letter of each word should be capitalized.
            "scientific_profile": {
              "strain_name": "Full Moon Party",
              "scientific_name": "Psilocybe Cubensis",
              "nicknames": [
                "Full Moon Mushroom",
                "Full Moon Party",
                "Full Moon Mushroom",
                "Full Moon Koh Samui Mushroom",
                "Full Moon Koh Samui Super Strain"
              ],
              "synonyms": [
                "Thai Koh Samui Mushroom",
                "Koh Samui Super Strain",
                "Psilocybe Samuiensis Thailand"
              ],
              "contentQuality": 89 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "classification": {
              "kingdom": "Fungi",
              "division": "Basidiomycota",
              "class": "[Class Information]",
              "order": "[Order Information]",
              "family": "Strophariaceae",
              "genus": "Psilocybe",
              "species": "Cubensis",
              "contentQuality": 65 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "origin": "Thailand, Island of Koh Samui",
            "genetic_lineage": "NULL",
            "year_discovered": "1864",
            "description": "Reishi
            mushrooms, also known as Ganoderma
            lucidum, belong to the genus Ganoderma. Ganoderma is a genus of polypore
            fungi in the Ganodermataceae
            family, which includes about 80 species. Ganoderma fungi have a high genetic diversity
            and are used in traditional Asian medicines.", // I would like to see the descriptions labled like this
            "poisonous": {
              "is_poisonous": false,
              "effects": "NULL",
              "symptoms": "NULL",
              "treatment": "NULL",
              "death_rate": "NULL",
              "poisonous_lookalikes": "NULL",
              "contentQuality": 00 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0, if there is data, but it is not accurate or reliable, the score should be lower than 50, for instance the data in this block is currently nothing so this score should be 0
            },
            "edible": false,
            "categories": [
              { "alias": "psychedelic-mushrooms", "title": "Psychedelic Mushrooms", "contentQuality": "78" },
              { "alias": "medicinal-properties", "title": "Medicinal Properties", "contentQuality": "61" },
              { "alias": "mycology-research", "title": "Mycology Research", "contentQuality": "54" }
            ],
            "tags": [
              "psilocybin",
              "psilocin",
              "baeocystin",
              "magic-mushroom",
              "magic-mushrooms",
              "hallucinogenic",
              "hallucinogen",
              "psychedelic",
              "psychedelics",
              "psychedelic-mushroom",
              "psychedelic-mushrooms",
              "medicinal",
              "medicinal-properties",
              "mycology",
              "blue",
              "yellow",
              "round",
              "strong",
              "long and tall"
            ],
            "pricing": {
              "per_gram": {
                "low": 4.38,
                "high": 7.71,
                "contentQuality": 65 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "our_price_per_gram": 5.99,
              "contentQuality": 72 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "physical_characteristics": {
              "habitat": "Subtropical regions",
              "ecology": "Saprobic; grows in lawns, meadows, occasionally in forests; found in Europe, North America, especially Pacific Northwest, and Chile.",
              "cap": {
                "size": "1–2 cm across",
                "shape": "Conical to convex, becomes broadly convex",
                "color": "Pale tan to buff",
                "surface": "Sticky when fresh, soon dry, bald, hygrophanous, finely grooved near margin",
                "margin": "Fibrils from partial veil when young",
                "contentQuality": 67 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "gills": {
                "attachment": "Broadly attached to stem",
                "spacing": "Close or nearly distant",
                "color": "Pale brown, purplish brown with whitish edges",
                "contentQuality": 71 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "stem": {
                "size": "4–6 cm long; 1–2 mm thick",
                "color": "Pale brown, bruising blue near base",
                "surface": "Dry, bald above, finely fuzzy toward base",
                "veil": "No ring or ring zone after veil breaks",
                "mycelium": "White before bluing",
                "contentQuality": 62 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "flesh": {
                "color": "Whitish",
                "changes": "Unchanging when sliced",
                "contentQuality": 55 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "odor_and_taste": "Not distinctive",
              "spore_print": "Purplish brown",
              "contentQuality": 48 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "growth_info": {
              "season": "NULL",
              "difficulty": "Intermediate",
              "yield": "High",
              "cultivation_time": "4-6 weeks",
              "substrate": "Rye grain",
              "mycelium_appearance": "White and fluffy during colonization, changes to grayish upon maturation",
              "fruiting_conditions": {
                "temperature_range": "21-24°C (70-75°F)",
                "relative_humidity": "90-95%",
                "lighting": "Indirect sunlight or fluorescent light",
                "contentQuality": 65 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "incubation_period": "10-14 days",
              "fruiting_time": "5-12 days from pinning",
              "typical_yield": "Varies based on conditions, generally several flushes",
              "spawn_type": "NULL",
              "fruiting_frequency": "NULL",
              "common_contaminants": "NULL",
              "contentQuality": 66 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "potency_info": {
              "level": "Moderate to High",
              "effects": [
                "Strong mind high",
                "Phenomenal visuals",
                "Amazing euphoria",
                "Delayed onset leading to sudden intense effects"
              ],
              "psychoactive_compounds": "Typical Psilocybin, Psilocin, Baeocystin composition",
              "dosage_recommendations_specific_effects": "NULL",
              "individual_sensitivity": "NULL",
              "contentQuality": 79 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "dosage_recommendations": {
              "very_low": "0.2-0.5g",
              "low": "0.5-1g",
              "medium": "1-2.5g",
              "high": "2.5-5g",
              "very_high": "5g+",
              "contentQuality": 68 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "storage": {
              "spore_storage": {
                "temperature": "2-8°C (35-46°F)",
                "environment": "Dark, dry place",
                "shelf_life": "Several years if stored properly",
                "contentQuality": 74 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "harvested_mushroom_storage": {
                "fresh": {
                  "temperature": "2-4°C (35-39°F)",
                  "humidity": "High, in a paper bag",
                  "shelf_life": "Up to 1 week",
                  "contentQuality": 57 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
                },
                "dried": {
                  "environment": "Airtight container with desiccant",
                  "shelf_life": "Several months to years",
                  "contentQuality": 63 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
                }
              },
              "contentQuality": 71 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "user_experience": {
              "common_reports": [
                "No effects for up to an hour, then sudden onset",
                "Enhanced visuals",
                "General positive experience"
              ],
              "suitability": "Suitable for those seeking enhanced visuals and higher than average potency",
              "trip_reports": "NULL",
              "risk_profile": "NULL",
              "safety_precautions": "NULL",
              "contentQuality": 58 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "legal_status": {
              "general": "Varies by country and region",
              "note": "Possession, sale, and use of psychedelic mushrooms is illegal in many countries. Users are advised to consult local regulations.",
              "specific_regulations": "NULL",
              "legal_resources_links": "NULL",
              "contentQuality": 44 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "additional_info": {
              "flavor_profile": "Mild and earthy",
              "medical_effects": "Reported potential for stress relief and mood enhancement",
              "cultural_significance": "Celebrated at the Full Moon festivals in Thailand",
              "availability": "Various online sources, occasionally out of stock due to high demand",
              "category": "Magic Mushroom",
              "intended_use": "For Mycology and Research Purposes Only",
              "historical_significance": "NULL",
              "preparation_methods": "NULL",
              "recipes": "NULL",
              "conservation_status": "NULL",
              "contentQuality": 76 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "cite_sources": {
              "source_1": {
                "title": "NULL",
                "url": "NULL",
                "data_gathered": "Gathered legal status, availability, and pricing data from this source",
                "contentQuality": 53 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "source_2": {
                "title": "NULL",
                "url": "NULL",
                "data_gathered": "Gathered legal status, availability, and pricing data from this source",
                "contentQuality": 49 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "source_3": {
                "title": "NULL",
                "url": "NULL",
                "data_gathered": "Gathered legal status, availability, and pricing data from this source",
                "contentQuality": 51 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
              },
              "contentQuality": 51 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "educational_summary": {
              "description": "A brief, user-friendly description of the mushroom...",
              "significance": "Explains the mushroom's importance in mycology, its role in ecosystems, cultural significance, etc.",
              "safety_information": "Details on edibility, potential hazards, and first aid information.",
              "contentQuality": 62 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "research_data": {
              "genetic_information": "Detailed genetic lineage and any known genetic variations.",
              "habitat_and_distribution": "Information on where the mushroom grows and its environmental needs.",
              "morphological_details": "Detailed description of physical characteristics.",
              "psychoactive_properties": "Information on psychoactive compounds and effects, if applicable.",
              "contentQuality": 57 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "growth_conditions": {
              "altitude_range": "NULL",
              "soil_type": "NULL",
              "pH_preference": "NULL",
              "light_intensity": "NULL",
              "contentQuality": 59 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "nutritional_value":  {
              "protein_content": "NULL",
              "carbohydrate_content": "NULL",
              "vitamin_content": "NULL",
              "mineral_content": "NULL",
              "contentQuality": 45 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            "medicinal_properties": {
              "active_compounds": "NULL",
              "traditional_uses": "NULL",
              "clinical_trials": "NULL",
              "contentQuality": 56 // this is the score for only this block of data, if there is no data for this block of is "NULL", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 50
            },
            confidence_score: 73, // This is the confidence score for the entire response, this score should be based on the confidence score for each key, if 1 key is null or empty, the confidence score should reflect that with a much lower value.
            overall_content_quality_score: 73 // This is the Content Quality for the entire response taking into account all the Content Quality for each key, this score should take into account that there are 25 main keys in the object, so if 1 key is null or empty, the overall score should reflect that with a much lower value.
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
