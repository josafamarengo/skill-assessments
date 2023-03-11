import Link from 'next/link'
import React from 'react'

function Quiz() {
  return (
    <section className="w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-screen-xl bg-red-400 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="max-w-lg text-center lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Lorem ipsum dolor sit amet consectetur
            </h2>

            <p className="mt-4 text-gray-600">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div
              className="
            grid grid-cols-2 gap-4 sm:grid-cols-3
        "
            >
              {[1, 2, 3, 4, 5, 6].map((item, key) => (
                <Link href={`/quiz/${item}`} key={key} legacyBehavior>
                  <a
                    className="
                        block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring
                    "
                  >
                    <h3 className="text-2xl font-bold">Quiz {item}</h3>
                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quod.
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quiz