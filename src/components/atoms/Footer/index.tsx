import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <footer className="sm:fixed bottom-0 w-screen h-14 z-10 bg-secondary-light shadow-sm flex flex-col justify-center items-center space-y-2 text-black text-sm font-semibold">
      <p>
        {" "}
        Built with ❤️ by{" "}
        <Link
          href="https://josafa.com.br"
          target={"_blank"}
          className="font-bold"
        >
          Josafá Marengo
        </Link>
      </p>
      <sub>
        Data from &nbsp;
        <Link
          href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes"
          target={"_blank"}
          className="font-bold"
        >
          Ebazhanov
        </Link>
      </sub>
    </footer>
  );
}

export default Footer;