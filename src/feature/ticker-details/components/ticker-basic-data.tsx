import { cn } from '@/lib/utils';
import { TickerData } from '../interfaces/ticker.interface';
import { getCurrencyFormatter, getCurrentCurrencySymbol } from '../utils/format-currency';
import { Badge } from '@/components/ui/badge';

type TickerBasicDataProps = { readonly className?: string; readonly ticker: TickerData };

export default function TickerBasicData({ className, ticker }: TickerBasicDataProps) {
  const { name, symbol, price, exchange, change, changePercent, currency } = ticker;

  const formatter = getCurrencyFormatter(currency)?.format;
  const currencySymbol = getCurrentCurrencySymbol(currency);

  return (
    <section aria-labelledby="title" className={cn('flex flex-col gap-4', className)}>
      <div className="flex gap-4">
        <h1 id="title" className="text-xl md:text-2xl font-bold">
          {name}/{currencySymbol}
          {symbol}
        </h1>
        <Badge className="text-md">{exchange}</Badge>
      </div>
      <div className="flex gap-4 items-center">
        <h2 className="text-2xl md:text-3xl font-bold">{price}</h2>
        <strong className={`${change > 0 ? 'text-green-700' : 'text-red-700'}`}>
          ({formatter ? formatter(change) : change} / {changePercent})
        </strong>
      </div>
    </section>
  );
}
