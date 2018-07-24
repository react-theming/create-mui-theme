import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class ThemeAva extends React.Component {
  static defaultProps = {
    // Holder: div
  }

  renderRow = (colors, rowInd) => {
    const { classes } = this.props;
    return (
      <div key={rowInd} className={classes.row}>
        {colors.map((col, ind) => (
          <div key={ind} className={classes.pixel} style={{ backgroundColor: col }} />
        ))}
      </div>
    );
  };

  renderMatrix = matrix => (
    <Paper className={this.props.classes.root}>
      {matrix.map((row, ind) => this.renderRow(row, ind))}
    </Paper>
  );

  renderNull = () => {
    const matrix = new Array(4).fill(new Array(4).fill('rgba(197, 196, 196, 0.74)'));
    return this.renderMatrix(matrix);
  };

  render() {
    const { classes, theme } = this.props;
    if (!theme) return this.renderNull();
    const { palette } = theme;
    if (!palette) return this.renderNull();
    const matrix = [
      [
        palette.primary.light,
        palette.primary.light,
        palette.text.primary,
        palette.primary.dark,
      ],
      [
        palette.primary.light,
        palette.primary.main,
        palette.primary.main,
        palette.primary.dark,
      ],
      [
        palette.secondary.dark,
        palette.secondary.main,
        palette.secondary.main,
        palette.secondary.light,
      ],
      [
        palette.secondary.dark,
        palette.text.secondary,
        palette.secondary.light,
        palette.secondary.light,
      ],
    ];
    return this.renderMatrix(matrix);
  }
}

export default withStyles({
  root: {
    borderRadius: '10%',
    // border: '#8c8c8c 1px solid',
    overflow: 'hidden',
    // width: 128,
    // height: 128,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    width: '100%',
    height: 1,
    flexGrow: 1,
  },
  pixel: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    height: '100%',
    borderRight: '1px inset rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.1)'
  },
})(ThemeAva);
