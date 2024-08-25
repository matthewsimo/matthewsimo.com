"use client";
import { gridClass } from "@/lib/class-utils";
import { usePathname } from "next/navigation";
import ToggleDarkModeButton from "./toggle-dark-mode-button";
import Link from "next/link";
import Nav from "./nav";

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className={`${gridClass} py-14 md:py-20 z-10 relative`}>
      <div
        className={`flex flex-row gap-4 ${
          pathname !== "/" ? "justify-between" : "justify-end"
        } items-baseline md:items-center h-8`}
      >
        {pathname !== "/" && (
          <div className="flex flex-row grow items-center justify-between gap-12 md:gap-8">
            <h1 className="font-semibold text-2xl">
              <Link href="/">Matthew&nbsp;Simo</Link>
            </h1>
            <Nav />
          </div>
        )}
        <ToggleDarkModeButton />
      </div>
    </nav>
  );
};

Header.displayName = "Header";

export default Header;
