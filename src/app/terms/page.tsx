import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | P95 Consulting LLC",
};

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <a
        href="/"
        className="mb-8 inline-block text-sm text-blue-500 hover:text-blue-600"
      >
        &larr; Back to Home
      </a>
      <h1 className="text-3xl font-bold text-slate-800">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-400">
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-800">1. Agreement to Terms</h2>
          <p className="mt-2">
            By accessing or using the services provided by P95 Consulting LLC
            (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be bound by
            these Terms of Service. If you do not agree to these terms, please
            do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">2. Services</h2>
          <p className="mt-2">
            P95 Consulting LLC provides cloud architecture, data engineering,
            DevOps, and enterprise integration consulting services. The specific
            scope and terms of any engagement will be defined in a separate
            statement of work or service agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">3. Intellectual Property</h2>
          <p className="mt-2">
            All content on this website, including text, graphics, logos, and
            design, is the property of P95 Consulting LLC and is protected by
            applicable intellectual property laws. You may not reproduce,
            distribute, or create derivative works without our written consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">4. Limitation of Liability</h2>
          <p className="mt-2">
            P95 Consulting LLC shall not be liable for any indirect, incidental,
            special, or consequential damages arising from the use of our
            website or services. Our total liability shall not exceed the amount
            paid for the specific services giving rise to the claim.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">5. Disclaimer</h2>
          <p className="mt-2">
            P95 Consulting LLC is a registered limited liability company in the
            state of Pennsylvania. We are not affiliated with, endorsed by, or
            connected to any other similarly named entities or organizations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">6. Governing Law</h2>
          <p className="mt-2">
            These terms shall be governed by and construed in accordance with
            the laws of the Commonwealth of Pennsylvania, without regard to its
            conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">7. Contact</h2>
          <p className="mt-2">
            If you have questions about these Terms, please contact us at{" "}
            <a
              href="mailto:hr@p95consulting.com"
              className="text-blue-500 hover:text-blue-600"
            >
              hr@p95consulting.com
            </a>
            .
          </p>
        </section>

        <p className="mt-8 text-xs text-slate-400">
          This document is a placeholder and should be reviewed by a qualified
          attorney before being considered legally binding.
        </p>
      </div>
    </main>
  );
}
