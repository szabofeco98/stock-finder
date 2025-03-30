import { Card, CardContent } from '@/components/ui/card';
import WatchList from '@/feature/watch-list/components/watch-list';

export default function Page() {
  return (
    <section aria-labelledby="id" className="container m-auto px-4 md:px-0">
      <h1 id="title" className="mx-4 md:mx-0 text-2xl mb-4">
        Watch List
      </h1>
      <Card>
        <CardContent>
          <WatchList />
        </CardContent>
      </Card>
    </section>
  );
}
