import { ButtonProps } from "@chakra-ui/react";
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

export const ButtonStyles: any & { baseStyle: ButtonProps } = {
  baseStyle: (props: StyleFunctionProps) => ({
    // fontWeight: "semibold",
    borderRadius: "full",
    _focus: {
      boxShadow: "none",
    },
  }),
  variants: {
    primary: (props: StyleFunctionProps) => ({
      // bg: mode("gruvbox.bg3", "gruvbox.fg3")(props),
      // color: mode("gruvbox.fg", "gruvbox.bg")(props),
      bg: "gruvbox.green",
      color: "gruvbox.bg",
      _hover: {
        bg: "gruvbox.yellow",
      },
    }),
    header: (props: StyleFunctionProps) => ({
      bg: mode("gruvbox.bg1", "gruvbox.fg1")(props),
      color: mode("gruvbox.fg", "gruvbox.bg")(props),
    }),
    footer: (props: StyleFunctionProps) => ({
      bg: mode("gruvbox.bg1", "gruvbox.fg1")(props),
      color: mode("gruvbox.fg", "gruvbox.bg")(props),
      _hover: {
        transform: "scale(1.05)",
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
