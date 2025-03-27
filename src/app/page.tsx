import { Card, CardContent, CardHeader } from '@/components/ui/card';
import StockList from '@/feature/stock-list/components/stock-list';
import StockListHeader from '@/feature/stock-list/components/stock-list-header';
import { QUERY_PARAM } from '@/feature/stock-list/constants/stock-search.constants';

type HomePageProps = { readonly searchParams: Promise<{ readonly [QUERY_PARAM]: string }> };

export default async function Home(params: HomePageProps) {
  const searchParams = await params.searchParams;
  const query = searchParams[QUERY_PARAM];
  console.log(query);

  return (
    <section className="container m-auto">
      <h1 className="mx-4 md:mx-0 text-2xl mb-4">Welcome on Stock Finder</h1>
      <Card className="max-h-[70vh] min-h-[70vh] md:max-h-[90vh] mx-4 md:mx-0">
        <CardHeader className="pb-8 border-b-1">
          <StockListHeader query={query} />
        </CardHeader>
        <CardContent className="overflow-y-auto">
          <StockList query={query} />
        </CardContent>
      </Card>
    </section>
  );
}
