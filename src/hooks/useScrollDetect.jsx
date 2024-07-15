import React, { useEffect, useState, useRef } from "react";

const UseScrollDetect = () => {
  const [scrollDetect, setScrollDetect] = useState(null);
  const prevScroll = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    prevScroll.current > window.scrollY
      ? setScrollDetect("Mouse UP")
      : setScrollDetect("Mouse DOWN");

    prevScroll.current = window.scrollY;
  };
  return scrollDetect;
};

export default UseScrollDetect;
