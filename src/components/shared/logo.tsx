import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-11 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-orange text-ink shadow-brutal-xs',
        className
      )}
    >
      <img
        alt=""
        className="size-8 object-contain"
        decoding="async"
        draggable="false"
        src="/assets/zero-company-wiki-logo.png"
      />
    </span>
  );
}
