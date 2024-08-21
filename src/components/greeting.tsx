"use client";
import { useInterval } from "@/lib/use-interval";
import { getRandomFloat, getRandomInt } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const Greeting = () => {
  const [wght, setWght] = useState<number>(500);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [size, setSize] = useState<number>(128);
  const [opsz, setOpsz] = useState<number>(14);

  useInterval(() => {
    setSize(getRandomInt(96, 160));
    setWght(getRandomInt(100, 900));
    setLetterSpacing(getRandomFloat(-1.42, 1.42));
    setOpsz(getRandomInt(14, 32));
  }, 1250);

  return (
    <>
      <motion.span
        initial={false}
        style={{
          fontSynthesis: "none",
        }}
        animate={{
          fontSize: `${size}px`,
          fontVariationSettings: `"wght" ${wght}, "opsz" ${opsz}`,
          letterSpacing: `${letterSpacing}rem`,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        Howdy
      </motion.span>
    </>
  );
};

Greeting.displayName = "Greeting";

export default Greeting;
