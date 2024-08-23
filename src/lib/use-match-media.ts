import { useRef } from "react";

export const useMatchMedia = (query: string): boolean => {
  // if (typeof window === "undefined") return false;
  const matchMediaRef = useRef<MediaQueryList>();

  if (typeof window === "undefined") return false;
  matchMediaRef.current = window.matchMedia(query);
  return matchMediaRef.current.matches;
};
