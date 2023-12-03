import { request } from 'https';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkSSLCertificate = (domain: string): Promise<Record<string, any>> => {
  return new Promise((resolve, reject) => {
    const options = {
      host: domain,
      port: 443,
      method: 'GET',
      agent: false,
      rejectUnauthorized: false // Ignore certificate validation errors
    };

    const req = request(options, (res) => {
      res.on('data', () => {
        // Do nothing with the response body, just need to trigger the 'end' event
      });

      res.on('end', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const certificate = (res.socket as any).getPeerCertificate(); // Cast to 'any' to bypass type checking
        if (certificate) {
          const certificateInfo = {
            https: true, // Indicates that the website uses HTTPS
            validFrom: certificate.valid_from,
            validTo: certificate.valid_to,
            keySize: certificate.bits
          };
          resolve(certificateInfo);
        } else {
          reject(new Error('Unable to retrieve certificate'));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });
};
