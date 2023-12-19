// pages/api/search.js
import { getEmbedding } from '../../../utils/openai';

const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.reduce((acc, current, index) => acc + current * vecB[index], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
};

const yourData = [
  {
    id: 1,
    text: 'Example text 1',
    embedding: [
      /* precomputed embedding vector */
    ]
  }
  // ... more data items
];

export async function POST(req, res) {
  const { query } = req.body;
  const queryEmbedding = await getEmbedding(query);

  const searchResults = yourData
    .map((item) => ({
      ...item,
      similarity: cosineSimilarity(queryEmbedding, item.embedding)
    }))
    .sort((a, b) => b.similarity - a.similarity);

  const topResults = searchResults.slice(0, 10);

  res.status(200).json({ results: topResults });
}
