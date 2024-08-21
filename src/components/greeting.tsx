"use client";
import { useInterval } from "@/lib/use-interval";
import { motion } from "framer-motion";
import { useState } from "react";

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const Greeting = () => {
  const [wght, setWght] = useState<number>(500);
  const [italic, setItalic] = useState<number>(0);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [size, setSize] = useState<number>(128);

  useInterval(() => {
    setSize(getRandomInt(96, 160));
  }, 5000);

  useInterval(() => {
    setWght(getRandomInt(100, 900));
  }, 750);
  useInterval(() => {
    setItalic(getRandomInt(0, 2));
  }, 1250);
  useInterval(() => {
    setLetterSpacing(getRandomFloat(-1.42, 1.42));
  }, 500);

  return (
    <motion.span
      initial={false}
      style={{
        fontSynthesis: "none",
      }}
      animate={{
        fontSize: `${size}px`,
        fontVariationSettings: `"wght" ${wght}`,
        letterSpacing: `${letterSpacing}rem`,
        fontStyle: italic ? "italic" : "normal",
      }}
    >
      Howdy
    </motion.span>
  );
};

Greeting.displayName = "Greeting";

export default Greeting;
