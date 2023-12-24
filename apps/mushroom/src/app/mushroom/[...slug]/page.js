import Link from 'next/link';
import Image from 'next/image';
import { Heart, Facebook, Twitter, ArrowLeft, GitHub } from 'react-feather';
import { Button, IconButton } from '../../../utils/wrapper';

import Header from '../../../components/header';
import Comments from '../../../components/comments';

import Name from '../../../components/boxes/Name';
import HealthyBox from '../../../components/boxes/Healthy';
import Editable from '../../../components/boxes/Editable';
import Generic from '../../../components/boxes/Generic';
import MushroomImages from '../../../components/MushroomImages';
import Vertical from '../../../components/boxes/Vertical';
import Description from '../../../components/boxes/Description';
import Poisonous from '../../../components/boxes/Poisonous';
import Tags from '../../../components/boxes/Tags';
import Origin from '../../../components/boxes/Origin';
import Year from '../../../components/boxes/Year';
import Seasion from '../../../components/boxes/Season';
import Classification from '../../../components/boxes/Classification';
import LegalStatus from '../../../components/boxes/LegalStatus';
import FlavorProfile from '../../../components/boxes/FlavorProfile';
import MedicalEffects from '../../../components/boxes/MedicalEffects';
import Zugz from '../../../components/boxes/Zugzology';

const mushroom = {
  class: 'Agaricomycetes',
  genus: 'Psilocybe',
  order: 'Agaricales',
  family: 'Hymenogastraceae',
  kingdom: 'Fungi',
  species: 'Cubensis',
  division: 'Basidiomycota'
};

const legalStatus = {
  note: 'Possession, sale, and use of psychedelic mushrooms are illegal in many countries. Users are advised to consult local regulations.',
  general: 'Varies by country and region',
  specific_regulations: 'Information not available',
  legal_resources_links: 'Information not available'
};

async function fetchMushroomResults(slug) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search?slug=${slug}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const responseData = await fetchMushroomResults(slug);
  const mushroomData = responseData.data;

  // Constructing metadata using mushroomData
  const title = `Explore ${mushroomData.common_name} at Shroomageddon - Your Ultimate Mushroom Database`;
  const description = `${mushroomData.common_name}: ${mushroomData.description}`;
  const keywords = mushroomData.tags.join(', ');
  //const imageUrl = mushroomData.visual_identifiers.images[0] || 'default-image-url.jpg'; // Replace with your default image URL

  // Metadata object
  return {
    title: title,
    description: description,
    generator: 'Next.js',
    applicationName: 'Shroomageddon - Mushroom Database',
    keywords: keywords,
    authors: [
      {
        name: 'Byron Wade',
        url: 'https://www.shroomageddon.com/'
      }
    ],
    creator: 'Byron Wade',
    publisher: 'Byron Wade',
    alternates: {},
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    category: 'Mycology',
    bookmarks: [`https://www.shroomageddon.com/${mushroomData.slug}`],
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: '@Shroomageddon', // Replace with actual Twitter handle
      images: {
        //url: imageUrl,
        alt: mushroomData.common_name
      }
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://www.shroomageddon.com/${mushroomData.slug}`,
      siteName: 'Shroomageddon - Mushroom Database',
      images: [
        {
          //url: imageUrl,
          width: 800, // Adjust as per your image dimensions
          height: 600, // Adjust as per your image dimensions
          alt: mushroomData.common_name
        }
        // ...additional images if available
      ],
      locale: 'en-US',
      type: 'website'
    }
  };
}

export default async function Mushroom({ params }) {
  const slug = params.slug.toString();
  console.log(slug);
  const responseData = await fetchMushroomResults(slug);
  console.log('API Response:', responseData.data);

  const HasImages = false;
  const IsHealthy = true;
  const IsSafeToEat = true;
  const IsPoisonous = true;
  const InSeason = false;

  let span = 6; //span for part of the container

  if (HasImages) {
    span = 6;
  } else {
    span = 12;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 p-2 px-4 py-10 mx-auto mt-16 text-black max-w-screen-2xl md:px-6">
        <div className="p-4 mb-10 bg-red-800 rounded-md border-red-950">
          <h1 className="text-lg font-bold text-black">Quick Notice</h1>
          <p className="text-sm text-black">
            Some data may not be accurate, we are in the process of improving the data while
            Shroomageddon is still in beta, if anyone would like to contribute or suggest a feature
            please email me at{' '}
            <a href="mailto:bw@wadesinc.io" className="underline">
              bw@wadesinc.io
            </a>
          </p>
        </div>

        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <IconButton>
              <ArrowLeft />
            </IconButton>
          </Link>
          <div className="flex gap-4">
            <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
              <Heart />
            </IconButton>
            <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
              <Twitter />
            </IconButton>
            <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
              <Facebook />
            </IconButton>
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
              <GitHub />
            </IconButton>
            <Link href="/">
              <Button>Edit</Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
          <div className={`relative space-y-4 w-12/12 md:w-6/12`}>
            <MushroomImages isTrue={HasImages} />
          </div>

          <div className={`relative space-y-4 w-12/12 md:w-6/12`}>
            <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
              <Name name={'Full Moon Party'} width={{ sm: 12, md: 12, lg: 12 }} />
            </div>

            <div className="flex items-stretch w-full gap-4">
              <HealthyBox isTrue={IsHealthy} width={{ sm: 6, md: 6, lg: 6 }} />
              <Editable isTrue={IsSafeToEat} width={{ sm: 6, md: 6, lg: 6 }} />
            </div>

            <div className="flex items-stretch w-full gap-4">
              <Vertical width={{ sm: 1, md: 1, lg: 1 }} />
              <Description width={{ sm: 11, md: 11, lg: 11 }} />
            </div>

            {IsPoisonous ? (
              <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
                <Poisonous isTrue={IsPoisonous} width={{ sm: 12, md: 12, lg: 12 }} />
              </div>
            ) : null}

            <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
              <Tags width={{ sm: 12, md: 6, lg: 5 }} />
              <Origin width={{ sm: 12, md: 6, lg: 7 }} />
            </div>

            <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
              <Year width={{ sm: 12, md: 6, lg: 4 }} />
              <Seasion isTrue={InSeason} width={{ sm: 12, md: 6, lg: 8 }} />
            </div>

            <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
              <Classification data={mushroom} width={{ sm: 12, md: 6, lg: 6 }} />
              <LegalStatus data={legalStatus} width={{ sm: 12, md: 6, lg: 6 }} />
            </div>

            <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
              <Zugz width={{ sm: 12, md: 2, lg: 3 }} />
              <FlavorProfile
                data={'Mild, with a slightly earthy taste'}
                width={{ sm: 12, md: 2, lg: 3 }}
              />
              <MedicalEffects
                data={'Reported potential for mood and anxiety relief'}
                width={{ sm: 12, md: 2, lg: 3 }}
              />
            </div>

            {/* <div className="flex items-center h-1 bg-gray-600 rounded-md shadow-lg"></div> */}
          </div>
        </div>

        <div className="my-10">
          <h1 className="my-4 text-5xl font-bold">Information about</h1>
          <div className="flex flex-col items-stretch w-full gap-4">
            <div className="flex items-stretch w-full gap-4">
              <Generic width={{ sm: 5, md: 5, lg: 5 }} />
              <Generic width={{ sm: 4, md: 4, lg: 4 }} />
              <Generic width={{ sm: 3, md: 3, lg: 3 }} />
            </div>
            <div className="flex items-stretch w-full gap-4">
              <Generic width={{ sm: 4, md: 4, lg: 4 }} />
              <Generic width={{ sm: 4, md: 4, lg: 4 }} />
              <Generic width={{ sm: 4, md: 4, lg: 4 }} />
            </div>
            <div className="flex items-stretch w-full gap-4">
              <Generic width={{ sm: 3, md: 3, lg: 3 }} />
              <Generic width={{ sm: 6, md: 6, lg: 6 }} />
              <Generic width={{ sm: 3, md: 3, lg: 3 }} />
            </div>
          </div>
        </div>

        <div className="relative my-10 overflow-hidden">
          <Image
            src="/boxes/Growing.png"
            height={100}
            width={100}
            alt="alt"
            className="absolute top-0 right-0 -z-10"
          />
          <h1 className="my-4 text-5xl font-bold">Growth Information</h1>
          <div className="flex flex-col items-stretch w-full gap-4">
            <div className="flex items-stretch w-full gap-4">
              <Generic width={{ sm: 5, md: 5, lg: 5 }} />
              <Generic width={{ sm: 4, md: 4, lg: 4 }} />
              <Generic width={{ sm: 3, md: 3, lg: 3 }} />
            </div>
            <div className="flex items-stretch w-full gap-4">
              <Generic width={{ sm: 4, md: 4, lg: 4 }} />
              <Generic width={{ sm: 4, md: 4, lg: 4 }} />
              <Generic width={{ sm: 4, md: 4, lg: 4 }} />
            </div>
            <div className="flex items-stretch w-full gap-4">
              <Generic width={{ sm: 3, md: 3, lg: 3 }} />
              <Generic width={{ sm: 6, md: 6, lg: 6 }} />
              <Generic width={{ sm: 3, md: 3, lg: 3 }} />
            </div>
          </div>
        </div>

        <div className="my-10">
          <h1 className="my-4 text-5xl font-bold">Users Thoughts</h1>
          <Comments />
        </div>
      </div>
    </>
  );
}
