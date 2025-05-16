import CopyOnClick from "@/components/copy-on-click";
import Link from "@/components/link";
import { anchorClass, codeClass, gridClass } from "@/lib/class-utils";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import Image from "next/image";
import ClientsList from "./clients";
import BlurFade from "@/components/blur-fade";

export default function About() {
  const benBday = formatDistanceToNow(new Date(2020, 5, 30));
  const henryBday = formatDistanceToNow(new Date(2022, 8, 13));
  const username = `matthewsimo`;
  const discordId = `#7931`;

  return (
    <BlurFade>
      <article className={`${gridClass}`}>
        <div className="space-y-6 pb-10">
          <h1 className="text-4xl font-semibold">About</h1>
          <div>
            <Image
              className="aspect-square w-1/2 sm:w-64 bg-slate-600 float-right ml-6 mb-6 rounded-xl"
              src="/img/matthewsimo-avatar.png"
              width={400}
              height={400}
              alt="Matthew Simo Mugshot"
            />
          </div>
          <p>
            Hi there, I&apos;m Matthew. <em>I fight for the user!</em> I&apos;m
            a born and raised Texan and have been building things for the web
            for over fifteen years.
          </p>

          <p>
            I like to contribute to digital interactive experiences that delight
            and enrich people&apos;s lives. I primarily think of myself as a
            developer but have a special interest in making sure the UX and
            accessibity of the things I build are top notch too. Recently,
            I&apos;ve been focusing on building and scaling teams.
          </p>

          <p>
            I&apos;m a father of two beautiful boys, one is {benBday} old & the
            other is {henryBday} old! I enjoy reading, rock climbing, and taking
            my dog, Jayne girl, on walks.
          </p>

          <p>
            You can find out more about the tools I like to{" "}
            <Link href="/uses">use and my general set up over here</Link>.
          </p>
        </div>

        <div className="space-y-6 pb-10">
          <h2 className="text-2xl font-semibold">Selected Clients</h2>

          <p>
            I&apos;ve had the good fortune of working with some fabulous clients
            and IP, here is a small, curated list. You can see a list of
            selected <Link href="/projects">projects over here</Link>.
          </p>

          <ClientsList />
        </div>

        <div className="space-y-6 pb-10">
          <h2 className="text-2xl font-semibold">Elsewhere</h2>

          <ul>
            <li>
              Email:{" "}
              <Link
                href={`mailto:hi@${username}.com?subject=Howdy, I saw your site`}
              >
                hi@{username}.com
              </Link>
            </li>
            <li>
              Mastodon:{" "}
              <Link href={`https://mastodon.social/@${username}`}>
                @{username}
              </Link>
            </li>
            <li>
              Bluesky:{" "}
              <Link href={`https://bsky.app/profile/${username}.com`}>
                @{username}.com
              </Link>
            </li>
            <li>
              GitHub:{" "}
              <Link href={`http://github.com/${username}`}>{username}</Link>
            </li>
            <li>
              Discord:{" "}
              <CopyOnClick
                className={anchorClass}
                copyText={`${username}${discordId}`}
              >
                <span>
                  {username}
                  <span className="text-main-400">{discordId}</span>
                </span>
              </CopyOnClick>
            </li>
          </ul>
        </div>

        <div className="space-y-6 pb-10">
          <h2 className="text-2xl font-semibold">This Site</h2>
          <p>
            This site is designed and built by myself with the purpose of being{" "}
            <strong className="font-semibold">uncomplicated</strong>,{" "}
            <strong className="font-semibold">flexible</strong>, and{" "}
            <strong className="font-semibold">low-maintenance</strong>. I want
            to maintain a low level of complexity and keep the number of
            technologies to a minimum. Another goal is that this site acts as a
            creative outlet for self expressions and I don&apos;t know where I
            want to take things in the future so I don&apos;t want to limit
            creativity or possibilities. Since I&apos;ve got other stuff higher
            on my priority list, I need things to &quot;just work&quot; with as
            little tinkering as possible &mdash; I want to write and experiment
            not fiddle with a site that is supposed to allow me to write and
            experiment.
          </p>
          <p>
            It is built with React &{" "}
            <Link href="https://nextjs.org/">Next.js</Link>. Styled with{" "}
            <Link href="https://tailwindcss.com/">tailwindcss</Link>.
          </p>
          <p>
            Articles are written in{" "}
            <Link href="https://www.markdownguide.org/">markdown</Link> and
            processed by{" "}
            <Link href="https://nextjs.org/docs/pages/building-your-application/configuring/mdx#rendering-mdx">
              mdx
            </Link>
            .
          </p>
          <p>
            Any icons used are from the fantastic{" "}
            <Link href="https://akveo.github.io/eva-icons/">Eva Icons</Link>{" "}
            set.
          </p>

          <p>
            I&apos;ve opted to keep dependencies that need to load to a minimum
            so I&apos;m having <Link href="https://rsms.me/inter/">Inter</Link>
            to the heavy lifting for headings and body copy. I&apos;ve set the
            general type with the following stack:
            <code className={codeClass}>
              &apos;Inter&apos;, ui-sans-serif, system-ui, -apple-system,
              BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica
              Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple
              Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI
              Symbol&quot;, &quot;Noto Color Emoji&quot;;
            </code>
          </p>

          <p>
            And for monospace needs, I&apos;m using:
            <code className={codeClass}>
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              &quot;Liberation Mono&quot;, &quot;Courier New&quot;, monospace
            </code>
          </p>
        </div>
      </article>
    </BlurFade>
  );
}
