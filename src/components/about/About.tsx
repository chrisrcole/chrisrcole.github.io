import React from "react";
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
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h4"
            component="h2"
            color="secondary"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* {"[ " + index + " ]"} */}
            01.{" "}
            <Typography
              variant="h4"
              component="span"
              display={"inline"}
              color="textSecondary"
              style={{ marginLeft: 10 }}
            >
              About Me
            </Typography>
          </Typography>
          <Divider style={{ width: "100%" }} />
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
              always build products that provide user-centered, performant
              experiences.
            </Typography>
            <br></br>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Since starting and graduating Texas A&M University with my BSc in
              engineering, I've been directly involved with a variety of
              software engineering projects. I currently work on numerous
              interesting and meaningful projects on a daily basis.
            </Typography>
            <br></br>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Here are a few technologies I've been working with recently:
            </Typography>
            <Grid container>
              {techs.map((tech) => (
                <Grid key={tech} item xs={12} sm={6}>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    gutterBottom
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ArrowRightIcon color="secondary" />
                    {tech}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.root} style={{ marginLeft: 20 }}>
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
    </>
  );
};
