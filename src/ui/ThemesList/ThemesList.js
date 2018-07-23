import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import List from './List';

const themesListStyles = {
  root: {
    padding: 16,
    height: 'calc(100% - 32px);',
  },
  paper: {
    height: '100%',

    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listContainer: {
    height: 100,
    overflowY: 'auto',
    overflowX: 'hidden',
    flexGrow: 1,
  },
  divider: {
    margin: '8px 0px',
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 200,
    height: 30,
    flexGrow: 1,
    marginRight: 8,
  },
  textInput: {
    height: 30,
  },
  inputSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    marginRight: 8,
  },
};

class ThemesList extends React.Component {
  input = null;

  onAdd = () => {
    const val = this.input.value;
    this.props.onAdd(val);

  };

  componentDidUpdate() {
    // this.listContainer.scrollTop = this.listContainer.scrollHeight;
  }

  render() {
    const { classes, themesList, onClick, currentThemeId } = this.props;
    return (
      <div name="ThemesList" className={classes.root}>
        <div className={classes.paper}>
        <div name="listContainer" className={classes.listContainer} ref={ref => {this.listContainer = ref }}>
          <List themesList={themesList} onClick={onClick} currentThemeId={currentThemeId}/>
        </div>
        <Divider classes={{root: classes.divider}}/>
          <div className={classes.inputSection}>
            <TextField
              value="https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=3949AB&secondary.color=388E3C"
              inputRef={ref => (this.input = ref)}
              className={classes.textField}
              InputProps={{className: classes.InputProps}}
              placeholder="Paste query string here"
              margin="normal"
            />
            <Button
              className={classes.addButton}
              color="primary"
              variant="contained"
              onClick={this.onAdd}
            >
              Add
            </Button>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default withStyles(themesListStyles)(ThemesList);
