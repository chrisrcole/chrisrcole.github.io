import React from "react";
import Container from "@material-ui/core/Container";

import { Hero } from "../Hero/";
import { About } from "../about";
import { Experience } from "../experience";
import { Work } from "../work";
import { Contact } from "../contact";

const sections = [
  { id: "#about", title: "About", component: <About /> },
  { id: "#experience", title: "Experience", component: <Experience /> },
  { id: "#work", title: "Work", component: <Work /> },
  { id: "#contact", title: "Contact", component: <Contact /> },
];

export const Home = (props: any) => {
  const { classes } = props;

  return (
    <Container component="main" className={classes.main}>
      <Hero />
      {sections.map((section) => (
        <Container
          key={section.title}
          id={section.id}
          style={{ paddingTop: 85, marginBottom: 250 }}
        >
          {section.component}
        </Container>
      ))}
    </Container>
  );
};
