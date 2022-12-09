import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button, LinkStyles as Link } from "./components";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from '@chakra-ui/theme-tools'

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  breakpoints,
  components: {
    Button,
    Link,
  },
  fonts: {
    // body: "plus jakarta sans, sans-serif",
    body: "Space Mono, monospace",
    heading: "Space Mono, monospace",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      a: {
        _hover: {
          textDecoration: "none",
        },
      },
      body: {
        color: mode("gruvbox.bg", "gruvbox.fg")(props),
        bg: mode("gruvbox.fg", "gruvbox.bg")(props),
      },
    }),
  },
  colors: {
    gruvbox: {
      bg: "#1D2021",
      bg0: "#282828",
      bg1: "#3C3836",
      bg2: "#504945",
      bg3: "#665C54",
      bg4: "#7C6F64",
      gray: "#928374",
      fg: "#EBDBB2",
      fg0: "#FBF1C7",
      fg1: "#EBDBB2",
      fg2: "#D5C4A1",
      fg3: "#BDAE93",
      fg4: "#A89984",
      red: "#FB4934",
      red1: "#FB4934",
      green: "#B8BB26",
      green1: "#B8BB26",
      yellow: "#FABD2F",
      yellow1: "#FABD2F",
      blue: "#83A598",
      blue1: "#83A598",
      purple: "#D3869B",
      purple1: "#D3869B",
    },
  },
});

export default theme;
