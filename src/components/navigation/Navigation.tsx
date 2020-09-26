import React from "react";

import logo from "../../logo.svg";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const links = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Work", path: "#work" },
  { title: "Contact", path: "#contact" },
];
interface Props {
  children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    logo: {
      width: 64,
    },
    nav: {
      paddingTop: 10,
    },
    navLinks: {
      marginRight: 10,
    },
  })
);

function OpaqueScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? "primary" : "transparent",
  });
}

function HideOnScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Navigation = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      {/* <OpaqueScroll {...props}> */}
      <HideOnScroll {...props}>
        <AppBar color="primary" elevation={0} className={classes.nav}>
          <Toolbar>
            <div className={classes.title}>
              <img src={logo} alt="logo" className={classes.logo} />
            </div>
            <div className={classes.navLinks}>
              {links.map((link: any, i) => (
                <Button href={link.path}>
                  <div>
                    <Typography variant="button" color="secondary">
                      {/* {"[ " + i + " ]"} */}
                      {(i + 1).toString().padStart(2, "0") + ". "}
                    </Typography>{" "}
                    <Typography variant="button" color="textSecondary">
                      {link.title}
                    </Typography>
                  </div>
                </Button>
              ))}
            </div>
            <Button color="secondary" variant="outlined">
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* </OpaqueScroll> */}

      <Toolbar id="back-to-top-anchor" />
    </>
  );
};
