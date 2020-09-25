import React from "react";
import { Navigation } from "../navigation";

export const Header = (props: any) => {
  return (
    <header>
      <Navigation {...props} />
    </header>
  );
};
