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
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const styles = {
  root: {
    width: 800,
  },
  title: {
    textAlign: 'center',
  },
  media: {
    height: 400,
  },
  mediaOver: {
    height: 400,
    opacity: 0.6,
  },
};

class SimpleDialog extends React.Component {
  state = {
    dragover: false,
  };
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleDragOver = ev => {
    this.setState({ dragover: true });
  }

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        fullWidth
        {...other}
      >
        <DialogTitle id="simple-dialog-title" classes={{ root: classes.title }}>
          Just drop url anywhere to create a new theme
        </DialogTitle>
        <div
          onDragOver={this.handleDragOver}
          onDragLeave={() => this.setState({ dragover: false })}
        >
          <CardMedia
            className={this.state.dragover ? classes.mediaOver : classes.media}
            image="https://images.unsplash.com/photo-1532244619359-b8baaca8581e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d7c2832766bfd114098faeadf780d41&auto=format&fit=crop&w=1826&q=80"
            title="Drop zone"
          />
        </div>
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
