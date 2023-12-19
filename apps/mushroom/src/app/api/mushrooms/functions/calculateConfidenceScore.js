export function calculateConfidenceScore(jsonObject) {
  // Define a weight for each key based on importance (adjust as needed)
  const keyWeights = {
    confidence_score: 1, // Adjust the weight for the confidenceScore key
    // Add other keys and their weights here
    scientific_profile: 0.5,
    classification: 0.5,
    origin: 0.2
    // Add more keys and weights as needed
  };

  // Iterate through each block in the JSON object
  for (const blockKey in jsonObject) {
    let block = jsonObject[blockKey];

    // Check if the block is an object
    if (typeof block === 'object') {
      let totalWeight = 0;
      let totalScore = 0;

      // Iterate through the keys within the block and check for "Information not available"
      for (const key in block) {
        const weight = keyWeights[key] !== undefined ? keyWeights[key] : 0; // Use a default weight of 0 if the key is not found
        totalWeight += weight;
        if (block[key] !== undefined && block[key] !== 'Information not available') {
          // Adjust the confidence score based on the presence of data
          totalScore += weight;
        }
      }

      // Calculate the confidence score for the block on a scale of 0 to 1
      const confidence_score = totalWeight === 0 ? 0 : totalScore / totalWeight; // Ensure totalWeight is not zero before dividing

      // Add the confidence score to the block
      block.confidence_score = confidence_score;
    }
  }

  return jsonObject; // Return the updated JSON object with confidence scores in each block
}
