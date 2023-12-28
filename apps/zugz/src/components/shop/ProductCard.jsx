import Link from 'next/link';
import Image from 'next/image';

export function ProductCard({ product }) {
  const { id, imageAlt, imageSrc, name, color, price, href } = product;
  return (
    <div key={id}>
      <div className="relative">
        <div className="relative w-full overflow-hidden rounded-md h-72">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full transition duration-200 ease-in bg-gray-300 rounded-md rounded-s-md group-hover:rounded-b-none"
          />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-white">{name}</h3>
          <p className="mt-1 text-sm text-white">{color}</p>
        </div>
        <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-md h-72">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black"
          />
          <p className="relative text-lg font-semibold text-white">{price}</p>
        </div>
      </div>
      <div className="mt-6">
        <a
          href={href}
          className="relative flex items-center justify-center px-8 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200"
        >
          Add to bag<span className="sr-only">, {name}</span>
        </a>
      </div>
    </div>
  );
}

export function ProductCardPriceButton({ product }) {
  const { id, price, href } = product;
  return (
    <div key={id} className="transition duration-200 ease-in-out transform hover:-translate-y-1">
      <div className="mt-4 text-lg font-semibold text-white">{price}</div>
      <div className="mt-6">
        <a
          href={href}
          className="relative flex items-center justify-center px-8 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200"
        >
          Add to bag
        </a>
      </div>
    </div>
  );
}

export function ProductCardImageOnly({ product }) {
  const { id, imageAlt, imageSrc } = product;
  return (
    <div
      key={id}
      className="relative w-full overflow-hidden transition duration-200 ease-in-out transform rounded-md h-72 hover:-translate-y-1"
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-cover w-full h-full transition duration-200 ease-in bg-gray-300 rounded-md rounded-s-md group-hover:rounded-b-none"
      />
    </div>
  );
}

export function ProductCardImagePrice({ product }) {
  const { id, imageAlt, imageSrc, price } = product;
  return (
    <div key={id}>
      <div className="relative w-full overflow-hidden transition duration-200 ease-in-out transform rounded-md h-72 hover:-translate-y-1">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full h-full transition duration-200 ease-in bg-gray-300 rounded-md rounded-s-md group-hover:rounded-b-none"
        />
      </div>
      <div className="mt-4 text-lg font-semibold text-white">{price}</div>
    </div>
  );
}

export function ProductCardMinimal({ product }) {
  const { id, imageAlt, imageSrc, price } = product;
  return (
    <Link href="/" key={id}>
      <div className="relative transition duration-200 ease-in-out transform border rounded-md border-neutral-800 hover:-translate-y-1">
        <div className="relative w-full overflow-hidden rounded-md h-72">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full transition duration-200 ease-in bg-gray-300 rounded-md rounded-s-md group-hover:rounded-b-none"
          />
        </div>
        <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-md h-72">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black"
          />
          <p className="relative text-lg font-semibold text-white">{price}</p>
        </div>
      </div>
    </Link>
  );
}

export function ProductSquare({ product }) {
  const { id, imageAlt, imageSrc, price } = product;
  return (
    <Link href="/" key={id}>
      <div className="relative transition duration-200 ease-in-out transform border rounded-md border-neutral-800 hover:-translate-y-1">
        <div className="relative w-full overflow-hidden rounded-md aspect-square">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full transition duration-200 ease-in bg-gray-300 rounded-md rounded-s-md group-hover:rounded-b-none "
          />
        </div>
        <div className="absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-md aspect-square">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black"
          />
          <p className="relative text-lg font-semibold text-white">{price}</p>
        </div>
      </div>
    </Link>
  );
}

export function ProductImageLeft({ product }) {
  const { id, imageAlt, imageSrc, price } = product;
  return (
    <Link href="/" key={id}>
      <div
        className="box-border flex items-center overflow-hidden transition duration-200 ease-in-out transform bg-black border rounded-md cursor-pointer group border-neutral-800 hover:-translate-y-1"
        role="button"
        title="Armani Veni Vidi Vici"
      >
        <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full transition duration-200 ease-in bg-gray-100 rounded-md rounded-s-md group-hover:rounded-b-none"
          />
          <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
        </div>
        <div className="w-full p-2 px-4 overflow-hidden lg:px-5 2xl:px-4">
          <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
            Armani Veni Vidi Vici
          </h2>
          <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
            Fendi began life in 1925 as a fur and leather speciality store in Rome.
          </p>
          <div className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading">
            <span className="inline-block false">{price}</span>
            <del className="font-normal text-red-500 sm:text-base">{price}</del>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function ProductStrain({ strain }) {
  const { imageAlt, imageSrc, name, description, price } = strain;
  return (
    <div className="relative flex flex-col p-3 mx-auto space-y-3 bg-black border rounded-md shadow-md md:flex-row md:space-x-5 md:space-y-0 border-neutral-800">
      <div className="grid w-full bg-white rounded-md md:w-1/3 place-items-center">
        <img
          className="w-full h-full mt-8 rounded-md md:mt-0"
          src={imageSrc}
          alt={imageAlt}
          width={570}
          height={602}
        />
      </div>
      <div className="flex flex-col w-full p-3 space-y-2 bg-black md:w-2/3">
        <div className="flex justify-between item-center">
          <p className="hidden font-medium text-gray-300 md:block">Vacations</p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="ml-1 text-sm font-bold text-gray-300">
              4.96
              <span className="font-normal text-gray-300">(76 reviews)</span>
            </p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-pink-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-1 text-sm font-bold text-gray-300">1000+</p>
          </div>
          <div className="hidden px-3 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded-full md:block">
            Superhost
          </div>
        </div>
        <h3 className="text-xl font-black text-white md:text-3xl">{name}</h3>
        <p className="text-base text-gray-100 md:text-lg">{description}</p>
        <p className="text-xl font-black text-white">{price}</p>
      </div>
    </div>
  );
}

export function ProductStrain2({ strain }) {
  const { imageAlt, imageSrc, name, description, price } = strain;
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm px-3 py-6 sm:w-full lg:w-full">
          <div className="overflow-hidden bg-white rounded-md shadow-xl">
            <img
              className="w-full h-full mt-8 md:mt-0"
              src={imageSrc}
              alt={imageAlt}
              width={570}
              height={602}
            />
            <div className="p-4">
              <p className="text-sm font-bold tracking-wide text-gray-700 uppercase">
                Detached house • 5y old
              </p>
              <p className="text-3xl text-gray-900">$750,000</p>
              <p className="text-gray-700">742 Evergreen Terrace</p>
            </div>
            <div className="flex p-4 text-gray-700 border-t border-gray-300">
              <div className="inline-flex items-center flex-1">
                <svg
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z" />
                </svg>
                <p>
                  <span className="font-bold text-gray-900">3</span> Bedrooms
                </p>
              </div>
              <div className="inline-flex items-center flex-1">
                <svg
                  className="w-6 h-6 mr-3 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                  />
                </svg>
                <p>
                  <span className="font-bold text-gray-900">2</span> Bathrooms
                </p>
              </div>
            </div>
            <div className="px-4 pt-3 pb-4 bg-gray-100 border-t border-gray-300">
              <div className="text-xs font-bold tracking-wide text-gray-600 uppercase">Realtor</div>
              <div className="flex items-center pt-2">
                <div
                  className="w-10 h-10 mr-3 bg-center bg-cover rounded-full"
                  style={{
                    backgroundImage: 'url(https://via.placeholder.com/50x50)'
                  }}
                ></div>
                <div>
                  <p className="font-bold text-gray-900">Catherine Heffner</p>
                  <p className="text-sm text-gray-700">(111) 111-1111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductStrain3({ strain }) {
  const { imageAlt, imageSrc, name, description, price } = strain;
  return (
    <div className="flex w-full">
      <div className="w-full mx-auto">
        <div className="p-2 duration-150 bg-black border rounded-md shadow cursor-pointer hover:scale-105 hover:shadow-md border-neutral-800">
          <img
            className="object-cover object-center w-full rounded-md"
            src={imageSrc}
            alt="product"
          />
          <div>
            <div className="flex items-center justify-between px-4 my-6">
              <p className="font-bold text-white">{name}</p>
              <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                {price}
              </p>
            </div>
            <div className="flex items-center justify-between px-4 my-4">
              <p className="text-sm font-semibold text-gray-300">First option</p>
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                23
              </p>
            </div>
            <div className="flex items-center justify-between px-4 my-4">
              <p className="text-sm font-semibold text-gray-300">Second option</p>
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                7
              </p>
            </div>
            <div className="flex items-center justify-between px-4 my-4">
              <p className="text-sm font-semibold text-gray-300">Third option</p>
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                1
              </p>
            </div>
            <div className="flex items-center justify-between px-4 my-4">
              <p className="text-sm font-semibold text-gray-300">Fourth option</p>
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                23
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductStrain4({ strain }) {
  const { imageAlt, imageSrc, name, description, price } = strain;
  return (
    <>
      <div className="relative flex flex-col w-full text-gray-200 bg-black border rounded-md shadow-md bg-clip-border border-neutral-800">
        <div className="relative h-full mx-4 mt-4 overflow-hidden text-gray-200 bg-white rounded-md bg-clip-border">
          <img src={imageSrc} className="object-cover w-full h-full" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-white">
              {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-200">
              {price}
            </p>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-200 opacity-75">
            With plenty of talk and listen time, voice-activated Siri access, and an available
            wireless charging case.
          </p>
        </div>
        <div className="p-4 pt-0">
          <button
            className="block w-full select-none rounded-md bg-zugz-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-zugz-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export function ProductStrain5({ strain }) {
  const { imageAlt, imageSrc, name, description, price } = strain;
  return (
    <div
      className="w-full h-64 m-auto mt-4 bg-gray-100 rounded-md"
      style={{
        backgroundImage: `url("${imageSrc}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="flex flex-row items-end w-full h-full">
        <div className="flex flex-col w-full px-3 pt-10 pb-3 text-gray-200 bg-gradient-to-t from-black">
          <h3 className="text-base font-bold leading-5 uppercase">{name}</h3>
          <div className="inline-flex items-center">
            <span className="my-1 mr-1 text-xs capitalize font-base">Agnezmo Tuginem</span>
            <svg
              className="w-4 text-blue-600 stroke-current stroke-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="inline-flex items-center w-max">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="ml-1 text-xs antialiased">0</span>
              </div>
              <div className="inline-flex items-center ml-4 w-max">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="ml-1 text-xs antialiased">1</span>
              </div>
              <div className="inline-flex items-center ml-4 w-max">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-1 text-xs antialiased">1 Hours ago</span>
              </div>
            </div>
            <div className="w-max">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductStrain6({ strain }) {
  const {
    imageAlt,
    imageSrc,
    name,
    description,
    price,
    potency,
    harvestYield,
    cultivationTime,
    growthDifficulty,
    flavorProfile,
    medicalEffects
  } = strain;
  return (
    <Link href="/strains/strain" className="flex flex-col h-full">
      <div className="relative flex flex-col justify-end w-full h-64 px-4 mx-auto border rounded-t-md isolate border-neutral-800">
        <Image
          width={400}
          height={400}
          src={imageSrc}
          alt={imageAlt}
          className="absolute top-0 bottom-0 left-0 object-cover w-full h-full rounded-md"
        />
        <div className="absolute inset-0 left-0 rounded-md bg-gradient-to-t from-black via-black/40 -bottom-1"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold leading-none text-white">{name}</h3>
      </div>
      <div className="flex flex-col flex-1 h-full p-4 bg-black rounded-b-md">
        <div className="z-10 mb-4 text-sm text-gray-300 leading-2">
          This is a <span className="font-black text-zugz-950">{potency}</span> potancy strain that
          is for <span className="font-black text-zugz-950">{growthDifficulty}</span> growers and
          has a <span className="font-black text-zugz-950">{harvestYield}</span> yeild that can take{' '}
          <span className="font-black text-zugz-950">{cultivationTime}</span> and its flavor profile
          is <span className="font-black text-zugz-950">{flavorProfile}</span>.
        </div>
        <div className="flex flex-row space-x-2">
          <button className="flex items-center justify-center w-full py-2 text-sm font-semibold text-black bg-white rounded-md shadow-lg">
            Read More
          </button>
          <button className="flex items-center justify-center w-full py-2 text-sm font-semibold text-black bg-white rounded-md shadow-lg">
            Buy
          </button>
        </div>
      </div>
    </Link>
  );
}
