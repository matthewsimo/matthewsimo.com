import { createTheming } from '@callstack/react-theme-provider';
const defaultTheme = {
  one: "two"
};

const { ThemeProvider } = createTheming(defaultTheme);

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
};

export default App;