import { cn } from '@/lib/utils';
import { StockItem } from '../interfaces/stock-list.interface';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowBigRight } from 'lucide-react';

type StockListItemProps = { readonly className?: string; readonly stockItem: StockItem };

export default function StockListItem({ className, stockItem: { symbol, name, country, currency, type } }: StockListItemProps) {
  return (
    <li className={cn(className)}>
      <Link href={`/${symbol}`} className="flex justify-between items-center w-full hover:bg-primary/20 rounded-md p-4 ">
        <div className="flex flex-col gap-2 w-[80%]">
          <Badge className="text-sm">{symbol}</Badge>
          <div>
            <strong>{name}</strong>
            <p>
              <strong>{currency}</strong> - {country}
            </p>
            <span>{type}</span>
          </div>
        </div>
        <ArrowBigRight />
      </Link>
    </li>
  );
}
