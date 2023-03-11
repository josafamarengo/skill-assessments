import Link from "next/link";
import React from "react";

import Input from "../../atoms/Input";
import QuizLogo from "../../atoms/QuizLogo";

function Header() { 
  return (
    <header
      className="fixed top-0 left-0
        w-full h-16 flex justify-center bg-secondary-light z-50 
        shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)]
      "
    >
      <div className="w-10/12 max-w-6xl h-full mx-auto flex justify-between items-center">
        <Link href="/" className="mx-auto md:mx-0">
          <QuizLogo />
        </Link>
        <div className="hidden ">
          <Input
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
            placeholder={"Pesquise o assunto desejado"}
            name={""}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
