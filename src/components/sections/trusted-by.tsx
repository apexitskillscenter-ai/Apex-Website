export function TrustedBy() {
  const partners = [
    { name: "Google", color: "#4285F4" }, { name: "Microsoft", color: "#00A4EF" },
    { name: "Fiverr", color: "#1DBF73" }, { name: "Daraz", color: "#F85606" },
    { name: "Upwork", color: "#14A800" }, { name: "Shopify", color: "#96BF48" },
    { name: "TCS", color: "#C8102E" }, { name: "Webflow", color: "#4353FF" },
  ];
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="container">
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trusted by leading companies &amp; platforms</p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map(({ name, color }) => (
            <span key={name} className="font-display text-xl font-black tracking-tight transition-opacity hover:opacity-80" style={{ color }}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
