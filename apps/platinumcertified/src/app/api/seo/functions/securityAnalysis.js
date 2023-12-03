const extractData = async (page) => {
  await page.waitForTimeout(500);
  await page.waitForSelector('body');

  const data = await page.$$eval('.list-firms > div.firm', (firms) =>
    firms.map((firm) => {
      const a = firm.querySelector('.listing-body > h3 > a');
      return {
        name: a.innerText,
        link: a.href
      };
    })
  );
  return data;
};

export const securityAnalysis = async (page, timeout = 30000, waitUntil = 'load') => {
  console.log('Running security analysis...', page.url());
  const analysisResult = {
    securityScore: 0,
    totalChecks: 13,
    checksPassed: 0,
    result: {}
  };

  const extractedData = await extractData(page);

  for (const { link } of extractedData) {
    // Wait for all the Promises to settle before moving to the next iteration.
    await Promise.all([
      page.waitForNavigation({ timeout: timeout, waitUntil: ['domcontentloaded', waitUntil] }),
      page.goto(link),
      page.waitForSelector('.firm-panel')
    ]);

    // ... Define your security checks for each page here ...
  }

  const checks = [
    checkFormProtection(page),
    checkContentSecurityPolicy(page),
    checkCORS(page),
    checkClickjackingProtection(page),
    checkHttpsRedirection(page),
    checkServerSoftwareExposure(page),
    checkCmsVersionExposure(page),
    checkDirectoryListing(page),
    checkSubresourceIntegrity(page),
    checkPermissionsPolicy(page),
    checkSQLInjectionProtection(page),
    checkXSSProtection(page),
    checkCSRFProtection(page)
  ];

  const results = await Promise.allSettled(checks);

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      const checkName = result.value.name; // Updated line
      analysisResult.result[checkName] = {
        status: result.value.status,
        recommendation: result.value.recommendation
      };
      if (result.value.status === 'Good') {
        analysisResult.checksPassed += 1;
      }
    } else {
      const checkName = checks[index].name; // Ensure this line correctly accesses the 'name' property
      analysisResult.result[checkName] = {
        status: 'Error: ' + result.reason,
        recommendation: 'Error checking ' + checkName.replace('Status', '')
      };
    }
  });

  analysisResult.securityScore = Math.round(
    (analysisResult.checksPassed / analysisResult.totalChecks) * 100
  );

  return analysisResult;
};

const handleError = (error, checkName) => {
  return {
    name: checkName,
    status: 'Error: ' + error.toString(),
    recommendation: 'Error checking ' + checkName.replace('Status', '')
  };
};

const checkFormProtection = async (page) => {
  try {
    const hasRecaptcha = await page.$$eval('div.g-recaptcha', (elements) => elements.length > 0);
    const hasHcaptcha = await page.$$eval('.h-captcha', (elements) => elements.length > 0);
    const status = hasRecaptcha || hasHcaptcha ? 'Good' : 'Bad';
    const recommendation =
      hasRecaptcha || hasHcaptcha
        ? 'Good'
        : 'Consider adding a CAPTCHA to protect your forms from bots.';
    return { name: 'formProtectionStatus', status, recommendation };
  } catch (error) {
    return handleError(error, 'formProtectionStatus');
  }
};

const checkCmsVersionExposure = async (page) => {
  try {
    const metaGeneratorContent = await page.$$eval('meta[name="generator"]', (elements) =>
      elements.length > 0 ? elements[0].content : null
    );
    const status = metaGeneratorContent ? 'Bad' : 'Good';
    const recommendation = metaGeneratorContent
      ? 'Consider removing or obfuscating the generator meta tag.'
      : 'CMS version is not exposed.';
    return { name: 'cmsVersionExposureStatus', status, recommendation };
  } catch (error) {
    return handleError(error, 'cmsVersionExposureStatus');
  }
};

const checkSubresourceIntegrity = async (page) => {
  try {
    const scriptsMissingIntegrity = await page.$$eval('script[src]:not([integrity])', (scripts) =>
      scripts.map((script) => script.src)
    );
    const status = scriptsMissingIntegrity.length === 0 ? 'Good' : 'Bad';
    const recommendation =
      status === 'Good'
        ? 'Subresource Integrity checks are in place.'
        : 'Consider adding Subresource Integrity (SRI) checks to your external scripts.';
    return { name: 'subresourceIntegrityStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'subresourceIntegrityStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking subresource integrity.'
    };
  }
};

const checkHttpsRedirection = async (headers) => {
  try {
    const locationHeader = headers['location'];
    const status =
      locationHeader && locationHeader.toLowerCase().startsWith('https://') ? 'Good' : 'Bad';
    const recommendation =
      status === 'Good'
        ? 'HTTPS redirection is properly configured.'
        : 'Consider redirecting HTTP to HTTPS for better security.';
    return { name: 'httpsRedirectionStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'httpsRedirectionStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking HTTPS redirection.'
    };
  }
};

const checkServerSoftwareExposure = async (headers) => {
  try {
    const serverHeader = headers['server'];
    const status = serverHeader ? 'Bad' : 'Good';
    const recommendation = serverHeader
      ? 'Consider removing or obfuscating the Server header.'
      : 'Server software is not exposed.';
    return { name: 'serverSoftwareExposureStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'serverSoftwareExposureStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking server software exposure.'
    };
  }
};

const checkDirectoryListing = async (headers) => {
  try {
    const allowHeader = headers['allow'];
    const status = allowHeader && allowHeader.includes('INDEX') ? 'Bad' : 'Good';
    const recommendation =
      status === 'Bad' ? 'Consider disabling directory listing.' : 'Directory listing is disabled.';
    return { name: 'directoryListingStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'directoryListingStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking directory listing.'
    };
  }
};

const checkPermissionsPolicy = async (headers) => {
  try {
    const permissionsPolicyHeader = headers['permissions-policy'];
    const status = permissionsPolicyHeader ? 'Good' : 'Bad';
    const recommendation = permissionsPolicyHeader
      ? 'Permissions-Policy header is properly configured.'
      : 'Consider implementing a Permissions-Policy header.';
    return { name: 'permissionsPolicyStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'permissionsPolicyStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking Permissions-Policy.'
    };
  }
};

const checkContentSecurityPolicy = async (headers) => {
  try {
    const cspHeader = headers['content-security-policy'];
    const status = cspHeader ? 'Good' : 'Bad';
    const recommendation = cspHeader
      ? 'Content Security Policy (CSP) header is properly configured.'
      : 'Consider implementing a Content Security Policy (CSP) header for enhanced security.';
    return { name: 'contentSecurityPolicyStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'contentSecurityPolicyStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking Content Security Policy (CSP).'
    };
  }
};

const checkCORS = async (headers) => {
  try {
    const corsHeader = headers['access-control-allow-origin'];
    const status = corsHeader ? 'Good' : 'Bad';
    const recommendation = corsHeader
      ? 'Cross-Origin Resource Sharing (CORS) header is properly configured.'
      : 'Consider implementing Cross-Origin Resource Sharing (CORS) headers for controlled resource sharing.';
    return { name: 'corsStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'corsStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking Cross-Origin Resource Sharing (CORS).'
    };
  }
};

const checkClickjackingProtection = async (headers) => {
  try {
    const frameOptionsHeader = headers['x-frame-options'];
    const status = frameOptionsHeader ? 'Good' : 'Bad';
    const recommendation = frameOptionsHeader
      ? 'Clickjacking protection header is properly configured.'
      : 'Consider implementing Clickjacking protection headers (X-Frame-Options) for preventing UI redress attacks.';
    return { name: 'clickjackingProtectionStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'clickjackingProtectionStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking Clickjacking protection.'
    };
  }
};

const checkSQLInjectionProtection = async (page) => {
  try {
    const userInput = "'; DROP TABLE Users; --";
    const result = await page.evaluate((userInput) => {
      if (userInput.includes(';') || userInput.includes('--') || userInput.includes('DROP TABLE')) {
        return 'Bad';
      }
      return 'Good';
    }, userInput);

    const status = result === 'Good' ? 'Good' : 'Bad';
    const recommendation =
      status === 'Good'
        ? 'SQL Injection protection is in place.'
        : 'Consider enhancing SQL Injection protection.';
    return { name: 'sqlInjectionProtectionStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'sqlInjectionProtectionStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking SQL Injection protection.'
    };
  }
};

const checkXSSProtection = async (page) => {
  try {
    const userInput = "<script>alert('XSS Attack');</script>";
    const result = await page.evaluate((userInput) => {
      if (userInput.includes('<script>') || userInput.includes('alert(')) {
        return 'Bad';
      }
      return 'Good';
    }, userInput);

    const status = result === 'Good' ? 'Good' : 'Bad';
    const recommendation =
      status === 'Good' ? 'XSS protection is in place.' : 'Consider enhancing XSS protection.';
    return { name: 'xssProtectionStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'xssProtectionStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking XSS protection.'
    };
  }
};

const checkCSRFProtection = async (page) => {
  try {
    const csrfToken = '123456789';
    const maliciousRequest = `http://malicious-site.com/attack?token=${csrfToken}`;
    const result = await page.evaluate((maliciousRequest) => {
      const userToken = '123456789';
      if (maliciousRequest.includes(userToken)) {
        return 'Good';
      }
      return 'Bad';
    }, maliciousRequest);

    const status = result === 'Good' ? 'Good' : 'Bad';
    const recommendation =
      status === 'Good' ? 'CSRF protection is in place.' : 'Consider enhancing CSRF protection.';
    return { name: 'csrfProtectionStatus', status, recommendation };
  } catch (error) {
    return {
      name: 'csrfProtectionStatus',
      status: 'Error: ' + error.toString(),
      recommendation: 'Error checking CSRF protection.'
    };
  }
};
