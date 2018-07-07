# Create Material-UI App

Material-UI boilerplate with:

- `@material-ui/core` v1
- `react-scripts` (core of CRA)
- `@storybook/react` v3/v4
- `storybook-addon-material-ui` @next

## How to use

```sh
git clone https://github.com/react-theming/create-material-ui-app.git
cd create-material-ui-app
yarn # select @storybook/react version when prompted
yarn storybook
```

open http://localhost:9009 in your browser

it's your Storybook with Material-UI components

Start writing new stories from `src/stories/index.js` file.
Create your app as an usual CRA app.

## Notes about this boilerplate

Create Material-UI App is built on top of [Create React App](https://github.com/facebook/create-react-app), which means all features that create-react-app supports are available.
You can reproduce these steps to create everything from scratch or choose some of them to add needed tools to your existing project:

- `create-react-app` to create a project base
- `getstorybook` to add a storybook to your CRA project
- `yarn add --dev storybook-addon-material-ui@next` to add material-ui addon
- `yarn add @material-ui/core` - install material-ui v1.xx
- add `import 'storybook-addon-material-ui/register'` to `.storybook/addons.js`
- add `import { muiTheme } from 'storybook-addon-material-ui';` to `src/stories/index.js`
- add `.addDecorator(muiTheme())` to `src/stories/index.js`

We recommend sticking with this boilerplate for new projects since we trying to keep here the newest stable configuration.

## CONTRIBUTING

Any feature requests, issues, PRs to this project are very welcome!

#### Credits

[telegram:@usulpro](https://t.me/usulpro) <small>(The quickest way to contact me :zap:)</small>

[![@UsulPro](https://img.shields.io/badge/github-UsulPro-blue.svg)](https://github.com/UsulPro)

[![@react-theming](https://img.shields.io/badge/github-React%20Theming-red.svg)](https://github.com/react-theming)

