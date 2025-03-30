'use client';
import { Heart } from 'lucide-react';
import { Button } from './button';
import { TickerData } from '@/feature/ticker-details/interfaces/ticker.interface';
import { StockItem } from '@/feature/stock-list/interfaces/stock-list.interface';
import { useEffect, useState } from 'react';
import { WATCH_LIST } from '@/feature/watch-list/constants/watch-list.constants';
import { cn } from '@/lib/utils';

type WatchListButtonProps = { readonly className?: string; readonly ticker: TickerData };

export default function WatchListButton({ className, ticker }: WatchListButtonProps) {
  const [watchItems, setWatchItems] = useState<StockItem[]>([]);
  const { name, symbol, currency, country } = ticker;
  const isOnWatchList = watchItems.some((value) => value.symbol === symbol);

  useEffect(() => {
    const watchList = localStorage.getItem(WATCH_LIST);
    if (watchList) {
      setWatchItems(JSON.parse(watchList));
    }
  }, []);

  function toggleWatchList() {
    console.log(isOnWatchList, 'mi ez ');
    if (isOnWatchList) {
      setWatchItems((watchItems) => {
        const value = watchItems.filter((value) => value.symbol !== symbol);
        saveToLocalStorage(value);
        return value;
      });
    } else {
      const item: StockItem = { country, symbol, currency, name };
      setWatchItems((watchItems) => {
        const value = [...watchItems, item];
        saveToLocalStorage(value);
        return value;
      });
    }
  }

  function saveToLocalStorage(value: StockItem[]) {
    localStorage.setItem(WATCH_LIST, JSON.stringify(value));
  }

  return (
    <Button className={cn('w-fit', className)} onClick={toggleWatchList} variant="outline">
      <Heart className={`${isOnWatchList ? 'fill-foreground' : ''}`} />
    </Button>
  );
}
