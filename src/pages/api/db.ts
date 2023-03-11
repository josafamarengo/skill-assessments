import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const quizzesDir = path.join(process.cwd(), "src/assets/quizzes");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = fs.readdirSync(quizzesDir).map((file) => {
    const quizPath = path.join(quizzesDir, file);
    const quizData = fs.readFileSync(quizPath, "utf-8");
    return JSON.parse(quizData);
  });

  res.status(200).json(data);
}
