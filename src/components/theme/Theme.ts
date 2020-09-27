import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// A custom theme for this app
export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#0a192f",
      },
      secondary: {
        main: "#1ed4a9",
      },
      background: {
        default: "#0a192f",
      },
    },
  })
);
