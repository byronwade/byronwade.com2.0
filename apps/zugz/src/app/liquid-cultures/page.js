'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Heart } from 'react-feather';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <>
      <div className="relative flex flex-col gap-4 p-10 mx-auto max-w-7xl">
        {/* <div className="absolute top-0 right-0 inline-flex items-center px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md shadow-lg">
          20% Sale
        </div> */}

        <div className="flex flex-row w-full gap-4 space-y-4">
          <div className="flex flex-row w-full gap-4">
            {strains.slice(0, 16).map((strain, index) => (
              <>
                <div className="flex-1 mb-10" key={index} onClick={() => setSelectedImage(index)}>
                  <Image
                    src={strain.imageSrc}
                    height={100}
                    width={100}
                    layout="responsive"
                    className={`rounded-md shadow-lg aspect-square border-2 border-transparent ${
                      selectedImage === index ? 'border-blue-500' : ''
                    }`}
                  />
                  <div className="mt-1 text-xs font-bold">{strain.name}</div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="flex flex-row w-full gap-4">
          <div className="relative flex-1 space-y-4">
            <div className="p-4 space-y-2 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
              <h2 className="text-2xl font-bold">Strain</h2>
              <p className="text-sm">Full Moon Party</p>
            </div>

            <div className="flex flex-row w-full gap-4">
              <div className="flex-1 space-y-4">
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <div className="text-sm">
                    <span className="font-bold">$20.00</span>
                    <span>/10ml</span>
                  </div>
                </div>
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <div className="text-sm">
                    <span>300 In Stock</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <h2 className="text-2xl font-bold">Views</h2>
                  <p className="text-sm">1000 people have viewed this in the last hour</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full gap-4">
              <div className="flex-1 space-y-4">
                <div className="p-4 bg-pink-100 border border-pink-800 rounded-md shadow-lg dark:bg-pink-600">
                  <Heart className="" />
                  <h2>Healthy & Safe</h2>
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-black p-4 bg-pink-100 border border-[#ADD8E6] rounded-md shadow-lg dark:bg-[#ADD8E6] flex flex-row items-center">
                  <p className="text-sm">Guaranteed no contaminants</p>
                  <Image className="aspect-square" src="/images/safe.png" height={50} width={50} />
                </div>
              </div>
            </div>

            <div className="relative p-4 overflow-hidden rounded-md shadow-lg border-neutral-800 bg-zugz-50">
              <Image
                src="/icon.png"
                height={300}
                width={300}
                className="absolute opacity-30 -top-28 -right-28"
              />
              <div className="relative z-10 pt-20 pr-36">
                <h2 className="text-2xl font-bold">Description</h2>
                <p className="text-sm">
                  Dive into the cosmic fiesta with the Full Moon Party strain of magic mushroom
                  liquid culture, where each drop is a VIP ticket to intergalactic enlightenment,
                  sprinkled with cosmic chuckles and served up on Earth with a side of 🌕✨🍄.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex-1 space-y-4">
            <Image
              src="/Liquid-Culture.png"
              height={1600}
              width={600}
              className="w-full !mt-0 rounded-md shadow-lg aspect-square"
            />
            <div className="flex flex-row w-full gap-4">
              {[...Array(3)].map((_, index) => (
                <div className="flex-1" key={index}>
                  <Image
                    src="/images/bg/bg.png"
                    height={100}
                    width={100}
                    layout="responsive"
                    className="rounded-md shadow-lg aspect-square"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-row w-full gap-4">
              {[...Array(3)].map((_, index) => (
                <div className="flex-1" key={index}>
                  <Image
                    src="/images/bg/bg.png"
                    height={100}
                    width={100}
                    layout="responsive"
                    className="rounded-md shadow-lg aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex-1 space-y-4">
            <div className="p-4 text-black rounded-md shadow-lg border-neutral-800 bg-sky-200">
              <h2 className="text-2xl font-bold">Liquid Cultures</h2>
              <p className="text-sm">
                Liquid cultures are nutrient-rich solutions used for growing and rapidly propagating
                microorganisms, such as bacteria, fungi, and yeasts, in a controlled and efficient
                manner.
              </p>
            </div>

            <div className="flex flex-row w-full gap-4">
              <div className="flex-1 space-y-4">
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <div className="text-sm">
                    <span aria-hidden="true">
                      <span class="a-price-symbol">$</span>
                      <span class="a-price-whole">
                        31<span class="a-price-decimal">.</span>
                      </span>
                      <span class="a-price-fraction">99</span>
                      <span>/</span>
                      <span>10 ml</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <div className="text-sm">
                    <span>300 In Stock</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="p-4 bg-yellow-600 border-4 border-yellow-900 rounded-md shadow-lg">
                  <h2 className="text-2xl font-bold">Free Shipping</h2>
                  <p className="text-sm">Anywhere in the us.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center h-1 rounded-md shadow-lg bg-neutral-600"></div>

            {/* <div className="flex flex-row w-full space-x-4">
              <div className="flex-1">
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900 ">
                  <div className="text-sm">
                    <span>$20/10ml</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <div className="text-sm">
                    <span>300 In Stock</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <div className="text-sm">
                    <span>300 In Stock</span>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex">
              <Link
                href="/cart"
                className="relative inline-flex items-center w-full p-4 text-sm font-medium text-black transition-colors bg-green-600 rounded-md shadow-lg wiggle-animation whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-green-600/90"
              >
                <div className="relative flex flex-row justify-between w-full">
                  <span className="font-bold">Buy Now</span>
                  <span className="font-bold">$20.00/10ml</span>
                </div>
              </Link>
            </div>

            {/* <div className="flex flex-row w-full space-x-4">
              <div className="flex-1">
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900 ">
                  <div className="text-sm">
                    <span>$20/10ml</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <div className="text-sm">
                    <span>300 In Stock</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="p-4 border rounded-md shadow-lg border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
                  <div className="text-sm">
                    <span>300 In Stock</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
