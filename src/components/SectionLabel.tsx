export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-bronze/60" />
      <span className="text-[11px] tracking-editorial text-bronze">
        {children}
      </span>
    </div>
  );
}
