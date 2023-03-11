import Link from "next/link";
import React, {useState} from "react";

import { AiFillHome } from "react-icons/ai";

interface ResultProps {
  score: number;
  questions: Question[];
  playAgain: () => void;
}

interface Question {
  question: string;
  alternatives: Alternative[];
}

interface Alternative {
  alternative: string;
  is_correct: boolean;
}

function Result({ score, questions, playAgain }: ResultProps) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-secondary-light p-8 rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)]
    w-96 h-96"
    >
      <h1 className="text-4xl font-bold mb-4">Score: {score} / {questions.length}</h1>
      <h2 className="text-2xl font-bold mb-4">
        {Math.round((score / questions.length) * 100)}%
      </h2>
      <div>
        <button className="flex space-x-2 items-center px-4 py-2 rounded bg-primary-light text-white font-bold">
          <AiFillHome />
          <Link href="/">Home</Link>
        </button>
        <button
          className="px-4 py-2 rounded text-primary-light underline-offset-1 underline font-bold"
          onClick={playAgain}
        >
          Play again
        </button>
      </div>
    </div>
  );
}

export default Result;