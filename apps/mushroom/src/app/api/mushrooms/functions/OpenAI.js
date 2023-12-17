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

          If the mushroom is hallucinogenic, psychedelic, medical, or a magic mushroom it is considered edible for the purpose of this project.
          
          Please structure your response as a JSON object following this format:

            {
              "common_name": "Thai Mushroom", // This name is what the user will search for and should be the most common name that most users know the mushroom by. If the mushroom is not commonly known by a specific name, use the scientific name. If the mushroom is not commonly known by either a common or scientific name, use the strain name. Example of a strain name: "Full Moon Party". Or Portabella Mushroom.
              "scientific_profile": {
                "strain_name": "Full Moon Party",
                "scientific_name": "Psilocybe Cubensis",
                "nicknames": [
                  "Full Moon Mushroom",
                  "Full Moon Party",
                  "Full Moon Mushroom",
                  "Full Moon Koh Samui Mushroom",
                  "Full Moon Koh Samui Super Strain"
                ]
                "synonyms": [
                  "Thai Koh Samui Mushroom",
                  "Koh Samui Super Strain",
                  "Psilocybe Samuiensis Thailand"
                ]
              },
              "classification": {
                "kingdom": "Fungi",
                "division": "Basidiomycota",
                "class": "[Class Information]",
                "order": "[Order Information]",
                "family": "Strophariaceae",
                "genus": "Psilocybe",
                "species": "Cubensis"
              },
              "origin": "Thailand, Island of Koh Samui",
              "genetic_lineage": "Information not available",
              "year_discovered": "1864",
              "description": "Brief description about the strain...",
              "poisonous": {
                "is_poisonous": false,
                "effects": "Information not available",
                "symptoms": "Information not available",
                "treatment": "Information not available",
                "death_rate": "Information not available",
                "poisonous_lookalikes": "Information not available"
              },
              "edible": false,
              "categories": [
                { "alias": "psychedelic-mushrooms", "title": "Psychedelic Mushrooms" },
                { "alias": "medicinal-properties", "title": "Medicinal Properties" },
                { "alias": "mycology-research", "title": "Mycology Research" }
              ],
              tags: [ "psilocybin", "psilocin", "baeocystin", "magic-mushroom", "magic-mushrooms", "hallucinogenic", "hallucinogen", "psychedelic", "psychedelics", "psychedelic-mushroom", "psychedelic-mushrooms", "medicinal", "medicinal-properties", "mycology", "blue", "yellow", "round", "strong", "long and tall"],
              "pricing": {
                "per_gram": {
                  "low": 4.38,
                  "high": 7.71
                },
                "our_price_per_gram": 5.99
              },
              "physical_characteristics": {
                "habitat": "Subtropical regions",
                "ecology": "Saprobic; grows in lawns, meadows, occasionally in forests; found in Europe, North America, especially Pacific Northwest, and Chile.",
                "cap": {
                  "size": "1–2 cm across",
                  "shape": "Conical to convex, becomes broadly convex",
                  "color": "Pale tan to buff",
                  "surface": "Sticky when fresh, soon dry, bald, hygrophanous, finely grooved near margin",
                  "margin": "Fibrils from partial veil when young"
                },
                "gills": {
                  "attachment": "Broadly attached to stem",
                  "spacing": "Close or nearly distant",
                  "color": "Pale brown, purplish brown with whitish edges"
                },
                "stem": {
                  "size": "4–6 cm long; 1–2 mm thick",
                  "color": "Pale brown, bruising blue near base",
                  "surface": "Dry, bald above, finely fuzzy toward base",
                  "veil": "No ring or ring zone after veil breaks",
                  "mycelium": "White before bluing"
                },
                "flesh": {
                  "color": "Whitish",
                  "changes": "Unchanging when sliced"
                },
                "odor_and_taste": "Not distinctive",
                "spore_print": "Purplish brown"
              },
              "microscopic_features": {
                "spores": "8–11 x 5–7 µm; ellipsoid; smooth; large pore; brown in KOH",
                "basidia": "25–28 x 6–8 µm; 4-sterigmate",
                "cheilocystidia": "25–35 x 5–10 µm; lageniform with long neck, occasionally bifurcated; hyaline in KOH",
                "pileipellis": "Thin ixocutis, elements 2.5 µm wide, over layer of inflated cells 5–10 µm wide",
                "clamp_connections": "Present"
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
                  "lighting": "Indirect sunlight or fluorescent light"
                },
                "incubation_period": "10-14 days",
                "fruiting_time": "5-12 days from pinning",
                "typical_yield": "Varies based on conditions, generally several flushes",
                "spawn_type": "Information not available",
                "fruiting_frequency": "Information not available",
                "common_contaminants": "Information not available"
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
                "individual_sensitivity": "Information not available"
              },
              "dosage_recommendations": {
                "very_low": "0.2-0.5g",
                "low": "0.5-1g",
                "medium": "1-2.5g",
                "high": "2.5-5g",
                "very_high": "5g+"
              },
              "storage": {
                "spore_storage": {
                  "temperature": "2-8°C (35-46°F)",
                  "environment": "Dark, dry place",
                  "shelf_life": "Several years if stored properly"
                },
                "harvested_mushroom_storage": {
                  "fresh": {
                    "temperature": "2-4°C (35-39°F)",
                    "humidity": "High, in a paper bag",
                    "shelf_life": "Up to 1 week"
                  },
                  "dried": {
                    "environment": "Airtight container with desiccant",
                    "shelf_life": "Several months to years"
                  }
                }
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
                "safety_precautions": "Information not available"
              },
              "legal_status": {
                "general": "Varies by country and region",
                "note": "Possession, sale, and use of psychedelic mushrooms is illegal in many countries. Users are advised to consult local regulations.",
                "specific_regulations": "Information not available",
                "legal_resources_links": "Information not available"
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
                "conservation_status": "Information not available"
              },
              "cite_sources": {
                "source_1": {
                  "title": "Information not available",
                  "url": "Information not available",
                  "data_gathered": "Gathered legal status, availability, and pricing data from this source"
                },
                "source_2": {
                  "title": "Information not available",
                  "url": "Information not available",
                  "data_gathered": "Gathered legal status, availability, and pricing data from this source"
                },
                "source_3": {
                  "title": "Information not available",
                  "url": "Information not available",
                  "data_gathered": "Gathered legal status, availability, and pricing data from this source"
                }
              },
              "educational_summary": {
                "description": "A brief, user-friendly description of the mushroom...",
                "significance": "Explains the mushroom's importance in mycology, its role in ecosystems, cultural significance, etc.",
                "safety_information": "Details on edibility, potential hazards, and first aid information."
              },
              "research_data": {
                "genetic_information": "Detailed genetic lineage and any known genetic variations.",
                "habitat_and_distribution": "Information on where the mushroom grows and its environmental needs.",
                "morphological_details": "Detailed description of physical characteristics.",
                "psychoactive_properties": "Information on psychoactive compounds and effects, if applicable."
              },
              "growth_conditions": {
                "altitude_range": "Information not available",
                "soil_type": "Information not available",
                "pH_preference": "Information not available",
                "light_intensity": "Information not available"
              },
              "nutritional_value": {
                "protein_content": "Information not available",
                "carbohydrate_content": "Information not available",
                "vitamin_content": "Information not available",
                "mineral_content": "Information not available"
              },
              "medicinal_properties": {
                "active_compounds": "Information not available",
                "traditional_uses": "Information not available",
                "clinical_trials": "Information not available"
              }
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
    console.log(openAIResponse);

    // Cost calculation for gpt-3.5-turbo-1106
    const gpt35turboInputCostPerThousandTokens = 0.001;
    const gpt35turboOutputCostPerThousandTokens = 0.002;

    // Cost calculation for gpt-4-1106-preview
    const gpt4InputCostPerThousandTokens = 0.01;
    const gpt4OutputCostPerThousandTokens = 0.03;

    // You should determine which model is used in the response
    // For this example, I'm assuming a variable 'modelUsed' which should be 'gpt35turbo' or 'gpt4'
    const modelUsed = 'gpt4'; // or 'gpt35turbo'

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
