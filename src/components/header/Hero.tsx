import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(16),
    height: "100vh",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
            I'm a software engineer based in Houston, TX (yeehaw) who loves
            building websites, applications, and everything in between.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" variant="outlined" href="#contact">
            Let's Talk!
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
