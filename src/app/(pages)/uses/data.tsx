import Link from "@/components/link";
import { anchorClass } from "@/lib/class-utils";
import { ReactNode } from "react";

type item = {
  name: string;
  desc: () => ReactNode;
};
type section = {
  title: string;
  items: item[];
};

export const usesData: section[] = [
  {
    title: "Hardware",
    items: [
      {
        name: `14" M1 MacBook Pro - 64GB - 1TB`,
        desc: () => `My personal laptop and primary development machine. A wonderfully
            productive device regardless if it is plugged into multiple monitors
            or mobile.`,
      },
      {
        name: `Sony WH1000XM2`,
        desc: () =>
          `I've had this pair for years and I will not travel without them. The noise canceling is astounding and they are just ridiculously good from a price to performance perspective. I hear the newer versions from this series are just as good with some added quality of life features but these have never let me down yet.`,
      },
      {
        name: `Logitech G305`,
        desc: () =>
          `A great little mouse. Super cheap, reliable, and travels well.`,
      },
      {
        name: `CODE Keyboard`,
        desc: () =>
          `This has been my daily driver for a long time. Cherry MX Clear switches.`,
      },
      {
        name: `ZSA Moonlander Mark 1`,
        desc: () =>
          `Recently picked this up and am slowly introducing it into my workflows but it's been a real adjustment!`,
      },
    ],
  },
  {
    title: "Software",
    items: [
      {
        name: `VS Code`,
        desc: () =>
          `My primary editor due to it's general support and development pace. My setup uses Solarized Dark theme, Fira Code font, and the VSSpaceCode (Spacemacs like keybindings) extension beyond the more ubiquitous extensions.`,
      },
      {
        name: `iTerm2`,
        desc: () => (
          <>
            The best terminal I've found, rides the balance between configurable
            & overly compelex well. My dotfiles are{" "}
            <Link
              className={anchorClass}
              href="https://github.com/matthewsimo/dotfiles"
            >
              over here
            </Link>
          </>
        ),
      },
      {
        name: `Raycast`,
        desc: () =>
          `I used Alfred for years but switched to Raycast this past year because it is faster and easier to mold to my workflows/extend.`,
      },
      {
        name: `Fig`,
        desc: () =>
          `Fun little terminal auto-complete tool that I also started using this year. Removes some friction and helps with productivity, I do recommend.`,
      },
      {
        name: `Cleanshot`,
        desc: () =>
          `I was using cloudapp for years but their quality took a nose dive in recent years and didn't get any new/useful features. I took a chance on Cleanshot and it's been a great experience so far - not looking back!`,
      },
      {
        name: `Magnet`,
        desc: () =>
          `It's the missing window management hotkeys you need to touch your mouse as little as possible.`,
      },
    ],
  },
  // {
  // 	title: `Accessories/Misc`,
  // 	items: []
  // }
];
