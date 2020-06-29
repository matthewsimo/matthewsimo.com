import { styled } from "linaria/react";
import { withTheme } from "../../lib/theme";

const ThemeEditor = withTheme(styled.div`
  margin: var(--space-3);
  padding: var(--space-8);
  min-height: calc(100vh - var(--space-2) - var(--space-2));
  background: ${({ theme }) => theme.getColor(8)};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: var(--radii-1);
`);

export default ThemeEditor;
