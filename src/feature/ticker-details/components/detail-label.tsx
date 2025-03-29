import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type DetailLabelProps = { readonly className?: string; readonly name: string } & PropsWithChildren;

export default function DetailLabel({ className, name, children }: DetailLabelProps) {
  return (
    <div className={cn(className)}>
      <p className="text-muted-foreground text-md">{name}</p>
      <strong className="text-lg">{children}</strong>
    </div>
  );
}
