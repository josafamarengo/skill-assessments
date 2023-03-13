import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Loading from "@/components/molecules/Loading";
import Result from "@/components/molecules/Result";

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

interface Question {
  question: string;
  alternatives: Alternative[];
}

interface Alternative {
  alternative: string;
  is_correct: boolean;
}

interface QuizPageProps {
  questions: Question[];
}

export default function QuizPage({ questions }: QuizPageProps) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAlternative, setSelectedAlternative] = useState<
    number | undefined
  >(undefined);

  const router = useRouter();

  const thisPath = router.query.slug;

  const currentQuestion = questions[currentQuestionIndex];
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const handleSubmit = () => {
    setSubmitted(true);

    const isCorrect =
      currentQuestion.alternatives[selectedAlternative!].is_correct;

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setTimeout(() => {
        setCurrentQuestionIndex(nextQuestionIndex);
      }, 1 * 1000);
    } else {
      setTimeout(() => {
        setShowScore(true);
      }, 1 * 1000);
    }

    if (isCorrect) {
      setTimeout(() => {
        setScore(score + 1);
      }, 1 * 1000);
    }

    setSelectedAlternative(undefined);

    setTimeout(() => {
      setSubmitted(false);
    }, 1 * 1000);
  };

  const playAgain = () => {
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    // reload page
    window.location.reload();
  };

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  }, []);

  useEffect(() => {
    if (showScore) {
      setScreenState(screenStates.RESULT);
    }
  }, [showScore]);

  return (
    <div className="bg-bg-light w-screen">
      <Head>
        <title>{thisPath}</title>
      </Head>
      <div
        className="
          w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center max-w-xl mx-auto
        "
      >
        {screenState === screenStates.QUIZ && (
          <div className="flex flex-col justify-center items-center min-h-screen -translate-y-12">
            <header className="w-full flex justify-between items-center py-5 px-8 font-semibold">
              <h3>{`Question ${currentQuestionIndex + 1} of ${
                questions.length
              }`}</h3>
              <p
                className={`
                ${(score / currentQuestionIndex) * 100 > 70 && "bg-green-300"}
                p-2 rounded-lg
              `}
              >
                {score} {score === 1 ? "correct" : "corrects"} -{" "}
                {score > 0
                  ? ((score / currentQuestionIndex) * 100).toFixed()
                  : 0}{" "}
                %
              </p>
            </header>
            <div className="max-w-[90%] p-4 rounded shadow-lg bg-secondary-light border border-gray-200">
              <h2
                className="text-lg font-bold mb-4"
                dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
              ></h2>
              <ul className="space-y-2">
                {currentQuestion.alternatives.map((alternative, index) => (
                  <li key={index}>
                    <button
                      disabled={submitted}
                      className={`
                        px-4 py-2 rounded-lg border-2 border-gray-400 mr-4 w-full
                        ${selectedAlternative === index && "bg-gray-200"}
                        ${submitted && alternative.is_correct && "bg-green-400"}
                      `}
                      onClick={() => setSelectedAlternative(index)}
                      dangerouslySetInnerHTML={{
                        __html: alternative.alternative,
                      }}
                    ></button>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center space-y-1 mt-2">
                <button
                  type="submit"
                  disabled={!hasAlternativeSelected}
                  onClick={handleSubmit}
                  className="bg-primary-light py-2 px-4 rounded-lg cursor-pointer text-white"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        {screenState === screenStates.LOADING && <Loading />}

        {screenState === screenStates.RESULT && (
          <Result playAgain={playAgain} score={score} questions={questions} />
        )}
      </div>
    </div>
  );
}
