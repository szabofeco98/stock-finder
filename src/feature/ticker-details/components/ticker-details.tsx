import { cn } from '@/lib/utils';
import { TickerData } from '../interfaces/ticker.interface';
import { Building2 } from 'lucide-react';
import DetailLabel from './detail-label';
import Link from 'next/link';

type TickerDetailsProps = { readonly className?: string; readonly ticker: TickerData };

export default function TickerDetails({ className, ticker }: TickerDetailsProps) {
  const { description, sector, country, industry, address, webSite } = ticker;
  return (
    <section aria-label="title" className={cn('flex flex-col gap-4', className)}>
      <div>
        <h2 id="title" className="flex items-center mb-1 gap-2 text-2xl md:text-3xl font-bold">
          <Building2 />
          About
        </h2>
        <div className="border-b-1"></div>
      </div>
      <p className="text-muted-foreground">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DetailLabel name="Sector">
          <span>{sector}</span>
        </DetailLabel>
        <DetailLabel name="Country">
          <span>{country}</span>
        </DetailLabel>
        <DetailLabel name="Industry">
          <span>{industry}</span>
        </DetailLabel>
        <DetailLabel name="Address">
          <span>{address}</span>
        </DetailLabel>
        <DetailLabel name="Web site">
          <Link href={webSite} className="hover:underline">
            {webSite}
          </Link>
        </DetailLabel>
      </div>
    </section>
  );
}
