import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { Hero } from "../header/Hero";

export const Home = (props: any) => {
  const { classes } = props;
  return (
    <Container component="main" className={classes.main}>
      <Hero />
    </Container>
  );
};
