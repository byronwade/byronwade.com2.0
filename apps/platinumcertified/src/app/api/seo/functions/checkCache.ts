export const checkCache = async (headers) => {
	try {
		const getHeader = (name) => headers.find(([key]) => key.toLowerCase() === name.toLowerCase())?.[1];

		const cacheControlValue = getHeader("Cache-Control");
		const eTagValue = getHeader("ETag");
		const lastModifiedValue = getHeader("Last-Modified");
		const expiresValue = getHeader("Expires");
		const pragmaValue = getHeader("Pragma");
		const varyValue = getHeader("Vary");
		const ageValue = getHeader("Age");
		const clearSiteDataValue = getHeader("Clear-Site-Data");

		const cacheControlDirectives = cacheControlValue
			? cacheControlValue.split(", ").reduce((obj, directive) => {
					const [key, value] = directive.split("=");
					obj[key] = value || true;
					return obj;
			  }, {})
			: {};

		const varyHeaders = varyValue ? varyValue.split(", ") : [];

		const cacheInfo = {
			cacheControl: {
				value: cacheControlValue,
				readable: cacheControlValue ? `The cache is controlled by the following directives: ${cacheControlValue.split(", ").join(", ")}` : "No Cache-Control Header Found",
			},
			eTag: {
				value: eTagValue,
				readable: eTagValue ? `A unique identifier for the version of the content is provided.` : "No ETag Header Found",
			},
			lastModified: {
				value: lastModifiedValue,
				readable: lastModifiedValue ? `The content was last modified on ${new Date(lastModifiedValue).toLocaleString()}.` : "No Last-Modified Header Found",
			},
			expires: {
				value: expiresValue,
				readable: expiresValue ? `The content is set to expire on ${new Date(expiresValue).toLocaleString()}.` : "No Expires Header Found",
			},
			pragma: {
				value: pragmaValue,
				readable: pragmaValue ? `The Pragma header is set to: ${pragmaValue}` : "No Pragma Header Found",
			},
			vary: {
				value: varyValue,
				readable: varyValue ? `The Vary header indicates that the response may vary based on the following parameters: ${varyHeaders.join(", ")}` : "No Vary Header Found",
			},
			age: {
				value: ageValue,
				readable: ageValue ? `The content has been stored in cache for ${ageValue} seconds.` : "No Age Header Found",
			},
			clearSiteData: {
				value: clearSiteDataValue,
				readable: clearSiteDataValue ? `The Clear-Site-Data header is set to: ${clearSiteDataValue}` : "No Clear-Site-Data Header Found",
			},
			cacheControlDirectives,
			varyHeaders,
		};

		return cacheInfo;
	} catch (error) {
		return { error: error.toString() };
	}
};
