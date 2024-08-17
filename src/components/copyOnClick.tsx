"use client";

import { waitFor } from "@/lib/utils";
import { ButtonHTMLAttributes, PropsWithChildren, useState } from "react";

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
        className={`${className} ${
          !copyMsg ? "cursor-copy" : "cursor-default"
        }`}
        onClick={handleClick}
      >
        {props.children}
      </button>
      {copyMsg === "Success" && (
        <span className="inline-block px-0.5">Copied!</span>
      )}
      {copyMsg === "Error" && (
        <span className="inline-block px-0.5">Error Copying!</span>
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
