import { Page } from 'playwright';

export const checkImageOptimization = async (page: Page) => {
  await page.waitForTimeout(500);
  await page.waitForSelector('body');
  await page.waitForLoadState('load');

  const runEvaluation = async () => {
    const images = await page.evaluate(async () => {
      // Utility Functions
      const checkDataURI = (src) => {
        return src.startsWith('data:');
      };

      const checkCDN = (src) => {
        // Example CDN URLs, add more as needed
        const cdns = ['cdn.example.com', 'cdn.anotherexample.com'];
        return cdns.some((cdn) => src.includes(cdn));
      };

      const checkSVGOptimization = (src) => {
        // Example SVG URLs, add more as needed
        if (!src) {
          return false;
        }
        return true;
      };

      const findClosestRatio = (currentRatio) => {
        const commonRatios = [
          { ratio: '1:1', value: 1 },
          { ratio: '4:3', value: 4 / 3 },
          { ratio: '3:2', value: 3 / 2 },
          { ratio: '16:9', value: 16 / 9 },
          { ratio: '21:9', value: 21 / 9 }
        ];

        let closest = commonRatios[0];
        let closestDiff = Math.abs(currentRatio - closest.value);

        for (let i = 1; i < commonRatios.length; i++) {
          const diff = Math.abs(currentRatio - commonRatios[i].value);
          if (diff < closestDiff) {
            closest = commonRatios[i];
            closestDiff = diff;
          }
        }

        return closest.ratio;
      };

      const getBestCompression = (fileFormat) => {
        if (fileFormat === 'jpeg' || fileFormat === 'jpg') {
          return { bestType: 'JPEG', potentialSavings: 'Variable' };
        } else if (fileFormat === 'png') {
          return { bestType: 'PNG', potentialSavings: 'Variable' };
        } else {
          return { bestType: 'WebP', potentialSavings: 'High' };
        }
      };

      const images = [];
      const imageElements = document.querySelectorAll('img');

      for (const img of imageElements) {
        let imageScore = 100;

        const aspectRatioDecimal = img.naturalWidth / img.naturalHeight;
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
        const divisor = gcd(img.naturalWidth, img.naturalHeight);
        const aspectRatio = `${img.naturalWidth / divisor}:${img.naturalHeight / divisor}`;
        const recommendedRatio = findClosestRatio(aspectRatioDecimal);
        const fileFormat = img.src.split('.').pop().toLowerCase();
        const isModernFormat = ['webp', 'avif'].includes(fileFormat);
        const srcSetImages = img.srcset ? img.srcset.split(',').map((src) => src.trim()) : [];
        const isLazyLoaded = img.loading === 'lazy';

        const optimizedDimension = img.naturalWidth <= 1920 && img.naturalHeight <= 1080;
        const imageSizeInfo = `(${img.naturalWidth}x${img.naturalHeight})`;
        const altText = img.alt || 'No Alt Text';

        if (!optimizedDimension) {
          imageScore -= 30;
        }

        if (!altText || altText === 'No Alt Text') {
          imageScore -= 20;
        }

        if (recommendedRatio === aspectRatio) {
          imageScore += 10;
        }

        if (isLazyLoaded) {
          imageScore += 10;
        }

        if (isModernFormat) {
          imageScore += 20;
        }

        const { bestType, potentialSavings } = getBestCompression(fileFormat);

        let responsiveRecommendation = 'Not using responsive images';
        if (srcSetImages.length > 0) {
          responsiveRecommendation = 'Using responsive images';
        }

        const loadingStrategy = isLazyLoaded ? 'Lazy loading' : 'Eager loading';

        const altTextRecommendation =
          altText === 'No Alt Text'
            ? 'Consider adding descriptive alt text for accessibility and SEO.'
            : 'Good alt text';

        const dimensionRecommendation = optimizedDimension
          ? 'Good dimensions'
          : 'Consider resizing image to optimize for web.';

        // const colorDepth = img.colorDepth;
        // const colorDepthRecommendation =
        //   colorDepth <= 24
        //     ? 'Good color depth'
        //     : 'Consider reducing color depth for faster loading.';

        const compressionInfo = {
          compressed: false,
          type: 'N/A',
          bestType,
          potentialSavings
        };

        // New Checks
        const isDataURI = checkDataURI(img.src);
        const isCDNUsed = checkCDN(img.src);
        const isSVGOptimized = fileFormat === 'svg' ? checkSVGOptimization(img.src) : false;

        imageScore = Math.min(Math.max(imageScore, 0), 100);

        images.push({
          src: img.src,
          imageSizeInfo,
          fileFormat,
          altText,
          imageScore,
          aspectRatio,
          recommendedRatio,
          isModernFormat,
          srcSetImages,
          isLazyLoaded,
          compressionInfo,
          responsiveRecommendation,
          loadingStrategy,
          altTextRecommendation,
          dimensionRecommendation,
          //   colorDepth,
          //   colorDepthRecommendation,
          // New Data
          isDataURI,
          isCDNUsed,
          isSVGOptimized
        });
      }

      const totalImageScore = images.reduce((acc, img) => acc + img.imageScore, 0);
      const overallWebsiteScore = Math.round((totalImageScore / (images.length * 100)) * 100);

      return {
        images,
        totalImages: images.length,
        overallWebsiteScore
      };
    });

    return images;
  };

  const result = await runEvaluation();

  return result;
};
