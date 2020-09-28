import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  orientation: "vertical" | "horizontal";
  variant: "scrollable";
  className: string;
}

const StyledTabs = withStyles({
  indicator: {
    left: 0,
  },
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

interface StyledTabProps {
  label: string;
  icon: any;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      "&:focus": {
        opacity: 1,
        color: "#1ed4a9",
      },
    },
    wrapper: {
      alignItems: "start",
      marginLeft: 2,
      flexDirection: "inherit",
      justifyContent: "start",
    },
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
  section: {
    marginTop: theme.spacing(4),
  },
}));

const experiences = [
  {
    company: "Lambda Energy",
    position: "Petroleum Engineer II",
    startDate: "May 2019",
    endDate: "Present",
    details: [
      "Write efficient, maintainable code for a diverse array of internal projects",
      "Work with a variety of different languages, platforms, and BI tools such as Python, R, SQL, and Spotfire",
      "Communicate with multi-disciplinary engineering and financial teams on a daily basis",
    ],
  },
  {
    company: "Geoservices",
    position: "Student Developer",
    startDate: "September 2015",
    endDate: "May 2019",
    details: [
      "Worked with a team of developers to update and modernize existing desktop application with Angular and Electron",
      "Interfaced with clients on a daily basis, providing technological expertise on all things Geoservices",
      "Lead and trained team of customer support student workers",
    ],
  },
  {
    company: "Jetta Operating",
    position: "Reservoir Engineering Intern",
    startDate: "May 2018",
    endDate: "August 2018",
    details: [
      "Engineered and maintained major data pipelines",
      "Performed in-depth statistical analysis via R of competitor data and designs",
      "Implemented scalable solution to extract and load external data from web services",
    ],
  },
  {
    company: "Newfield Exploration",
    position: "Software Engineering Intern",
    startDate: "May 2017",
    endDate: "August 2017",
    details: [
      "Developed a Python, QA service that supplied cross-functional dashboards with clean, reliable, and accurate data",
      "Architected and implemented the front-end of a new spatial analysis tool for a wide variety of stakeholders , which lets users log in and listen to full songs in the browser",
    ],
  },
];

export const Experience = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
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
            02.{" "}
            <Typography
              variant="h4"
              component="span"
              display={"inline"}
              color="textSecondary"
            >
              Where I've Worked
            </Typography>
          </Typography>
          <Divider style={{ width: "100%" }} />
        </Grid>
        <Grid container className={classes.section}>
          <div className={classes.root}>
            <Grid item xs={3}>
              <StyledTabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                {experiences.map((experience, index) => (
                  <StyledTab
                    key={experience.position}
                    icon={<ArrowRightIcon color="secondary" />}
                    label={experience.company}
                    {...a11yProps(index)}
                  />
                ))}
              </StyledTabs>
            </Grid>
            {experiences.map((experience, index) => (
              <TabPanel key={experience.position} value={value} index={index}>
                <Grid item>
                  <Typography
                    variant="h6"
                    component="span"
                    color="textSecondary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {experience.position}
                    <Typography
                      variant="h6"
                      component="span"
                      display={"inline"}
                      color="secondary"
                      style={{ marginLeft: 10 }}
                    >
                      {"@ "}
                      {experience.company}
                    </Typography>
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    variant="subtitle1"
                    component="span"
                    color="textSecondary"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {experience.startDate + " - " + experience.endDate}
                  </Typography>
                </Grid>
                <br></br>
                {experience.details.map((detail) => (
                  <Grid key={detail} item xs={8}>
                    <Typography
                      variant="body1"
                      component="span"
                      color="textSecondary"
                      gutterBottom
                      style={{
                        display: "flex",
                      }}
                    >
                      <ArrowRightIcon color="secondary" />
                      {detail}
                    </Typography>
                  </Grid>
                ))}
              </TabPanel>
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};
