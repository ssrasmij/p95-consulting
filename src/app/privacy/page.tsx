import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | P95 Consulting LLC",
};

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <a
        href="/"
        className="mb-8 inline-block text-sm text-blue-500 hover:text-blue-600"
      >
        &larr; Back to Home
      </a>
      <h1 className="text-3xl font-bold text-slate-800">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-400">
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-slate-800">1. Information We Collect</h2>
          <p className="mt-2">
            When you use our contact form, we collect your name, email address,
            company name, and any message you provide. We may also collect
            standard web analytics data such as IP address, browser type, and
            pages visited.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">2. How We Use Your Information</h2>
          <p className="mt-2">
            We use your information to respond to inquiries, provide consulting
            services, and improve our website. We do not sell, rent, or share
            your personal information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">3. Data Security</h2>
          <p className="mt-2">
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">4. Cookies</h2>
          <p className="mt-2">
            Our website may use cookies and similar technologies for analytics
            purposes. You can control cookie settings through your browser
            preferences.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">5. Third-Party Services</h2>
          <p className="mt-2">
            We may use third-party services such as Google Analytics to analyze
            website traffic. These services may collect information in
            accordance with their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">6. Your Rights</h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us at{" "}
            <a
              href="mailto:hr@p95consulting.com"
              className="text-blue-500 hover:text-blue-600"
            >
              hr@p95consulting.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">7. Changes to This Policy</h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">8. Contact</h2>
          <p className="mt-2">
            If you have questions about this Privacy Policy, please contact us
            at{" "}
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
