import { gridClass } from "@/lib/class-utils";
import Link from "./link";
import Texas from "./icons/texas";

const Footer = () => (
  <footer className={`pt-24 pb-20 z-10 relative ${gridClass}`}>
    <small>
      &copy; {new Date().getFullYear()} <Link href="/about">Matthew Simo</Link>{" "}
      &mdash; Made in Texas
      <span
        className="inline-block w-6 align-middle mx-1"
        title="Texas Icon - Icon made by Good Ware from www.flaticon.com"
      >
        <Texas />
      </span>
      <Link href="/feed.xml" aria-label="RSS Feed">
        <span className="p-1 align-baseline relative -top-[1px]">
          <svg
            className="inline-block w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
          </svg>
        </span>
      </Link>
    </small>
  </footer>
);

Footer.displayName = "Footer";

export default Footer;
