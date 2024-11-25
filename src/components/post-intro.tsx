"use client";

import { format } from "date-fns";
import { useEffect } from "react";

type Post = {
  id: string;
  title: string;
  img?: string;
  date: string;
  readingTime: {
    text: string;
  };
};
const PostIntro = ({ post }: { post: Post }) => {
  const [Y, M, D] = post.date.split("-");
  const postDate = format(
    new Date(Number(Y), Number(M) - 1, Number(D)),
    "MMMM d, yyyy"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollArea = window.document.querySelector(
        `[data-radix-scroll-area-viewport]`
      );
      const scrollY = scrollArea ? scrollArea.scrollTop : 0;
      const { innerHeight } = window;
      const modifier =
        scrollY > innerHeight
          ? 1
          : Number(Number(scrollY / innerHeight).toFixed(3));

      document.documentElement.style.setProperty(
        `--scroll-position-blur`,
        `${50 * modifier}px`
      );

      // constrain this to values in 0.6 to 0.85
      document.documentElement.style.setProperty(
        `--scroll-modifier`,
        `${(0.85 - 0.6) * modifier + 0.6}`
      );
    };

    handleScroll();

    const scrollArea = window.document.querySelector(
      `[data-radix-scroll-area-viewport]`
    );

    if (scrollArea) {
      scrollArea.addEventListener("scroll", handleScroll);
      return () => scrollArea.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <div className="z-10 relative w-full mt-[-224px] h-screen max-h-screen px-6 sm:px-8 md:px-10 lg:px-16 flex items-center justify-center">
        <div
          className={`relative grid grid-cols-6 grid-row-2 text-main border-4 border-main z-10 shadow-lg backdrop-blur-lg sm:max-w-3/4 pr-4`}
        >
          <div className="row-span-2 col-span-1 flex items-center justify-center mr-4 border-r-4 border-main">
            <span className=" -rotate-90 transform-gpu relative inline-block font-bold leading-relaxed tracking-widest text-xl">
              {post.id}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl leading-relaxed tracking-tighter row-span-1 col-span-5 mt-4 mb-2">
            {post.title}
          </h2>
          <h4 className="row-span-1 col-span-5 mb-4 italic text-lg sm:text-xl font-extralight tracking-tight">
            <time dateTime={post.date} className="whitespace-nowrap">
              {postDate}
            </time>{" "}
            |{" "}
            <span className="whitespace-nowrap">~{post.readingTime.text}</span>
          </h4>
        </div>
      </div>

      <div
        className="fixed inset-0 pointer-events-none w-screen h-screen max-w-vw max-h-screen bg-cover bg-center bg-no-repeat items-center justify-center before:block before:w-full before:h-full before:bg-main-900 before:bg-opacity-scroll before:backdrop-filter before:backdrop-contrast-125 before:backdrop-saturate-150 before:backdrop-blur-scroll before:absolute"
        style={{ backgroundImage: `url(${post.img})`, zIndex: 0 }}
      />
    </>
  );
};

PostIntro.displayName = "PostIntro";

export default PostIntro;
