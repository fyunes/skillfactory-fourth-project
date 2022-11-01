import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    maroon: {
      op: "rgba(34, 12, 15, 0.6)",
      100: "#e3606b",
      300: "#b4404e",
      600: "#8f2a36",
      700: "#591e22",
      900: "#2c0d0f",
    },
    brown: {
      op: "rgba(163, 81, 60, 0.3)",
      100: "#df916f",
      300: "#a3513c",
      600: "#85392d",
      900: "#65241b",
    },
    orange: {
      100: "#de834d",
      300: "#c76d39",
      600: "#a75627",
      900: "#844019",
    },
    beige: {
      100: "#ffde95",
      300: "#c7aa6c",
      500: "#cf9e36",
      600: "#9b7e55",
      900: "#67522b",
    },
  },
});

export default theme;
