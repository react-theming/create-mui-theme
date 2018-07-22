import Chance from 'chance';
import { ntc } from './libs/ntc';

const chance = new Chance();

export const themeName = palette => {
  const primaryName = ntc.name(palette.primary.main)[1];
  const secondaryName = ntc.name(palette.secondary.main)[1];
  return `${primaryName} ${secondaryName} ${chance.animal()}`;
};
