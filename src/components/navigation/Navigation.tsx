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
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavItem = (props: { title: string; index: number }) => {
  const { title, index } = props;
  return (
    <div>
      <Typography variant="button" color="secondary">
        {/* {"[ " + index + " ]"} */}
        {(index + 1).toString().padStart(2, "0") + ". "}
      </Typography>{" "}
      <Typography variant="button" color="textSecondary">
        {title}
      </Typography>
    </div>
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
          <Button key={link.path} href={link.path}>
            <NavItem title={link.title} index={index} />
          </Button>
        ))}
        <Button href="#resume" color="secondary" variant="outlined">
          Resume
        </Button>
      </div>
    </>
  );

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {links.map((link, index) => (
          <ListItem button component={"a"} key={link.path} href={link.path}>
            <ListItemText
              primary={<NavItem title={link.title} index={index} />}
            />
          </ListItem>
        ))}
        <ListItem button href="#resume">
          <Button href="#resume" color="secondary" variant="outlined">
            Resume
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color="primary" elevation={0} className={classes.nav}>
          <Toolbar>
            <div className={classes.title}>
              <img src={logo} alt="logo" className={classes.logo} />
            </div>
            <Hidden xsDown implementation="css">
              {navbar}
            </Hidden>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
      </nav>
    </>
  );
};
