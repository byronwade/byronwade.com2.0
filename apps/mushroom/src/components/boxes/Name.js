import Image from 'next/image';

export default function Name({ name, width }) {
  console.log(name);

  const { nicknames, synonyms } = name;
  const isValidList = (list) =>
    (Array.isArray(list) && list[0] !== 'Information not available') || list[0] !== 'NULL';

  // Function to get available names in order
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
    <div className={`w-${width.sm}/12 md:w-${width.md}/12 lg:w-${width.lg}/12`}>
      <div className="relative h-full p-4 space-y-2 overflow-hidden bg-gray-900 border border-gray-800 rounded-md shadow-lg">
        {availableNames.map((item, index) => (
          <div className="space-y-1" key={index}>
            <h2 className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-md bg-gray-700 text-gray-300 inline-block">
              {item.label}
            </h2>
            {index === 0 ? (
              <p className="text-4xl font-bold text-white">{item.value}</p>
            ) : (
              <span className="text-xs text-white">{item.value}</span>
            )}
          </div>
        ))}

        {/* {isValidList(nicknames) && (
          <div>
            <h3>Nicknames</h3>
            <ul>
              {nicknames.map((nickname, index) => (
                <li key={index}>{nickname}</li>
              ))}
            </ul>
          </div>
        )}

        {isValidList(synonyms) && (
          <div>
            <h3>Synonyms</h3>
            <ul>
              {synonyms.map((synonym, index) => (
                <li key={index}>{synonym}</li>
              ))}
            </ul>
          </div>
        )} */}
        <Image
          src="/images/strains/full-moon-party_noBackground.png"
          height={300}
          width={300}
          alt="alt"
          className="absolute object-contain opacity-30 -top-28 -right-28"
        />
      </div>
    </div>
  );
}
