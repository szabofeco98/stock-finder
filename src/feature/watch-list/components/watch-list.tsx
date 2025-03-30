'use client';

import { StockItem } from '@/feature/stock-list/interfaces/stock-list.interface';
import { useEffect, useState } from 'react';
import { WATCH_LIST } from '../constants/watch-list.constants';
import StockListItem from '@/feature/stock-list/components/stock-list-item';
import { cn } from '@/lib/utils';

type WatchListProps = { readonly className?: string };

export default function WatchList({ className }: WatchListProps) {
  const [watchItems, setWatchItems] = useState<StockItem[]>([]);

  useEffect(() => {
    const watchList = localStorage.getItem(WATCH_LIST);
    if (watchList) {
      setWatchItems(JSON.parse(watchList));
    }
  }, []);

  if (!watchItems.length) return <p className="text-center text-xl font-bold">Your watch list is empty</p>;
  return (
    <ul className={cn(className)}>
      {watchItems.map((item) => (
        <StockListItem key={item.symbol} stockItem={item} />
      ))}
    </ul>
  );
}
