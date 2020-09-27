import React from "react";
import Container from "@material-ui/core/Container";

import { Hero } from "../Hero/";
import { About } from "../about";
import { Experience } from "../experience";
import { Work } from "../work";
import { Contact } from "../contact";
import Typography from "@material-ui/core/Typography";

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
      {sections.map((section, index) => (
        <div key={section.id} id={section.id} style={{ paddingTop: 85 }}>
          <div>
            <Typography variant="h3" component="h2" color="secondary">
              {/* {"[ " + index + " ]"} */}
              {(index + 1).toString().padStart(2, "0") + ". "}
              <Typography
                variant="h3"
                component="span"
                display={"inline"}
                color="textSecondary"
              >
                {section.title}
              </Typography>
            </Typography>{" "}
          </div>
          {section.section}
          <Hero />
        </div>
      ))}
    </Container>
  );
};
