import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    paddingTop: theme.spacing(2),
  },
}));

const words = ["Learn.", "Build.", "Master."];

export const Hero = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.hero}>
      <Box my={4}>
        {words.map((word) => (
          <Typography variant="h1" component="h1" gutterBottom>
            {word}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};
