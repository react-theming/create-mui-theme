import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ObjectInspector } from 'react-inspector';
import CardHeader from '@material-ui/core/CardHeader';
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
  },
  link: {
    color: '#0051abbd'
  },
})(({ classes, selectedTheme }) => (
  <div className={classes.root}>
    <div className={classes.ava}>
      <ThemeAva theme={selectedTheme && selectedTheme.theme} />
      {/* <Divider  className={classes.divider}/> */}
      <PaletteTable theme={selectedTheme && selectedTheme.theme} />
    </div>
    <div className={classes.inspect}>
      <CardHeader title={(selectedTheme && selectedTheme.name) || 'Drop the theme URL here...'}
      subheader={!selectedTheme && <span>try <a className={classes.link} href="https://material.io/tools/color/#!/?view.left=0&view.right=0&secondary.color=EF5350&primary.color=FB8C00&primary.text.color=3E2723&secondary.text.color=FAFAFA" target="_blank" rel="noopener noreferrer">this</a> for example.</span>}/>
      {selectedTheme && <ObjectInspector data={selectedTheme && selectedTheme.theme} expandLevel={1} />}
    </div>
  </div>
));
