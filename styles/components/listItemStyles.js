import { darken } from "@chakra-ui/theme-tools";

export const ListItemStyles = {
  variants: {
    about: {
      bg: "beige",
      borderRadius: "full",
      textAlign: "center",
      padding: "4px 16px",
      cursor: "pointer",
      _hover: {
        bg: darken("beige", 20),
      },
    },
  },
};
