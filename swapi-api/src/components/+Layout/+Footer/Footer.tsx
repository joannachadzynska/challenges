import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    display: 'flex',

    alignItems: 'center',
  },
  toolbar: {
    margin: '0 auto',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.text}>
            <Copyright />
            &nbsp;Joanna Chądzyńska {new Date().getFullYear()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
