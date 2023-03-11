import React, {useState} from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

import Image from "next/image";
import Link from "next/link";

interface Question {
  image: string;
  title: string;
  description: string;
  answer: number;
  alternatives: string[];
}

interface QuestionsProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onSubmit: () => void;
  addResult: (result: boolean) => void;
}

function Questions({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}: QuestionsProps) {
  const [selectedAlternative, setSelectedAlternative] =
    React.useState<number | undefined>(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <div className="w-full max-w-md pt-11 my-auto">
      <header className="flex items-center py-5 px-8">
        <Link href="/">
          <BiLeftArrowAlt />
        </Link>
        <h3>{`Question ${questionIndex + 1} of ${totalQuestions}`}</h3>
      </header>
      {question.image && (
        <Image
          alt="Descrição"
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
          src={question.image}
          width={400}
          height={400}
        />
      )}
      <div className="p-8">
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={(infosDoEvento: { preventDefault: () => void }) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
          className="flex flex-col gap-4"
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <label
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
                className={`
                  bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer
                  ${isSelected ? "bg-icon-dark" : ""}
                  ${
                    isQuestionSubmited &&
                    isSelected &&
                    alternativeStatus === "SUCCESS"
                      ? "bg-green-300 border border-green-500 text-green-800"
                      : ""
                  }
                  ${
                    isQuestionSubmited &&
                    isSelected &&
                    alternativeStatus === "ERROR"
                      ? "bg-red-200 border border-red-500 text-red-700"
                      : ""
                  }
                `}
              >
                <input
                  style={{ display: "none" }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </label>
            );
          })}
          <button
            type="submit"
            disabled={!hasAlternativeSelected}
            className="bg-primary-light py-2 px-4 cursor-pointer text-white"
          >
            Confirm
          </button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </form>
      </div>
    </div>
  );
}

export default Questions;
