import Image from 'next/image';
import {
  ProductStrain,
  ProductStrain2,
  ProductStrain3,
  ProductStrain4,
  ProductStrain5,
  ProductStrain6
} from '../../components/shop/ProductCard';

const strains = [
  {
    id: 1,
    name: 'Full Moon Party',
    description:
      'Experience the vibrant, dynamic nature of the Full Moon Party strain, known for its unique characteristics and strong growth patterns.',
    imageSrc: '/images/strains/full-moon-party.png', // Replace with actual image URL
    imageAlt: 'Close-up view of the Full Moon Party mycology strain.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Subtropical regions',
    capShape: 'Conical to convex',
    capColor: 'Golden-brown',
    stemColor: 'White',
    veilType: 'Partial veil',
    potency: 'Moderate to high',
    growthDifficulty: 'Intermediate',
    harvestYield: 'High',
    flavorProfile: 'Mild and earthy',
    cultivationTime: '4-6 weeks',
    sporePrintColor: 'Dark purple-brown',
    medicalEffects: 'Reported potential for stress relief and mood enhancement',
    substrate: 'Grain-based substrate',
    cultivationTips: 'Maintain temperature at 75-80°F with 90% humidity during fruiting.',
    myceliumAppearance: 'White and fluffy during colonization, changes to grayish upon maturation.',
    historyOrigin: 'Originated from Southeast Asia and gained popularity worldwide.',
    commonUses: 'Culinary and spiritual purposes',
    storageRecommendations: 'Store in a cool, dry place in an airtight container.',
    legality: 'Check local regulations regarding the cultivation and use of this strain.'
  },
  {
    id: 2,
    name: 'Hillbilly',
    description:
      'Learn about the ideal conditions for cultivating the Hillbilly strain, including temperature, humidity, and light requirements.',
    imageSrc: '/images/strains/hillbilly.png', // Replace with actual image URL
    imageAlt: 'Illustration of optimal growth conditions for mycology strains.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Temperate regions',
    capShape: 'Conical to convex',
    capColor: 'Light brown',
    stemColor: 'White',
    veilType: 'Partial veil',
    potency: 'Moderate',
    growthDifficulty: 'Beginner',
    harvestYield: 'Moderate',
    flavorProfile: 'Mild and nutty',
    cultivationTime: '4-5 weeks',
    sporePrintColor: 'Dark brown',
    medicalEffects: 'No reported medical effects.',
    substrate: 'Various substrates, including grain and straw.',
    cultivationTips: 'Suitable for beginners; maintain temperature at 70-75°F with 90% humidity.',
    myceliumAppearance: 'White and cottony during colonization.',
    historyOrigin: 'Originated from the United States.',
    commonUses: 'Culinary purposes',
    storageRecommendations: 'Store in a cool, dark place in a sealed container.',
    legality: 'Check local regulations regarding the cultivation and use of this strain.'
  },
  {
    id: 3,
    name: 'Golden Halo',
    description:
      'Detailed guidance on advanced cultivation techniques tailored specifically for the Golden Halo strain, ensuring successful growth.',
    imageSrc: '/images/strains/golden-halo.png', // Replace with actual image URL
    imageAlt: 'Hands cultivating mycology strains, demonstrating specialized techniques.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Tropical regions',
    capShape: 'Convex',
    capColor: 'Golden-yellow',
    stemColor: 'White',
    veilType: 'Partial veil',
    potency: 'High',
    growthDifficulty: 'Advanced',
    harvestYield: 'High',
    flavorProfile: 'Sweet and earthy',
    cultivationTime: '6-8 weeks',
    sporePrintColor: 'Golden-yellow',
    medicalEffects: 'Potential for intense psychedelic experiences.',
    substrate: 'Specialized nutrient-rich substrate',
    cultivationTips:
      'Requires precise temperature and humidity control; not recommended for beginners.',
    myceliumAppearance: 'Bright white and rhizomorphic during colonization.',
    historyOrigin:
      'Originated from Southeast Asia and gained popularity among experienced cultivators.',
    commonUses: 'Psychedelic exploration and research',
    storageRecommendations: 'Store in airtight containers in a cool, dark place.',
    legality: 'Check local regulations regarding the cultivation and use of this strain.'
  },
  {
    id: 4,
    name: 'Tidalwave',
    description:
      'Join a community of enthusiasts and experts sharing insights, experiences, and tips on cultivating the Tidalwave strain.',
    imageSrc: '/images/strains/tidalwave.png', // Replace with actual image URL
    imageAlt: 'Group of mycologists discussing and examining mycology strains.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Temperate regions',
    capShape: 'Conical to convex',
    capColor: 'Blue-gray',
    stemColor: 'White',
    veilType: 'Partial veil',
    potency: 'Moderate',
    growthDifficulty: 'Intermediate',
    harvestYield: 'Moderate',
    flavorProfile: 'Mild and herbal',
    cultivationTime: '5-6 weeks',
    sporePrintColor: 'Dark purple-brown',
    medicalEffects: 'No reported medical effects.',
    substrate: 'Grain-based substrate',
    cultivationTips: 'Maintain temperature at 70-75°F with 90% humidity during fruiting.',
    myceliumAppearance: 'White and cottony during colonization.',
    historyOrigin: 'Originated from the United States.',
    commonUses: 'Culinary purposes',
    storageRecommendations: 'Store in a cool, dark place in a sealed container.',
    legality: 'Check local regulations regarding the cultivation and use of this strain.'
  },
  {
    id: 5,
    name: 'Golden Teachers',
    description:
      'Explore the world of Golden Teachers strain with its unique characteristics and growth patterns.',
    imageSrc: '/images/strains/golden-teachers.png', // Replace with actual image URL
    imageAlt: 'Close-up view of the Golden Teachers mycology strain.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Subtropical regions',
    capShape: 'Conical to convex',
    capColor: 'Golden-brown',
    stemColor: 'White',
    veilType: 'Partial veil',
    potency: 'Moderate to high',
    growthDifficulty: 'Intermediate',
    harvestYield: 'High',
    flavorProfile: 'Mild and earthy',
    cultivationTime: '4-6 weeks',
    sporePrintColor: 'Dark purple-brown',
    medicalEffects: 'Reported potential for stress relief and mood enhancement',
    substrate: 'Grain-based substrate',
    cultivationTips: 'Maintain temperature at 75-80°F with 90% humidity during fruiting.',
    myceliumAppearance: 'White and fluffy during colonization, changes to grayish upon maturation.',
    historyOrigin: 'Originated from Southeast Asia and gained popularity worldwide.',
    commonUses: 'Culinary and spiritual purposes',
    storageRecommendations: 'Store in a cool, dry place in an airtight container.',
    legality: 'Check local regulations regarding the cultivation and use of this strain.'
  },
  {
    id: 6,
    name: 'Albino Golden Teachers',
    description:
      'Learn about the Albino Golden Teachers strain and its ideal cultivation conditions, including temperature, humidity, and light requirements.',
    imageSrc: '/images/strains/albino-golden-teachers.png', // Replace with actual image URL
    imageAlt: 'Illustration of optimal growth conditions for mycology strains.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Temperate regions',
    capShape: 'Conical to convex',
    capColor: 'Light brown',
    stemColor: 'White',
    veilType: 'Partial veil',
    potency: 'Moderate',
    growthDifficulty: 'Beginner',
    harvestYield: 'Moderate',
    flavorProfile: 'Mild and nutty',
    cultivationTime: '4-5 weeks',
    sporePrintColor: 'Dark brown',
    medicalEffects: 'No reported medical effects.',
    substrate: 'Various substrates, including grain and straw.',
    cultivationTips: 'Suitable for beginners; maintain temperature at 70-75°F with 90% humidity.',
    myceliumAppearance: 'White and cottony during colonization.',
    historyOrigin: 'Originated from the United States.',
    commonUses: 'Culinary purposes',
    storageRecommendations: 'Store in a cool, dark place in a sealed container.',
    legality: 'Check local regulations regarding the cultivation and use of this strain.'
  },
  {
    id: 7,
    name: 'Stargazer',
    description:
      'Get insights into the Stargazer strain, known for its unique features and successful cultivation techniques.',
    imageSrc: '/images/strains/stargazer.png',
    imageAlt: 'Hands cultivating mycology strains, demonstrating specialized techniques.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Subtropical regions',
    capShape: 'Convex',
    capColor: 'Reddish-brown to golden brown to light yellow',
    stemColor: 'Pale yellow',
    veilType: 'Partial veil',
    potency: 'Moderate to high',
    growthDifficulty: 'Easy',
    harvestYield: 'Bountiful',
    flavorProfile: 'Not documented',
    cultivationTime: 'Average',
    sporePrintColor: 'Dark purple and brown',
    medicalEffects: 'Mood elevation, visual hallucinations, altered auditory perception',
    substrate: 'Rye grain, coco coir, vermiculite, gypsum, horse manure',
    cultivationTips: 'Maintain temperature in mid-70°F (24°C)',
    myceliumAppearance: 'White, whispy',
    historyOrigin: 'Among the earliest cultivated',
    commonUses: 'Not documented',
    storageRecommendations: 'Not documented',
    legality: 'Decriminalized in some regions, federally legal for microscope purposes'
  },
  {
    id: 8,
    name: 'Mexi',
    description:
      'Discover the Mexi strain and its growth requirements, including temperature, humidity, and light conditions.',
    imageSrc: '/images/strains/mexi.png',
    imageAlt: 'Group of mycologists discussing and examining mycology strains.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Warm, moist environments with plenty of light',
    capShape: 'Not documented',
    capColor: 'Not documented',
    stemColor: 'Not documented',
    veilType: 'Not documented',
    potency: 'Moderate to potent',
    growthDifficulty: 'Easy',
    harvestYield: 'Not documented',
    flavorProfile: 'Not documented',
    cultivationTime: 'Fast, 10-12 days',
    sporePrintColor: 'Not documented',
    medicalEffects: 'Joy, fun, euphoria, visual hallucinations',
    substrate: 'Rye Grain, Manure, BRF, PWS, Concentrated Flour, Various Grains',
    cultivationTips: 'PF-Tek method, maintain sterile environment, ideal fruiting temp ~80℉ (27 ℃)',
    myceliumAppearance: 'White, whispy',
    historyOrigin: 'Originated in Mexico, used by Aztecs',
    commonUses: 'Recreational and spiritual',
    storageRecommendations: 'Not documented',
    legality: 'Regulated due to psychoactive properties'
  },
  {
    id: 9,
    name: 'White Rabbit',
    description:
      'Learn about the White Rabbit strain and its unique cultivation techniques for successful growth.',
    imageSrc: '/images/strains/white-rabbit.png',
    imageAlt: 'Close-up view of the White Rabbit mycology strain.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Not documented',
    capShape: 'Somewhat shorter and thicker-stemmed than typical for a cube',
    capColor: 'Not documented',
    stemColor: 'Pale yellow to whitish, depending on light levels during growth',
    veilType: 'Not documented',
    potency: 'Twice as potent as Golden Teachers, with 1.4 to 1.6% tryptamine content',
    growthDifficulty: 'Intermediate',
    harvestYield: 'Above-average yields',
    flavorProfile: 'Not documented',
    cultivationTime: 'Not documented',
    sporePrintColor: 'Dark purple-brown',
    medicalEffects: 'Not documented',
    substrate: 'Prefers rye grain, manure or enriched soil is a close second',
    cultivationTips: 'Vulnerable to contamination, sterile technique is crucial',
    myceliumAppearance: 'Not documented',
    historyOrigin: 'Developed in Holland, hybrid of Albino Penis Envy and Moby Dick',
    commonUses: 'Not documented',
    storageRecommendations: 'Not documented',
    legality: 'Not documented'
  },
  {
    id: 10,
    name: 'Jedi Mind Fuck',
    description:
      'Explore the world of the Jedi Mind Fuck strain, known for its distinct features and growth patterns.',
    imageSrc: '/images/strains/jedi-mind-fuck.png',
    imageAlt: 'Illustration of optimal growth conditions for mycology strains.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Not documented',
    capShape: 'Starts out bell-shaped and then opens widely',
    capColor: 'Golden-brown',
    stemColor: 'Pale',
    veilType: 'Not documented',
    potency: 'Average for the species',
    growthDifficulty: 'Intermediate',
    harvestYield: 'Not documented',
    flavorProfile: 'Not documented',
    cultivationTime: 'Not documented',
    sporePrintColor: 'Not documented',
    medicalEffects:
      'Intense visual and auditory hallucinations, feelings of euphoria and introspection',
    substrate: 'Prefers rye grain',
    cultivationTips: 'Not as resistant to environmental contaminants, requires diligent sanitation',
    myceliumAppearance: 'Not documented',
    historyOrigin: 'Not documented',
    commonUses: 'Not documented',
    storageRecommendations: 'Not documented',
    legality: 'Not documented'
  },
  {
    id: 11,
    name: 'Penis Envy',
    description:
      'Get detailed guidance on cultivating the Penis Envy strain, with specialized techniques for successful growth.',
    imageSrc: '/images/strains/penis-envy.png',
    imageAlt: 'Hands cultivating mycology strains, demonstrating specialized techniques.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Not documented',
    capShape: 'Cap remains close to the stem, with a notable phallic shape',
    capColor: 'Not documented',
    stemColor: 'Thicker than average',
    veilType: 'Not documented',
    potency:
      'Exceptionally potent, with combined psilocybin and psilocin concentrations as high as 2.90%',
    growthDifficulty: 'Intermediate',
    harvestYield: 'Not documented',
    flavorProfile: 'Not documented',
    cultivationTime: 'Colonizes substrate about 20% slower than beginner strains',
    sporePrintColor: 'Not documented',
    medicalEffects: 'Not documented',
    substrate:
      'Grows well on all substrates, including brown rice flour and vermiculite (BRF tek), rye grain, wild bird seed, and manure',
    cultivationTips:
      'Less resistant to contamination, higher abort rate, needs extra caution and cleanliness during cultivation',
    myceliumAppearance: 'Not documented',
    historyOrigin: 'Not documented',
    commonUses: 'Not documented',
    storageRecommendations: 'Not documented',
    legality: 'Not documented'
  },
  {
    id: 12,
    name: 'Vader',
    description:
      'Discover the Vader strain and its ideal growth conditions, including temperature, humidity, and light requirements.',
    imageSrc: '/images/strains/vader.png', // Replace with actual image URL
    imageAlt: 'Group of mycologists discussing and examining mycology strains.',
    price: '$220'
  },
  {
    id: 13,
    name: 'Gandoff',
    description:
      'Experience the world of the Gandoff strain, known for its unique characteristics and strong growth patterns.',
    imageSrc: '/images/strains/gandoff.png',
    imageAlt: 'Close-up view of the Gandoff mycology strain.',
    price: '$220',
    species: 'Psilocybe Cubensis',
    availability: 'In Stock',
    habitat: 'Not documented',
    capShape:
      "Long stems resembling inlaid or old wooden Gandalf's staff, caps as white as the great wizard's robe",
    capColor: 'Pasty white, sometimes bluish or dark-blue spots on top of mushroom cap',
    stemColor: 'Not documented',
    veilType: 'Not documented',
    potency:
      'Above average, with Psilocybin - 10.83 mg/g and Psilocin - 1.00 mg/g for Albino Melmak (a similar strain)',
    growthDifficulty: 'Intermediate',
    harvestYield:
      'Typically 3-4 productive flushes, with some flushes producing large mushrooms over 100 grams',
    flavorProfile: 'Not documented',
    cultivationTime:
      'About 3-5 weeks for grain colonization, up to 3 weeks for bulk colonization, up to 2-3 weeks for pinning, overall 2-3 months for the first mushroom harvest',
    sporePrintColor: 'Not documented',
    medicalEffects: 'Not documented',
    substrate:
      'Any type of grain substrate for making grain spawn, bulk fruiting CVG (coco coir + vermiculite + gypsum) substrate',
    cultivationTips:
      'More prone to contamination during bulk colonization due to longer colonization time. Good ventilation and cleanliness are crucial.',
    myceliumAppearance: 'Not documented',
    historyOrigin: 'A cross of TAT (True Albino Teacher) x Melmac (Penis Envy iso)',
    commonUses: 'Not documented',
    storageRecommendations: 'Not documented',
    legality: 'Not documented'
  },
  {
    id: 14,
    name: 'Jack Frost',
    description:
      'Learn about the Jack Frost strain and its growth requirements, including temperature, humidity, and light conditions.',
    imageSrc: '/images/strains/jack-frost.png',
    imageAlt: 'Illustration of optimal growth conditions for mycology strains.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Not documented',
    capShape: 'Flat caps that curl upwards, resembling a dusting of fresh snow',
    capColor: 'Ghostly-white, may take on a light to dark-blue coloration due to bruising',
    stemColor: 'Dense and relatively heavy, retaining a ghostly white appearance',
    veilType: 'Not documented',
    potency:
      'Average, with a total tryptamine content of up to 0.83% or higher under optimal conditions',
    growthDifficulty: 'Beginner to Intermediate',
    harvestYield:
      'Expect three to five healthy flushes, up to seven with perfect sterile procedures',
    flavorProfile: 'Not documented',
    cultivationTime:
      'Relatively fast-growing, though colonization can take longer with occasional delay in the first flush',
    sporePrintColor: 'Not documented',
    medicalEffects: 'Reported strong visuals, mild euphoria, and time dilation',
    substrate: 'Grows well on various mediums, with best results from rye grain',
    cultivationTips:
      'Relatively contamination-resistant, best fruited at temperatures between 74℉ to 77℉ (23℃ to 25℃), sterile techniques crucial',
    myceliumAppearance: 'Not documented',
    historyOrigin:
      'New strain, speculated to have been created by a person known as Wombat around 2018',
    commonUses: 'Not documented',
    storageRecommendations: 'Not documented',
    legality: 'Not documented'
  },
  {
    id: 15,
    name: 'Treasure Coast',
    description:
      'Discover the Treasure Coast strain and its unique cultivation techniques for successful growth.',
    imageSrc: '/images/strains/treasure-coast.png',
    imageAlt: 'Hands cultivating mycology strains, demonstrating specialized techniques.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Originally collected from the eastern coast of Florida',
    capShape: 'Convex to plane or umbonate caps',
    capColor:
      'Lightly caramel colored, can range from light yellow to golden, deep brown to black, sometimes appearing white if albino',
    stemColor: 'Usually white or beige',
    veilType: 'Not documented',
    potency: 'Average, with an average total tryptamine concentration of 0.67%',
    growthDifficulty: 'Intermediate',
    harvestYield: 'Small but potent fruiting bodies, can be prolific from second flush onwards',
    flavorProfile: 'Not documented',
    cultivationTime: 'Colonizes quickly, resistant to mold and disease',
    sporePrintColor: 'Not documented',
    medicalEffects: 'Not documented',
    substrate: 'Rye Grain or Brown Rice Flour',
    cultivationTips:
      'Higher abort rate before the first flush, requires patience for larger second and third flushes',
    myceliumAppearance: 'Not documented',
    historyOrigin: 'Collected from Treasure Coast, Florida',
    commonUses: 'Not documented',
    storageRecommendations: 'Not documented',
    legality: 'Not documented'
  },
  {
    id: 16,
    name: 'Bees Knees B+',
    description:
      'Join a community of enthusiasts and experts sharing insights, experiences, and tips on cultivating the Bees Knees B+ strain.',
    imageSrc: '/images/strains/bees-knees-b+.png',
    imageAlt: 'Group of mycologists discussing and examining mycology strains.',
    price: '$220',
    species: 'Psilocybe cubensis',
    availability: 'In Stock',
    habitat: 'Not documented',
    capShape: 'Relatively large, light brown caps with a dark brown, almost black center',
    capColor: 'Light brown with a dark brown, almost black center',
    stemColor: 'Long white stems that bruise a dark bluish color',
    veilType: 'Young specimens have a veil covering the gills',
    potency: 'Average potency with total tryptamine average around 0.73%, can reach up to 1.38%',
    growthDifficulty: 'Easy',
    harvestYield: 'Not documented',
    flavorProfile: 'Not documented',
    cultivationTime: 'Not documented',
    sporePrintColor: 'Deep purple',
    medicalEffects: 'Not documented',
    substrate:
      'Not specifically documented, but grows well on common substrates used for Psilocybe cubensis',
    cultivationTips:
      'Robust and capable of growing in sub-optimal conditions, suitable for first-time growers',
    myceliumAppearance: 'Not documented',
    historyOrigin:
      'Allegedly created by Mr. G, claimed to be a hybrid between P. cubensis and P. azurescens',
    commonUses: 'Not documented',
    storageRecommendations: 'Not documented',
    legality: 'Not documented'
  }
];

export default function Strains() {
  return (
    <div className="flex flex-col gap-4 p-2 px-4 py-10 mx-auto max-w-screen-2xl md:px-6">
      {/* <h3 className="text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 text-heading">We offer 16 strains of psilocybe cubensis spores for microscopy use, including:</h3> */}
      <div className="flex flex-col items-start px-4 mt-10 md:px-6">
        <h2 className="text-lg font-semibold leading-8 tracking-tight text-zugz-950">
          We have 32 diffrent magic strains.
        </h2>
        <p className="!mt-0 mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-white">
          Search for any strain
        </p>
        <p className="max-w-2xl text-lg leading-6 text-gray-200">
          Missing a strain? Reach out to our support team by
          <a className="font-semibold text-zugz-700 hover:text-zugz-500" href="/contact-us">
            {' '}
            sending us an email{' '}
          </a>
          and we’ll get it assed to the website as soon as we can.
        </p>
        <div className="flex items-center w-full mt-4">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              id="simple-search"
              className="border border-neutral-800 rounded-md  text-gray-900 text-base focus:ring-brand-500 focus:border-brand-500 block w-full pl-10 p-2.5  dark:bg-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-brand-500 dark:focus:border-brand-500"
              placeholder="Search for a service..."
              aria-label="Search"
              type="text"
              defaultValue=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 px-4 pt-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 md:px-6">
        {strains.map((strain) => (
          <div key={strain.id} className="border rounded-md border-neutral-800">
            <ProductStrain6 strain={strain} />
          </div>
        ))}
      </div>
    </div>
  );
}
