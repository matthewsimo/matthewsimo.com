import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useMatchMedia } from "./use-match-media";

export const usePrefersTheme = () => {
  const [isListenerDisabled, setIsListenerDisabled] = useState(false);
  const matches = useMatchMedia("(prefers-color-scheme: dark)");
  const { theme, setTheme } = useTheme();

  // Update theme when system preference changes, unless user has manually changed theme
  useEffect(() => {
    if (isListenerDisabled) return;
    setTheme(matches ? "dark" : "light");
  }, [matches, setTheme, isListenerDisabled]);

  return { theme, setTheme, isListenerDisabled, setIsListenerDisabled };
};
