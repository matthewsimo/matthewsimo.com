"use client";

import { focusClass } from "@/lib/class-utils";
import Sun from "./icons/sun";
import Moon from "./icons/moon";
import { useTheme } from "next-themes";
import Mounted from "./mounted";

const ToggleDarkModeButton = ({ className = "" }) => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
