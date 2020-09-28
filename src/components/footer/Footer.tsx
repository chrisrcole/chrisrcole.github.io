import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";

import { Credit } from "./Credit";

interface footerProps {
  date: number;
}

function Copyright(props: footerProps) {
  const { date } = props;
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        Chris Cole {date}
        {"."}
        <Credit />
      </Typography>
    </>
  );
}

export const Footer = (props: any) => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Copyright date={new Date().getFullYear()} />
      </Container>
    </footer>
  );
};
