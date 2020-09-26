import React from "react";
import { Navigation } from "../navigation";

import { Hero } from "./Hero";

export const Header = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <Navigation {...props} />
      <Hero />
    </div>
  );
};
