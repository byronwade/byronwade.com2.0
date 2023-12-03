export const toAbsoluteUrl = (base, path) => {
  if (!base || !path) return null;
  try {
    const baseUrl = new URL(base);
    const url = new URL(path, baseUrl);
    return url.toString();
  } catch (e) {
    console.error(e);
    return null;
  }
};

export async function fetchWithErrorHandler(url, options, fallbackValue = null, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  options = { ...options, signal: controller.signal };

  try {
    const response = await fetch(url, options);
    clearTimeout(id);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    clearTimeout(id);
    console.error(error);
    //Sentry.captureException(error);
    // Notify designated email or communication channel
    // ...
    return fallbackValue; // return a fallback value to prevent crashes in the calling function
  }
}

export function ensureHttps(url) {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
}

export async function readJSONFromStream(readableStream) {
  // Check if the stream is not locked
  if (readableStream.locked) {
    throw new Error('Stream is locked');
  }

  // Read the stream into a buffer
  const reader = readableStream.getReader();
  const chunks = [];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  // Convert the chunks to a single Uint8Array
  const uint8Array = new Uint8Array(chunks.reduce((acc, val) => acc.concat(Array.from(val)), []));

  // Convert the Uint8Array to a string
  const jsonString = new TextDecoder('utf-8').decode(uint8Array);

  // Parse the JSON string
  return JSON.parse(jsonString);
}

export function blobToDataURI(blob) {
  if (!blob || !Array.isArray(blob.screenshotBuffer.data)) {
    console.error('Invalid or undefined blob data');
    return ''; // Return an empty string or a default data URI
  }

  // Reconstruct the buffer from the response data
  const buffer = Buffer.from(blob.screenshotBuffer.data, 'base64');

  // Convert the buffer to a base64 string
  const base64Data = buffer.toString('base64');

  // Construct the Data URI string
  // Replace 'image/png' with the correct MIME type of your image if it's different
  const dataUri = `data:image/png;base64,${base64Data}`;
  return dataUri;
}

export function createGoogleMapsLink(address) {
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}
