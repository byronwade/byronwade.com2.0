import Link from "next/link";
import Image from "next/image";
import { ProductStrain6 } from "../../../components/shop/ProductCard";
import Article from "./article";

const strains = [
  {
    id: 1,
    name: "Full Moon Party",
    description:
      "Experience the vibrant, dynamic nature of the Full Moon Party strain, known for its unique characteristics and strong growth patterns.",
    imageSrc: "/images/strains/full-moon-party.png", // Replace with actual image URL
    imageAlt: "Close-up view of the Full Moon Party mycology strain.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Subtropical regions",
    capShape: "Conical to convex",
    capColor: "Golden-brown",
    stemColor: "White",
    veilType: "Partial veil",
    potency: "Moderate to high",
    growthDifficulty: "Intermediate",
    harvestYield: "High",
    flavorProfile: "Mild and earthy",
    cultivationTime: "4-6 weeks",
    sporePrintColor: "Dark purple-brown",
    medicalEffects: "Reported potential for stress relief and mood enhancement",
    substrate: "Grain-based substrate",
    cultivationTips:
      "Maintain temperature at 75-80°F with 90% humidity during fruiting.",
    myceliumAppearance:
      "White and fluffy during colonization, changes to grayish upon maturation.",
    historyOrigin:
      "Originated from Southeast Asia and gained popularity worldwide.",
    commonUses: "Culinary and spiritual purposes",
    storageRecommendations:
      "Store in a cool, dry place in an airtight container.",
    legality:
      "Check local regulations regarding the cultivation and use of this strain.",
  },
  {
    id: 2,
    name: "Hillbilly",
    description:
      "Learn about the ideal conditions for cultivating the Hillbilly strain, including temperature, humidity, and light requirements.",
    imageSrc: "/images/strains/hillbilly.png", // Replace with actual image URL
    imageAlt: "Illustration of optimal growth conditions for mycology strains.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Temperate regions",
    capShape: "Conical to convex",
    capColor: "Light brown",
    stemColor: "White",
    veilType: "Partial veil",
    potency: "Moderate",
    growthDifficulty: "Beginner",
    harvestYield: "Moderate",
    flavorProfile: "Mild and nutty",
    cultivationTime: "4-5 weeks",
    sporePrintColor: "Dark brown",
    medicalEffects: "No reported medical effects.",
    substrate: "Various substrates, including grain and straw.",
    cultivationTips:
      "Suitable for beginners; maintain temperature at 70-75°F with 90% humidity.",
    myceliumAppearance: "White and cottony during colonization.",
    historyOrigin: "Originated from the United States.",
    commonUses: "Culinary purposes",
    storageRecommendations:
      "Store in a cool, dark place in a sealed container.",
    legality:
      "Check local regulations regarding the cultivation and use of this strain.",
  },
  {
    id: 3,
    name: "Golden Halo",
    description:
      "Detailed guidance on advanced cultivation techniques tailored specifically for the Golden Halo strain, ensuring successful growth.",
    imageSrc: "/images/strains/golden-halo.png", // Replace with actual image URL
    imageAlt:
      "Hands cultivating mycology strains, demonstrating specialized techniques.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Tropical regions",
    capShape: "Convex",
    capColor: "Golden-yellow",
    stemColor: "White",
    veilType: "Partial veil",
    potency: "High",
    growthDifficulty: "Advanced",
    harvestYield: "High",
    flavorProfile: "Sweet and earthy",
    cultivationTime: "6-8 weeks",
    sporePrintColor: "Golden-yellow",
    medicalEffects: "Potential for intense psychedelic experiences.",
    substrate: "Specialized nutrient-rich substrate",
    cultivationTips:
      "Requires precise temperature and humidity control; not recommended for beginners.",
    myceliumAppearance: "Bright white and rhizomorphic during colonization.",
    historyOrigin:
      "Originated from Southeast Asia and gained popularity among experienced cultivators.",
    commonUses: "Psychedelic exploration and research",
    storageRecommendations:
      "Store in airtight containers in a cool, dark place.",
    legality:
      "Check local regulations regarding the cultivation and use of this strain.",
  },
  {
    id: 4,
    name: "Tidalwave",
    description:
      "Join a community of enthusiasts and experts sharing insights, experiences, and tips on cultivating the Tidalwave strain.",
    imageSrc: "/images/strains/tidalwave.png", // Replace with actual image URL
    imageAlt: "Group of mycologists discussing and examining mycology strains.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Temperate regions",
    capShape: "Conical to convex",
    capColor: "Blue-gray",
    stemColor: "White",
    veilType: "Partial veil",
    potency: "Moderate",
    growthDifficulty: "Intermediate",
    harvestYield: "Moderate",
    flavorProfile: "Mild and herbal",
    cultivationTime: "5-6 weeks",
    sporePrintColor: "Dark purple-brown",
    medicalEffects: "No reported medical effects.",
    substrate: "Grain-based substrate",
    cultivationTips:
      "Maintain temperature at 70-75°F with 90% humidity during fruiting.",
    myceliumAppearance: "White and cottony during colonization.",
    historyOrigin: "Originated from the United States.",
    commonUses: "Culinary purposes",
    storageRecommendations:
      "Store in a cool, dark place in a sealed container.",
    legality:
      "Check local regulations regarding the cultivation and use of this strain.",
  },
  {
    id: 5,
    name: "Golden Teachers",
    description:
      "Explore the world of Golden Teachers strain with its unique characteristics and growth patterns.",
    imageSrc: "/images/strains/golden-teachers.png", // Replace with actual image URL
    imageAlt: "Close-up view of the Golden Teachers mycology strain.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Subtropical regions",
    capShape: "Conical to convex",
    capColor: "Golden-brown",
    stemColor: "White",
    veilType: "Partial veil",
    potency: "Moderate to high",
    growthDifficulty: "Intermediate",
    harvestYield: "High",
    flavorProfile: "Mild and earthy",
    cultivationTime: "4-6 weeks",
    sporePrintColor: "Dark purple-brown",
    medicalEffects: "Reported potential for stress relief and mood enhancement",
    substrate: "Grain-based substrate",
    cultivationTips:
      "Maintain temperature at 75-80°F with 90% humidity during fruiting.",
    myceliumAppearance:
      "White and fluffy during colonization, changes to grayish upon maturation.",
    historyOrigin:
      "Originated from Southeast Asia and gained popularity worldwide.",
    commonUses: "Culinary and spiritual purposes",
    storageRecommendations:
      "Store in a cool, dry place in an airtight container.",
    legality:
      "Check local regulations regarding the cultivation and use of this strain.",
  },
  {
    id: 6,
    name: "Albino Golden Teachers",
    description:
      "Learn about the Albino Golden Teachers strain and its ideal cultivation conditions, including temperature, humidity, and light requirements.",
    imageSrc: "/images/strains/albino-golden-teachers.png", // Replace with actual image URL
    imageAlt: "Illustration of optimal growth conditions for mycology strains.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Temperate regions",
    capShape: "Conical to convex",
    capColor: "Light brown",
    stemColor: "White",
    veilType: "Partial veil",
    potency: "Moderate",
    growthDifficulty: "Beginner",
    harvestYield: "Moderate",
    flavorProfile: "Mild and nutty",
    cultivationTime: "4-5 weeks",
    sporePrintColor: "Dark brown",
    medicalEffects: "No reported medical effects.",
    substrate: "Various substrates, including grain and straw.",
    cultivationTips:
      "Suitable for beginners; maintain temperature at 70-75°F with 90% humidity.",
    myceliumAppearance: "White and cottony during colonization.",
    historyOrigin: "Originated from the United States.",
    commonUses: "Culinary purposes",
    storageRecommendations:
      "Store in a cool, dark place in a sealed container.",
    legality:
      "Check local regulations regarding the cultivation and use of this strain.",
  },
  {
    id: 7,
    name: "Stargazer",
    description:
      "Get insights into the Stargazer strain, known for its unique features and successful cultivation techniques.",
    imageSrc: "/images/strains/stargazer.png",
    imageAlt:
      "Hands cultivating mycology strains, demonstrating specialized techniques.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Subtropical regions",
    capShape: "Convex",
    capColor: "Reddish-brown to golden brown to light yellow",
    stemColor: "Pale yellow",
    veilType: "Partial veil",
    potency: "Moderate to high",
    growthDifficulty: "Easy",
    harvestYield: "Bountiful",
    flavorProfile: "Not documented",
    cultivationTime: "Average",
    sporePrintColor: "Dark purple and brown",
    medicalEffects:
      "Mood elevation, visual hallucinations, altered auditory perception",
    substrate: "Rye grain, coco coir, vermiculite, gypsum, horse manure",
    cultivationTips: "Maintain temperature in mid-70°F (24°C)",
    myceliumAppearance: "White, whispy",
    historyOrigin: "Among the earliest cultivated",
    commonUses: "Not documented",
    storageRecommendations: "Not documented",
    legality:
      "Decriminalized in some regions, federally legal for microscope purposes",
  },
  {
    id: 8,
    name: "Mexi",
    description:
      "Discover the Mexi strain and its growth requirements, including temperature, humidity, and light conditions.",
    imageSrc: "/images/strains/mexi.png",
    imageAlt: "Group of mycologists discussing and examining mycology strains.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Warm, moist environments with plenty of light",
    capShape: "Not documented",
    capColor: "Not documented",
    stemColor: "Not documented",
    veilType: "Not documented",
    potency: "Moderate to potent",
    growthDifficulty: "Easy",
    harvestYield: "Not documented",
    flavorProfile: "Not documented",
    cultivationTime: "Fast, 10-12 days",
    sporePrintColor: "Not documented",
    medicalEffects: "Joy, fun, euphoria, visual hallucinations",
    substrate:
      "Rye Grain, Manure, BRF, PWS, Concentrated Flour, Various Grains",
    cultivationTips:
      "PF-Tek method, maintain sterile environment, ideal fruiting temp ~80℉ (27 ℃)",
    myceliumAppearance: "White, whispy",
    historyOrigin: "Originated in Mexico, used by Aztecs",
    commonUses: "Recreational and spiritual",
    storageRecommendations: "Not documented",
    legality: "Regulated due to psychoactive properties",
  },
  {
    id: 9,
    name: "White Rabbit",
    description:
      "Learn about the White Rabbit strain and its unique cultivation techniques for successful growth.",
    imageSrc: "/images/strains/white-rabbit.png",
    imageAlt: "Close-up view of the White Rabbit mycology strain.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Not documented",
    capShape: "Somewhat shorter and thicker-stemmed than typical for a cube",
    capColor: "Not documented",
    stemColor:
      "Pale yellow to whitish, depending on light levels during growth",
    veilType: "Not documented",
    potency:
      "Twice as potent as Golden Teachers, with 1.4 to 1.6% tryptamine content",
    growthDifficulty: "Intermediate",
    harvestYield: "Above-average yields",
    flavorProfile: "Not documented",
    cultivationTime: "Not documented",
    sporePrintColor: "Dark purple-brown",
    medicalEffects: "Not documented",
    substrate: "Prefers rye grain, manure or enriched soil is a close second",
    cultivationTips:
      "Vulnerable to contamination, sterile technique is crucial",
    myceliumAppearance: "Not documented",
    historyOrigin:
      "Developed in Holland, hybrid of Albino Penis Envy and Moby Dick",
    commonUses: "Not documented",
    storageRecommendations: "Not documented",
    legality: "Not documented",
  },
  {
    id: 10,
    name: "Jedi Mind Fuck",
    description:
      "Explore the world of the Jedi Mind Fuck strain, known for its distinct features and growth patterns.",
    imageSrc: "/images/strains/jedi-mind-fuck.png",
    imageAlt: "Illustration of optimal growth conditions for mycology strains.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Not documented",
    capShape: "Starts out bell-shaped and then opens widely",
    capColor: "Golden-brown",
    stemColor: "Pale",
    veilType: "Not documented",
    potency: "Average for the species",
    growthDifficulty: "Intermediate",
    harvestYield: "Not documented",
    flavorProfile: "Not documented",
    cultivationTime: "Not documented",
    sporePrintColor: "Not documented",
    medicalEffects:
      "Intense visual and auditory hallucinations, feelings of euphoria and introspection",
    substrate: "Prefers rye grain",
    cultivationTips:
      "Not as resistant to environmental contaminants, requires diligent sanitation",
    myceliumAppearance: "Not documented",
    historyOrigin: "Not documented",
    commonUses: "Not documented",
    storageRecommendations: "Not documented",
    legality: "Not documented",
  },
  {
    id: 11,
    name: "Penis Envy",
    description:
      "Get detailed guidance on cultivating the Penis Envy strain, with specialized techniques for successful growth.",
    imageSrc: "/images/strains/penis-envy.png",
    imageAlt:
      "Hands cultivating mycology strains, demonstrating specialized techniques.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Not documented",
    capShape: "Cap remains close to the stem, with a notable phallic shape",
    capColor: "Not documented",
    stemColor: "Thicker than average",
    veilType: "Not documented",
    potency:
      "Exceptionally potent, with combined psilocybin and psilocin concentrations as high as 2.90%",
    growthDifficulty: "Intermediate",
    harvestYield: "Not documented",
    flavorProfile: "Not documented",
    cultivationTime:
      "Colonizes substrate about 20% slower than beginner strains",
    sporePrintColor: "Not documented",
    medicalEffects: "Not documented",
    substrate:
      "Grows well on all substrates, including brown rice flour and vermiculite (BRF tek), rye grain, wild bird seed, and manure",
    cultivationTips:
      "Less resistant to contamination, higher abort rate, needs extra caution and cleanliness during cultivation",
    myceliumAppearance: "Not documented",
    historyOrigin: "Not documented",
    commonUses: "Not documented",
    storageRecommendations: "Not documented",
    legality: "Not documented",
  },
  {
    id: 12,
    name: "Vader",
    description:
      "Discover the Vader strain and its ideal growth conditions, including temperature, humidity, and light requirements.",
    imageSrc: "/images/strains/vader.png", // Replace with actual image URL
    imageAlt: "Group of mycologists discussing and examining mycology strains.",
    price: "$220",
  },
  {
    id: 13,
    name: "Gandoff",
    description:
      "Experience the world of the Gandoff strain, known for its unique characteristics and strong growth patterns.",
    imageSrc: "/images/strains/gandoff.png",
    imageAlt: "Close-up view of the Gandoff mycology strain.",
    price: "$220",
    species: "Psilocybe Cubensis",
    availability: "In Stock",
    habitat: "Not documented",
    capShape:
      "Long stems resembling inlaid or old wooden Gandalf's staff, caps as white as the great wizard's robe",
    capColor:
      "Pasty white, sometimes bluish or dark-blue spots on top of mushroom cap",
    stemColor: "Not documented",
    veilType: "Not documented",
    potency:
      "Above average, with Psilocybin - 10.83 mg/g and Psilocin - 1.00 mg/g for Albino Melmak (a similar strain)",
    growthDifficulty: "Intermediate",
    harvestYield:
      "Typically 3-4 productive flushes, with some flushes producing large mushrooms over 100 grams",
    flavorProfile: "Not documented",
    cultivationTime:
      "About 3-5 weeks for grain colonization, up to 3 weeks for bulk colonization, up to 2-3 weeks for pinning, overall 2-3 months for the first mushroom harvest",
    sporePrintColor: "Not documented",
    medicalEffects: "Not documented",
    substrate:
      "Any type of grain substrate for making grain spawn, bulk fruiting CVG (coco coir + vermiculite + gypsum) substrate",
    cultivationTips:
      "More prone to contamination during bulk colonization due to longer colonization time. Good ventilation and cleanliness are crucial.",
    myceliumAppearance: "Not documented",
    historyOrigin:
      "A cross of TAT (True Albino Teacher) x Melmac (Penis Envy iso)",
    commonUses: "Not documented",
    storageRecommendations: "Not documented",
    legality: "Not documented",
  },
  {
    id: 14,
    name: "Jack Frost",
    description:
      "Learn about the Jack Frost strain and its growth requirements, including temperature, humidity, and light conditions.",
    imageSrc: "/images/strains/jack-frost.png",
    imageAlt: "Illustration of optimal growth conditions for mycology strains.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Not documented",
    capShape: "Flat caps that curl upwards, resembling a dusting of fresh snow",
    capColor:
      "Ghostly-white, may take on a light to dark-blue coloration due to bruising",
    stemColor:
      "Dense and relatively heavy, retaining a ghostly white appearance",
    veilType: "Not documented",
    potency:
      "Average, with a total tryptamine content of up to 0.83% or higher under optimal conditions",
    growthDifficulty: "Beginner to Intermediate",
    harvestYield:
      "Expect three to five healthy flushes, up to seven with perfect sterile procedures",
    flavorProfile: "Not documented",
    cultivationTime:
      "Relatively fast-growing, though colonization can take longer with occasional delay in the first flush",
    sporePrintColor: "Not documented",
    medicalEffects: "Reported strong visuals, mild euphoria, and time dilation",
    substrate:
      "Grows well on various mediums, with best results from rye grain",
    cultivationTips:
      "Relatively contamination-resistant, best fruited at temperatures between 74℉ to 77℉ (23℃ to 25℃), sterile techniques crucial",
    myceliumAppearance: "Not documented",
    historyOrigin:
      "New strain, speculated to have been created by a person known as Wombat around 2018",
    commonUses: "Not documented",
    storageRecommendations: "Not documented",
    legality: "Not documented",
  },
  {
    id: 15,
    name: "Treasure Coast",
    description:
      "Discover the Treasure Coast strain and its unique cultivation techniques for successful growth.",
    imageSrc: "/images/strains/treasure-coast.png",
    imageAlt:
      "Hands cultivating mycology strains, demonstrating specialized techniques.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Originally collected from the eastern coast of Florida",
    capShape: "Convex to plane or umbonate caps",
    capColor:
      "Lightly caramel colored, can range from light yellow to golden, deep brown to black, sometimes appearing white if albino",
    stemColor: "Usually white or beige",
    veilType: "Not documented",
    potency: "Average, with an average total tryptamine concentration of 0.67%",
    growthDifficulty: "Intermediate",
    harvestYield:
      "Small but potent fruiting bodies, can be prolific from second flush onwards",
    flavorProfile: "Not documented",
    cultivationTime: "Colonizes quickly, resistant to mold and disease",
    sporePrintColor: "Not documented",
    medicalEffects: "Not documented",
    substrate: "Rye Grain or Brown Rice Flour",
    cultivationTips:
      "Higher abort rate before the first flush, requires patience for larger second and third flushes",
    myceliumAppearance: "Not documented",
    historyOrigin: "Collected from Treasure Coast, Florida",
    commonUses: "Not documented",
    storageRecommendations: "Not documented",
    legality: "Not documented",
  },
  {
    id: 16,
    name: "Bees Knees B+",
    description:
      "Join a community of enthusiasts and experts sharing insights, experiences, and tips on cultivating the Bees Knees B+ strain.",
    imageSrc: "/images/strains/bees-knees-b+.png",
    imageAlt: "Group of mycologists discussing and examining mycology strains.",
    price: "$220",
    species: "Psilocybe cubensis",
    availability: "In Stock",
    habitat: "Not documented",
    capShape:
      "Relatively large, light brown caps with a dark brown, almost black center",
    capColor: "Light brown with a dark brown, almost black center",
    stemColor: "Long white stems that bruise a dark bluish color",
    veilType: "Young specimens have a veil covering the gills",
    potency:
      "Average potency with total tryptamine average around 0.73%, can reach up to 1.38%",
    growthDifficulty: "Easy",
    harvestYield: "Not documented",
    flavorProfile: "Not documented",
    cultivationTime: "Not documented",
    sporePrintColor: "Deep purple",
    medicalEffects: "Not documented",
    substrate:
      "Not specifically documented, but grows well on common substrates used for Psilocybe cubensis",
    cultivationTips:
      "Robust and capable of growing in sub-optimal conditions, suitable for first-time growers",
    myceliumAppearance: "Not documented",
    historyOrigin:
      "Allegedly created by Mr. G, claimed to be a hybrid between P. cubensis and P. azurescens",
    commonUses: "Not documented",
    storageRecommendations: "Not documented",
    legality: "Not documented",
  },
];

const strain = {
  strain_name: "Full Moon Party",
  scientific_name: "Psilocybe Cubensis",
  other_names: [
    "Thai Koh Samui Mushroom",
    "Koh Samui Super Strain",
    "Psilocybe Samuiensis Thailand",
  ],
  imageSrc: "/images/strains/full-moon-party.png", // Replace with actual image URL
  imageAlt: "Close-up view of the Full Moon Party mycology strain.",
  origin: "Thailand, Island of Koh Samui",
  genetic_lineage: "Information not available",
  description:
    "The Full Moon Party strain is a highly potent psychedelic mushroom that has an earthy and mild flavor profile. It is celebrated at the Full Moon festivals in Thailand and is known for its strong mind high, phenomenal visuals, and amazing euphoria.", // this should be a string and 3 sentences or less
  categories: [
    { alias: "psychedelic-mushrooms", title: "Psychedelic Mushrooms" },
    { alias: "medicinal-properties", title: "Medicinal Properties" },
    { alias: "mycology-research", title: "Mycology Research" },
  ],
  pricing: {
    per_gram: {
      low: 4.38,
      high: 7.71,
    },
    our_price_per_gram: 5.99,
  },
  physical_characteristics: {
    habitat: "Subtropical regions",
    cap_shape: "Conical to convex",
    cap_color: "Golden-brown",
    stem_color: "White",
    veil_type: "Partial veil",
    spore_print_color: "Dark purple-brown",
  },
  growth_info: {
    difficulty: "Intermediate", // Easy, Intermediate, Difficult
    yield: "High", // Low, Medium, High
    cultivation_time: "4-6 weeks", // this should always be structured like this 4-6 weeks or 10-14 days etc.
    substrate: "Grain", // be more specific than just "Grain" or "Rye Grain"
    mycelium_appearance:
      "White and fluffy during colonization, changes to grayish upon maturation",
    fruiting_conditions: {
      temperature_range: "21-24°C (70-75°F)", // this should always be structured like this 21-24°C (70-75°F) etc.
      relative_humidity: "90-95%", // this should always be structured like this 90-95% etc.
      lighting: "Indirect sunlight or fluorescent light", // this should always be structured like this Indirect sunlight or fluorescent light etc.
    },
    incubation_period: "10-14 days", // this should always be structured like this 10-14 days or 4-6 weeks etc.
    fruiting_time: "5-12 days from pinning", // this should always be structured like this 5-12 days from pinning or 10-14 days from pinning etc.
    typical_yield: "Varies based on conditions, generally several flushes",
  },
  potency_info: {
    level: "Moderate to High", // Low, Moderate, High
    effects: [
      "Strong mind high",
      "Phenomenal visuals",
      "Amazing euphoria",
      "Delayed onset leading to sudden intense effects",
    ],
    psychoactive_compounds:
      "Typical Psilocybin, Psilocin, Baeocystin composition",
  },
  dosage_recommendations: {
    very_low: "0.2-0.5g", // this should always be structured like this 0.2-0.5g etc.
    low: "0.5-1g", // this should always be structured like this 0.5-1g etc.
    medium: "1-2.5g", // this should always be structured like this 1-2.5g etc.
    high: "2.5-5g", // this should always be structured like this 2.5-5g etc.
    very_high: "5g+", // this should always be structured like this 5g+ etc.
  },
  storage: {
    spore_storage: {
      temperature: "2-8°C (35-46°F)", // this should always be structured like this 2-8°C (35-46°F) etc.
      environment: "Dark, dry place",
      shelf_life: "Several years if stored properly",
    },
    harvested_mushroom_storage: {
      fresh: {
        temperature: "2-4°C (35-39°F)", // this should always be structured like this 2-4°C (35-39°F) etc.
        humidity: "High, in a paper bag",
        shelf_life: "Up to 1 week",
      },
      dried: {
        environment: "Airtight container with desiccant",
        shelf_life: "Several months to years",
      },
    },
  },
  user_experience: {
    common_reports: [
      "No effects for up to an hour, then sudden onset",
      "Enhanced visuals",
      "General positive experience",
    ],
    suitability:
      "Suitable for those seeking enhanced visuals and higher than average potency",
  },
  legal_status: {
    general: "Varies by country and region",
    note: "Possession, sale, and use of psychedelic mushrooms is illegal in many countries. Users are advised to consult local regulations.",
  },
  additional_info: {
    flavor_profile: "Mild and earthy",
    medical_effects:
      "Reported potential for stress relief and mood enhancement",
    cultural_significance: "Celebrated at the Full Moon festivals in Thailand",
    availability:
      "Various online sources, occasionally out of stock due to high demand",
    category: "Magic Mushroom",
    intended_use: "For Mycology and Research Purposes Only",
  },
};

export default function Strain1() {
  return (
    <div className="p-2 md:px-6 px-4">
      <div className="flex flex-col lg:flex-row w-full rounded-md border border-neutral-800 bg-black">
        <div className="hidden lg:flex w-16 border-r border-neutral-800 p-4">
          <div className="lg:flex lg:flex-none lg:items-center lg:whitespace-nowrap lg:[writing-mode:vertical-rl]">
            <span className="font-mono text-slate-500">Written by</span>
            <span className="mt-6 flex gap-6 font-bold text-white">
              Byron Wade
              <span aria-hidden="true" className="text-white">
                /
              </span>
              Dave Clark
            </span>
          </div>
        </div>
        <div className="flex w-full lg:w-[600px] border-r border-neutral-800 p-4">
          <div className="relative mx-auto px-4 mt-4">
            <a
              className="relative mx-auto block w-full overflow-hidden rounded-lg"
              aria-label="Homepage"
              href="/"
            >
              <Image
                src={strain.imageSrc}
                alt={strain.imageAlt}
                width={500}
                height={500}
              />
            </a>

            <div className="w-full mt-8">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {strain.strain_name}
              </h1>
              <p className="mt-2 text-base leading-7 text-white">
                {strain.description}
              </p>
              <div className="flex gap-2.5 mb-4 mt-2">
                <time
                  className="opacity-60 text-xs"
                  dateTime="2023-08-24T09:04:32.048Z"
                >
                  Last Updated 3m ago
                </time>
                <span className="opacity-60 text-xs">·</span>
                <span className="opacity-60 text-xs">4.1K views</span>
              </div>
            </div>

            {strain.categories && (
              <div className="flex flex-wrap mt-4">
                {strain.categories.map((category) => (
                  <div
                    key={category.title}
                    className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full mr-2 mb-2"
                  >
                    {category.title}
                  </div>
                ))}
              </div>
            )}
            <div className="flex mt-4">
              <Link href="/" className="text-sm hover:underline text-teal-600">
                Is this info incorrect? Make changes here
              </Link>
            </div>
            <section className="mt-12 hidden lg:block">
              <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  className="h-2.5 w-2.5"
                >
                  <path
                    d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                    className="fill-violet-300"
                  />
                  <path
                    d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                    className="fill-pink-300"
                  />
                </svg>
                <span className="ml-2.5">Physical Characteristics</span>
              </h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-bold w-full block">Habitat:</span>{" "}
                  {strain.physical_characteristics.habitat}
                </li>
                <li>
                  <span className="font-bold w-full block">Cap Shape:</span>{" "}
                  {strain.physical_characteristics.cap_shape}
                </li>
                <li>
                  <span className="font-bold w-full block">Cap Color:</span>{" "}
                  {strain.physical_characteristics.cap_color}
                </li>
                <li>
                  <span className="font-bold w-full block">Stem Color:</span>{" "}
                  {strain.physical_characteristics.stem_color}
                </li>
                <li>
                  <span className="font-bold w-full block">Veil Type:</span>{" "}
                  {strain.physical_characteristics.veil_type}
                </li>
                <li>
                  <span className="font-bold w-full block">
                    Spore Print Color:
                  </span>{" "}
                  {strain.physical_characteristics.spore_print_color}
                </li>
              </ul>
            </section>
            <section className="mt-12 hidden lg:block">
              <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  className="h-2.5 w-2.5"
                >
                  <path
                    d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                    className="fill-violet-300"
                  />
                  <path
                    d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                    className="fill-pink-300"
                  />
                </svg>
                <span className="ml-2.5">Growth Info</span>
              </h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-bold w-full block">
                    Cultivation Time:
                  </span>{" "}
                  {strain.growth_info.cultivation_time}
                </li>
                <li>
                  <span className="font-bold w-full block">Substrate:</span>{" "}
                  {strain.growth_info.substrate}
                </li>
                <li>
                  <span className="font-bold w-full block">
                    Mycelium Appearance:
                  </span>{" "}
                  {strain.growth_info.mycelium_appearance}
                </li>
                <li>
                  <span className="font-bold w-full block">
                    Incubation Period:
                  </span>{" "}
                  {strain.growth_info.incubation_period}
                </li>
                <li>
                  <span className="font-bold w-full block">Fruiting Time:</span>{" "}
                  {strain.growth_info.fruiting_time}
                </li>
                <li>
                  <span className="font-bold w-full block">Typical Yield:</span>{" "}
                  {strain.growth_info.typical_yield}
                </li>
                <h3 className="text-xl font-bold pt-8">Fruiting Conditions</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-bold w-full block">
                      Temperature Range:
                    </span>{" "}
                    {strain.growth_info.fruiting_conditions.temperature_range}
                  </li>
                  <li>
                    <span className="font-bold w-full block">
                      Relative Humidity:
                    </span>{" "}
                    {strain.growth_info.fruiting_conditions.relative_humidity}
                  </li>
                  <li>
                    <span className="font-bold w-full block">Lighting:</span>{" "}
                    {strain.growth_info.fruiting_conditions.lighting}
                  </li>
                </ul>
              </ul>
            </section>

            <section className="mt-12 hidden lg:block">
              <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  className="h-2.5 w-2.5"
                >
                  <path
                    d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                    className="fill-violet-300"
                  />
                  <path
                    d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                    className="fill-pink-300"
                  />
                </svg>
                <span className="ml-2.5">Potancy Info</span>
              </h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-bold w-full block">Effects:</span>
                  {strain.potency_info.effects.map((effect) => (
                    <div key={effect}>{effect}</div>
                  ))}
                </li>
                <li>
                  <span className="font-bold w-full block">
                    Psychoactive Compounds:
                  </span>{" "}
                  {strain.potency_info.psychoactive_compounds}
                </li>
                <li>
                  <span className="font-bold w-full block">Level:</span>{" "}
                  {strain.potency_info.level}
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="flex w-full lg:w-full  border-r border-neutral-800 p-4">
          <div className="prose lg:prose-xl !text-white max-w-2xl mx-auto w-full pt-20">
            <Article />
          </div>
        </div>
        <div className="flex w-full lg:w-[600px] border-neutral-800 p-4 flex-col space-y-4">
          {strains.map((strain) => (
            <ProductStrain6 key={strain.id} strain={strain} />
          ))}
        </div>
      </div>
    </div>
  );
}
