import Link from 'next/link';

export default function Notfound() {
  return (
    <section className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-2xl font-bold">404 - Page Not found</h1>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
      <Link className="font-bold underline" href="/">
        Back to home
      </Link>
    </section>
  );
}
