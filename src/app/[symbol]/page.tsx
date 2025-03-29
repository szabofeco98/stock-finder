import { alphaVintageApi } from '@/axios/alphaVantageAxios';
import TickerBasicData from '@/feature/ticker-details/components/ticker-basic-data';
import TickerDetails from '@/feature/ticker-details/components/ticker-details';
import TickerMetrics from '@/feature/ticker-details/components/ticker-metrics';
import { OverviewResponse } from '@/feature/ticker-details/interfaces/overview-response';
import { QuoteResponse } from '@/feature/ticker-details/interfaces/quote-response';
import { TickerData } from '@/feature/ticker-details/interfaces/ticker.interface';
import { tickerDetailResponseToTickerDataMapper } from '@/feature/ticker-details/mappers/ticker-detail-response-to-ticker-data.mapper';
import { isOverviewResponse } from '@/feature/ticker-details/typeguards/overview-response.typeguard';
import { isQuoteResponse } from '@/feature/ticker-details/typeguards/quote-response.typeguard';
import { notFound } from 'next/navigation';

async function fetchTickerDetails(symbol: string): Promise<TickerData> {
  if (!symbol) throw new Error('Symbol not found');
  const quoteResponse = await alphaVintageApi.get<QuoteResponse | unknown>('', {
    params: {
      symbol,
      function: 'GLOBAL_QUOTE',
    },
  });
  const overViewResponse = await alphaVintageApi.get<OverviewResponse | unknown>('', {
    params: {
      symbol,
      function: 'OVERVIEW',
    },
  });

  if (!isOverviewResponse(overViewResponse.data) || !isQuoteResponse(quoteResponse.data)) throw new Error('Result not found');

  return tickerDetailResponseToTickerDataMapper(overViewResponse.data, quoteResponse.data);
}

type TickerDetailPageParams = { params: Promise<{ symbol: string }> };

export default async function Page({ params }: TickerDetailPageParams) {
  const { symbol } = await params;
  const ticker = await fetchTickerDetails(symbol).catch(() => notFound());

  return (
    <section className="container m-auto flex flex-col gap-4 pb-6 md:gap-12 px-4 md:px-0">
      <TickerBasicData ticker={ticker} />
      <TickerMetrics ticker={ticker} />
      <TickerDetails ticker={ticker} />
    </section>
  );
}
