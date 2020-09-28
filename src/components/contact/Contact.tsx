import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import MailOutlineIcon from "@material-ui/icons/MailOutline";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

export const Contact = () => {
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
            04.{" "}
            <Typography
              variant="h4"
              component="span"
              display={"inline"}
              color="textSecondary"
              style={{ marginLeft: 10 }}
            >
              What's Next?
            </Typography>
          </Typography>
          <Divider style={{ width: "100%" }} />
        </Grid>
        <Grid container className={classes.section}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" color="textSecondary" gutterBottom>
              Get In Touch
            </Typography>
            <br></br>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I'll get
              back to you as soon as possible!
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            startIcon={<MailOutlineIcon />}
            color="secondary"
            variant="outlined"
            href={`mailto:cccole3@gmail.com`}
          >
            Say Hello
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
