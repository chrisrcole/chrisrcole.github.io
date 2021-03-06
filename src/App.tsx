import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Home } from "./components/home";
import BackToTop from "./components/navigation/BackToTop";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginBottom: theme.spacing(2),
  },
  header: {
    // height: "100vh",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
  },
}));

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Header classes={classes} />
        <Container maxWidth="lg">
          <Home classes={classes} />
        </Container>

        <BackToTop />
        <Footer classes={classes} />
      </div>
    </>
  );
};
