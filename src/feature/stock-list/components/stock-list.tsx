'use client';
import { cn } from '@/lib/utils';
import StockListItem from './stock-list-item';
import { alphaVintageApi } from '@/axios/alphaVantageAxios';
import { useQuery } from '@tanstack/react-query';
import { StockItem } from '../interfaces/stock-list.interface';
import { LoaderCircle } from 'lucide-react';
import { StockSearchResponse } from '../interfaces/stock-search-response.interface';
import { stockSearchResponseToStockItemMapper } from '../mappers/stock-search-response-to-stock-item.mapper';

export const fetchStockSymbols = async (query: string): Promise<StockItem[]> => {
  if (!query) return [];
  const response = await alphaVintageApi.get<{ bestMatches: StockSearchResponse[] }>('', {
    params: { function: 'SYMBOL_SEARCH', keywords: query },
  });
  return response.data.bestMatches?.map(stockSearchResponseToStockItemMapper) || [];
};

type StockListProps = { readonly className?: string; readonly query: string };

export default function StockList({ className, query }: StockListProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['searchResults', query],
    queryFn: () => fetchStockSymbols(query),
    enabled: !!query,
  });

  if (isLoading)
    return (
      <div className="flex justify-center h-[2rem]">
        <LoaderCircle className="animate-spin" />
      </div>
    );

  if (!data?.length) return <p className="text-center text-xl font-bold">No results found</p>;

  return (
    <ul className={cn(className)}>
      {data.map((stockItem) => (
        <StockListItem stockItem={stockItem} key={stockItem.symbol} />
      ))}
    </ul>
  );
}
