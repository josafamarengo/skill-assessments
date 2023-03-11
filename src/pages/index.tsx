import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import db from "../assets/data.json";
import Input from "../components/atoms/Input";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <div>
      <Head>
        <title>{db.title}</title>
      </Head>
      <section className="w-screen h-screen bg-secondary-light flex flex-col justify-center items-center">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Test your knowledge for{" "}
            <span className="text-primary-light">Linkedin</span> skill
            assessments
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Boost Your Professional Profile with LinkedIn Skill Assessments:
            Take the Test Now!
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              className="
                px-8 py-3 m-2 
                text-lg font-semibold rounded 
                bg-primary-light text-white
              "
              onClick={() => router.push("/quiz")}
            >
              Get started
            </button>
            <button className="px-8 py-3 m-2 text-lg font-semibold border rounded bg-blue-300">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
