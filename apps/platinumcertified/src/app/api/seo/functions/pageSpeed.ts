import { Page } from 'playwright';

// Define average performance metrics for reference websites
const averageMetrics = {
  firstPaint: 1000, // Average first paint time in milliseconds
  firstContentfulPaint: 1200, // Average first contentful paint time in milliseconds
  timeToFirstByte: 400, // Average time to first byte in milliseconds
  domContentLoadedTime: 2000, // Average DOMContentLoaded time in milliseconds
  domCompleteTime: 3000, // Average DOMComplete time in milliseconds
  totalPageLoadTime: 5000 // Average total page load time in milliseconds
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pageSpeedScore = async (page: Page): Promise<Record<string, any>> => {
  // Initialize an object to store performance data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const performanceData: Record<string, any> = {};

  // Navigate to the current page
  const url = page.url();
  await page.goto(url);

  // Wait for the page to load completely
  await page.waitForLoadState('load');

  // Use the Performance API to measure various performance metrics
  const performanceTiming = await page.evaluate(() => {
    const timing = performance.timing;
    return {
      navigationStart: timing.navigationStart,
      unloadEventStart: timing.unloadEventStart,
      unloadEventEnd: timing.unloadEventEnd,
      redirectStart: timing.redirectStart,
      redirectEnd: timing.redirectEnd,
      fetchStart: timing.fetchStart,
      domainLookupStart: timing.domainLookupStart,
      domainLookupEnd: timing.domainLookupEnd,
      connectStart: timing.connectStart,
      connectEnd: timing.connectEnd,
      secureConnectionStart: timing.secureConnectionStart,
      requestStart: timing.requestStart,
      responseStart: timing.responseStart,
      responseEnd: timing.responseEnd,
      domLoading: timing.domLoading,
      domInteractive: timing.domInteractive,
      domContentLoadedEventStart: timing.domContentLoadedEventStart,
      domContentLoadedEventEnd: timing.domContentLoadedEventEnd,
      domComplete: timing.domComplete,
      loadEventStart: timing.loadEventStart,
      loadEventEnd: timing.loadEventEnd
    };
  });

  // Capture all paint timing metrics
  const paintTimings = await page.evaluate(() => {
    const paintEntries = performance.getEntriesByType('paint');
    const paintTimingData = {};
    paintEntries.forEach((entry) => {
      paintTimingData[entry.name] = entry.startTime;
    });
    return paintTimingData;
  });

  // Check if "first-paint" and "first-contentful-paint" metrics are available
  const firstPaint = paintTimings['first-paint'] !== undefined ? paintTimings['first-paint'] : null;
  const firstContentfulPaint =
    paintTimings['first-contentful-paint'] !== undefined
      ? paintTimings['first-contentful-paint']
      : null;

  // Add the metrics to the performanceData object
  performanceData.paintTimings = {
    'first-paint': firstPaint,
    'first-contentful-paint': firstContentfulPaint
  };

  // Capture additional performance metrics
  // const resourceTiming = await page.evaluate(() => {
  // 	const resources = performance.getEntriesByType("resource");
  // 	const resourceTimingData = resources.map((resource) => ({
  // 		name: resource.name,
  // 		initiatorType: resource.initiatorType,
  // 		duration: resource.duration,
  // 		startTime: resource.startTime,
  // 	}));
  // 	return resourceTimingData;
  // });

  // Add more performance metrics here
  // Example: Calculate Time To First Byte (TTFB)
  const timeToFirstByte = performanceTiming.responseStart - performanceTiming.requestStart;
  performanceData.timeToFirstByte = timeToFirstByte;

  // Example: Calculate DOM Content Loaded Time
  const domContentLoadedTime =
    performanceTiming.domContentLoadedEventEnd - performanceTiming.navigationStart;
  performanceData.domContentLoadedTime = domContentLoadedTime;

  // Example: Calculate DOM Complete Time
  const domCompleteTime = performanceTiming.domComplete - performanceTiming.navigationStart;
  performanceData.domCompleteTime = domCompleteTime;

  // Measure Core Web Vitals using Web Vitals library
  // (CLS, FID, LCP - as you were doing before)

  // Calculate total page load time in milliseconds (rounded to 2 decimal places)
  performanceData.totalPageLoadTime =
    parseFloat(
      ((performanceTiming.loadEventEnd - performanceTiming.navigationStart) / 1000).toFixed(2)
    ) * 1000; // Convert to milliseconds

  // Calculate a page speed score using the modified algorithm
  performanceData.pageSpeedScore = calculatePageSpeedScore(performanceData, averageMetrics);

  // Return the performance data object with all metrics
  return performanceData;
};

// Define metric weights
const metricWeights = {
  firstPaint: 0.2,
  firstContentfulPaint: 0.2,
  timeToFirstByte: 0.1,
  domContentLoadedTime: 0.2,
  domCompleteTime: 0.2,
  totalPageLoadTime: 0.1
};

// Define tolerance percentage (e.g., 9%)
const tolerancePercentage = 0.09;

// Updated scoring algorithm
const calculatePageSpeedScore = (data, averageMetrics) => {
  // Function to calculate the percentage score for each metric
  const calculateMetricScore = (actual, average, weight) => {
    const tolerance = average * tolerancePercentage;
    const adjustedAverage = average + tolerance;
    return Math.max(0, (1 - actual / adjustedAverage) * 100) * weight;
  };

  // Calculate the score for each metric
  const timeToFirstByteScore = calculateMetricScore(
    data.timeToFirstByte,
    averageMetrics.timeToFirstByte,
    metricWeights.timeToFirstByte
  );
  const firstPaintScore = calculateMetricScore(
    data.paintTimings['first-paint'],
    averageMetrics.firstPaint,
    metricWeights.firstPaint
  );
  const firstContentfulPaintScore = calculateMetricScore(
    data.paintTimings['first-contentful-paint'],
    averageMetrics.firstContentfulPaint,
    metricWeights.firstContentfulPaint
  );
  const domContentLoadedTimeScore = calculateMetricScore(
    data.domContentLoadedTime,
    averageMetrics.domContentLoadedTime,
    metricWeights.domContentLoadedTime
  );
  const domCompleteTimeScore = calculateMetricScore(
    data.domCompleteTime,
    averageMetrics.domCompleteTime,
    metricWeights.domCompleteTime
  );
  const totalPageLoadTimeScore = calculateMetricScore(
    data.totalPageLoadTime,
    averageMetrics.totalPageLoadTime,
    metricWeights.totalPageLoadTime
  );

  // Calculate the total score
  const totalScore =
    timeToFirstByteScore +
    firstPaintScore +
    firstContentfulPaintScore +
    domContentLoadedTimeScore +
    domCompleteTimeScore +
    totalPageLoadTimeScore;

  return totalScore.toFixed(2);
};
