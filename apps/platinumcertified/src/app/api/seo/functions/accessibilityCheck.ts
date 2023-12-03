import axe from 'axe-core';

export const runAccessibilityCheck = async (url) => {
  // Run the accessibility check using Axe-core on the client side
  const results = await axe.run();

  // Extract relevant information from the Axe results
  const violations = results.violations.map((violation) => {
    return {
      id: violation.id,
      impact: violation.impact,
      description: violation.description,
      nodes: violation.nodes.length // Number of elements with this issue
    };
  });

  // Return the accessibility check results as an object
  return {
    website: url,
    accessibilityIssues: violations
  };
};
