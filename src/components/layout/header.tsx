import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModeToggle } from '../ui/mode-toggle';
import { TrendingUp } from 'lucide-react';

type headerProps = { className?: string };

export default function Header({ className }: headerProps) {
  return (
    <header className={cn('border-b-1 pb-4 mb-4 pt-4 ', className)}>
      <div className="container m-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <Link className="font-bold flex gap-2" href="/">
          <TrendingUp />
          Stock Finder
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
