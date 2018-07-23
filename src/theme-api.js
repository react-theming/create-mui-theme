import Chance from 'chance';
import { ntc } from './libs/ntc';
const prettier = require("prettier/standalone");
const plugins = [require("prettier/parser-babylon")];

const chance = new Chance();

export const themeName = palette => {
  const primaryName = ntc.name(palette.primary.main)[1];
  const secondaryName = ntc.name(palette.secondary.main)[1];
  return `${primaryName} ${secondaryName} ${chance.animal()}`;
};

export const themeCode = overrides => {
  if (!overrides) return '';
  const keys = Object.keys(overrides);

  const code = `
  // src/ui/theme/index.js

  import { createMuiTheme } from '@material-ui/core/styles';

  ${keys.map(key => `
  const ${key} = ${JSON.stringify(overrides[key])}

  `)}

  export default createMuiTheme({ ${keys.map(key => key)} });

  `;

  return prettier.format(code, {parser: "babylon", plugins, singleQuote: true});
};

export const themeJson = theme => {
  if (!theme) return '';
  const code = `/* src/ui/theme/theme.json */

  ${JSON.stringify(theme)}`;
  return prettier.format(code, {parser: "json", plugins});
}
