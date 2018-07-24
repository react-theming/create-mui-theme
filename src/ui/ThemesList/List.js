import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ThemeAva from '../ThemeAva';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    paddingLeft: 0,
  },
  listItemActive: {
    paddingLeft: 0,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 2,
    marginLeft: 4,
    marginRight: 16,
  },
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  onClick = id => () => this.props.onClick(id);

  render() {
    const { classes, themesList, currentThemeId } = this.props;
    const isActive = theme => theme.id === currentThemeId;
    return (
      <div className={classes.root}>
        <List>
          {themesList.map(theme => (
            <ListItem
              key={theme.name}
              dense
              button
              className={
                isActive(theme) ? classes.listItemActive : classes.listItem
              }
              onClick={this.onClick(theme.id)}
            >
              <Avatar className={classes.avatar}>
                <ThemeAva theme={theme.theme} />
              </Avatar>
              <ListItemText
                primary={`${theme.name}`}
                secondary={theme.query}
              />
              {/* <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(value)}
                  checked={this.state.checked.indexOf(value) !== -1}
                />
              </ListItemSecondaryAction> */}
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);
