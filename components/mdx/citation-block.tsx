export function CitationBlock({
  title = 'Sources and citations',
  children
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-8 rounded-lg border border-border bg-card/40 p-5">
      <h3 className="font-serif text-xl">{title}</h3>
      <div className="mt-3 text-sm text-mutedForeground">{children}</div>
    </section>
  );
}
