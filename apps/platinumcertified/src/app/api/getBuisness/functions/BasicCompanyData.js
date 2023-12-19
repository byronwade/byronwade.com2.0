import { fetchPageData } from '../../seo/route';

export async function getBaiscCompanyData(url) {
  const response = await fetchPageData(url);
  return response;
}
