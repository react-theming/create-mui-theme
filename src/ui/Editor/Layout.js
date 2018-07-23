import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Editor from './Editor';

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
  },
  divider: {
    width: 100,
  },
  editor: {
    flexGrow: 1,
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    // maxHeight: 250,
    width: 100,
    margin: 10,
  },
})(({ code, json, classes }) => (
  <div className={classes.root}>
    <div className={classes.editor}>
      <Editor code={code} />
    </div>
    <div className={classes.divider} />
    <div className={classes.editor}>
      <Editor code={json} />
    </div>
  </div>
));
