import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { muiTheme } from 'storybook-addon-material-ui';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const action = msg => () => console.log(msg);

const MaterialComponent = withStyles(
  theme => ({
    card: {
      maxWidth: 800,
      margin: 'auto',
    },
    media: {
      height: 0,
      paddingTop: '30%', // 16:9
    },
  }),
  { withTheme: true }
)(({ classes, variant }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image="https://source.unsplash.com/800x400?cities,nature"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        How to use Storybook
      </Typography>
      <Typography component="p">
        $ yarn storybook # to launch Storybook
      </Typography>
      <Typography component="p">
        Select the story from the left panel
      </Typography>
      <Typography component="p">
        Ctrl-Shift-F to toggle Fullscreen mode
      </Typography>
      <Typography component="p">
        Select the theme from Material-UI addon panel dropdown
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant={variant}>
        Default
      </Button>
      <Button size="small" color="primary" variant={variant}>
        primary
      </Button>
      <Button size="small" color="secondary" variant={variant}>
        secondary
      </Button>
      <Button size="small" disabled variant={variant}>
        disabled
      </Button>
    </CardActions>
  </Card>
));

storiesOf('Button', module)
  .addDecorator(muiTheme())
  .add('Text Buttons', () => <MaterialComponent/>)
  .add('Outlined Buttons', () => <MaterialComponent variant="outlined" />)
  .add('Contained Buttons', () => <MaterialComponent variant="contained" />)
