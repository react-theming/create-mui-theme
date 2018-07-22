import React from 'react';

import { storiesOf } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../ui/theme';

import Title from '../ui/Title';
import ThemesList from '../ui/ThemesList';

storiesOf('Button', module)
  .addDecorator(muiTheme(theme))
  .add('Title', () => <Title/>)
  .add('ThemesList', () => <ThemesList themesList={[{
    name: 'Theme 1',
    query: '123'
  }]}/>)
