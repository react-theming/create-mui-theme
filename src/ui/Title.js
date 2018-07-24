import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/';

import logoImage from './logoImage';

const styles = theme => ({
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
  },
  oktobutton: {
    marginRight: 16,
  },
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    opacity: 1,
  },
});

const LogoImage = withStyles({
  root: {
    margin: '0px 16px',
    padding: 0,
  },
  img: {
    width: 40,
    borderRadius: 2,
  },
})(({ classes }) => (
  <a className={classes.root} href="https://github.com/react-theming">
    <img className={classes.img} src={logoImage} alt="React Theming" />
  </a>
));

const Oktocat = withStyles({
  root: {
    width: 28,
    fill: 'white',
  },
})(({ classes }) => (
  <svg
    className={classes.root}
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
));

const ShortGuide = withStyles({
  root: {
    padding: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  list: {
    textAlign: 'left',
    listStyleType: 'none',
    padding: 4,
    '&>li': { marginBottom: 8 },
  },
  link: {
    color: '#7ab8ff',
  },
})(({ classes }) => (
  <div className={classes.root}>
    <ul className={classes.list}>
      <li>
        1. Open{' '}
        <a
          className={classes.link}
          href="https://material.io/tools/color"
          target="_blank"
        >
          https://material.io/tools/color
        </a>
      </li>
      <li>2. Select colors</li>
      <li>3. Drag & Drop address string back to this page</li>
    </ul>
    <span>Press for details</span>
  </div>
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
          <IconButton
            className={classes.oktobutton}
            href="https://github.com/react-theming/create-mui-theme"
            target="_blank"
            color="inherit"
          >
            <Oktocat />
          </IconButton>
          <Tooltip
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 600 }}
            title={<ShortGuide />}
            placement="bottom-start"
            classes={{
              tooltip: classes.tooltip,
            }}
            leaveDelay={1000}
          >
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              onClick={onHelp}
            >
              How to use it?
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Title);
