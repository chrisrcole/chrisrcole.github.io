import React from "react";
import { Navigation } from "../navigation";

export const Header = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <Navigation {...props} />
    </div>
  );
};
