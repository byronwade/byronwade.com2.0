import Link from 'next/link';
import { Info } from 'react-feather';
import { Alert, Button } from '../../../utils/wrapper';

import Header from '../../../components/header';
import Footer from '../../../components/footer';
//import Comments from '../../../components/comments';
import Toolbar from '../../../components/toolbar';

import Name from '../../../components/boxes/Name';
import HealthyBox from '../../../components/boxes/Healthy';
import Editable from '../../../components/boxes/Editable';
import MushroomImages from '../../../components/MushroomImages';
import Vertical from '../../../components/boxes/Vertical';
import Description from '../../../components/boxes/Description';
import Poisonous from '../../../components/boxes/Poisonous';
import Tags from '../../../components/boxes/Tags';
import Origin from '../../../components/boxes/Origin';
import Year from '../../../components/boxes/Year';
import Seasion from '../../../components/boxes/Season';
import Classification from '../../../components/boxes/Classification';
// import LegalStatus from '../../../components/boxes/LegalStatus';
// import FlavorProfile from '../../../components/boxes/FlavorProfile';
// import MedicalEffects from '../../../components/boxes/MedicalEffects';
// import Zugz from '../../../components/boxes/Zugzology';

import GrowthInfo from './GrowthInfo';
import UserExperience from './UserExperiances';
import NutritionalValueInfo from './NutritionalValue';
import MedicinalPropertiesInfo from './MedicinalProperties';
import GrowthConditionsInfo from './GrowthConditions';
import CiteSourcesInfo from './CiteSources';
import ResearchDataInfo from './ResearchData';
import EducationalSummaryInfo from './EducationalSummary';
import AdditionalInfo from './AdditionalInfo';
import LegalStatusInfo from './LegalStatus';
import StorageInfo from './Storage';
import DosageRecommendations from './DosageRecommendations';
import PotencyInfo from './PotencyInfo';
import MicroscopicFeatures from './MicroscopicFeatures';
import PhysicalCharacteristics from './PhysicalCharacteristics';
import PoisonousInfo from './Poisonous';

async function fetchMushroomResults(slug) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/search?slug=${slug}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
}

export async function generateMetadata({ params }) {
  const slug = params.slug.toString();
  let responseData;

  try {
    responseData = await fetchMushroomResults(slug);
  } catch (error) {
    console.error('Fetch Mushroom Error:', error);
    return <NoMushroomFound />;
  }

  const mushroomData = responseData.data;
  if (!mushroomData || Object.keys(mushroomData).length === 0) {
    return <NoMushroomFound />;
  }

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
        url: `${process.env.NEXT_PUBLIC_API_URL}/`
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
    bookmarks: [`${process.env.NEXT_PUBLIC_API_URL}/${mushroomData.slug}`],
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
      url: `${process.env.NEXT_PUBLIC_API_URL}/${mushroomData.slug}`,
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
  let responseData;

  try {
    responseData = await fetchMushroomResults(slug);
  } catch (error) {
    console.error('Fetch Mushroom Error:', error);
    return <NoMushroomFound />;
  }

  const mushroomData = responseData.data;
  if (!mushroomData || Object.keys(mushroomData).length === 0) {
    return <NoMushroomFound />;
  }

  console.log('API Response:', responseData?.data);

  const {
    common_name,
    scientific_profile,
    year_discovered,
    tags,
    origin,
    description,
    id,
    classification,
    poisonous,
    growth_info,
    user_experience,
    nutritional_value,
    medicinal_properties,
    growth_conditions,
    cite_sources,
    research_data,
    educational_summary,
    additional_info,
    legal_status,
    storage,
    dosage_recommendations,
    potency_info,
    microscopic_features,
    physical_characteristics,
    edible
  } = responseData.data;

  const names = {
    common_name: common_name,
    ...scientific_profile
  };

  console.log(edible);

  const HasImages = false;
  const IsHealthy = edible;
  const IsSafeToEat = edible;
  const IsPoisonous = poisonous.is_poisonous;
  const InSeason = false;
  const CanEdit = false;

  let span = 6; //span for part of the container

  if (HasImages) {
    span = 6;
  } else {
    span = 12;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 p-2 px-4 py-10 mx-auto mt-16 text-black dark:text-white max-w-screen-2xl md:px-6">
        <Alert color="red" icon={<Info />} className="p-4 mb-10">
          <div className="pl-4">
            <h1 className="text-lg font-bold">Quick Notice</h1>
            <p className="text-sm">
              Some data may not be accurate, we are in the process of improving the data while
              Shroomageddon is still in beta, if anyone would like to contribute or suggest a
              feature please email me at{' '}
              <a href="shroomdatabase@gmail.com" className="underline">
                shroomdatabase@gmail.com
              </a>
            </p>
          </div>
        </Alert>

        <Toolbar CanEdit={CanEdit} description={description} name={names} slug={slug} />

        <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
          <div className={`relative space-y-4 w-12/12 md:w-6/12`}>
            <MushroomImages CanEdit={CanEdit} isTrue={HasImages} />
          </div>

          <div className={`relative space-y-4 w-12/12 md:w-6/12`}>
            <div className="flex flex-row items-stretch w-full gap-4 md:flex-row">
              <Name name={names} width={{ sm: 12, md: 12, lg: 12 }} />
            </div>

            <div className="flex items-stretch w-full gap-4">
              <HealthyBox isTrue={IsHealthy} width={{ sm: 6, md: 6, lg: 6 }} />
              <Editable isTrue={IsSafeToEat} width={{ sm: 6, md: 6, lg: 6 }} />
            </div>
            <Alert className="p-4 text-xs">
              Please keep in mind that this data may be inaccurate. Do Not eat a mushroom without
              knowing what it is and if it is safe to eat. If you are unsure please consult a
              professional.
            </Alert>

            <div className="flex items-stretch w-full gap-4">
              <Vertical data={id} width={{ sm: 1, md: 1, lg: 1 }} />
              <Description data={description} width={{ sm: 11, md: 11, lg: 11 }} />
            </div>

            {IsPoisonous ? (
              <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
                <Poisonous isTrue={IsPoisonous} width={{ sm: 12, md: 12, lg: 12 }} />
              </div>
            ) : null}

            <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
              <Tags data={tags} width={{ sm: 12, md: 6, lg: 5 }} />
              <Origin data={origin} width={{ sm: 12, md: 6, lg: 7 }} />
            </div>

            <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
              <Year data={year_discovered} width={{ sm: 12, md: 6, lg: 4 }} />
              <Seasion isTrue={InSeason} width={{ sm: 12, md: 6, lg: 8 }} />
            </div>

            <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
              <Classification data={classification} width={{ sm: 12, md: 6, lg: 6 }} />
              {/* <LegalStatus data={legalStatus} width={{ sm: 12, md: 6, lg: 6 }} /> */}
            </div>

            {/* <div className="flex flex-col items-stretch w-full gap-4 md:flex-row">
              <Zugz width={{ sm: 12, md: 2, lg: 3 }} />
              <FlavorProfile
                data={'Mild, with a slightly earthy taste'}
                width={{ sm: 12, md: 2, lg: 3 }}
              />
              <MedicalEffects
                data={'Reported potential for mood and anxiety relief'}
                width={{ sm: 12, md: 2, lg: 3 }}
              />
            </div> */}

            {/* <div className="flex items-center h-1 bg-gray-600 rounded-md shadow-lg"></div> */}
          </div>
        </div>

        <GrowthInfo data={growth_info} />
        <UserExperience data={user_experience} />
        <NutritionalValueInfo data={nutritional_value} />
        <MedicinalPropertiesInfo data={medicinal_properties} />
        <GrowthConditionsInfo data={growth_conditions} />
        <CiteSourcesInfo data={cite_sources} />
        <ResearchDataInfo data={research_data} />
        <EducationalSummaryInfo data={educational_summary} />
        <AdditionalInfo data={additional_info} />
        <LegalStatusInfo data={legal_status} />
        <StorageInfo data={storage} />
        <DosageRecommendations data={dosage_recommendations} />
        <PotencyInfo data={potency_info} />
        <MicroscopicFeatures data={microscopic_features} />
        <PhysicalCharacteristics data={physical_characteristics} />
        <PoisonousInfo data={poisonous} />
        {/* <Comments /> */}
      </div>
      <Footer />
    </>
  );
}

function NoMushroomFound() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <Alert color="red" icon={<Info />} className="max-w-md p-4 mb-10">
          <div className="ml-2">
            <h2 className="text-lg font-bold">Mushroom Not Found</h2>
            <p>Mushroom data could not be found. Please go back and try again.</p>
          </div>
        </Alert>
        <Link href="/">
          <Button>Go Back</Button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
