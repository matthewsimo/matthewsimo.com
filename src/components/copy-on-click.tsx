"use client";

import { cn, waitFor } from "@/lib/utils";
import { ButtonHTMLAttributes, PropsWithChildren, useState } from "react";
import Clipboard from "@/components/icons/clipboard";
import { motion } from "framer-motion";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  copyText: string;
};
const CopyOnClick = (props: Props) => {
  const { copyText, className = "", ...rest } = props;
  const [copyMsg, setCopyMsg] = useState<string | false>(false);

  const handleClick = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(`${copyText}`);
      setCopyMsg("Success");
      await waitFor(3000);
      setCopyMsg(false);
    } catch (error) {
      console.log("copy failed!", error);
      setCopyMsg("Error");
      await waitFor(3000);
      setCopyMsg(false);
    }
  };

  return (
    <>
      <button
        className={cn(
          "inline-flex gap-0.5 fill-current",
          !copyMsg ? "cursor-copy" : "cursor-default",
          className
        )}
        onClick={handleClick}
      >
        {props.children}
        <Clipboard className="w-5 h-5" />
      </button>
      {copyMsg === "Success" && (
        <motion.span
          animate={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 2.75 }}
          className="inline-block px-1"
        >
          Copied!
        </motion.span>
      )}
      {copyMsg === "Error" && (
        <motion.span
          animate={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 2.75 }}
          className="inline-block px-1"
        >
          Error Copying!
        </motion.span>
      )}
    </>
  );
};

// <span
//   className={`${anchorClass} inline-block ${
//     !copyMsg ? "cursor-copy" : "cursor-default"
//   }`}
//   onClick={handleClick}
// >
// </span>
// {copyMsg === "Success" && (
//   <span className="inline-block">Copied!</span>
// )}
// {copyMsg === "Error" && (
//   <span className="inline-block">Error Copying!</span>
// )}

CopyOnClick.displayName = "CopyOnClick";

export default CopyOnClick;
