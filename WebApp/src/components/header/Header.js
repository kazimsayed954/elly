import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { auth } from "../../firebase";

const useStyles = makeStyles(theme => ({
 menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 5
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'green'
  },
  avatar: {
    resizeMode: 'stretch',
    width: 50,
    height: 50,
  }
}));

export const Header =()=>{
  const classes = useStyles();
  const signOut = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    return auth
      .doSignOut()
      .then(response => {
        console.log("successfully signed out", response);
      })
      .catch(err => {
        console.log("failed to sign out", err);
      });
  };
  return  <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <img alt='logo' className={classes.avatar} src={require("../../images/logo.png")}/>
                <Typography className={classes.title} variant="button" display="block" gutterBottom>
                Elly - Admin
                </Typography>
                <Button style={{backgroundColor: 'white'}} mode='outlined' onClick={signOut}>Log out</Button>
            </Toolbar>
          </AppBar>
}