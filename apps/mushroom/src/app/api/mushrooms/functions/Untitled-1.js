const help = {
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
    habitat_and_ecology: {
      habitat: '',
      ecology: ''
    },
    physical_characteristics: {
      morphology: {
        cap: { size: '', shape: '', color: '', surface: '', margin: '' },
        gills: { attachment: '', spacing: '', color: '' },
        stem: { size: '', color: '', surface: '', veil: '', mycelium: '' },
        flesh: { color: '', changes: '' }
      },
      odor_and_taste: '',
      spore_print: ''
    },
    genetic_identifiers: {
      genetic_lineage: '',
      DNA_sequence_data: ['']
    }
  },
  general_info: {
    origin: '',
    year_discovered: '',
    description: '',
    categories: [{ alias: '' }],
    tags: [''],
    legal_status: {
      general: '',
      note: '',
      specific_regulations: '',
      legal_resources_links: ''
    },
    educational_summary: {
      description: '',
      significance: '',
      safety_information: ''
    }
  },
  toxicity: {
    poisonous: {
      is_poisonous: false,
      effects: '',
      symptoms: '',
      treatment: '',
      death_rate: '',
      poisonous_lookalikes: ''
    },
    edible: false
  },
  growth_info: {
    season: '',
    difficulty: '',
    yield: '',
    cultivation_time: '',
    substrate: '',
    mycelium_appearance: '',
    fruiting_conditions: {
      temperature_range: '',
      relative_humidity: '',
      lighting: ''
    },
    incubation_period: '',
    fruiting_time: '',
    typical_yield: '',
    spawn_type: '',
    fruiting_frequency: '',
    common_contaminants: ''
  },
  potency_info: {
    level: '',
    effects: [''],
    psychoactive_compounds: '',
    dosage_recommendations_specific_effects: '',
    individual_sensitivity: ''
  },
  usage_info: {
    dosage_recommendations: {
      very_low: '',
      low: '',
      medium: '',
      high: '',
      very_high: ''
    },
    user_experience: {
      common_reports: [''],
      suitability: '',
      trip_reports: '',
      risk_profile: '',
      safety_precautions: ''
    }
  },
  storage: {
    spore_storage: { temperature: '', environment: '', shelf_life: '' },
    harvested_mushroom_storage: {
      fresh: { temperature: '', humidity: '', shelf_life: '' },
      dried: { environment: '', shelf_life: '' }
    }
  },
  additional_info: {
    flavor_profile: '',
    medical_effects: '',
    cultural_significance: '',
    availability: '',
    category: '',
    intended_use: '',
    historical_significance: '',
    preparation_methods: '',
    recipes: '',
    conservation_status: ''
  },
  cite_sources: {
    sources: [
      { title: '', url: '', data_gathered: '' },
      { title: '', url: '', data_gathered: '' },
      { title: '', url: '', data_gathered: '' }
    ]
  },
  research_data: {
    genetic_information: '',
    habitat_and_distribution: '',
    morphological_details: '',
    psychoactive_properties: ''
  },
  growth_conditions: {
    altitude_range: '',
    soil_type: '',
    pH_preference: '',
    light_intensity: ''
  },
  nutritional_value: {
    protein_content: '',
    carbohydrate_content: '',
    vitamin_content: '',
    mineral_content: ''
  },
  medicinal_properties: {
    active_compounds: '',
    traditional_uses: '',
    clinical_trials: ''
  },
  pricing: {
    per_gram: { low: 4.38, high: 7.71 },
    per_ounce: { low: 123.5, high: 217.0 },
    per_pound: { low: 1975, high: 3475 }
  },
  psychoactive_experience: {
    subjective_effects: [''],
    potency_levels: {
      mild: '',
      moderate: '',
      strong: '',
      extreme: ''
    },
    user_experience_guides: {
      first_time_user: '',
      safety_tips: '',
      setting_recommendations: ''
    },
    duration_of_effects: {
      onset: '',
      peak: '',
      total_duration: ''
    },
    user_reports: [''],
    psychological_effects: ['']
  },
  culinary_uses: {
    recommended_recipes: [''],
    cooking_methods: [''],
    flavor_pairings: [''],
    preparation_tips: '',
    nutritional_benefits: '',
    dietary_considerations: {
      vegan: false,
      gluten_free: false,
      low_carb: false,
      others: ['']
    },
    preservation_methods: [''],
    common_culinary_uses: '',
    cultural_significance_in_cuisine: ''
  },
  mycological_research: {
    research_studies: [''],
    academic_publications: [''],
    molecular_structure: '',
    chemical_analysis: '',
    biodiversity_conservation: '',
    historical_use_in_research: '',
    ongoing_studies: [''],
    research_funding_sources: ['']
  }
};

const more = {
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
  }
};
