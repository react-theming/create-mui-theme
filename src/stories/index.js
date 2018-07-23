import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../ui/theme';

import Title from '../ui/Title';
import ThemesList from '../ui/ThemesList';
// import Editor from '../ui/Editor';
import { themeCode, themeJson } from '../theme-api';

const overrides = {
  palette: {
    primary: { main: '#42A5F5' },
    secondary: { main: '#7B1FA2' },
    text: { primary: '#212121', secondary: '#ECEFF1' }
  }
}

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
