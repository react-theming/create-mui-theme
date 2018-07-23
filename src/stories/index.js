import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../ui/theme';

import Title from '../ui/Title';
import ThemesList from '../ui/ThemesList';
import ThemeAva from '../ui/ThemeAva';
// import Editor from '../ui/Editor';
import { themeCode, themeJson } from '../theme-api';

const palette = {
  tonalOffset: 0.2,
  background: { paper: '#fff', default: '#fafafa' },
  contrastThreshold: 3,
  grey: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    A700: '#616161',
    A100: '#d5d5d5',
    A400: '#303030',
    A200: '#aaaaaa',
  },
  text: {
    primary: '#212121',
    secondary: '#ECEFF1',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  secondary: {
    main: '#7B1FA2',
    light: 'rgb(149, 75, 180)',
    dark: 'rgb(86, 21, 113)',
    contrastText: '#fff',
  },
  common: { black: '#000', white: '#fff' },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  type: 'light',
  action: {
    hoverOpacity: 0.08,
    hover: 'rgba(0, 0, 0, 0.08)',
    selected: 'rgba(0, 0, 0, 0.14)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    active: 'rgba(0, 0, 0, 0.54)',
  },
  primary: {
    main: '#42A5F5',
    light: 'rgb(103, 183, 247)',
    dark: 'rgb(46, 115, 171)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
};

storiesOf('Button', module)
  .addDecorator(muiTheme(theme))
  .add('Title', () => <Title />)
  .add('ThemesList', () => (
    <ThemesList
      themesList={[
        {
          name: 'Theme 1',
          query: '123',
        },
      ]}
    />
  ))
  .add('ThemeAva', () => (
    <div style={{display: 'flex'}}>
      <div style={{ width: 200, height: 200, margin: 28, }}>
        <ThemeAva palette={palette}/>
      </div>
      <div style={{ width: 100, height: 100, margin: 28, }}>
        <ThemeAva palette={palette} />
      </div>
      <div style={{ width: 50, height: 50, margin: 28, }}>
        <ThemeAva palette={palette} />
      </div>
      <div style={{ width: 28, height: 28, margin: 28, }}>
        <ThemeAva palette={palette} />
      </div>
    </div>
  ));
