import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// import Input from "../components/atoms/Input";
// import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <div>
      <Head>
        <title>Skill Quiz | Test your knowledge</title>
        <meta
          name="description"
          content="Boost Your Professional Profile with LinkedIn Skill Assessments: Take the Test Now!"
        />
      </Head>
      <section className="w-screen h-[calc(100vh-4rem)] bg-secondary-light flex flex-col justify-center items-center">
        <div className="container mx-auto flex flex-col items-center px-4  text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
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
                bg-primary-light text-white button
              "
              onClick={() => router.push("/quiz")}
            >
              Get started
            </button>
            <button
              className="bg-blue-300 button"
              onClick={() => router.push("/what-is-linkedin-skill-assessments")}
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
