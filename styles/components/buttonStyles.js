import { darken } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  variants: {
    about: {
      bg: "beige",
      borderRadius: "full",
      textAlign: "center",
      padding: "4px 16px",
      cursor: "pointer",
      w: "100%",
      _hover: {
        bg: darken("beige", 40),
      },
    },
  },
};
