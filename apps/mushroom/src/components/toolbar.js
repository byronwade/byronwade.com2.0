import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Heart, Twitter, Facebook, GitHub, ArrowLeft } from 'react-feather';
import { IconButton, Button } from '../utils/wrapper';
import SocialShareButtons from './SocialShare';

const QRCodeWithLogo = dynamic(() => import('../components/boxes/QR'), { ssr: false });

export default function Toolbar({ CanEdit, description, name, slug }) {
  const getAvailableNames = () => {
    let names = [];

    if (name.common_name && name.common_name !== 'NULL') {
      names.push({ label: 'Common Name', value: name.common_name });
    }
    if (name.strain_name && name.strain_name !== 'NULL') {
      names.push({ label: 'Strain Name', value: name.strain_name });
    }
    if (name.scientific_name && name.scientific_name !== 'NULL') {
      names.push({ label: 'Scientific Name', value: name.scientific_name });
    }

    return names.length > 0 ? names : [{ label: 'Name', value: 'Not Available' }];
  };

  const availableNames = getAvailableNames();
  return (
    <div className="flex flex-row items-center justify-between">
      <Link href="/">
        <IconButton className="flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 m-auto" />
        </IconButton>
      </Link>
      <div className="flex gap-4">
        {/* <IconButton className="flex justify-center items-center rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
          <Heart className="w-4 h-4 m-auto" />
        </IconButton> */}
        <SocialShareButtons
          url={`https://www.shroomageddon.com/mushroom/${slug}`}
          message={`@Shroomageddon: ${availableNames[0].value} - ${description}`}
        />
        <QRCodeWithLogo
          url={`https://www.shroomageddon.com/${slug}`}
          logo="/shroomageddon_black.png"
        />
        {CanEdit ? (
          <Link href="/">
            <Button>Edit</Button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
