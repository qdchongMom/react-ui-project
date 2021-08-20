import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
  },
}));

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Jiak Simi Weather App
            </Typography>
            <Button variant="text" component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button variant="text" component={Link} to="/About" color="inherit">
              About
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
