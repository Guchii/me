import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/buttonStyles";
import { ListItemStyles as ListItem } from "./components/listItemStyles";

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
    ListItem,
  },
  fonts: {
    body: "plus jakarta sans, sans-serif",
    heading: "plus jakarta sans, sans-serif",
  },
});

export default theme;
