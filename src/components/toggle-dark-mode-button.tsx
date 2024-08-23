"use client";

import { focusClass } from "@/lib/class-utils";
import Sun from "./icons/sun";
import Moon from "./icons/moon";
import { useTheme } from "next-themes";
import Mounted from "./mounted";
import { useEffect, useState } from "react";
import { useMatchMedia } from "@/lib/use-match-media";

const ToggleDarkModeButton = ({ className = "" }) => {
  const [isListenerDisabled, setIsListenerDisabled] = useState(false);
  const matches = useMatchMedia("(prefers-color-scheme: dark)");
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (!isListenerDisabled) {
      setIsListenerDisabled(true);
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Update theme when system preference changes, unless user has manually changed theme
  useEffect(() => {
    if (isListenerDisabled) return;
    setTheme(matches ? "dark" : "light");
  }, [matches, setTheme, isListenerDisabled]);

  return (
    <Mounted>
      <button
        aria-label="toggle color mode"
        className={`text-main fill-current text-2xl w-5 h-5 ${focusClass} ${className} `}
        onClick={handleClick}
      >
        {theme === "dark" && <Sun />}
        {theme === "light" && <Moon />}
      </button>
    </Mounted>
  );
};

ToggleDarkModeButton.displayName = "ToggleDarkModeButton";

export default ToggleDarkModeButton;
