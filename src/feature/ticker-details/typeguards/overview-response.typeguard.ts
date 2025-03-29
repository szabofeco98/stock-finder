import { OverviewResponse } from '../interfaces/overview-response';

const requiredKeys: (keyof OverviewResponse)[] = [
  'Symbol',
  'Name',
  'Address',
  'Exchange',
  'Currency',
  'Description',
  'Sector',
  'Country',
  'Industry',
  'OfficialSite',
  'MarketCapitalization',
  'PERatio',
  'EPS',
  'Beta',
  'DividendYield',
  'DividendPerShare',
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isOverviewResponse = (value: any): value is OverviewResponse => {
  if (typeof value !== 'object' || value === null) return false;
  return requiredKeys.every((key) => typeof value[key] === 'string');
};
