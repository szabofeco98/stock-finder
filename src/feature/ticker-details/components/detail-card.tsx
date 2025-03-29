import { cn } from '@/lib/utils';

type DetailCardProps = { readonly className?: string; readonly name: string; value: string };

export default function DetailCard({ className, name, value }: DetailCardProps) {
  return (
    <div className={cn('rounded-xl bg-card border py-4 px-8 min-w-min flex flex-col justify-center', className)}>
      <strong className="text-xl">{value}</strong>
      <p className=" text-muted-foreground">{name}</p>
    </div>
  );
}
