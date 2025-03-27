import { useDebounce } from '@/hooks/debounce-search';
import { Input } from './input';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Label } from './label';

type SearchInputProps = { readonly value: string; readonly onValueChange?: (value: string) => void } & React.ComponentProps<'input'>;

export default function SearchInput({ value, className, onValueChange, ...props }: SearchInputProps) {
  const [filter, debounceFilter, handleFilterChange] = useDebounce(value);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(debounceFilter);
    }
  }, [debounceFilter, onValueChange]);

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor="search" className="font-bold">
        Type here to search
      </Label>
      <div className="relative w-full">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          {...props}
          id="search"
          placeholder="Search..."
          className="w-full pl-8"
          type="search"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
}
