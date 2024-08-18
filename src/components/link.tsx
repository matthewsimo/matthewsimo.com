import { anchorClass, focusClass } from "@/lib/class-utils";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";

const Link = (
  props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
) => {
  const { href, children, className, ...rest } = props;

  const allClasses = className
    ? `${focusClass} ${className}`
    : `${focusClass} ${anchorClass}`;
  const isInternal =
    href &&
    (href.startsWith("/") || href.startsWith("#") || href.startsWith("."));

  return (
    <a
      href={href}
      className={`${allClasses} group whitespace-nowrap `}
      target={isInternal ? "_self" : `_blank`}
      {...rest}
    >
      {children}
      {!isInternal && (
        <span className="inline-block w-5 ml-[2px] align-middle group-hover:motion-safe:animate-pulse">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 18V12C19 11.448 19.447 11 20 11C20.553 11 21 11.448 21 12V18C21 19.654 19.654 21 18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H12C12.553 3 13 3.448 13 4C13 4.552 12.553 5 12 5H6C5.448 5 5 5.449 5 6V18C5 18.551 5.448 19 6 19H18C18.552 19 19 18.551 19 18ZM17.5781 5.008L15.9951 5C15.4421 4.997 14.9971 4.547 15.0001 3.995C15.0031 3.444 15.4501 3 16.0001 3H16.0051L20.0021 3.02C20.5521 3.023 20.9971 3.469 20.9971 4.019L21.0001 7.999C21.0001 8.552 20.5531 9 20.0011 9H20.0001C19.4481 9 19.0001 8.553 19.0001 8.001L18.9991 6.415L12.7071 12.707C12.5121 12.902 12.2561 13 12.0001 13C11.7441 13 11.4881 12.902 11.2931 12.707C10.9021 12.316 10.9021 11.684 11.2931 11.293L17.5781 5.008Z"
              fill="currentColor"
            />
            <mask
              id="mask0_0_1841"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="3"
              y="3"
              width="19"
              height="18"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 18V12C19 11.448 19.447 11 20 11C20.553 11 21 11.448 21 12V18C21 19.654 19.654 21 18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H12C12.553 3 13 3.448 13 4C13 4.552 12.553 5 12 5H6C5.448 5 5 5.449 5 6V18C5 18.551 5.448 19 6 19H18C18.552 19 19 18.551 19 18ZM17.5781 5.008L15.9951 5C15.4421 4.997 14.9971 4.547 15.0001 3.995C15.0031 3.444 15.4501 3 16.0001 3H16.0051L20.0021 3.02C20.5521 3.023 20.9971 3.469 20.9971 4.019L21.0001 7.999C21.0001 8.552 20.5531 9 20.0011 9H20.0001C19.4481 9 19.0001 8.553 19.0001 8.001L18.9991 6.415L12.7071 12.707C12.5121 12.902 12.2561 13 12.0001 13C11.7441 13 11.4881 12.902 11.2931 12.707C10.9021 12.316 10.9021 11.684 11.2931 11.293L17.5781 5.008Z"
                fill="transparent"
              />
            </mask>
            <g mask="url(#mask0_0_1841)">
              <rect fill="currentColor" />
            </g>
          </svg>
        </span>
      )}
    </a>
  );
};

Link.displayName = "Link";

export default Link;
