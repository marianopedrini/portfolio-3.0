import { useEffect, useState } from 'react';

import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Image from 'next/image';
import Name from '@/components/Name';

// const originalName = 'MARIANO PEDRINI';
// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const originalName = 'mariano pedrini';
const letters = 'abcdefghijklmnopqrstuvwxyz';

export default function Home() {
  const [name, setName] = useState(originalName);
  let interval = null;

  const nameEffect = () => {
    let iterations = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      let randomName = name
        .split('')
        .map((letter, index) => {
          if (letter != ' ') {
            if (index < iterations) {
              return originalName[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          }

          return ' ';
        })
        .join('');

      setName(randomName);

      if (iterations >= name.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  };

  return (
    <>
      <main className="py-40" id="index">
        <div className="container-xl">
          <div className="relative select-none z-10 mb-16 md:mb-32">
            <Name />
            {/* <h1
              className="w-fit font-light text-6xl leading-tight md:text-[120px] md:leading-tight relative"
              id="name"
              onMouseOver={() => nameEffect()}
            >
              {name}
            </h1> */}
            <h4
              className="font-light text-2xl leading-tight mt-8 md:mt-0 md:text-4xl lg:-ml-[15px] lg:leading-tight lg:absolute lg:left-[480px]"
              id="developer"
            >
              frontend developer
            </h4>
          </div>
          <div className="md:container relative">
            <div className="relative w-fit">
              <Image
                className="world-map"
                src={'/images/world-map.svg'}
                alt="World map"
                width="0"
                height="0"
                priority={true}
              />

              <span className="map-dot absolute"></span>
            </div>
            <div className="md:absolute top-0 left-0 md:top-1/2 md:right-20 md:left-auto max-w-xl">
              <p>
                Hello, I’m Mariano,
                <br />
                a frontend developer based in Buenos Aires, Argentina.
                <br />
                I love create and develop amazing things with beautiful
                interfaces.
                <br />I think that a good design contributes to make a better
                world :)
              </p>
            </div>
          </div>
        </div>
        <Skills />
        <Work />
      </main>
    </>
  );
}
