import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import Details from "../../components/atoms/Details";

function WhatIsLinkedinSkillAssessments() {

  const router = useRouter();

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 md:py-16">
      <Head>
        <title>What is LinkedIn Skill Assessments?</title>
        <meta
          name="description"
          content="LinkedIn Skill Assessments are a tool provided by LinkedIn to assess the skills and knowledge of professionals in various fields. They are designed to help individuals showcase their expertise and proficiency to potential employers, colleagues, and clients."
        />
      </Head>
      <article className="px-4">
        <h1 className="text-3xl font-bold mb-4">
          What is LinkedIn Skill Assessments?
        </h1>

        <p className="mb-4">
          LinkedIn Skill Assessments are a tool provided by LinkedIn to evaluate
          the skills and knowledge of professionals in various fields. These
          assessments are designed to help individuals showcase their expertise
          and skills to potential employers, colleagues, and clients.
        </p>

        <p className="mb-4">
          The skill assessments offered by LinkedIn cover a wide range of topics
          and skills, including software development, digital marketing, project
          management, data analytics, and many others. Each assessment consists
          of a series of multiple-choice questions that test an
          individual&apos;s understanding of the topic at hand.
        </p>

        <p className="mb-4">
          The questions are usually designed to be challenging and to accurately
          assess the participant&apos;s knowledge and expertise. Upon completion
          of the exam, the individual receives a badge on their LinkedIn profile
          indicating that they have successfully passed the exam.
        </p>

        <p className="mb-4">
          These badges are a powerful marketing tool for professionals because
          they can help demonstrate their expertise and distinguish them from
          other professionals in their field. In addition, employers and
          recruiters can search for applicants based on their skills and review
          the skills of potential employees based on these ratings.
        </p>

        <p className="mb-4">
          LinkedIn Skill Assessments are available to all LinkedIn members, and
          participation is completely free. However, users can only take each
          assessment once every three months to prevent abuse of the system.
        </p>

        <p className="mb-4">
          In summary, LinkedIn Skill Assessments are a valuable tool for
          professionals to showcase their skills and knowledge, stand out from
          other applicants, and increase their visibility to potential employers
          and clients. By using this feature, they can improve their career
          prospects and enhance their professional profile on LinkedIn.
        </p>
      </article>

      <div className="w-full flex justify-center py-4">
        <button
          className="bg-primary-light text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/quiz")}
        >
          Take Skill Assessment
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4 mt-8">FAQs</h2>
      <section
        className="bg-white border border-gray-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)] divide-y divide-gray-200 rounded-xl"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <Details
          question="What are LinkedIn Skill Assessments?"
          answer="LinkedIn Skill Assessments are a tool provided by LinkedIn to assess
          the skills and knowledge of professionals in various fields. They are
          designed to help individuals showcase their expertise and proficiency
          to potential employers, colleagues, and clients."
        />

        <Details
          question="How do I take a LinkedIn Skill Assessment?"
          answer="To take a LinkedIn Skill Assessment, you must first create a LinkedIn account. Once you have created an account, you need to go to
          your LinkedIn profile page and click on the Add new profile section
          button. Then, select Skills from the dropdown menu and click on the
          + icon to add a new skill. You can then select the relevant skill
          from the list and click on the Take Skill Quiz button to begin the
          assessment."
        />
        <Details
          question="Are LinkedIn Skill Assessments free?"
          answer="Yes, LinkedIn Skill Assessments are completely free to take."
        />
        <Details
          question="Can I retake a LinkedIn Skill Assessment if I don't pass?"
          answer="Yes, you can retake a LinkedIn Skill Assessment after a waiting period
          of three months."
        />
        <Details
          question="How many questions are in a LinkedIn Skill Assessment?"
          answer="The number of questions in a LinkedIn Skill Assessment varies
          depending on the skill and the level of difficulty. Typically, there
          are between 15 to 20 multiple-choice questions in each assessment."
        />
        <Details
          question="How long does it take to complete a LinkedIn Skill Assessment?"
          answer="The time it takes to complete a LinkedIn Skill Assessment varies depending on the skill and the level of difficulty. Typically, it takes between 15 to 20 minutes to complete each assessment."
        />
        <Details
          question="How do I showcase my LinkedIn Skill Assessment badge on my profile?"
          answer="Once you have successfully completed a LinkedIn Skill Assessment, you will receive a badge that you can add to your profile. To showcase the badge, go to your profile page, click on the Add new profile section button, select Accomplishments from the dropdown menu, and then click on the + icon to add a new certification or achievement. You can then select the relevant Skill Assessment badge from the list and add it to your profile."
        />
      </section>
    </div>
  );
}

export default WhatIsLinkedinSkillAssessments;
