import { QuoteResponse } from '../interfaces/quote-response';

const requiredKeys: (keyof QuoteResponse['Global Quote'])[] = ['05. price', '09. change', '10. change percent'];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isQuoteResponse = (value: any): value is QuoteResponse => {
  if (typeof value !== 'object' || value === null || !value['Global Quote']) return false;
  const globalQuote = value['Global Quote'];
  return requiredKeys.every((key) => typeof globalQuote[key] === 'string');
};
