import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });

export async function fetchOpenAIContent(businessData, term) {
  let combinedData;

  if (businessData) {
    combinedData = {
      searchTerm: term,
      checkMetadata: businessData.websiteData.checkMetadata,
      companyData: businessData.websiteData.companyData
    };
  } else {
    combinedData = { searchTerm: term };
  }

  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are to assume the role of a mycological expert, tasked with conducting comprehensive research on various mushroom strains. Your responsibility is to collate and present detailed, factual information about each strain in a well-structured JSON format. This format must be meticulously followed, ensuring that every key within the JSON object is populated with accurate, relevant, and verifiable data pertaining to the specific mushroom strain under investigation. In cases where data is not available or uncertain, you are to use "Information not available" as a placeholder. It is imperative that all information provided is factual and supported by credible sources.
      
          1. Mushroom Identity: Common name, strain name, scientific name, nicknames, and synonyms.
          2. Classification: Kingdom, division, class, order, family, genus, species.
          3. Origin: Geographical origin, genetic lineage, year of discovery.
          4. Description: A brief description of the strain.
          5. Edibility: Information on whether it is poisonous, edible, and any related effects or symptoms.
          6. Physical Characteristics: Habitat, ecology, cap, gills, stem, flesh, odor and taste, spore print.
          7. Microscopic Features: Spores, basidia, cheilocystidia, pileipellis, clamp connections.
          8. Growth Information: Season, difficulty, yield, cultivation time, substrate, mycelium appearance, fruiting conditions.
          9. Potency Information: Level, effects, psychoactive compounds.
          10. Legal Status: General legal status, specific regulations.

          Calculate a Content Quality for the content provided, which is in JSON format. Ensure that the Content Quality for each key is based on the accuracy and reliability of the data. If the data is "Information not available" or equivalent, assign a lower score. If a key is null or empty, assign a much lower score.

1. Content Quality for Each Key: Calculate a Content Quality for each key in the JSON object based on the quality of the data. Use a higher score for accurate and reliable data and a lower score for missing or unreliable data.

2. Overall Content Quality: Calculate an overall Content Quality for the entire response, taking into account all the Content Quality for each key. If a key is null or empty, the overall score should reflect that with a much lower value.

Ensure that all Content Quality fall within the range of 0 to 1.

Please provide the Content Quality for each key in the JSON object and the overall Content Quality for the entire response.


          If the mushroom is hallucinogenic, psychedelic, medical, or a magic mushroom it is considered edible for the purpose of this project.
          Make sure to always use the same JSON object format for the response, even if the Content Quality is 0.0. This will make it easier to parse the response. All keys should be included in the response.

          Please structure your response as a JSON object following this format:

          {
            "common_name": "Thai", // The name of the mushroom but without the mushroom part (e.g. "Thai" instead of "Thai Mushroom"),
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
              "contentQuality": 0.89 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "classification": {
              "kingdom": "Fungi",
              "division": "Basidiomycota",
              "class": "[Class Information]",
              "order": "[Order Information]",
              "family": "Strophariaceae",
              "genus": "Psilocybe",
              "species": "Cubensis",
              "contentQuality": 0.65 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "origin": "Thailand, Island of Koh Samui",
            "genetic_lineage": "Information not available",
            "year_discovered": "1864",
            "description": "Reishi
            mushrooms, also known as Ganoderma
            lucidum, belong to the genus Ganoderma. Ganoderma is a genus of polypore
            fungi in the Ganodermataceae
            family, which includes about 80 species. Ganoderma fungi have a high genetic diversity
            and are used in traditional Asian medicines.", // I would like to see the descriptions labled like this
            "poisonous": {
              "is_poisonous": false,
              "effects": "Information not available",
              "symptoms": "Information not available",
              "treatment": "Information not available",
              "death_rate": "Information not available",
              "poisonous_lookalikes": "Information not available",
              "contentQuality": 0.00 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50, for instance the data in this block is currently nothing so this score should be 0.0
            },
            "edible": false,
            "categories": [
              { "alias": "psychedelic-mushrooms", "title": "Psychedelic Mushrooms", "contentQuality": "0.78" },
              { "alias": "medicinal-properties", "title": "Medicinal Properties", "contentQuality": "0.61" },
              { "alias": "mycology-research", "title": "Mycology Research", "contentQuality": "0.54" }
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
                "contentQuality": 0.65 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "our_price_per_gram": 5.99,
              "contentQuality": 0.72 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
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
                "contentQuality": 0.67 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "gills": {
                "attachment": "Broadly attached to stem",
                "spacing": "Close or nearly distant",
                "color": "Pale brown, purplish brown with whitish edges",
                "contentQuality": 0.71 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "stem": {
                "size": "4–6 cm long; 1–2 mm thick",
                "color": "Pale brown, bruising blue near base",
                "surface": "Dry, bald above, finely fuzzy toward base",
                "veil": "No ring or ring zone after veil breaks",
                "mycelium": "White before bluing",
                "contentQuality": 0.62 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "flesh": {
                "color": "Whitish",
                "changes": "Unchanging when sliced",
                "contentQuality": 0.55 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "odor_and_taste": "Not distinctive",
              "spore_print": "Purplish brown",
              "contentQuality": 0.48 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "growth_info": {
              "season": "Information not available",
              "difficulty": "Intermediate",
              "yield": "High",
              "cultivation_time": "4-6 weeks",
              "substrate": "Rye grain",
              "mycelium_appearance": "White and fluffy during colonization, changes to grayish upon maturation",
              "fruiting_conditions": {
                "temperature_range": "21-24°C (70-75°F)",
                "relative_humidity": "90-95%",
                "lighting": "Indirect sunlight or fluorescent light",
                "contentQuality": 0.65 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "incubation_period": "10-14 days",
              "fruiting_time": "5-12 days from pinning",
              "typical_yield": "Varies based on conditions, generally several flushes",
              "spawn_type": "Information not available",
              "fruiting_frequency": "Information not available",
              "common_contaminants": "Information not available",
              "contentQuality": 0.66 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
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
              "dosage_recommendations_specific_effects": "Information not available",
              "individual_sensitivity": "Information not available",
              "contentQuality": 0.79 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "dosage_recommendations": {
              "very_low": "0.2-0.5g",
              "low": "0.5-1g",
              "medium": "1-2.5g",
              "high": "2.5-5g",
              "very_high": "5g+",
              "contentQuality": 0.68 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "storage": {
              "spore_storage": {
                "temperature": "2-8°C (35-46°F)",
                "environment": "Dark, dry place",
                "shelf_life": "Several years if stored properly",
                "contentQuality": 0.74 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "harvested_mushroom_storage": {
                "fresh": {
                  "temperature": "2-4°C (35-39°F)",
                  "humidity": "High, in a paper bag",
                  "shelf_life": "Up to 1 week",
                  "contentQuality": 0.57 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
                },
                "dried": {
                  "environment": "Airtight container with desiccant",
                  "shelf_life": "Several months to years",
                  "contentQuality": 0.63 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
                }
              },
              "contentQuality": 0.71 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "user_experience": {
              "common_reports": [
                "No effects for up to an hour, then sudden onset",
                "Enhanced visuals",
                "General positive experience"
              ],
              "suitability": "Suitable for those seeking enhanced visuals and higher than average potency",
              "trip_reports": "Information not available",
              "risk_profile": "Information not available",
              "safety_precautions": "Information not available",
              "contentQuality": 0.58 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "legal_status": {
              "general": "Varies by country and region",
              "note": "Possession, sale, and use of psychedelic mushrooms is illegal in many countries. Users are advised to consult local regulations.",
              "specific_regulations": "Information not available",
              "legal_resources_links": "Information not available",
              "contentQuality": 0.44 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "additional_info": {
              "flavor_profile": "Mild and earthy",
              "medical_effects": "Reported potential for stress relief and mood enhancement",
              "cultural_significance": "Celebrated at the Full Moon festivals in Thailand",
              "availability": "Various online sources, occasionally out of stock due to high demand",
              "category": "Magic Mushroom",
              "intended_use": "For Mycology and Research Purposes Only",
              "historical_significance": "Information not available",
              "preparation_methods": "Information not available",
              "recipes": "Information not available",
              "conservation_status": "Information not available",
              "contentQuality": 0.76 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "cite_sources": {
              "source_1": {
                "title": "Information not available",
                "url": "Information not available",
                "data_gathered": "Gathered legal status, availability, and pricing data from this source",
                "contentQuality": 0.53 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "source_2": {
                "title": "Information not available",
                "url": "Information not available",
                "data_gathered": "Gathered legal status, availability, and pricing data from this source",
                "contentQuality": 0.49 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "source_3": {
                "title": "Information not available",
                "url": "Information not available",
                "data_gathered": "Gathered legal status, availability, and pricing data from this source",
                "contentQuality": 0.51 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
              },
              "contentQuality": 0.51 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "educational_summary": {
              "description": "A brief, user-friendly description of the mushroom...",
              "significance": "Explains the mushroom's importance in mycology, its role in ecosystems, cultural significance, etc.",
              "safety_information": "Details on edibility, potential hazards, and first aid information.",
              "contentQuality": 0.62 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "research_data": {
              "genetic_information": "Detailed genetic lineage and any known genetic variations.",
              "habitat_and_distribution": "Information on where the mushroom grows and its environmental needs.",
              "morphological_details": "Detailed description of physical characteristics.",
              "psychoactive_properties": "Information on psychoactive compounds and effects, if applicable.",
              "contentQuality": 0.57 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "growth_conditions": {
              "altitude_range": "Information not available",
              "soil_type": "Information not available",
              "pH_preference": "Information not available",
              "light_intensity": "Information not available",
              "contentQuality": 0.59 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "nutritional_value":  {
              "protein_content": "Information not available",
              "carbohydrate_content": "Information not available",
              "vitamin_content": "Information not available",
              "mineral_content": "Information not available",
              "contentQuality": 0.45 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            "medicinal_properties": {
              "active_compounds": "Information not available",
              "traditional_uses": "Information not available",
              "clinical_trials": "Information not available",
              "contentQuality": 0.56 // this is the score for only this block of data, if there is no data for this block of is "Information not available", the score should be 0.0, if there is data, but it is not accurate or reliable, the score should be lower than 0.50
            },
            confidence_score: 0.73, // This is the confidence score for the entire response, this score should be based on the confidence score for each key, if 1 key is null or empty, the confidence score should reflect that with a much lower value.
            overall_content_quality_score: 0.73 // This is the Content Quality for the entire response taking into account all the Content Quality for each key, this score should take into account that there are 25 main keys in the object, so if 1 key is null or empty, the overall score should reflect that with a much lower value.
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
