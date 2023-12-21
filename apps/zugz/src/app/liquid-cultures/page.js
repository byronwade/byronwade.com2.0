'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Comments from '../../components/comments';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const strains = [
    {
      id: 1,
      name: 'Full Moon Party',
      description:
        'Experience the vibrant, dynamic nature of the Full Moon Party strain, known for its unique characteristics and strong growth patterns.',
      imageSrc: '/images/strains/full-moon-party_noBackground.png', // Replace with actual image URL
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
      myceliumAppearance:
        'White and fluffy during colonization, changes to grayish upon maturation.',
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
      imageSrc: '/images/strains/hillbilly_noBackground.png', // Replace with actual image URL
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
      imageSrc: '/images/strains/golden-halo_noBackground.png', // Replace with actual image URL
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
      imageSrc: '/images/strains/tidalwave_noBackground.png', // Replace with actual image URL
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
      imageSrc: '/images/strains/golden-teachers_noBackground.png', // Replace with actual image URL
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
      myceliumAppearance:
        'White and fluffy during colonization, changes to grayish upon maturation.',
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
      imageSrc: '/images/strains/albino-golden-teachers_noBackground.png', // Replace with actual image URL
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
      imageSrc: '/images/strains/stargazer_noBackground.png',
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
      imageSrc: '/images/strains/mexi_noBackground.png',
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
      cultivationTips:
        'PF-Tek method, maintain sterile environment, ideal fruiting temp ~80℉ (27 ℃)',
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
      imageSrc: '/images/strains/white-rabbit_noBackground.png',
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
      imageSrc: '/images/strains/jedi-mind-fuck_noBackground.png',
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
      cultivationTips:
        'Not as resistant to environmental contaminants, requires diligent sanitation',
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
      imageSrc: '/images/strains/penis-envy_noBackground.png',
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
      imageSrc: '/images/strains/vader_noBackground.png', // Replace with actual image URL
      imageAlt: 'Group of mycologists discussing and examining mycology strains.',
      price: '$220'
    },
    {
      id: 13,
      name: 'Gandoff',
      description:
        'Experience the world of the Gandoff strain, known for its unique characteristics and strong growth patterns.',
      imageSrc: '/images/strains/gandoff_noBackground.png',
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
      imageSrc: '/images/strains/jack-frost_noBackground.png',
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
      imageSrc: '/images/strains/treasure-coast_noBackground.png',
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
      imageSrc: '/images/strains/bees-knees-b+_noBackground.png',
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

  return (
    <>
      <div className="flex flex-col gap-4 p-2 px-4 py-10 mx-auto max-w-screen-2xl md:px-6">
        {/* <div className="absolute top-0 right-0 inline-flex items-center px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md shadow-lg">
          20% Sale
        </div> */}

        {/* STRAINS */}
        <div className="flex-row hidden w-full gap-4 space-y-4 lg:flex">
          <div className="flex flex-row w-full gap-4">
            {strains.slice(0, 16).map((strain, index) => (
              <div className="flex-1 mb-10" key={index} onClick={() => setSelectedImage(index)}>
                <Image
                  src={strain.imageSrc}
                  alt={strain.imageAlt}
                  height={100}
                  width={100}
                  className={`rounded-md shadow-lg aspect-square border-2 border-transparent bg-neutral-800/80 ${
                    selectedImage === index ? 'border-blue-500' : ''
                  }`}
                />
                <div className="mt-1 text-xs font-bold">{strain.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 mb-20 sm:grid-cols-2 lg:grid-cols-12">
          <div className="relative space-y-4 lg:col-span-5">
            <Image
              src="/Liquid-Culture.png"
              height={1600}
              width={600}
              alt="alt"
              className="w-full !mt-0 rounded-md shadow-lg aspect-square bg-neutral-800/80"
            />
            <div className="grid w-full grid-cols-4 gap-4 sm:grid-cols-4">
              {[...Array(6)].map((_, index) => (
                <div key={index}>
                  <Image
                    src="/images/bg/bg.png"
                    height={100}
                    width={100}
                    alt="alt"
                    className="w-full rounded-md shadow-lg aspect-square bg-neutral-800/80"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden space-y-4 lg:block lg:col-span-4">
            <div className="relative p-4 space-y-2 overflow-hidden border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <h2 className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300 inline-block">
                Strain
              </h2>
              <p className="text-2xl font-bold">Full Moon Party</p>
              <Image
                src="/images/strains/full-moon-party_noBackground.png"
                height={300}
                width={300}
                alt="alt"
                className="absolute opacity-30 -top-28 -right-28"
              />
            </div>

            <div className="flex flex-row w-full gap-4">
              <div className="flex-1 h-full space-y-4">
                <div className="p-4 bg-pink-100 rounded-md shadow-lg dark:bg-[#FF69B4] flex flex-row items-center justify-between">
                  <h2>Healthy & Safe</h2>
                  <Image
                    className="aspect-square"
                    src="/health.png"
                    alt="alt"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
              <div className="relative flex-1 h-full">
                <div className="text-black p-4 bg-pink-100 border border-[#ADD8E6] rounded-md shadow-lg dark:bg-[#ADD8E6] flex flex-row items-center justify-between">
                  <p className="text-sm">Guaranteed no contaminants</p>
                  <Image
                    className="aspect-square"
                    alt="alt"
                    src="/images/safe.png"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full gap-4">
              <div className="w-4/6">
                <div className="h-full p-4 text-black bg-yellow-200 rounded-md shadow-lg border-neutral-800">
                  <h2 className="text-2xl font-bold">Liquid Cultures</h2>
                  <p className="text-sm">
                    Liquid cultures are nutrient-rich solutions used for growing and rapidly
                    propagating microorganisms, such as bacteria, fungi, and yeasts, in a controlled
                    and efficient manner.
                  </p>
                </div>
              </div>

              <div className="w-2/6">
                <div className="flex items-center justify-center h-full p-4 bg-purple-100 border border-purple-500 rounded-md shadow-lg dark:bg-purple-500">
                  <Image
                    className="aspect-square"
                    alt="alt"
                    src="/quality.png"
                    height={150}
                    width={150}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-stretch w-full gap-4">
              <div className="w-1/12">
                <div className="flex flex-col h-full p-4 bg-red-100 border border-red-800 rounded-md shadow-lg dark:bg-red-900">
                  <div className="flex-grow">
                    <div className="flex items-center justify-center h-full">
                      <div className="font-mono origin-center transform -rotate-90 text-md whitespace-nowrap">
                        <span>20% Off This Week</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-11/12">
                <div className="relative flex flex-col h-full p-4 mb-4 overflow-hidden rounded-md shadow-lg border-neutral-800 bg-zugz-50">
                  <div className="flex-grow">
                    <Image
                      src="/icon.png"
                      height={300}
                      width={300}
                      alt="alt"
                      className="absolute opacity-30 -top-28 -right-28"
                    />
                    <div className="relative z-10 pr-36">
                      <h2 className="text-2xl font-bold">Description</h2>
                      <p className="text-sm">
                        Dive into the cosmic fiesta with the Full Moon Party strain of magic
                        mushroom liquid culture, where each drop is a VIP ticket to intergalactic
                        enlightenment, sprinkled with cosmic chuckles and served up on Earth with a
                        side of 🌕✨🍄.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center h-1 rounded-md shadow-lg bg-neutral-600"></div>

            <div className="hidden w-full flex-2 lg:block">
              <div className="flex flex-col h-full rounded-md shadow-lg">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Substrate:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      Hardwoods, sawdust
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Difficulty:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Fruiting Time:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      14 days from pinning
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Typical Yield:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      1-2 kg per log
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Cultivation Time:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">6 months</span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Incubation Period:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      30-60 days
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Fruiting Conditions:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      Low light, indirect sunlight
                    </span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Relative Humidity:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">90-95%</span>
                  </div>
                  <div className="flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    Temperature Range:{' '}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      20-24°C (68-75°F)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative space-y-4 lg:col-span-3">
            <div className="flex-1">
              <div className="flex flex-row items-center justify-between p-4 text-black border-4 rounded-md shadow-lg bg-zugz-600 border-zugz-300">
                <div>
                  <h2 className="text-2xl font-bold">Free Shipping</h2>
                  <p className="text-sm">Anywhere in the us.</p>
                </div>
                <Image
                  src="/free-shipping.png"
                  alt="alt"
                  className="aspect-square"
                  height={80}
                  width={80}
                />
              </div>
            </div>
            <div className="sticky flex flex-col p-4 space-y-4 border rounded-md shadow-lg top-10 border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <div className="space-y-4 text-white">
                <h1 className="text-5xl font-black">Full Moon Party</h1>
                <h2 className="text-xl font-black">Liquid Culture</h2>
                <ul className="ml-4 text-sm list-disc">
                  <li>10/mil</li>
                  <li>Free Shipping</li>
                  <li>One per package</li>
                  <li>1000 people have viewed this in the last hour</li>
                  <li>Guaranteed no contaminants</li>
                </ul>

                <div className="flex flex-row w-full gap-4">
                  <div className="w-full p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    <div className="text-sm">
                      <span className="font-bold">$20.00</span>
                      <span>/10ml</span>
                    </div>
                  </div>
                  <div className="w-full p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                    <div className="text-sm">
                      <span>300 In Stock</span>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/cart"
                className="relative inline-flex items-center w-full p-4 text-sm font-medium text-black transition-colors bg-green-600 rounded-md shadow-lg whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-green-600/90"
              >
                <div className="relative flex flex-row justify-between w-full">
                  <span className="font-bold">Buy Now</span>
                  <span className="font-bold">$20.00/10ml</span>
                </div>
              </Link>
              <p className="text-xs text-center text-red-500">For Mycology use only.</p>
            </div>
          </div>
        </div>

        <Comments />
      </div>
    </>
  );
}
