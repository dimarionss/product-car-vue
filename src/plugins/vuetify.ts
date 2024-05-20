/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#E73A3F",
          accent: "#D5DEE7",
          "grey-font": "#16161699",
          secondary: "#161616",
          background: "#F9F9F9",
          info: "#CEE0F1",
          warning: "#fe9431",
          error: "#e50202",
          success: "#7DAA2F",
        },
      },
    },
  },
});
