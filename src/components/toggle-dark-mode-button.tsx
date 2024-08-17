"use client";

import { focusClass } from "@/lib/class-utils";
import { useEffect, useState } from "react";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";

const ToggleDarkModeButton = ({ className = "" }) => {
  const [mode, setMode] = useState<"dark" | "light">("light");
  const [isListenerDisabled, setIsListenerDisabled] = useState<boolean>(false);
  const handleClick = () => {
    const prop = (index: number) => `--primary-lightness-${index}`;
    const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const newValues = indices.map((v, i, a) =>
      getComputedStyle(document.documentElement)
        .getPropertyValue(prop(a[a.length - 1 - i]))
        .trim()
    );

    newValues.map((v, i) => {
      document.documentElement.style.setProperty(prop(i), v);
    });

    if (!isListenerDisabled) {
      setIsListenerDisabled(true);
    }

    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const matchListener = (e: MediaQueryListEvent) => {
      if (isListenerDisabled) return;
      setMode(e.matches ? "dark" : "light");
    };

    if (!window.matchMedia) return;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDark.matches) {
      setMode("dark");
    }

    if (isListenerDisabled) {
      prefersDark.removeEventListener("change", matchListener);
    } else {
      prefersDark.addEventListener("change", matchListener);
    }
    return () => prefersDark.removeEventListener("change", matchListener);
  }, []);

  return (
    <button
      aria-label="toggle color mode"
      className={`text-main fill-current text-2xl w-5 h-5 ${focusClass} ${className} `}
      onClick={handleClick}
    >
      {mode === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

ToggleDarkModeButton.displayName = "ToggleDarkModeButton";

export default ToggleDarkModeButton;
