import React from 'react';
import { withStyles } from '@material-ui/core/styles';

class ThemeAva extends React.Component {
  renderRow = colors => {
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        {colors.map(col => (
          <div className={classes.pixel} style={{ backgroundColor: col }} />
        ))}
      </div>
    );
  };

  renderMatrix = matrix => (
    <div className={this.props.classes.root}>
      {matrix.map(row => this.renderRow(row))}
    </div>
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
    border: '#8c8c8c 1px solid',
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
