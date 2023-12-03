'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Related } from '../../components/related';
import { FloatingAI } from '../../components/floatingAI';
import { ScrollingImage } from '../../components/scrollingImage';
import Header from '../../components/header';
import { ArrowUpRight } from 'react-feather';
import { ensureHttps } from '../api/seo/utils/utils';
import { analyzeBusiness } from './analyzeBusiness';
import { CornerDownLeft } from 'react-feather';

export const runtime = 'edge';

// Define your default business data
const defaultBusinessData = {
  name: 'Default Business Name',
  description: 'Default Description',
  email: 'contact@defaultemail.com',
  website: 'http://defaultwebsite.com',
  phone: '000-000-0000',
  address: '123 Default Address',
  googleMapsLink: 'http://defaultmapslink.com',
  categories: [{ title: 'Default Category 1' }, { title: 'Default Category 2' }],
  screenshot:
    'data:image/webp;base64,UklGRroNAABXRUJQVlA4TK0NAAAvr8THAI9AJm3jX+/udDbIpG38y92/FDJpG/+Cdzab/9gW3iW6QwRIwANFXQiEo7ZtG0naf+y8V+XKiJgAD0/6jF9u/SgNCnh6z7ZtSZIkSdJ9AIDQNw///3PdI0KFCRAA3kNcKyL6PwEK2rZhMIw/6T9H9H8Cgv/5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n//5n/+bKY9WcoreX5dz1lpjjHWXDyGmlGvn7xDuJXln8AeN8zGX/uXBLcfL4O9bn+r43ug5WPw0uZDbVwbXdBEm6WLhr4uWLGZrfB5fFVyCwaRNKPw50ZPD5G1sHxIjWTwi+cJfEJwdntSl8e3A5cLz2jQ+G3ogPLRN/YuhODy6zfytwMng+a/CnwnNYxEptE+EYrGSNvHXQbFYTl+/DLLFktrEHwXZYF1D/yDIBmvrysdAMVhfk/g7oDmsMcXxDTA8Fjr09x9HLPbVXn6JsN6uvPiaxZrb8tLjgHW35Y2XCUtvy9uuOyy/LW86jthC115zzWAXr/6K44id9OP91iw2M/LLLWI/KfGLrVtsqSmvtYRtde2VNhx21o/3WSVsbuKXWcT+mvImGw5bfPXXWCHscuR3WMRGm/ICGxZ7fY23VzXYbUrvrowdt+3FFbDpkV9aw2LbTXllNcLOe35fZWy+KW+rgP33/KbiCyeQyntqWBzCi19S3eAYUnlFVcJJ9Px+yjiMpr6dIs5j4FeTx4k07b3EFw5leiuxw7F045XEFgeTygtpGJzNwG+jTjidpr2LGuGApjdRwRm9+DVUcEpNfQkVHNT0Cio4qhe/fzIOq2lvn4zzmt49GSf24hdPxpk1/bWTcWzzSyfj4IZXTsbRdeN9U3B4qb5tCs5vetcUnGDPL5qKM2zHa6bhFFN7yTQ6RkB+xXTCSQ4vmGFwlh2/XdjgNJv+bmGL80zl1eJwpNOLxeNQh9dKwLG++J0ScbDteKNkHG1q75OC053fJg3nO71LujlgCG8SNjjiF79G2OGQ2/EW8Tjmpr9DIg461TdIwlnP74+C054Uw6g5Xs4aAhnrrpDrOBGdjhuiTujZE/5LulI7DGxw4L0+qIHwL8nXk+Bw5B2rgp4M/r2J/RQEHHrLeqB5/NWrHoGMY2+6EmgX/rKr+1dx8KlpgOHx113fvEEnD1TlLxF+MPLOscXhL8LXLH7T1I27cPyz6GX8btq2CAHMcscev+x4zzJEMEldN/ht03asQQijzDXCr1Pdr0FSAC9xlTDBsltsIYde3grmmDfLQxIvFraKWZatSpBFx6LWaRqoG1UgjY4FbRjMk9o2dRIHWBYztpip4U1iC4G0LGUec702yUMkzZCxjNmmLcoQSjMkrNN00DaoQSxNFzCL+RreHjZyAerilTHjtD0XJJO6cDFNCWNzImTTdNkKmPO1NxXSSV2yOmZdd2aQeIC6YPlpuZ2xEFBqYjUw77YvASJKTarCxK5tyRBSajLFmHnflA4xpSZSeWpxT9jKCahJlJ2a2RMPSaUuTx1zrzuSIKvUxSlOLmxIg7RSlyYzOdoPNuIC02VpYPZtOy4IrOmilKeXdiNBZM2QpDC9azMahNYMQTLTo71gIzUwQ4wY8+9b4SG3lqWoPUDZiQzJtSxE+QHSRgwSHTiWofgAYSMshNexCPkHcPsQIb6XCLkHMNtQIcBeguw5YZIgeAEyD4BduCDDQc8lSHEUHzwhb0GDHCcdx0aQkIWHnuDeQQ9RLrJjzkiGMBfRsQ9AG9BJmtAkxz2A2QALcaYmOP4B3PpFCDR1uUkPEJavQqTNEJv8AGn12MgULEtNe4Cyeh5S7Vho+AH64hXI9SU0t5ke3Ws/SLAQhCZM71q8C6IdZaZML61dhnAnkRnTa0vXId5ZYm47ObqX3soXqsTEyYWlixBwagLTJ1dXrkHEqcvLbadm7oVnI2MwLC95anHlAqTcsrjw1PrCFcj5JS53nJi/152NoCGIy5hYW7gLop6k5Q7Tuu51zxD2LC19WnXdOkkbqrDcYVL+XncHcacmLExzGuuWIPA0ZOXOU0r3sneIvGVZud2E7L3uVubghGXQfNq6RUi9l5W7TCfdy94g91FW7jCZ6153K3jIssJ2KobXLUL0q6jcw0yE+r3sDbJPXVTuTvNo97KzET4YFpW7TaPc6x4h/pZF5a6TyPe6VyhALyt3oxmUe93ZaABEWbm7+Tlq98IH6MAsK/ewP2b6vfAVWrDKys3hpy6+F56NGqAuK/edfyjdSx+gBw0Ly93tj9h2L32BJnTSct+ZfiHda89GFSCIy83+z13jXnwPZZjE5b67/1NXu1e/QB0Webnv7v+Mb/fyM+kDNIG575HsHzCp3xvooRANS8x93y2af2JCvbewQCU6obnve2Rv/hPyud+byKQT4MXmf3LL0V/OGjLWOh9z43sjPbRikpy9LdCLRSexUQzUVZKHZjSskAp0o9NHbJQDgjryUI9ZGRUoyKqK2GgIGpooQEVa1kMVStKrITZaAkkLBejJooMqFCV1DcRGU8CwAgrQlZf+qdCWUfuwURcoyidAYXbVU6ExDSseNioDl+IJUJpR7TSozaJ02OoN6jonQnFa1jgNqtNrHKs7kPRNhPas2qZDfdJQNlZ/wLKqSdCgXtN06NC8ZqOVHIO/rDFEBIDIGOuuEFOunaXCKhG0tRo1x8vgnxvnU65DGhK0qOFV4pIuwh+3ITcWgw49eq3QyMHgZ23ITQScIkFcHC7B4vdtKHz4ElRpWRgunjBNl9rB69ClNBaFy4XZks/j0DllAssr0gJhzibUA5egTsNycDKYOYV62DoUal6LEQnTp1BPmtMo6AvRAx6SQj1lGSrV8CpwwJNS6CdsQKn6RUiEp7WZj5fTKkgrUAyemEI7Wxl6tT0eezy2zXyuBikWww9XCI8e2qly0KzXo7HH49typDJ0a3qwQlhBk/k4DVIuqI8VsYoUx2G6oF1pPNNwWMnQT1KGfnWPVA0W86rHaJCCQXyghAW15RBdULH1afjCmtpygjJ0LI1nGRbLauvxGaRk4B6lG6ysq4fHQc3GBymExXX15GQo2voYGQvs6rHp0LTEDxGxxlc/NE7VwD2DxzIHPjEJyjY9gcdCU+Lj0qFu6/T4wlqbfFqsvjE8OXZYbluPSoLCvebGFivu+jnpULlpZmyx6IFPidU5aPNii2U3+YxEKF3Ds2KLlXftgDSoXT8ptlj8wMfD6h3kKbHD8lM+HBGat0+IHXbQtpPRoHotz+fCJgY+Fmx0D8J0LmyjKaciQPuWyXjspB9HokL90phKxF5SPhBs9A/sTBK20/Xj4KGB4zwKdjQdhgIdXGdRsae2nYRBSsjwHBptChD5HFzQwtcUOmFfbTsFGXo4T4ANtjaegQ5N3H/PYXNtPwFWFVn+tYD9TfsXoYvDjyXssO2b16CNy08VbHLaOjbqiMYPNWyzGxvnoY/d7wyzT6CybQUaOf0KW2y15z0bpJLQfsRjs03bMgedbPgnEvY7bliCVg6/ULDjbuxWg14uf6/TloHyXrFRTMR/jS123fNOeWjm669d2HfT9ylDN+e/lbD1eZc6KSf0v1Sw+Z73yEI72z/Uafdg2g5F6OfwZ9jiAKb9qdDQ9a94HMGLN4dJRRn+GxmH0LS9uaCj/Z9oOId5ZxK0dP4DbA4CPG9LhZqm8e88jqLtm8JGT8H9s4TDSGVPLmjq9I8azmPckQRd3f8JmwMBN7ajQllb/hcXjiTVzWCjrRD/QcKpTHvhoK/rf9ZwLj1vRITCNvxfmYMBO7ahQGX7/wpHk+omDNJZKAcGSFvAFkqbxomB5w0IUNvXkYEdy5ehuPORAdXFa1Dd/cgAeenY6C53aBBWzkF5p0MDx8sWoL77oYHpi5ahv+2pAZUla9Dg8dQAacEGqTC0YwPPq8UWOtzwsYHjxfLQ4uHcwPSlStDj9dyAykIVKHLD5wZIy9Sgyv3JQVikQboM5eTA8QqxhTInPjkwfYEuqHN/dEB1eSIUejk6QF6cBI1OfHaQliZDp/vDA78wFVo9Hx44XpVOao348MD0NRkGev06PaC2Imyh2fPpAcp6sINqp3F8kFaDHZT7dX4QFuOCes/nBxevhId+p3F+YMc6BGj46wDB9FUI0PE5gUB1DSKUPGUQkFcg4lsxPV/E12J4uojvRcePFvDFaMeDBXwzmv5YAV+NVB/K48MxPxE7fDrG52GLj8fwNN3g89HxozTCB6QdD1IIn5CmPUbCVySVh/D4kMxPwA6fkmF+zeBj8uLJZXxP2jEzDviiNH1e3eKbksqsMr4r05TY48vS83yKwbelHZNhj89L06ZSCF+YeR7s8ZHpeQ6cCJ+Zts+gGHxq5p9rDl+bbvxU8/jgpPQ79cJHpym/USw+PE0cf20kg69PV/jvcL7wCUqh8F/gEggfoi61f1OTw/coXTE3/n/jmqPDl6lxPoSUck4xBu8I/9///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M///M//ExMA' // path to a default image
};

export default function Page() {
  const [url, setUrl] = useState('');
  const [business, setBusiness] = useState(defaultBusinessData);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [lastSubmittedUrl, setLastSubmittedUrl] = useState('');

  console.log(business);

  const urlPattern =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // URL validation (checks if URL starts with http:// or https://)
    const isValidUrl = /^https?:\/\/.+/i.test(url);
    if (!isValidUrl) {
      console.error('Error: URL is not valid');
      return; // Exit the function if URL is not valid
    }

    // Check if the URL is the same as the last submitted URL
    if (url === lastSubmittedUrl) {
      console.error('Error: This URL has already been submitted');
      return; // Exit the function if it's a duplicate submission
    }

    setIsLoading(true);
    setBusiness(null); // Clear the business data when new loading starts

    try {
      const response = await analyzeBusiness(url);
      setBusiness(response);
      setLastSubmittedUrl(url); // Update the last submitted URL
    } catch (error) {
      console.error('Error analyzing business:', error);
      setBusiness(defaultBusinessData);
    }

    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);
    const isValid = urlPattern.test(inputUrl);
    setIsValidUrl(isValid);
    setHasError(!isValid);
  };

  return (
    <div className="main w-full max-h-[100vh] scrollbar-hide overflow-y-auto">
      <Header />
      <div className="w-full max-w-md space-y-4 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4 mx-auto pt-10">
        <form
          onSubmit={handleSubmit}
          className="flex h-fit w-full flex-row items-center rounded-xl bg-black dark:bg-white px-1 shadow-lg"
        >
          <input
            autoComplete="off"
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={handleInputChange}
            disabled={isLoading}
            className="h-10 w-full resize-none bg-transparent dark:text-black dark:placeholder:text-neutral-800 px-2 font-mono text-base text-white placeholder:text-gray-400 sm:text-sm border-0 outline-none ring-0 focus:ring-0 transition-all duration-300"
            name="prompt"
          />

          {isLoading ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                stroke="currentColor"
                strokeWidth={4}
                cx={12}
                cy={12}
                r={10}
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <button
              type="submit"
              aria-disabled={isLoading}
              className={`flex aspect-square h-8 w-8 items-center justify-center rounded-lg dark:text-black 
              ${isLoading ? 'text-black' : ''}
              ${
                isValidUrl
                  ? 'bg-green-600 text-white dark:text-white'
                  : hasError
                  ? 'bg-red-600 text-white dark:text-white'
                  : 'hover:bg-white/25 focus-visible:bg-white/25'
              }`}
            >
              <CornerDownLeft
                className="lucide lucide-corner-down-left shrink-0 -ml-px"
                width={18}
                height={18}
                strokeWidth="1.5"
              />
            </button>
          )}
        </form>
        {hasError && !isValidUrl && (
          <div className="text-sm text-red-500 mt-2 text-center">
            Please enter a valid URL starting with http:// or https://
          </div>
        )}
      </div>

      {isLoading && (
        <>
          <div className="animate-pulse">
            <div className="p-10 text-center">
              <div className="max-w-[600px] mx-auto">
                <div className="h-16 bg-gray-300 rounded-md mb-4"></div>
                <div className="h-4 bg-gray-300 rounded-md mb-4"></div>
                <div className="h-4 bg-gray-300 rounded-md mb-4"></div>
                <div className="h-4 bg-gray-300 rounded-md mb-4"></div>
                <div className="flex justify-center gap-2.5 mb-4">
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
              <div className="flex flex-row space-x-4 justify-center mb-4">
                <div className="h-[42px] w-[160px] bg-gray-300 rounded-lg"></div>
                <div className="h-[42px] w-[160px] bg-gray-300 rounded-lg"></div>
                <div className="h-[42px] w-[160px] bg-gray-300 rounded-lg"></div>
              </div>
              <div className="flex flex-wrap justify-center mt-4 mb-4">
                <div className="h-8 bg-gray-300 rounded-full w-24 mr-2 mb-2"></div>
                <div className="h-8 bg-gray-300 rounded-full w-24 mr-2 mb-2"></div>
                <div className="h-8 bg-gray-300 rounded-full w-24 mr-2 mb-2"></div>
              </div>
              <div className="mb-4">
                <div className="h-6 bg-gray-300 rounded-md w-48 mx-auto"></div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mb-4">
              <div className="w-full md:w-[80%] p-5">
                <div className="h-96 bg-gray-300 rounded-md"></div>
              </div>
            </div>
            <div className="max-w-lg mx-auto w-full px-4">
              <div className="columns-2 gap-4 pt-9 md:columns-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="break-inside-avoid flex-col gap-1 pb-4">
                    <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="h-4 bg-gray-300 rounded-md"></div>
                      <div className="h-4 bg-gray-300 rounded-md"></div>
                      <div className="h-4 bg-gray-300 rounded-md"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {business && (
        <>
          <div className="p-10 text-center">
            <div className="max-w-[600px] mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white  animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
                {business.name}
              </h1>
              <p className="text-dark-200 dark:text-gray-400 mt-4 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4">
                {business.description}
              </p>
              <div className="flex justify-center gap-2.5 mb-4 mt-2">
                <time className="opacity-60 text-xs" dateTime="2023-08-24T09:04:32.048Z">
                  Last Updated 3m ago
                </time>
                <span className="opacity-60 text-xs">·</span>
                <span className="opacity-60 text-xs">4.1K views</span>
              </div>
            </div>
            <div className="flex flex-row space-x-4 justify-center">
              {business?.email ? (
                <a target="_blank" href={`mailto:${business.email}`}>
                  <button className="h-[42px] py-2 text-sm bg-white border border-1 border-[#e3e3e3] text-black px-5 rounded-lg flex items-center gap-2 mx-auto hover:bg-light-100 transition-all duration-300">
                    Email Us
                  </button>
                </a>
              ) : (
                <Link href="/edit">
                  <button className="h-[42px] py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg">
                    Add a email
                  </button>
                </Link>
              )}
              {business.website ? (
                <Link target="_blank" href={ensureHttps(business.website)}>
                  <button className="h-[42px] py-2 text-sm bg-white border border-1 border-[#e3e3e3] text-black px-5 rounded-lg flex items-center gap-2 mx-auto hover:bg-light-100 transition-all duration-300">
                    Visit Website
                    <ArrowUpRight strokeWidth="1" />
                  </button>
                </Link>
              ) : (
                <Link href="/edit">
                  <button className="h-[42px] py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg">
                    Add a website
                  </button>
                </Link>
              )}
              {business?.phone ? (
                <a target="_blank" href={`tel:${business.phone}`}>
                  <button className="h-[42px] py-2 text-sm bg-white border border-1 border-[#e3e3e3] text-black px-5 rounded-lg flex items-center gap-2 mx-auto hover:bg-light-100 transition-all duration-300">
                    {business.phone}
                  </button>
                </a>
              ) : (
                <Link href="/edit">
                  <button className="h-[42px] py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg">
                    Add a phone number
                  </button>
                </Link>
              )}
              {business?.address ? (
                <Link target="_blank" href={business.googleMapsLink}>
                  <button className="h-[42px] py-2 text-sm bg-white border border-1 border-[#e3e3e3] text-black px-5 rounded-lg flex items-center gap-2 mx-auto hover:bg-light-100 transition-all duration-300">
                    Get Directions
                  </button>
                </Link>
              ) : (
                <Link href="/edit">
                  <button className="h-[42px] py-1.5 text-sm ml-2 border border-1 border-light-200 text-black dark:border-neutral-800 dark:text-neutral-400 px-3 rounded-lg">
                    Add a location
                  </button>
                </Link>
              )}
            </div>
            {business.categories && (
              <div className="flex flex-wrap justify-center mt-4">
                {business.categories.map((category) => (
                  <div
                    key={category.title}
                    className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full mr-2 mb-2"
                  >
                    {category.title}
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center mt-4">
              <Link href="/" className="text-sm hover:underline text-teal-600">
                Is this info incorrect? Make changes here
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-[80%] p-5 duration-1200 ease-in-out animate-in fade-in slide-in-from-bottom-4">
              <ScrollingImage src={business.screenshot} alt="Blob Image" />
            </div>
          </div>
          <div className="max-w-lg mx-auto w-full px-4">
            <div className="columns-2 gap-4 pt-9 md:columns-3">
              <div className="break-inside-avoid flex-col gap-1 pb-4">
                <h4 className="font-medium opacity-40">Type</h4>
                <ul className="grid list-none">
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/personal"
                    >
                      Personal
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/photography"
                    >
                      Photography
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/motion"
                    >
                      Motion
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="break-inside-avoid flex-col gap-1 pb-4">
                <h4 className="font-medium opacity-40">Style</h4>
                <ul className="grid list-none">
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/black-and-white"
                    >
                      Black &amp; White
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/minimal"
                    >
                      Minimal
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/clean"
                    >
                      Clean
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/transitions"
                    >
                      Transitions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/small-type"
                    >
                      Small Type
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/horizontal-scrolling"
                    >
                      Horizontal Scrolling
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="break-inside-avoid flex-col gap-1 pb-4">
                <h4 className="font-medium opacity-40">Font</h4>
                <ul className="grid list-none">
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/circular-std"
                    >
                      Circular Std
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="break-inside-avoid flex-col gap-1 pb-4">
                <h4 className="font-medium opacity-40">Database</h4>
                <ul className="grid list-none">
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/mysql"
                    >
                      MySQL
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="break-inside-avoid flex-col gap-1 pb-4">
                <h4 className="font-medium opacity-40">Platform</h4>
                <ul className="grid list-none">
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/wordpress"
                    >
                      WordPress
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/flywheel"
                    >
                      Flywheel
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="break-inside-avoid flex-col gap-1 pb-4">
                <h4 className="font-medium opacity-40">Language</h4>
                <ul className="grid list-none">
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/php"
                    >
                      PHP
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="break-inside-avoid flex-col gap-1 pb-4">
                <h4 className="font-medium opacity-40">Analytics</h4>
                <ul className="grid list-none">
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/google-analytics"
                    >
                      Google Analytics
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="break-inside-avoid flex-col gap-1 pb-4">
                <h4 className="font-medium opacity-40">CDN</h4>
                <ul className="grid list-none">
                  <li>
                    <Link
                      className="font-light hover:opacity-40 cursor-pointer transition-color duration-150 ease-smooth"
                      href="/websites/cloudflare"
                    >
                      Cloudflare
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
      <Related />
      <FloatingAI />
    </div>
  );
}
