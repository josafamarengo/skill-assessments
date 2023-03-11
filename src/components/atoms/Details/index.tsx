import React from 'react';

interface Props {
    question: string;
    answer: string;
}

function Details({ question, answer }: Props) {
  return (
    <details
      className="group p-6 [&_summary::-webkit-details-marker]:hidden"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <summary className="flex items-center justify-between cursor-pointer">
        <h2 className="text-lg font-semibold text-gray-900" itemProp="name">
          {question}
        </h2>
        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>
      <p
        className="mt-4 leading-relaxed text-gray-700"
        itemScope
        itemProp="acceptedAnswer text"
        itemType="https://schema.org/Answer"
      >
        {answer}
      </p>
    </details>
  );
}

export default Details;
