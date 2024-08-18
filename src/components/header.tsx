"use client";
import { gridClass } from "@/lib/class-utils";
import { waitFor } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ToggleDarkModeButton from "./toggle-dark-mode-button";

const menuClass = `menu text-lg grid grid-cols-3 text-center relative `;
const menuIndicatorClass = `menu-indicator transition-all duration-250 ease-in-out-back opacity-0 translate-x-full -translate-y-4 block absolute rounded-sm h-2 w-1/3 -top-6 bg-main-primary`;
const menuItemClass = `menu-item relative `;
const currentClass = `is-current text-main-primary`;
const headerAnchorClass = `px-5 py-2 underline-offset-auto hover:underline`;

const Header = () => {
  const [justClicked, setJustClicked] = useState<boolean>(false);
  const pathname = usePathname();
  const isPage = (path: string): boolean => {
    return pathname.startsWith(path);
  };

  const onClick = async () => {
    setJustClicked(true);
    await waitFor(250);
    setJustClicked(false);
  };
  return (
    <nav className={`${gridClass} py-20 z-10 relative`}>
      <div className="flex flex-row justify-between items-baseline md:items-center">
        <div className="flex flex-col gap-12 md:flex-row md:gap-8">
          <h1 className="font-semibold text-2xl">
            <a href="/">Matthew&nbsp;Simo</a>
          </h1>
          <div className="flex flex-row gap-6 items-center">
            <ul
              className={`${menuClass} ${
                justClicked && "[&_>_span]:bg-main-700"
              }`}
            >
              <li
                className={`${menuItemClass} ${
                  isPage("/about") ? currentClass : ""
                }`}
              >
                <a
                  onClick={onClick}
                  className={headerAnchorClass}
                  href="/about"
                >
                  About
                </a>
              </li>
              <li
                className={`${menuItemClass} ${
                  isPage("/posts") ? currentClass : ""
                }`}
              >
                <a
                  onClick={onClick}
                  className={headerAnchorClass}
                  href="/posts"
                >
                  Posts
                </a>
              </li>
              <li
                className={`${menuItemClass} ${
                  isPage("/projects") ? currentClass : ""
                }`}
              >
                <a
                  onClick={onClick}
                  className={headerAnchorClass}
                  href="/projects"
                >
                  Projects
                </a>
              </li>
              <span className={`${menuIndicatorClass}`} aria-hidden="true" />
            </ul>
          </div>
        </div>
        <ToggleDarkModeButton />
      </div>
    </nav>
  );
};

Header.displayName = "Header";

export default Header;
