import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy \u2014 CareGennie",
  description: "CareGennie privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            CareGennie
          </a>
          <a
            href="/"
            className="text-sm text-[var(--color-primary)] hover:underline"
          >
            &larr; Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[var(--color-border)] shadow-sm">
          <p className="text-sm text-[var(--color-text-muted)] mb-8">
            Last updated: January 2025
          </p>

          <div className="prose prose-slate max-w-none space-y-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-[var(--color-text-primary)] [&_h2]:mb-4 [&_p]:text-[var(--color-text-secondary)] [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-[var(--color-text-secondary)] [&_ul]:leading-relaxed [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_li]:text-[var(--color-text-secondary)]">
            <section>
              <h2>1. Introduction</h2>
              <p>
                CareGennie (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting
                your privacy and personal data. This Privacy Policy explains how we collect,
                use, store, and protect information when you visit our website
                (caregennie.app) and use our services.
              </p>
              <p>
                We comply with the UK General Data Protection Regulation (UK GDPR)
                and the Data Protection Act 2018.
              </p>
            </section>

            <section>
              <h2>2. What Data We Collect</h2>
              <p>We may collect the following personal information:</p>
              <ul>
                <li>
                  <strong>Contact information:</strong> Full name, email address
                </li>
                <li>
                  <strong>Business information:</strong> Agency name, number of carers
                </li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type, device
                  information, pages visited (collected via analytics)
                </li>
                <li>
                  <strong>Communication data:</strong> Any information you provide when
                  contacting us
                </li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Data</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Manage waiting list and beta testing registrations</li>
                <li>Send you updates about CareGennie&apos;s launch and features</li>
                <li>Communicate with you about your registration or enquiries</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                We will only send you marketing communications if you have opted in.
                You can unsubscribe at any time.
              </p>
            </section>

            <section>
              <h2>4. Legal Basis for Processing</h2>
              <p>We process your personal data based on:</p>
              <ul>
                <li>
                  <strong>Consent:</strong> When you submit a form on our website, you
                  consent to us processing your data for the stated purposes.
                </li>
                <li>
                  <strong>Legitimate interests:</strong> To improve our services and
                  communicate relevant updates to registered users.
                </li>
                <li>
                  <strong>Legal obligation:</strong> Where we are required to retain or
                  process data by law.
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Data Storage and Security</h2>
              <p>
                Your data is stored securely using industry-standard encryption and
                security practices. We use trusted third-party service providers who
                are compliant with applicable data protection regulations.
              </p>
              <p>
                We retain your personal data only for as long as necessary to fulfil
                the purposes for which it was collected, or as required by law.
              </p>
            </section>

            <section>
              <h2>6. Third-Party Services</h2>
              <p>We may use the following third-party services:</p>
              <ul>
                <li>
                  <strong>Email service provider:</strong> To send confirmation and
                  update emails (e.g., Resend)
                </li>
                <li>
                  <strong>Analytics:</strong> To understand website usage patterns
                  (anonymised data only)
                </li>
                <li>
                  <strong>Hosting:</strong> Vercel (our website hosting provider)
                </li>
              </ul>
              <p>
                These providers are contractually bound to protect your data and only
                process it as instructed by us.
              </p>
            </section>

            <section>
              <h2>7. Your Rights Under GDPR</h2>
              <p>
                Under the UK GDPR, you have the following rights regarding your
                personal data:
              </p>
              <ul>
                <li>
                  <strong>Right of access:</strong> Request a copy of the data we hold
                  about you
                </li>
                <li>
                  <strong>Right to rectification:</strong> Request correction of
                  inaccurate data
                </li>
                <li>
                  <strong>Right to erasure:</strong> Request deletion of your data
                  (&ldquo;right to be forgotten&rdquo;)
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> Request that we limit
                  how we use your data
                </li>
                <li>
                  <strong>Right to data portability:</strong> Request your data in a
                  machine-readable format
                </li>
                <li>
                  <strong>Right to object:</strong> Object to processing based on
                  legitimate interests
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Withdraw your consent at
                  any time
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the details
                below. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2>8. Cookies</h2>
              <p>
                Our website uses minimal cookies, primarily for analytics purposes.
                These cookies help us understand how visitors use our website so we
                can improve it.
              </p>
              <p>
                You can control cookies through your browser settings. Disabling
                cookies will not affect the core functionality of our website.
              </p>
            </section>

            <section>
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will
                be posted on this page with an updated revision date. We encourage
                you to review this page periodically.
              </p>
            </section>

            <section>
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to
                exercise your data rights, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@caregennie.app
                <br />
                <strong>Website:</strong> caregennie.app
              </p>
              <p>
                You also have the right to lodge a complaint with the Information
                Commissioner&apos;s Office (ICO) at{" "}
                <strong>ico.org.uk</strong> if you believe your data
                protection rights have been violated.
              </p>
            </section>
          </div>

          <div className="mt-8 p-4 bg-[var(--color-bg-alt)] rounded-xl">
            <p className="text-sm text-[var(--color-text-muted)] italic">
              Note: This privacy policy is a template and should be reviewed by a
              qualified legal professional before being used in a live environment.
            </p>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="border-t border-[var(--color-border)] py-8 text-center">
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} CareGennie. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
