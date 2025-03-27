'use client';
import SearchInput from '@/components/ui/search-input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { QUERY_PARAM } from '../constants/stock-search.constants';
import { cn } from '@/lib/utils';

type StockListHeaderProps = { readonly className?: string; readonly query: string };

export default function StockListHeader({ className, query = '' }: StockListHeaderProps) {
  const [searchValue, setSearchValue] = useState<string>(query);
  const router = useRouter();

  function handleSearchChange(value: string) {
    if (value !== query && searchValue !== value) {
      setSearchValue(value);
      const params = new URLSearchParams();

      if (value) params.set(QUERY_PARAM, value);
      router.push(`?${params.toString()}`, { scroll: false });
    }
  }

  return <SearchInput className={cn('w-full', className)} value={searchValue} onValueChange={handleSearchChange} />;
}
