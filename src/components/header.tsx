"use client";
import { gridClass } from "@/lib/class-utils";
import { waitFor } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, PropsWithChildren, useState } from "react";
import ToggleDarkModeButton from "./toggle-dark-mode-button";
import Link from "next/link";

const menuClass = `menu text-lg grid grid-cols-3 text-center relative `;
const menuIndicatorClass = `menu-indicator transition-all duration-250 ease-in-out-back opacity-0 translate-x-full -translate-y-4 block absolute rounded-sm h-2 w-1/3 -top-6 bg-main-primary`;
const menuItemClass = `menu-item relative `;
const currentClass = `is-current text-main-primary`;
const headerAnchorClass = `px-5 py-2 underline-offset-auto hover:underline`;

const NavItem = ({
  href = "#",
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  const pathname = usePathname();
  const isPage = (path: string): string => {
    return pathname.startsWith(path) ? currentClass : "";
  };
  return (
    <li className={`${menuItemClass} ${isPage(href as string)}`}>
      <Link className={headerAnchorClass} href={href} {...props} />
    </li>
  );
};

const Header = () => {
  const pathname = usePathname();
  const [justClicked, setJustClicked] = useState<boolean>(false);

  const onClick = async () => {
    setJustClicked(true);
    await waitFor(250);
    setJustClicked(false);
  };

  return (
    <nav className={`${gridClass} py-20 z-10 relative`}>
      <div
        className={`flex flex-row ${
          pathname !== "/" ? "justify-between" : "justify-end"
        } items-baseline md:items-center h-8`}
      >
        {pathname !== "/" && (
          <div className="flex flex-col gap-12 md:flex-row md:gap-8">
            <h1 className="font-semibold text-2xl">
              <Link href="/">Matthew&nbsp;Simo</Link>
            </h1>
            <div className="flex flex-row gap-6 items-center">
              <ul
                className={`${menuClass} ${
                  justClicked && "[&_>_span]:bg-main-700"
                }`}
              >
                <NavItem onClick={onClick} href="/about">
                  About
                </NavItem>
                <NavItem onClick={onClick} href="/posts">
                  Posts
                </NavItem>
                <NavItem onClick={onClick} href="/projects">
                  Projects
                </NavItem>
                <span className={`${menuIndicatorClass}`} aria-hidden="true" />
              </ul>
            </div>
          </div>
        )}
        <ToggleDarkModeButton />
      </div>
    </nav>
  );
};

Header.displayName = "Header";

export default Header;
