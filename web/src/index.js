import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import { theme } from "./lib/theme";
import "semantic-ui-css/semantic.min.css";
import { GlobalStyles } from "./lib/GlobalStyles";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Menu />
        <Switch>
          <Routes></Routes>
        </Switch>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
