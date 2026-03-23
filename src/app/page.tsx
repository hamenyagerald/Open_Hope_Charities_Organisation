import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const highlights = [
  { value: "15+", label: "Dedicated households" },
  { value: "2020", label: "Community initiative started" },
  { value: "10%", label: "Micro-credit interest ceiling" },
  { value: "Bukedea", label: "District of operation" },
];

const programs = [
  {
    title: "Community Savings & Loans",
    description:
      "Families contribute monthly savings and access affordable short-term loans to stabilize income and grow small businesses.",
  },
  {
    title: "Health, Sanitation & Mobilization",
    description:
      "We run outreach sessions and community clean-up campaigns to improve household health, dignity, and local cooperation.",
  },
  {
    title: "Sustainable Livelihoods",
    description:
      "From tree planting to practical income-generating projects, we help households build long-term resilience and prosperity.",
  },
];

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
          <Image
            src="/images/image1.png"
            alt="Open Hope Charities community members standing together"
            fill
            priority
            className="object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />

          <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Building a hopeful and prosperous community in Uganda.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Open Hope Charities is a community-based organization helping
                households fight poverty through savings, micro-credit,
                mobilization, and practical development programs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Become a Partner
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold">Our Mission</h2>
              <p className="text-sm leading-7 text-slate-200">
                To fight poverty and improve standards of living for socio-economic
                transformation by recognizing and promoting community efforts from
                within and beyond the organization.
              </p>
              <p className="rounded-xl bg-white/10 p-4 text-sm leading-7 text-slate-100">
                Physical Address: Kabarwa Parish, Kabarwa Sub-County, Bukedea
                District, Uganda.
              </p>
            </div>
          </div>
        </section>

        <section id="impact" className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-3xl font-semibold text-sky-700">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                About Open Hope Charities
              </h2>
              <p className="leading-8 text-slate-600">
                Founded in April 2020, Open Hope Charities was formed by local
                households determined to create sustainable solutions to poverty.
                The organization brings members together around responsible
                savings, accessible financing, and collective action.
              </p>
              <p className="leading-8 text-slate-600">
                Our vision is a transformed and prosperous community where
                families can meet their basic needs and build dignity through
                cooperation, practical skills, and shared opportunity.
              </p>
            </div>

            <div className="relative min-h-80 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <Image
                src="/images/support-volunteers.jpg"
                alt="Volunteers engaging with children in a community support program"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="programs" className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Focus Programs
            </h2>
            <p className="mt-3 leading-8 text-slate-600">
              Our work combines financial empowerment, social mobilization, and
              sustainable development activities designed for real household impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative min-h-80 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <Image
                src="/images/image2.png"
                alt="Local agricultural activity that supports sustainable household income"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Together, we can scale local impact.
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                We welcome collaborators, donors, and volunteers who share our
                commitment to practical community transformation.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Support the Mission
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl bg-slate-950 px-8 py-12 text-white">
            <h2 className="text-3xl font-semibold tracking-tight">Contact Open Hope</h2>
            <p className="mt-4 max-w-2xl text-slate-200">
              Reach out for partnerships, community support initiatives, and
              organizational collaboration opportunities.
            </p>
            <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
              <p className="rounded-xl border border-white/20 bg-white/10 p-4">
                <span className="font-semibold">Address:</span> Kabarwa Parish,
                Kabarwa Sub-County, Bukedea District, Uganda
              </p>
              <p className="rounded-xl border border-white/20 bg-white/10 p-4">
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+256773052417" className="text-sky-200 hover:text-sky-100">
                  +256 773 052 417
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
