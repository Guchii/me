import { ButtonProps } from "@chakra-ui/react";
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

export const ButtonStyles: any & { baseStyle: ButtonProps } = {
  baseStyle: (props: StyleFunctionProps) => ({
    // fontWeight: "semibold",
    borderRadius: "full",
    transitionDuration: "0.2s",
    _hover: {
      bg: mode("gruvbox.red1", "gruvbox.fg")(props),
      // bg:"none"
    },
    _focus: {
      boxShadow: "none",
    },
  }),
  variants: {
    primary: (props: StyleFunctionProps) => ({
      // bg: mode("gruvbox.bg3", "gruvbox.fg3")(props),
      // color: mode("gruvbox.fg", "gruvbox.bg")(props),
      bg: "gruvbox.yellow",
      color: "gruvbox.bg",
      _hover: {
        bg: "gruvbox.green",
      },
    }),
  },
};

export const LinkStyles = {
  baseStyle: {
    _hover: {
      textDecoration: "none",
    },
  },
};
