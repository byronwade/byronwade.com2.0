'use client';

import { useCompletion } from 'ai/react';

export default function SloganGenerator() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl dark:text-black"
          value={input}
          placeholder="Describe your business..."
          onChange={handleInputChange}
        />
      </form>
      {completion ? (
        <div className="my-4 whitespace-pre-wrap">{completion}</div>
      ) : (
        <div>Enter a business description and click enter to generate slogans.</div>
      )}
    </div>
  );
}
