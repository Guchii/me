import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button, LinkStyles as Link } from "./components";

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
    Link
  },
  fonts: {
    // body: "plus jakarta sans, sans-serif",
    body: "Space Mono, monospace",
    heading: "Space Mono, monospace",
  },
  styles: {
    global: {
      a: {
        _hover:{
          textDecoration: "none",
        }
      }
    }
  }
});

export default theme;
