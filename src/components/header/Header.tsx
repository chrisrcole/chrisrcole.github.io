import React from "react";
import { Navigation } from "../navigation";

import { Hero } from "./Hero";
import background from "../../assets/images/trees-lumn-167699.jpg";

export const Header = (props: any) => {
  const { classes } = props;
  return (
    <div
      className={classes.header}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "auto 100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img src={background} width="100%"></img> */}
      <Navigation {...props} />
      <Hero />
    </div>
  );
};
