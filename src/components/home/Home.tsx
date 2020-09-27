import React from "react";
import Container from "@material-ui/core/Container";

import { Hero } from "../Hero/";

export const Home = (props: any) => {
  const { classes } = props;
  return (
    <Container component="main" className={classes.main}>
      <Hero />
    </Container>
  );
};
