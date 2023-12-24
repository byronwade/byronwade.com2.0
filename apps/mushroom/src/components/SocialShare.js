import Link from 'next/link';
import { Twitter, Facebook } from 'react-feather';
import { IconButton } from '../utils/wrapper';

export default function SocialShareButtons({ url, message }) {
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    message
  )}&url=${encodeURIComponent(url)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;

  return (
    <>
      <Link href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
        <IconButton className="flex justify-center items-center rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
          <Twitter className="w-4 h-4 m-auto" />
        </IconButton>
      </Link>
      <Link href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
        <IconButton className="flex justify-center items-center rounded bg-[#4267B2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
          <Facebook className="w-4 h-4 m-auto" />
        </IconButton>
      </Link>
    </>
  );
}
