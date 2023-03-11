import React from "react";
import { GetServerSideProps } from "next";
import fetch from "isomorphic-unfetch";

import QuizScreen from "../../components/templates/Quiz";

interface QuizProps {
  questions: Question[];
}

interface Question {
  question: string;
  alternatives: Alternative[];
}

interface Alternative {
  alternative: string;
  is_correct: boolean;
}


export default function QuizPage({ questions }: QuizProps) {
  return <QuizScreen questions={questions} />;
}

export const getServerSideProps: GetServerSideProps<QuizProps> = async (
  context
) => {
  const slug = context.params?.slug;
  if (!slug) {
    return {
      notFound: true,
    };
  }

  const response = await fetch(`http://josafa.com.br/api/db`);

  const quizzes = await response.json();

  const quiz = quizzes.find(
    (quiz: { title: string | string[]; questions: Question[] }) =>
      quiz.title === slug
  );
  if (!quiz) {
    return {
      notFound: true,
    };
  }

  return { props: { questions: quiz.questions } };
};