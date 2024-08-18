import type { Config } from "tailwindcss";
import twSelectionVariant from "tailwindcss-selection-variant";
import twTypography from "@tailwindcss/typography";

const defaultTheme = require("tailwindcss/defaultTheme");

const color = (lightnessIndex: number, opacityValue = 1): string =>
  `hsla(var(--primary-hue), var(--primary-saturation), var(--primary-lightness-${lightnessIndex}), ${
    opacityValue ? opacityValue : 1
  } )`;

const colorWithOpacity =
  (lightnessIndex: number) =>
  ({ opacityValue = 1 }: { opacityValue: number }): string =>
    color(lightnessIndex, opacityValue);

type ColorMap = Record<string, unknown>;
const colorScale = () => {
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const colorMap: ColorMap = {};

  steps.map((v, i) => {
    // i.e. - 100: colorWithOpacity(0)
    colorMap[`${v}00`] = colorWithOpacity(i);
  });

  return colorMap;
};

const defaultStyle = {
  color: color(0),
  fontWeight: "400",
};

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],

  theme: {
    extend: {
      backdropBlur: {
        scroll: "var(--scroll-position-blur)",
      },
      opacity: {
        scroll: `var(--scroll-modifier)`,
      },
      backgroundColor: {
        main: {
          DEFAULT: color(8),
        },
      },
      borderColor: {
        main: {
          DEFAULT: color(0),
        },
      },
      colors: {
        main: {
          ...colorScale(),
          primary: color(4),
          muted: color(7),
        },
      },
      flex: {
        "1/2": "1 1 50%",
      },
      fontFamily: {
        sans: [`'Inter'`, ...defaultTheme.fontFamily.sans],
        inherit: `inherit`,
      },
      gridTemplateColumns: {
        page: `1fr min(68ch, 100%) 1fr`,
      },
      margin: {
        "-container": "calc((-1 * (100vw - 1024px) / 2) - 4rem)",
        "-container+p": "calc((-1 * (100vw - 1280px) / 2) + 4rem)",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      ringColor: {
        main: {
          DEFAULT: color(3),
        },
      },
      ringOffsetColor: {
        main: {
          DEFAULT: color(8),
        },
      },
      rotate: {
        720: "720deg",
      },
      textColor: {
        main: {
          DEFAULT: color(0),
        },
      },
      transitionTimingFunction: {
        "in-out-back": "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: color(0),
            fontWeight: 300,
            a: {
              color: color(4),
              textDecoration: "none",
              "&:hover": {
                color: color(3),
                textDecoration: "underline",
              },
              "&:focus": {
                color: color(3),
                textDecoration: "underline",
              },
            },
            "small a": {
              color: color(2),
              textDecoration: "none",
              fontWeight: "inherit",
              "&:hover": {
                color: color(1),
                textDecoration: "underline",
              },
              "&:focus": {
                color: color(1),
                textDecoration: "underline",
              },
            },
            code: {
              color: color(3),
              fontFamily: defaultTheme.fontFamily.mono,
            },
            // pre: {
            // 	backgroundColor: color(7, 0.5),
            // 	color: color(3),
            // 	fontFamily: defaultTheme.fontFamily.mono
            // },
            h1: {
              ...defaultStyle,
              fontSize: "3rem",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            },
            h2: {
              ...defaultStyle,
              fontSize: "2.25rem",
              lineHeight: 1.625,
              letterSpacing: "-0.05em",
            },
            h3: {
              ...defaultStyle,
              fontSize: "1.875rem",
              lineHeight: 1.625,
              letterSpacing: "-0.025em",
            },
            h4: {
              ...defaultStyle,
              fontSize: "1.5rem",
              lineHeight: 1.625,
              letterSpacing: "-0.025em",
            },
            h5: {
              ...defaultStyle,
              fontSize: "1.25rem",
              lineHeight: 1.5,
              letterSpacing: "-0.025em",
            },
            blockquote: {
              ...defaultStyle,
              borderColor: color(5, 0.5),
              paddingLeft: "1.625em",
              "& > p": {
                marginTop: ".5em",
                marginBottom: ".5em",
              },
            },
            strong: {
              ...defaultStyle,
              fontWeight: 700,
            },
            "ol > li:before": {
              color: color(1, 0.75),
            },
            "ul > li:before": {
              backgroundColor: color(1, 0.75),
            },
          },
        },
        lg: {
          css: {
            h1: {
              ...defaultStyle,
              fontSize: "4.5rem",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            },
            h2: {
              ...defaultStyle,
              fontSize: "3.75rem",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            },
            h3: {
              ...defaultStyle,
              fontSize: "3rem",
              lineHeight: 1,
              letterSpacing: "-0.025em",
            },
            h4: {
              ...defaultStyle,
              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              letterSpacing: "-0.025em",
            },
            h5: {
              ...defaultStyle,
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
              letterSpacing: "-0.025em",
            },
          },
        },
      }),
    },
  },

  plugins: [twSelectionVariant, twTypography],
};

module.exports = config;
