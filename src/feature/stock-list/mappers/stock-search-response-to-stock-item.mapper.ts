import { StockItem } from '../interfaces/stock-list.interface';
import { StockSearchResponse } from '../interfaces/stock-search-response.interface';

export const stockSearchResponseToStockItemMapper = (response: StockSearchResponse): StockItem => ({
  country: response['4. region'],
  currency: response['8. currency'],
  name: response['8. currency'],
  symbol: response['1. symbol'],
  type: response['3. type'],
});
