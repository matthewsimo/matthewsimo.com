import { Component } from "react";
import ThemeEditor from "../src/components/ThemeEditor";
import { css } from "linaria";
import { defaultTheme, ThemeProvider } from "../src/lib/theme";

//const parseVars = (vars) =>
//  Object.keys(vars).reduce((acc, cV, index) => {
//    console.log({ parseVars: true, cV, tVal: typeof vars[cV], val: vars[cV] });
//    return typeof vars[cV] !== "function"
//      ? acc.concat(`--${cV.toLowerCase()}: ${vars[cV]};\r`)
//      : acc.concat(`/* nada */`);
//  }, "");
//
const generateThemeVars = (theme) => {
  const varsObj = Object.keys(theme).reduce((acc, cV, index) => {
    console.log({
      cV,
      type: typeof cV,
      val: theme[cV],
      valType: typeof theme[cV],
    });
    if (typeof theme[cV] === "object") {
      Object.keys(theme[cV]).reduce((keyAcc, keyCV, index) => {
        if (typeof theme[cV][keyCV] === "object") {
          console.log("too deep make this recursive");
        } else if (typeof theme[cV][keyCV] === "function") {
          // nothing
        } else {
          const newKey = cV.concat(`-${keyCV}`);
          console.log({ newKey });
          acc[`--${newKey}`] = theme[cV][keyCV];
        }
      }, acc);
    } else if (typeof theme[cV] === "function") {
      // nothing
    } else {
      acc[`--${cV}`] = theme[cV];
    }
    return acc;
  }, {});

  //  const vars = parseVars(varsObj);
  //  console.log({ varsObj, vars });
  return varsObj;
};

//const toCSSProps = (obj) =>
//  Object.keys(obj).forEach((v) => {
//    console.log(v, typeof obj[v], obj[v]);
//    if (typeof obj[v] !== "function") {
//      console.log(`adding: --${v} ${obj[v]}`);
//      document.documentElement.style.setProperty(`--${v}`, obj[v]);
//    }
//  });

class App extends Component {
  //  componentDidMount() {
  //    const vars = generateThemeVars(defaultTheme);
  //    Object.keys(vars).forEach((v) => {
  //      console.log(v, typeof vars[v], vars[v]);
  //      if (typeof vars[v] !== "function") {
  //        console.log(`adding: --${v} ${vars[v]}`);
  //        document.documentElement.style.setProperty(`--${v}`, vars[v]);
  //      }
  //    });
  //  }

  render() {
    const { Component, pageProps } = this.props;

    const vars = generateThemeVars(defaultTheme);
    console.log(vars);

    const globals = css`
      :global {
        html {
          ${vars}
        }
        html {
          @import url(https://rsms.me/inter/inter.css);
          font-family: var(--fonts-normal);
          @supports (font-variation-settings: normal) {
            font-family: var(--fonts-variable);
          }
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background: hsl(var(--colors-0), 1);
          color: hsl(var(--colors-0), 1);
        }
        a {
          color: hsl(var(--colors-primary), 1);
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }
      }
    `;

    return (
      <ThemeProvider>
        <Component {...pageProps} />

        <ThemeEditor>
          <h2>Colors</h2>
          <h2>Scales</h2>
          <h2>Scales</h2>
        </ThemeEditor>
      </ThemeProvider>
    );
  }
}

export default App;
