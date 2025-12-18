import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Har baar URL badalne par is component ko trigger karein
  const { pathname } = useLocation();

  useEffect(() => {
    // Screen ko top par scroll karein (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi 'pathname' badle, yeh effect chalega

  return null; // Yeh component screen par kuch nahi dikhata
};

export default ScrollToTop;
