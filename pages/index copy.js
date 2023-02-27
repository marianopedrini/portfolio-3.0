import { useEffect, useState } from 'react';

import Skills from '@/components/Skills';
import Work from '@/components/Work';

const initialProfession = 'frontend developer';
const letters = 'abcdefghijklmnopqrstuvwxyz';

export default function Home() {
  const [profession, setProfession] = useState(initialProfession);
  const [isChanging, setIsChanging] = useState(false);

  let interval = null;
  const randomLettersEffect = () => {
    let iterations = 0;

    if (!isChanging) {
      setIsChanging(true);
      clearInterval(interval);

      interval = setInterval(() => {
        let randomLetter = profession
          .split('')
          .map((letter, index) => {
            if (letter != ' ') {
              if (index < iterations) {
                return initialProfession[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            }

            return ' ';
          })
          .join('');

        setProfession(randomLetter);

        if (iterations >= profession.length) {
          clearInterval(interval);
          setIsChanging(false);
        }

        iterations += 1 / 3;
      }, 30);
    }
  };

  return (
    <>
      <main>
        <div className="py-28 md:py-56" id="index">
          <div className="container-xl">
            <div className="relative select-none z-10 mb-16 md:mb-32">
              <p className="text-5xl font-light mb-4 text-2xl md:text-5xl">
                hi! I am
              </p>
              <h1
                className="w-fit font-light text-6xl sm:text-6xl md:-ml-2 md:text-8xl lg:-ml-3 lg:text-[110px] relative"
                id="name"
              >
                MARIANO{' '}
                <span className="relative">
                  PEDRINI
                  <h4
                    id="developer"
                    className="absolute font-light text-2xl left-2 md:text-4xl lg:left-auto lg:right-3"
                    onMouseOver={() => randomLettersEffect()}
                  >
                    {profession}
                  </h4>
                </span>
                <svg
                  className="hidden md:mt-10 md:w-5/6 md:block lg:w-full lg:mt-5"
                  id="name-line"
                  width="1032"
                  height="41"
                  viewBox="0 0 1032 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H618L657 40H1032" stroke="#BAC7D7" />
                </svg>
              </h1>
            </div>
          </div>
        </div>
        <Skills />
        <Work />
      </main>
    </>
  );
}
