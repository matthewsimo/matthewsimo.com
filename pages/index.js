import Head from "next/head";
import { useTheme } from "../src/lib/theme";
import PageFrame from "../src/components/PageFrame";
import Icon from "../src/components/Icon";
import { Settings } from "react-feather";

const Home = (props) => {
  const theme = useTheme();
  console.log({ props, theme });
  return (
    <PageFrame>
      <Head>
        <title>Matthew Simo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <h1>Matthew Simo</h1>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Posts</a>
            </li>
            <li>
              <a href="#">Ideas</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
        <Settings size={24} strokeWidth={1} />
      </header>

      <main>
        <h3>Howdy!</h3>
        <h1>I'm Matthew Simo & I love building things for humanoids.</h1>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
        <p>
          I'm a UX Designer & Software Engineer based in Houston, Texas. You can
          usually find me explroing the intersection of computers and humans,
          regardless if that means the web, mobile or spatial computing.
        </p>
      </main>

      <footer>
        <div>
          <h2>Matthew Simo</h2>
          <p>
            Made in Texas
            <Icon
              title="Texas Icon - Icon made by Good Ware from www.flaticon.com"
              width="18"
              height="18"
              link="/icons/texas.svg#texas"
            />
          </p>
        </div>
        <small>
          &copy; &infin; Matthew Simo. Inspire. Attribute. Be cool. Don't steal.
          &hearts;
        </small>
      </footer>
    </PageFrame>
  );
};

export default Home;
