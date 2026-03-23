export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-xl font-semibold text-white">Open Hope Charities</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-300">
            We are a community-based organization in Bukedea District, Uganda,
            committed to lifting households through savings, micro-credit,
            mobilization, and practical service.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold text-white">Address:</span> Kabarwa
            Parish, Kabarwa Sub-County, Bukedea District
          </p>
          <p>
            <span className="font-semibold text-white">Postal:</span> C/o P.O.
            Box 5026, Bukedea
          </p>
          <p>
            <span className="font-semibold text-white">Phone:</span>{" "}
            <a href="tel:+256773052417" className="text-sky-300 hover:text-sky-200">
              +256 773 052 417
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-slate-800 px-6 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Open Hope Charities • Love, Share and Care
      </div>
    </footer>
  );
}
