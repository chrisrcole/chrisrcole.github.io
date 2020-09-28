import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { Link } from "react-scroll";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(16),
    height: "100vh",
  },
  down: {
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translate(-50%, -50%)",
    margin: "0 auto",
  },
}));

export const Hero = () => {
  const classes = useStyles();
  return (
    <Container className={classes.hero}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" color="secondary">
            Hi, my name is
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Chris Cole.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" color="textSecondary">
            I'm a Software Engineer.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" color="textSecondary">
            Petroleum Engineer turned software engineer from Houston, TX
            (yeehaw) who loves building websites, applications, and everything
            in between. I really appreciate you stopping by my website today!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            href={`mailto:cccole3@gmail.com`}
            color="secondary"
            variant="outlined"
          >
            Let's Talk!
          </Button>
        </Grid>
      </Grid>
      <div className={classes.down}>
        <Link
          activeClass="active"
          to="#about"
          spy={true}
          smooth={true}
          duration={700}
        >
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowDownIcon />
          </Fab>
        </Link>
      </div>
    </Container>
  );
};
