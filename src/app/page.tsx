import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Cloud Architecture & Migration",
    description:
      "Design and implement secure AWS cloud infrastructure, migration strategies, cost optimization, and Infrastructure as Code.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Build scalable ETL pipelines, data warehouses, real-time processing systems, and analytics platforms.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
  },
  {
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, containerization, monitoring, logging, and operational automation.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Enterprise Integration",
    description:
      "System integrations, API development, third-party platform connectivity, and modernization of legacy systems.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
    ),
  },
];

const whyUs = [
  "Enterprise-grade cloud expertise",
  "Performance-driven engineering",
  "Security and compliance focused",
  "Scalable architecture design",
  "Long-term partnership mindset",
];

const industries = [
  { name: "Financial Services", icon: "chart" },
  { name: "Healthcare", icon: "health" },
  { name: "E-Commerce", icon: "cart" },
  { name: "Enterprise IT", icon: "server" },
  { name: "Technology Startups", icon: "rocket" },
];

function IndustryIcon({ type }: { type: string }) {
  const cls = "h-8 w-8";
  switch (type) {
    case "chart":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      );
    case "health":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      );
    case "cart":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      );
    case "server":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
          />
        </svg>
      );
    case "rocket":
      return (
        <svg
          className={cls}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center bg-navy-900 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Cloud & Data Engineering{" "}
            <span className="text-blue-400">Solutions That Scale</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            P95 Consulting helps organizations modernize cloud infrastructure,
            build reliable data platforms, and automate enterprise systems.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-lg bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-600 sm:w-auto"
            >
              Schedule a Consultation
            </a>
            <a
              href="#contact"
              className="w-full rounded-lg border border-slate-500 px-8 py-4 text-base font-semibold text-slate-300 transition-colors hover:border-white hover:text-white sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Built for Performance. Designed to Scale.
            </h2>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                P95 Consulting LLC delivers cloud architecture, data
                engineering, and enterprise automation solutions. We partner with
                organizations to design secure, scalable systems that improve
                operational efficiency and unlock business intelligence.
              </p>
              <p>
                Our focus is on long-term stability, performance optimization,
                and measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              End-to-end solutions for modern infrastructure
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-navy-900/5 text-navy-700 transition-colors group-hover:bg-blue-500/10 group-hover:text-blue-500">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Why P95 Consulting
              </h2>
              <p className="mt-4 text-lg text-slate-500">
                We deliver results that matter, with engineering excellence at
                every layer.
              </p>
            </div>
            <div className="space-y-4">
              {whyUs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-lg border border-slate-100 bg-slate-50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="bg-navy-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Industries
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Delivering impact across sectors
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex flex-col items-center gap-4 rounded-xl border border-slate-700 bg-navy-800 p-8 text-center transition-all hover:border-blue-500/50 hover:bg-navy-700"
              >
                <div className="text-slate-400 transition-colors group-hover:text-blue-400">
                  <IndustryIcon type={industry.icon} />
                </div>
                <span className="text-sm font-medium text-slate-300">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-navy-800 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Let&apos;s discuss how we can help optimize your cloud and data
            systems.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-lg bg-white px-8 py-4 text-base font-semibold text-navy-900 transition-colors hover:bg-slate-100"
          >
            Book a Free 30-Minute Consultation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Get in touch to discuss your project
            </p>
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <ContactForm />
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  P95 Consulting LLC
                </h3>
                <p className="mt-1 text-slate-500">
                  Pennsylvania, United States
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Email
                </h4>
                <a
                  href="mailto:hr@p95consulting.com"
                  className="mt-1 block text-blue-500 transition-colors hover:text-blue-600"
                >
                  hr@p95consulting.com
                </a>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Connect
                </h4>
                <a
                  href="https://linkedin.com/company/p95consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-blue-500 transition-colors hover:text-blue-600"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} P95 Consulting LLC. All rights
              reserved.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              P95 Consulting LLC is a registered limited liability company in
              the state of Pennsylvania. P95 Consulting LLC is not affiliated
              with any other similarly named entities.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
              <a
                href="/terms"
                className="transition-colors hover:text-slate-600"
              >
                Terms of Service
              </a>
              <span>|</span>
              <a
                href="/privacy"
                className="transition-colors hover:text-slate-600"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
