import React, { useState, useEffect } from "react";
import Loading from "@/components/molecules/Loading";
import Result from "@/components/molecules/Result";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import Head from "next/head";

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
  const [submited, setSubmited] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAlternative, setSelectedAlternative] = useState< number | undefined>(undefined);

  const currentQuestion = questions[currentQuestionIndex];
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const thisPath = window.location.pathname.replace("/quiz/", "").replaceAll("%20", " ");

  const handleAnswerButtonClick = (isCorrect: boolean, index: number) => {
    setSelectedAlternative(index);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextButtonClick = () => {
    setSubmited(true);
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
    setSelectedAlternative(undefined);
    setTimeout(() => {
      setSubmited(false);
    }
    , 1 * 1000);
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
    <div>
      <Head>
        <title>{thisPath}</title>
      </Head>
      <div
        className="
          w-full min-h-screen flex flex-col justify-center items-center max-w-xl pt-8
        "
      >
        {screenState === screenStates.QUIZ && (
          <div className="flex flex-col justify-center items-center min-h-screen -translate-y-12">
            <header className="flex items-center py-5 px-8">
              <Link href="/">
                <BiLeftArrowAlt />
              </Link>
              <h3>{`Pergunta ${currentQuestionIndex + 1} de ${
                questions.length
              }`}</h3>
            </header>
            <div className="bg-secondary-light max-w-[90%] p-4 rounded shadow-md">
              <h2
                className="text-lg font-bold mb-4"
                dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
              ></h2>
              <ul className="space-y-2">
                {currentQuestion.alternatives.map((alternative, index) => (
                  <li key={index}>
                    <button
                    disabled={submited}
                      className={`
                        px-4 py-2 rounded bg-gray-200 mr-4 w-full
                        ${
                          selectedAlternative === index &&
                          "bg-yellow-700 text-white"
                        }
                        ${
                          submited &&
                          alternative.is_correct &&
                          "bg-green-700 text-white"
                        }
                      `}
                      onClick={() =>
                        handleAnswerButtonClick(alternative.is_correct, index)
                      }
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
                  onClick={handleNextButtonClick}
                  className="bg-primary-light py-2 px-4 rounded-lg cursor-pointer text-white"
                >
                  Confirmar
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
