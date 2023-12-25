import { Button } from '../utils/wrapper';

export default function Comments() {
  const comments = [
    {
      twitterHandle: '@thatguy_tex',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @thatguy_tex',
      name: 'thatguy_tex',
      description:
        "Working with @supabase has been one of the best dev experiences I've had lately. Incredibly easy to set up, great documentation, and so many fewer hoops to jump through than the competition. I definitely plan to use it on any and all future projects."
    },
    {
      twitterHandle: '@IxoyeDesign',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @IxoyeDesign',
      name: 'IxoyeDesign',
      description:
        '@supabase is just 🤯 Now I see why a lot of people love using it as a backend for their applications. I am really impressed with how easy it is to set up an Auth and then just code it together for the frontend. @IngoKpp now I see your joy with Supabase #coding #fullstackwebdev'
    },
    {
      twitterHandle: '@varlenneto',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @varlenneto',
      name: 'varlenneto',
      description:
        "I've been using @supabase for two personal projects and it has been amazing being able to use the power of Postgres and don't have to worry about the backend"
    },
    {
      twitterHandle: '@justinjunodev',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @justinjunodev',
      name: 'justinjunodev',
      description:
        "Y'all @supabase + @nextjs is amazing! 🙌 Barely an hour into a proof-of-concept and already have most of the functionality in place. 🤯🤯🤯"
    },
    {
      twitterHandle: '@BraydonCoyer',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @BraydonCoyer',
      name: 'BraydonCoyer',
      description:
        'And thanks to @supabase, I was able to go from idea to launched feature in a matter of hours. Absolutely amazing!'
    },
    {
      twitterHandle: '@damlakoksal',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @damlakoksal',
      name: 'damlakoksal',
      description:
        'Contributing to open-source projects and seeing merged PRs gives enormous happiness! Special thanks to @supabase, for giving this opportunity by staying open-source and being junior-friendly✌🏼'
    },
    {
      twitterHandle: '@KenTheRogers',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @KenTheRogers',
      name: 'KenTheRogers',
      description:
        "Holy crap. @supabase is absolutely incredible. Most elegant backend as a service I've ever used. This is a dream."
    },
    {
      twitterHandle: '@kevcodez',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @kevcodez',
      name: 'kevcodez',
      description:
        "Over the course of a few weeks, we migrated 125.000 users (email/pw, Gmail, Facebook, Apple logins) from Auth0 to @supabase and have now completed the migration. I'm just glad the migration is done 😅 Went well, besides a few edge cases (duplicate emails/linked accounts)"
    },
    {
      twitterHandle: '@PaoloRicciuti',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @PaoloRicciuti',
      name: 'PaoloRicciuti',
      description:
        "Using @supabase I'm really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don't miss anything. The whole experience feel very robust and secure."
    },
    {
      twitterHandle: '@saxxone',
      imageSrc:
        'https://supabase.com/_next/image?url=%2Fimages%2Ftwitter-profiles%2FqhvO9V6x_400x400.jpg&w=2048&q=75',
      imageAlt: 'Twitter profile image of @saxxone',
      name: 'saxxone',
      description:
        '@supabase is lit. It took me less than 10 minutes to setup, the DX is just amazing.'
    }
  ];

  return (
    <div className="my-10">
      <h1 className="my-4 text-2xl md:text-5xl font-bold">Users Thoughts</h1>
      <div className="relative gap-4 overflow-hidden transition-all columns-1 sm:columns-2 lg:columns-3">
        {comments.map((comment, index) => (
          <div key={index} className="z-0 mb-4 text-gray-300 break-inside-avoid-column">
            <a target="_blank" href="https://twitter.com/IxoyeDesign/status/1497473731777728512">
              <div className="p-6 text-black bg-gray-300 border border-gray-400 rounded-md shadow-lg dark:text-gray-300 dark:border-gray-800 dark:bg-gray-900">
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 overflow-hidden border rounded-full border-control">
                      <img
                        alt={comment.imageAlt}
                        loading="lazy"
                        width={64}
                        height={64}
                        decoding="async"
                        data-nimg={1}
                        style={{
                          color: 'transparent',
                          width: '100%',
                          height: 'auto'
                        }}
                        sizes="100vw"
                        src={comment.imageSrc}
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground">{comment.twitterHandle}</p>
                    <div className="absolute flex items-center justify-center w-5 h-5 bg-black rounded-full -left-1 -top-1">
                      <svg
                        className="h-[12px] w-[12px]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-base text-foreground-muted">{comment.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="justify-center w-full py-10 text-center black">
        <Button>Show More</Button>
      </div>
    </div>
  );
}
