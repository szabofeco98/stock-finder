import { OverviewResponse } from '../interfaces/overview-response';
import { QuoteResponse } from '../interfaces/quote-response';
import { TickerData } from '../interfaces/ticker.interface';
import { getCurrencyFormatter } from '../utils/format-currency';

const handleNone = (value: string): string => (value === 'None' ? '-' : value);

const currencyFormat = (value: string, formatter: Intl.NumberFormat | undefined): string => {
  const noneValue = handleNone(value);
  if (noneValue === '-') return noneValue;
  if (!formatter) return value;
  return formatter.format(Number(value));
};

const currencyBillionFormat = (value: string, formatter: Intl.NumberFormat | undefined): string => {
  const noneValue = handleNone(value);
  if (noneValue === '-') return noneValue;
  if (!formatter) return value;
  const billion = Number(value) / 1000000000;
  return `${formatter.format(billion)} B`;
};

const percentageFormat = (value: string): string => {
  const noneValue = handleNone(value);
  if (noneValue === '-') return noneValue;
  return `${(Number(value) * 100).toFixed(2)}%`;
};

export const tickerDetailResponseToTickerDataMapper = (overViewResponse: OverviewResponse, quoteResponse: QuoteResponse): TickerData => {
  const quote = quoteResponse['Global Quote'];
  const currency = overViewResponse.Currency;
  const formatter = getCurrencyFormatter(currency);
  const formatCurrency = (value: string) => currencyFormat(value, formatter);
  const formatBillionCurrency = (value: string) => currencyBillionFormat(value, formatter);

  return {
    name: handleNone(overViewResponse.Name),
    symbol: handleNone(overViewResponse.Symbol),
    exchange: handleNone(overViewResponse.Exchange),
    currency: handleNone(overViewResponse.Currency),
    price: formatCurrency(quote['05. price']),
    change: Number(quote['09. change']),
    changePercent: handleNone(quote['10. change percent']),
    description: handleNone(overViewResponse.Description),
    sector: handleNone(overViewResponse.Sector),
    country: handleNone(overViewResponse.Country),
    industry: handleNone(overViewResponse.Industry),
    address: handleNone(overViewResponse.Address),
    webSite: handleNone(overViewResponse.OfficialSite),
    marketCap: formatBillionCurrency(overViewResponse.MarketCapitalization),
    pERatio: handleNone(overViewResponse.PERatio),
    eps: formatCurrency(overViewResponse.EPS),
    beta: handleNone(overViewResponse.Beta),
    dividendRate: formatCurrency(overViewResponse.DividendPerShare),
    dividendYield: percentageFormat(overViewResponse.DividendYield),
  };
};
