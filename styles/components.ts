import { ButtonProps } from "@chakra-ui/react";

export const ButtonStyles: any & { baseStyle: ButtonProps } = {
  baseStyle: {
    // fontWeight: "semibold",
    borderRadius: "full",
    transitionDuration: "0.2s",
    _focus: {
      boxShadow: "none"
    },
  },
};

export const LinkStyles = {
  baseStyle: {
    _hover: {
      textDecoration: "none",
    },
  },
};
