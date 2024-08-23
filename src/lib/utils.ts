import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const waitFor = (num: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, num));
};

export function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
