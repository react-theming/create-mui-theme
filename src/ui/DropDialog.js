/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CardMedia from '@material-ui/core/CardMedia';

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
    // this.props.onClose(this.props.selectedValue);
  };

  handleDragOver = ev => {
    this.setState({ dragover: true });
  };

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

