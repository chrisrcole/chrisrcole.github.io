import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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

export const Work = () => {
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
            03.{" "}
            <Typography
              variant="h4"
              component="span"
              display={"inline"}
              color="textSecondary"
              style={{ marginLeft: 10 }}
            >
              Some Things I've Built
            </Typography>
          </Typography>
          <Divider style={{ width: "100%" }} />
        </Grid>
        <Grid container className={classes.section}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Coming Soon...
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
