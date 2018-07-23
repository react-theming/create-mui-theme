import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logoImage from './logoImage'

const styles = {
  root: {
    // flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    borderColor: '#949494',
  }
};

const LogoImage = withStyles({
  root: {
    margin: '0px 16px',
    padding: 0,
  },
  img: {
    width: 40,
    borderRadius: 2,
  }
})(({ classes }) => (
  <a className={classes.root} href="https://github.com/react-theming">
    <img className={classes.img} src={logoImage} alt="React Theming"/>
  </a>
));

function Title(props) {
  const { classes, onHelp } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LogoImage />
          <Typography variant="title" color="inherit" className={classes.flex}>
            Create MUI Theme
          </Typography>
          <Button variant="outlined" color="secondary" className={classes.button} onClick={onHelp}>How to use it?</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(Title);
