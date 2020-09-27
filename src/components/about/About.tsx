import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import portrait from "../../assets/images/portrait.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 345,
  },
  section: {
    marginTop: theme.spacing(4),
  },
}));

const techs = [
  "Python",
  "R",
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "HTML & (S)CSS",
];

export const About = () => {
  const classes = useStyles();
  return (
    <Container id="#about" style={{ paddingTop: 85 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2" color="secondary">
            {/* {"[ " + index + " ]"} */}
            01.{" "}
            <Typography
              variant="h3"
              component="span"
              display={"inline"}
              color="textSecondary"
            >
              About Me
            </Typography>
            <Divider />
          </Typography>
        </Grid>
        <Grid container className={classes.section}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Hello! I'm Chris, a software engineer based in Houston, TX.
            </Typography>
            <br></br>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </Typography>
            <br></br>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Since starting and graduating Texas A&M University with my
              Bachelor's of Science, I've been directly involed with a variety
              of software engineering projects.
            </Typography>
            <br></br>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Here are a few technologies I've been working with recently:
            </Typography>
            <Grid container>
              {techs.map((tech) => (
                <Grid key={tech} item xs={12} sm={6}>
                  <ArrowRightIcon color="secondary" />
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    gutterBottom
                  >
                    {tech}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={portrait}
                  title="Personal Portrait"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
