import React from "react";

import logo from "../../assets/images/logos/logo-short.svg";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { Link } from "react-scroll";

import { Social } from "./Social";

const links = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Work", path: "#work" },
  { title: "Contact", path: "#contact" },
];
interface Props {
  children: React.ReactElement;
}

const drawerWidth = 240;

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
      opacity: 0.9,
      backdropFilter: "blur(6px)",
      zIndex: theme.zIndex.drawer + 1,
    },
    navLinks: {
      marginRight: 10,
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      // marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

function HideOnScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <ElevationScroll>
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    </ElevationScroll>
  );
}
function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const NavItem = (props: { title: string; path: string; index: number }) => {
  const { title, path, index } = props;
  return (
    <Link
      activeClass="active"
      to={path}
      spy={true}
      smooth={true}
      duration={700}
    >
      <Button>
        <Typography variant="button" color="secondary">
          {/* {"[ " + index + " ]"} */}
          {(index + 1).toString().padStart(2, "0") + ". "}
        </Typography>{" "}
        <Typography variant="button" color="textSecondary">
          {title}
        </Typography>
      </Button>
    </Link>
  );
};

export const Navigation = (props: Props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navbar = (
    <>
      <div className={classes.navLinks}>
        {links.map((link: any, index) => (
          <NavItem
            key={link.path}
            title={link.title}
            path={link.path}
            index={index}
          />
        ))}
        <Button
          href={process.env.PUBLIC_URL + "/ChrisCole-Resume.pdf"}
          target="_blank"
          color="secondary"
          variant="outlined"
        >
          Resume
        </Button>
      </div>
    </>
  );

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List component="nav">
        {links.map((link, index) => (
          <div key={link.title}>
            <Link
              activeClass="active"
              to={link.path}
              spy={true}
              smooth={true}
              duration={700}
            >
              <ListItem button>
                <ListItemText
                  primary={
                    <>
                      <Typography variant="button" color="secondary">
                        {/* {"[ " + index + " ]"} */}
                        {(index + 1).toString().padStart(2, "0") + ". "}
                      </Typography>{" "}
                      <Typography variant="button" color="textSecondary">
                        {link.title}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </Link>
          </div>
        ))}
        <Divider />
        <ListItem>
          <Button
            href={process.env.PUBLIC_URL + "/ChrisCole-Resume.pdf"}
            target="_blank"
            color="secondary"
            variant="outlined"
          >
            Resume
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.nav}>
          <Toolbar>
            <div className={classes.title}>
              <img src={logo} alt="logo" className={classes.logo} />
            </div>
            <Hidden xsDown implementation="css">
              {navbar}
            </Hidden>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <Social />
      {/* <nav className={classes.drawer} aria-label="mailbox folders">
        // The implementation can be swapped with js to avoid SEO duplication of links.
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav> */}
    </>
  );
};
