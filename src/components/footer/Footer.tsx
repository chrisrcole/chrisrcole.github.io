import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

interface footerProps {
  date: number;
}

function Copyright(props: footerProps) {
  const { date } = props;
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cole-portfolio.com/">
        Chris Cole
      </Link>{" "}
      {date}
      {"."}
    </Typography>
  );
}

export const Footer = () => {
  return (
    <footer>
      <Copyright date={new Date().getFullYear()} />
    </footer>
  );
};
