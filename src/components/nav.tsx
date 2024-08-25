import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, scrollTo, waitFor } from "@/lib/utils";
import { AnchorHTMLAttributes, PropsWithChildren, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import Menu from "./icons/menu";
import Close from "./icons/close";

const menuClass = `menu text-lg grid grid-cols-1 sm:grid-cols-3 sm:text-center relative `;
const menuIndicatorClass = `menu-indicator transition-all duration-250 ease-in-out-back opacity-0 translate-x-full -translate-y-4 block absolute rounded-sm h-2 w-1/3 -top-6 bg-main-primary`;
const menuItemClass = `menu-item relative `;
const currentClass = `is-current text-main-primary`;
const headerAnchorClass = `px-5 py-2 underline-offset-auto hover:underline`;

const NavItem = ({
  href = "#",
  className = "",
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  const pathname = usePathname();
  const isPage = (path: string): string => {
    return pathname.startsWith(path) ? currentClass : "";
  };
  return (
    <li className={`${menuItemClass} ${isPage(href as string)}`}>
      <Link
        className={cn(headerAnchorClass, className)}
        href={href}
        {...props}
      />
    </li>
  );
};

const Nav = () => {
  const [justClicked, setJustClicked] = useState<boolean>(false);
  const [open, setIsOpen] = useState<boolean>(false);

  const onClickDesktop = async () => {
    scrollTo();
    setJustClicked(true);
    await waitFor(250);
    setJustClicked(false);
  };

  const onClickMobile = async () => {
    scrollTo();
    setIsOpen(false);
  };

  return (
    <>
      <div className="hidden sm:flex flex-row gap-6 items-center">
        <ul
          className={`${menuClass} ${justClicked && "[&_>_span]:bg-main-700"}`}
        >
          <NavItem onClick={onClickDesktop} href="/about">
            About
          </NavItem>
          <NavItem onClick={onClickDesktop} href="/posts">
            Posts
          </NavItem>
          <NavItem onClick={onClickDesktop} href="/projects">
            Projects
          </NavItem>
          <span className={`${menuIndicatorClass}`} aria-hidden="true" />
        </ul>
      </div>
      <div className="sm:hidden relative">
        <Drawer open={open} onClose={() => setIsOpen(false)}>
          <DrawerTrigger
            className="text-main fill-current text-2xl my-1 w-5 h-5 ${focusClass}"
            onClick={() => setIsOpen(true)}
          >
            <Menu aria-label="Open Menu Button" />
          </DrawerTrigger>
          <DrawerContent
            className="max-h-dvh"
            onOverlayClick={() => setIsOpen(false)}
          >
            <DrawerTitle className="sr-only">Menu</DrawerTitle>
            <DrawerDescription className="sr-only">
              Main navigation
            </DrawerDescription>
            <div>
              <ul className={`${menuClass} space-y-8`}>
                <NavItem
                  className="text-3xl"
                  onClick={onClickMobile}
                  href="/about"
                >
                  About
                </NavItem>
                <NavItem
                  className="text-3xl"
                  onClick={onClickMobile}
                  href="/posts"
                >
                  Posts
                </NavItem>
                <NavItem
                  className="text-3xl"
                  onClick={onClickMobile}
                  href="/projects"
                >
                  Projects
                </NavItem>
              </ul>
            </div>
            <DrawerClose
              className="text-main fill-current absolute top-8 right-8 w-6 h-6"
              onClick={() => setIsOpen(false)}
            >
              <Close aria-label="Close Menu Button" />
            </DrawerClose>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

Nav.displayName = "Nav";

export default Nav;
