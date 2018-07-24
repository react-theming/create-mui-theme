/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const styles = {
  root: {
    // width: 800,
    // maxWidth: 1200,
    outline: 'none',
    overflow: 'hidden',
    // borderRadius: 2,
    '& a': {
      color: '#2358fb',
      textDecoration: 'none',
    },
    '& a:visited': {
      color: '#3b539a',
    },
  },
  title: {
    textAlign: 'center',
  },
  media: {
    height: 90,
  },
  mediaOver: {
    height: 400,
    opacity: 0.6,
  },
  p: {
    '&>a': {
      color: 'red',
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 16,
  },
};

class SimpleDialog extends React.PureComponent {
  state = {
    dragover: false,
  };
  static getDerivedStateFromProps(props, state) {
    if (!props.open) {
      return { dragover: false };
    }
    return null;
  }
  handleClose = () => {
    this.setState({ dragover: false });
    this.props.onClose(this.props.selectedValue);
  };

  handleDragOver = ev => {
    this.setState({ dragover: true });
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
    console.log(
      '​SimpleDialog -> render -> this.state.dragover',
      this.state.dragover
    );
    return (
      <Dialog
        onClose={this.handleClose}
        PaperProps={{
          className: classes.root,
        }}
        aria-labelledby="simple-dialog-title"
        fullWidth
        {...other}
      >
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1532244619359-b8baaca8581e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d7c2832766bfd114098faeadf780d41&auto=format&fit=crop&w=1826&q=80"
          title="Drop zone"
        />
        <DialogTitle id="simple-dialog-title" classes={{ root: classes.title }}>
          Create Material-UI Theme
        </DialogTitle>
        <CardContent>
          <Typography component="p" paragraph>
            1. Open{' '}
            <a href="https://material.io/tools/color" target="_blank">
              https://material.io/tools/color
            </a>{' '}
            and create a new material-ui theme.
          </Typography>
          <Typography component="p">
            2. Copy & Paste URL from browser address bar into the left panel on this page and press the "ADD" button.
          </Typography>
          <Typography component="p" paragraph>
          (or you can simply drag URL by your mouse from material.io and drop it here in any place)
          </Typography>
          <Typography component="p" paragraph>
            3. You can repeat it as much as you need. All themes will be listed on the left panel. You can select any to inspect.
          </Typography>
          <Typography component="p" paragraph>
            4. As you select a theme you'll find a code that you can copy-paste it to your project and use this theme. There are JS and JSON variants for your choice.
          </Typography>

          <DialogTitle
            id="simple-dialog-title"
            classes={{ root: classes.title }}
          >
            What's next?
          </DialogTitle>
          <Typography component="p" paragraph>
            1. Learn about theming in{' '}
            <a
              href="https://material-ui.com/customization/themes/"
              target="_blanc"
            >
              Material-UI
            </a>{' '}
            documentation
          </Typography>
          <Typography component="p" paragraph>
            2. Add to your DX such tools as{' '}
            <a href="https://storybook.js.org/">Storybook</a> and{' '}
            <a href="https://github.com/react-theming/storybook-addon-material-ui">
              Storybook Addon Material-UI
            </a>
          </Typography>
          <Typography component="p" paragraph>
            3. Test how these tools go together starting a new project from scratch with{' '}
            <a href="https://github.com/react-theming/create-material-ui-app">
              create-material-ui-app
            </a>{' '}
            boilerplate
          </Typography>

          <DialogTitle
            id="simple-dialog-title"
            classes={{ root: classes.title }}
          >
            Credits
          </DialogTitle>
          <Typography component="p" paragraph>
            This tool is created for you by{' '}
            <a href="https://github.com/react-theming" target="_blanc">
              React-Theming
            </a>{' '}
            as an addition for{' '}
            <a
              href="https://github.com/react-theming/storybook-addon-material-ui"
              target="_blanc"
            >
              Storybook Addon Material-UI
            </a>
          </Typography>
          <Typography component="p" paragraph>
            This is an{' '}
            <a
              href="https://github.com/react-theming/create-mui-theme"
              target="_blanc"
            >
              Open Source
            </a>{' '}
            project under the MIT License
          </Typography>
          {/* <Typography>
            Author:
            <Typography component="p" paragraph>
              <a href="https://t.me/usulpro" target="_blanc">
                @usulpro
              </a>{' '}
              (telegram)
            </Typography>
            <Typography component="p" paragraph>
              <a href="https://github.com/UsulPro">
                <img
                  src="https://camo.githubusercontent.com/5e97cb3d4cb089e0109a243a505cfebc3f75a9ba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d5573756c50726f2d626c75652e737667"
                  alt="@UsulPro"
                  data-canonical-src="https://img.shields.io/badge/github-UsulPro-blue.svg"
                />
              </a>
            </Typography>
          </Typography> */}
        </CardContent>
        <CardActions className={classes.footer}>
          <Button
            href="https://github.com/react-theming/storybook-addon-material-ui"
            target="_blanc"
            size="small"
            color="primary"
          >
            Storybook Addon Material-UI
          </Button>
          <Button
            href="https://material.io/tools/color"
            target="_blanc"
            size="small"
            color="primary"
          >
            Color Tool
          </Button>
          <Button
            href="https://github.com/react-theming/create-mui-theme"
            target="_blanc"
            size="small"
            color="primary"
          >
            Create MUI Theme
          </Button>
          <a href="https://github.com/UsulPro">
            <img
              src="https://camo.githubusercontent.com/5e97cb3d4cb089e0109a243a505cfebc3f75a9ba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d5573756c50726f2d626c75652e737667"
              alt="@UsulPro"
              data-canonical-src="https://img.shields.io/badge/github-UsulPro-blue.svg"
            />
          </a>
        </CardActions>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div>
        <Typography variant="subheading">
          Selected: {this.state.selectedValue}
        </Typography>
        <br />
        <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
        <SimpleDialog
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}
