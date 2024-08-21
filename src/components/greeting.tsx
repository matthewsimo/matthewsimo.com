"use client";
import { useInterval } from "@/lib/use-interval";
import { getRandomFloat, getRandomInt, waitFor } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Greeting = () => {
  const [wght, setWght] = useState<number>(500);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [opsz, setOpsz] = useState<number>(14);
  const loop = 3000;

  const animationCycle = async () => {
    setWght(getRandomInt(100, 900));
    await waitFor(loop / 3);
    setLetterSpacing(getRandomFloat(-1.42, 1.42));
    await waitFor(loop / 3);
    setOpsz(getRandomInt(14, 32));
  };

  useEffect(() => {
    animationCycle();
  }, []);

  useInterval(animationCycle, loop);

  return (
    <>
      <motion.span
        className="text-[128px]"
        initial={false}
        style={{
          fontSynthesis: "none",
        }}
        animate={{
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
