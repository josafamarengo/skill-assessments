import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

import Loading from "@/components/molecules/Loading";
import Head from "next/head";

const screenStates = {
  PAGE: "PAGE",
  LOADING: "LOADING",
};

interface QuizProps {
  title: string;
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

function Quiz() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [data, setData] = useState<QuizProps[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/db");
      const dataJSON = await response.json();
      // filtrar por search
        const data = dataJSON.filter((item: QuizProps) => {
            return item.title.toLowerCase().includes(search.toLowerCase());
        });
      setData(data);
    }

    fetchData();
  }, [search]);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.PAGE);
    }, 1 * 2000);
  }, []);

  return (
    <section className="w-screen min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center">
      <Head>
        <title>Quiz</title>
      </Head>
      {screenState === screenStates.LOADING && <Loading />}
      {screenState === screenStates.PAGE && (
        <div className="px-4 py-8 mt-12 mb-24 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div className="max-w-5xl lg:max-w-6xl text-center lg:mx-0">
              <h2 className="text-3xl font-bold mb-12">
                <span className="block">
                  Choose the skill you want to train
                </span>
                <input
                    type="text"
                    className="border border-gray-400 rounded-lg shadow-sm mt-1 block w-1/2 h-10 p-2 mx-auto sm:text-sm"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
              </h2>

              <div
                className="
            grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
        "
              >
                {data.map((item, key) => (
                  <Link href={`/quiz/${item.title}`} key={key} legacyBehavior>
                    <a
                      className="
                        rounded-xl border p-4 hover:border-gray-200 hover:ring-1 hover:ring-sky-600 hover:bg-sky-50 focus:outline-none focus:ring w-44 aspect-square flex flex-col justify-center items-center transition-all ease-in-out duration-300 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)]
                    "
                    >
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Quiz;
