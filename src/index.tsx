import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";

// components
import { App } from "./App";
import { theme } from "./components/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
