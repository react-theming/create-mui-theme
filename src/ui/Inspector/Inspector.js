import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ObjectInspector } from 'react-inspector';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import PaletteTable from './PaletteTable';
import ThemeAva from '../ThemeAva';

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
  },
  ava: {
    width: 160,
    height: 160,
    padding: 16,
  },
  inspect: {
    width: 160,
    flexGrow: 1,
    flexShrink: 1,
    padding: 16,
    overflowY: 'auto',
  },
  divider: {
    margin: '16px 0px'
  }
})(({ classes, selectedTheme }) => (
  <div className={classes.root}>
    <div className={classes.ava}>
      <ThemeAva theme={selectedTheme && selectedTheme.theme} />
      {/* <Divider  className={classes.divider}/> */}
      <PaletteTable theme={selectedTheme && selectedTheme.theme} />
    </div>
    <div className={classes.inspect}>
      <CardHeader title={selectedTheme && selectedTheme.name || 'Drop the theme URL here...'} />
      {selectedTheme && <ObjectInspector data={selectedTheme} expandLevel={1} />}
    </div>
  </div>
));
