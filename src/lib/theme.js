import { createTheming } from "@callstack/react-theme-provider";

const tokens = {
  colors: {
    hue: 200,
    saturation: "50%",
    lightnessScale: [
      "6%",
      "16%",
      "25%",
      "35%",
      "50%",
      "65%",
      "75%",
      "88%",
      "96%",
    ],
  },
  opacity: {
    scale: [0, 0.1, 0.25, 0.5, 0.8, 0.9, 1],
  },
};

const defaultTheme = {
  breakpoints: ["768px", "992px", "1200px"],
  space: [
    "0px",
    "2px",
    "5px",
    "10px",
    "16px",
    "20px",
    "25px",
    "35px",
    "50px",
    "65px",
  ],
  radii: ["0px", "3px", "5px", "10px"],
  //  colors: [
  //    "hsl(200,50%,6%)",
  //    "hsl(200,50%,16%)",
  //    "hsl(200,50%,25%)",
  //    "hsl(200,50%,35%)",
  //    "hsl(200,50%,50%)",
  //    "hsl(200,50%,65%)",
  //    "hsl(200,50%,75%)",
  //    "hsl(200,50%,88%)",
  //    "hsl(200,50%,96%)",
  //  ],
  fonts: {
    importUrl: "url(https://rsms.me/inter/inter.css)",
    normal: "'Inter', sans-serif",
    variable: "'Inter var', sans-serif",
    mono: "'Consolas', monospace",
  },
};

defaultTheme.colors = tokens.colors.lightnessScale.map(
  (color) => `${tokens.colors.hue}, ${tokens.colors.saturation}, ${color}`
);

defaultTheme.breakpoints.mobile = defaultTheme.breakpoints[0];
defaultTheme.breakpoints.desktop = defaultTheme.breakpoints[1];
defaultTheme.breakpoints.fullHD = defaultTheme.breakpoints[2];
defaultTheme.colors.primary = defaultTheme.colors[4];

defaultTheme.getColor = (lightness, opacity = 1) =>
  `hsl(${defaultTheme.colors[lightness]}, ${opacity})`;

const { ThemeProvider, useTheme, withTheme } = createTheming(defaultTheme);
export { defaultTheme, ThemeProvider, useTheme, withTheme };

// export default () => ({
//   breakpoitns: ["600px"],
//   fonts: {
//     normal: '"Inter", sans-serif',
//     mono: "'Consolas', monospace",
//   },
//   fontSizes: this.sizes,
//   sizes: [],
//   space: this.sizes,
//   colors: {},
//   radii: [],
// });

// @import url('https://rsms.me/inter/inter.css');
// html { font-family: 'Inter', sans-serif; }
// @supports (font-variation-settings: normal) {
//   html { font-family: 'Inter var', sans-serif; }
// }
