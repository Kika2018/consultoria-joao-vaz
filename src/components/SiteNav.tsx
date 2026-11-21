import { useEffect, useState } from "react";

const links = [
  { href: "/#empresas", label: "Empresas" },
  { href: "/jovens-ideias", label: "Jovens & Ideias" },
  { href: "/ebook", label: "eBook" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contacto", label: "Contacto" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <a href="/#top" className="font-serif text-lg tracking-[0.18em] text-foreground">JOÃO VAZ</a>
        <button className="inline-flex border border-bronze/50 px-3 py-2 text-xs tracking-wider text-foreground md:hidden" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "FECHAR ×" : "MENU ☰"}
        </button>
        <ul className="hidden items-center gap-6 md:flex lg:gap-9">
          {links.map(l => <li key={l.href}><a href={l.href} className="text-[10px] tracking-[.10em] text-muted-foreground transition-colors hover:text-bronze lg:text-[11px]">{l.label.toUpperCase()}</a></li>)}
        </ul>
      </nav>
      {open && <nav aria-label="Menu mobile" className="border-t border-border bg-background px-6 pb-5 md:hidden">
        <ul className="flex flex-col gap-1">{links.map(l=><li key={l.href}><a href={l.href} onClick={()=>setOpen(false)} className="block py-3 text-xs tracking-[.12em] text-foreground">{l.label.toUpperCase()}</a></li>)}</ul>
      </nav>}
    </header>
  );
}
