import React from "react";
import Container from "@material-ui/core/Container";

import { Hero } from "../Hero/";
import { About } from "../about";
import { Experience } from "../experience";
import { Work } from "../work";
import { Contact } from "../contact";

const sections = [
  { id: "#about", section: <About /> },
  { id: "#experience", section: <Experience /> },
  { id: "#work", section: <Work /> },
  { id: "#contact", section: <Contact /> },
];

export const Home = (props: any) => {
  const { classes } = props;

  return (
    <Container component="main" className={classes.main}>
      <Hero />
      {sections.map((section) => (
        <div key={section.id} id={section.id}>
          {section.section}
          <Hero />
        </div>
      ))}
    </Container>
  );
};
