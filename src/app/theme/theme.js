// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primaryColor: {
      50: "#F2F6EB",
      100: "#D7E3C2",
      200: "#C4D6A4",
      300: "#A9C37B",
      400: "#98B861",
      500: "#7EA63A",
      600: "#739735",
      700: "#597629",
      800: "#455B20",
      900: "#354618",
    },

    lemonColor: {
      10: "#fcfdf7",
      50: "#f3f6ea",
      100: "#d8e2bd",
      200: "#c6d49d",
      300: "#abc071",
      400: "#9bb455",
      600: "#82a12b",
      700: "#5c721f",
      800: "#485918",
      900: "#374412",
    },

    bgCustom: {
      600: "#132935",
      900: "#0a171eff",
      500: "#F5F1DC",
      400: "#f7f5e9",
    },
  },
  fonts: {
    Heading: "poppins, open-sans",
    body: "inter, sans-serif",
  },
});

export default theme;
