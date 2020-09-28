import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import IconButton from "@material-ui/core/IconButton";

const icons = [
  {
    icon: <GitHubIcon />,
    link: "https://github.com/cccole3",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/christopher-r-cole/",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/chrisrcole/",
  },
  {
    icon: <TwitterIcon />,
    link: "https://twitter.com/cccole3",
  },
  {
    icon: <MailOutlineIcon />,
    link: "mailto:cccole3@gmail.com",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    down: {
      position: "fixed",
      left: 20,
      bottom: 0,
      transform: "translate(-50%, -50%)",
      margin: "0 auto",
    },
    social: {
      marginBottom: 10,
    },
  })
);

export const Social = () => {
  const classes = useStyles();

  return (
    <div className={classes.down}>
      {icons.map((icon) => (
        <div key={icon.link}>
          <IconButton
            aria-label={icon.link}
            href={icon.link}
            target="_blank"
            color="secondary"
          >
            {icon.icon}
          </IconButton>

          <br></br>
        </div>
      ))}
    </div>
  );
};
