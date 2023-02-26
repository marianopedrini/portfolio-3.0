// import { useEffect, useRef } from 'react';

// const MouseLight = () => {
//   const light = useRef<HTMLDivElement>(null);
//   const positionRef = useRef({
//     mouseX: 0,
//     mouseY: 0,
//   });

//   useEffect(() => {
//     document.addEventListener('mousemove', (event) => {
//       const { clientX, clientY } = event;

//       const mouseX = clientX;
//       const mouseY = clientY;

//       positionRef.current.mouseX = mouseX;
//       positionRef.current.mouseY = mouseY;

//       const current = light.current;
//       if (current) {
//         current.style.left = `${clientX + window.scrollX}px`;
//         current.style.top = `${clientY + window.scrollY}px`;
//         // current.animate(
//         //   {
//         //     left: `${clientX + window.scrollX}px`,
//         //     top: `${clientY + window.scrollY}px`,
//         //   },
//         //   { duration: 3000, fill: 'forwards' }
//         // );
//       }
//     });

//     return () => {};
//   }, []);

//   return (
//     <div ref={light} id="mouse-light">
//       <div id="mouse-blur"></div>
//     </div>
//   );
// };
// export default MouseLight;

import { useEffect, useRef } from 'react';

const MouseLight = () => {
  const light = useRef();
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
  });

  useEffect(() => {
    const updatePosition = () => {
      const current = light.current;
      if (current) {
        const { mouseX, mouseY } = positionRef.current;
        current.animate(
          {
            left: `${mouseX + window.scrollX}px`,
            top: `${mouseY + window.scrollY}px`,
          },
          { duration: 1500, fill: 'forwards' }
        );
      }
      requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      positionRef.current.mouseX = clientX;
      positionRef.current.mouseY = clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={light} id="mouse-light"></div>;
};

export default MouseLight;
