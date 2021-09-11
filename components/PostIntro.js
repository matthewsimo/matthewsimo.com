import { useCallback, useEffect, useState } from 'react';
import Heading from './Heading';
import format from 'date-fns/format';

export default function PostIntro({ post }) {
  const [opacityValue, setOpacityValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacityValue(100);
    }, 50);

    return () => setOpacityValue(0);
  }, []);

  const handleScroll = useCallback((e) => {
    const { scrollY, innerHeight } = window;
    const modifier =
      scrollY > innerHeight ? 1 : Number(scrollY / innerHeight).toFixed(3);

    document.documentElement.style.setProperty(
      `--scroll-position-blur`,
      `${50 * modifier}px`
    );

    // constrain this to values in 0.6 to 0.85
    document.documentElement.style.setProperty(
      `--scroll-modifier`,
      `${(0.85 - 0.6) * modifier + 0.6}`
    );
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [Y, M, D] = post.date.split('-');
  const postDate = format(new Date(Y, M - 1, D), 'MMMM d, yyyy');

  return (
    <>
      <div className="relative w-full h-screen max-h-screen -mt-40 px-6 sm:px-8 md:px-10 lg:px-16 flex items-center justify-center overflow-scroll">
        <div
          className={`opacity-${opacityValue} transition-opacity duration-700 ease-in-out relative grid grid-cols-6 grid-row-2 text-main border-4 border-main z-10 shadow-lg backdrop-blur-lg sm:max-w-3/4 pr-4`}
        >
          <div className="row-span-2 col-span-1 flex items-center justify-center mr-4 border-r-4 border-main">
            <span className=" -rotate-90 transform-gpu relative inline-block font-bold leading-relaxed tracking-widest text-xl">
              {post.id}
            </span>
          </div>
          <Heading level="2" className="row-span-1 col-span-5 mt-4 mb-2">
            {post.title}
          </Heading>
          <h4 className="row-span-1 col-span-5 mb-4 italic text-lg sm:text-xl font-extralight tracking-tight">
            <time dateTime={post.date} className="whitespace-nowrap">
              {postDate}
            </time>{' '}
            |{' '}
            <span className="whitespace-nowrap">~{post.readingTime.text}</span>
          </h4>
        </div>
      </div>

      <div
        className="fixed inset-0 pointer-events-none w-screen h-screen max-w-vw max-h-screen bg-cover bg-center bg-no-repeat items-center justify-center before:block before:w-full before:h-full before:bg-main-900 before:bg-opacity-scroll before:backdrop-filter before:backdrop-contrast-125 before:backdrop-saturate-150 before:backdrop-blur-scroll before:absolute"
        style={{
          backgroundImage: `url(${post.img})`
        }}
      ></div>
    </>
  );
}
