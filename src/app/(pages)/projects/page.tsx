import { anchorClass, gridClass } from "@/lib/class-utils";
import LinkIcon from "@/components/icons/link";
import CodeIcon from "@/components/icons/code";
import BlurFade from "@/components/blur-fade";

/* eslint-disable @next/next/no-img-element */

const projects = [
  {
    title: "Node Vars Figma Plugin",
    link: "https://www.figma.com/community/plugin/1345121556751264927",
    desc: "See what variables your selected nodes are using",
    source: "https://github.com/matthewsimo/figma-node-vars",
    img: `/img/plugin-cover.png`,
  },
  {
    title: "Memento Mori",
    link: "https://memento-mori.matthewsimo.com",
    desc: "Remember, you will die. A small project in an intentional effort to be more mindful of my time on this earth. Memento Mori is a weekly calendar that tracks the progress of your life and hopefully helps promote living more deeply.",
    source: "https://github.com/matthewsimo/memento-mori",
    img: `/img/memento-mori.png`,
  },
  {
    title: "GART",
    link: "https://gart.matthewsimo.com",
    desc: "My simple generative art/creative coding environment built on sveltekit",
    source: "https://github.com/matthewsimo/gart",
    img: undefined,
  },
  {
    title: "40k TT",
    link: "https://40k-tt.vercel.app",
    desc: "Tabletop tool for pretty printing and sharing your 40k battlescribe rosters",
    source: "https://github.com/matthewsimo/tt-site",
    img: undefined,
  },
  {
    title: "Dice Calc",
    link: "https://40k-tt.vercel.app/dice-calc",
    desc: "Simple calculator to see how many of your dice will pass a series of roles on average.",
    source:
      "https://github.com/matthewsimo/tt-site/blob/main/src/routes/dice-calc.svelte",
    img: undefined,
  },
  // Bbbreathe
  //
  {
    title: "Coolors",
    link: "http://coolors.matthewsimo.com/curve",
    desc: "Exploration on picking unified color ramps",
    source: "https://github.com/matthewsimo/coolors",
    img: undefined,
  },
];
export default function Projects() {
  return (
    <BlurFade>
      <article className={`${gridClass}`}>
        <div className="space-y-6 pb-10">
          <h1 className="text-4xl font-semibold">Projects</h1>
          <p>
            The vast majority of my day-to-day work is under NDA so I can&apos;t
            feature it here but here&apos;s a random collection of professional
            and hobby projects.
          </p>
        </div>

        <ul className="space-y-10">
          {projects.map(({ title, link, desc, source, img }) => (
            <li
              key={link}
              className="space-y-2 p-4 hover:bg-gradient-to-br hover:from-main-700/20 hover:to-main-800/20 rounded"
            >
              <h2 className="text-xl font-semibold inline-block">{title}</h2>
              <p className="">{desc}</p>
              <footer className="pt-4">
                <small className="text-sm flex flex-row justify-start flex-wrap gap-4 items-center">
                  {link && (
                    <a
                      className={`${anchorClass} inline-block`}
                      href={link}
                      title={`Visit ${title}`}
                    >
                      <LinkIcon className="inline-block " /> Site
                    </a>
                  )}

                  {source && (
                    <a
                      className={anchorClass}
                      href={source}
                      title={`Source Code for ${title}`}
                    >
                      <CodeIcon className="inline-block" /> Source
                    </a>
                  )}
                </small>
              </footer>
              {img && (
                <a href={link}>
                  <img
                    className="py-4"
                    src={img}
                    alt={`Screenshot of ${title}`}
                  />
                </a>
              )}
            </li>
          ))}
        </ul>
      </article>
    </BlurFade>
  );
}
