const navigation = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-slate-950/75 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-white">
          Open Hope Charities
        </a>

        <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/90 md:block">
          Love • Share • Care
        </span>

        <div className="flex items-center gap-4 md:gap-6">
          <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-100 transition hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Join Us
          </a>
        </div>
      </div>
    </header>
  );
}
