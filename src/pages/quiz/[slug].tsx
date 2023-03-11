import React from "react";
import QuizScreen from "../../components/templates/Quiz";
import db from "../../assets/quizzes/HTML.json";

export default function QuizPage() {
  return <QuizScreen questions={db.questions} />
}
