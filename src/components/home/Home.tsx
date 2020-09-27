import React from "react";
import Container from "@material-ui/core/Container";

import { Hero } from "../Hero/";
import { About } from "../about";
import { Experience } from "../experience";
import { Work } from "../work";
import { Contact } from "../contact";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const sections = [
  { id: "#about", title: "About", section: <About /> },
  { id: "#experience", title: "Experience", section: <Experience /> },
  { id: "#work", title: "Work", section: <Work /> },
  { id: "#contact", title: "Contact", section: <Contact /> },
];

export const Home = (props: any) => {
  const { classes } = props;

  return (
    <Container component="main" className={classes.main}>
      <Hero />
      <About />
      <About />
      <About />
      <About />
    </Container>
  );
};
