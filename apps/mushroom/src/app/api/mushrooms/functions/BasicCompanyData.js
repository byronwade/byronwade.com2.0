import { fetchPageData } from '../../seo/functions/fetchPageData';

export async function getBaiscCompanyData(url) {
  const response = await fetchPageData(url);
  return response;
}
