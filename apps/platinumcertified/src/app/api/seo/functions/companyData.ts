export const extractCompanyDataFromHtml = async (
  htmlContent: string
): Promise<{
  phones: string[];
  emails: string[];
  addresses: string[];
}> => {
  return new Promise((resolve) => {
    // Regular expressions for phone numbers, emails, and addresses
    const phoneRegex = /\b(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const addressRegex =
      /\b(\d{1,6}\s(?:[A-Za-z0-9#]+\s){0,5}(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?,?\s(?:[A-Za-z0-9#]+\s){0,3},?\s?[A-Za-z]{2,}\.?\s?\d{5}-?\d{0,4})\b/g;

    // Extract data using regex
    const phones: string[] = [];
    const emails: string[] = [];
    const addresses: string[] = [];

    let match;
    while ((match = phoneRegex.exec(htmlContent)) !== null) {
      phones.push(match[0]);
    }

    while ((match = emailRegex.exec(htmlContent)) !== null) {
      emails.push(match[0]);
    }

    while ((match = addressRegex.exec(htmlContent)) !== null) {
      addresses.push(match[0]);
    }

    // If you want to limit the number of items in each array, you could do it here.
    // For example, to limit to 10 items:
    const maxItems = 10;
    const limitedPhones = phones.slice(0, maxItems);
    const limitedEmails = emails.slice(0, maxItems);
    const limitedAddresses = addresses.slice(0, maxItems);

    resolve({ phones: limitedPhones, emails: limitedEmails, addresses: limitedAddresses });
  });
};
