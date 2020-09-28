import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      maxWidth: 500,
    },
  })
);

export const Credit = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" onClick={handleOpen}>
        <Typography variant="inherit" color="textSecondary">
          Inspired by Brittany Chiang
        </Typography>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h6" component="span" color="textSecondary">
              Design Credit
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              component="span"
              color="textSecondary"
              gutterBottom
            >
              I came across Brittany's portfolio site when I was trying to find
              some inspiration for this site.
            </Typography>
            <br></br>
            <br></br>
            <Typography
              variant="body1"
              component="span"
              color="textSecondary"
              gutterBottom
            >
              While her site is built with Gatsby and I didn't use any of her
              code, I did try and follow her design as best as I could. This
              site is built with Material-UI. You can find her{" "}
              <Link
                color="secondary"
                href="https://github.com/bchiang7"
                target="_blank"
              >
                github here
              </Link>{" "}
              and{" "}
              <Link
                color="secondary"
                href="https://brittanychiang.com/"
                target="_blank"
              >
                portfolio here
              </Link>
              .
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
