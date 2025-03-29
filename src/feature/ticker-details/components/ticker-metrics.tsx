import { ChartColumnStacked } from 'lucide-react';
import { TickerData } from '../interfaces/ticker.interface';
import { cn } from '@/lib/utils';
import DetailCard from './detail-card';

type TickerMetricsProps = { readonly className?: string; readonly ticker: TickerData };

export default function TickerMetrics({ className, ticker }: TickerMetricsProps) {
  const { marketCap, pERatio, eps, beta, dividendRate, dividendYield } = ticker;

  return (
    <section aria-labelledby="title" className={cn('flex flex-col gap-4 md:gap-8', className)}>
      <div>
        <h2 id="title" className="flex items-center mb-1 gap-2 text-2xl md:text-3xl font-bold">
          <ChartColumnStacked />
          Metrics
        </h2>
        <div className="border-b-1"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <DetailCard name="Market Cap" value={marketCap} />
        <DetailCard name="P/E ratio" value={pERatio} />
        <DetailCard name="EPS" value={eps} />
        <DetailCard name="Beta" value={beta} />
        <DetailCard name="Dividend rate" value={dividendRate} />
        <DetailCard name="Dividend yield" value={dividendYield} />
      </div>
    </section>
  );
}
