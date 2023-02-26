import { useEffect } from 'react';
import gsap from 'gsap';

export const useGsapContext = (func, deps) => {
  useEffect(() => {
    const ctx = gsap.context(func);

    return () => {
      ctx?.revert();
    };
  }, deps);
};
