import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Talent4Hire',
  description: 'Terms governing use of the Talent4Hire recruitment platform.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg sm:p-10">
        <Link href="/auth" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Back to registration
        </Link>

        <h1 className="mt-6 text-3xl font-black">Talent4Hire Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-slate-500">Version 2026-10-21 · Please read before creating an account.</p>

        <section className="mt-8 space-y-6 leading-7">
          <div>
            <h2 className="text-xl font-bold">1. Acceptance of terms</h2>
            <p>By creating an account or using Talent4Hire, you agree to these Terms &amp; Conditions. If you do not agree, do not create an account or use the platform.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">2. Accounts and security</h2>
            <p>You must provide accurate registration information, keep your login credentials secure, and promptly notify the platform operator if you suspect unauthorized access. You are responsible for activity performed through your account, subject to applicable law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">3. Employer job postings</h2>
            <p>Employers are responsible for the accuracy, legality, and fairness of their job postings and hiring practices. Postings must not be fraudulent, discriminatory, misleading, unlawful, or infringe another party’s rights. Employers must comply with applicable employment, privacy, and anti-discrimination laws.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">4. Free and paid services</h2>
            <p>Talent4Hire may offer a free tier and separate paid subscription plans. The free tier allows unlimited job postings, subject to applicable law and reasonable protections against abuse. Paid features, pricing, billing terms, and cancellation rules will be presented separately before purchase. A displayed plan does not mean a paid subscription has been purchased.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">5. AI-assisted recruitment</h2>
            <p>AI-generated screening, interview, ranking, and recommendation results may be incomplete or inaccurate and must not be treated as the sole basis for consequential hiring decisions. Employers remain responsible for human oversight, validating results, providing legally required accommodations, and ensuring their use of the platform complies with applicable law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">6. Privacy and applicant information</h2>
            <p>Users must only submit personal information they are authorized to provide and must handle candidate information lawfully and confidentially. A separate Privacy Policy should explain what personal information is collected, how it is used, how long it is retained, and how users can exercise applicable rights.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">7. Prohibited use</h2>
            <p>You may not misuse the service, attempt unauthorized access, interfere with its operation, upload malicious code, scrape or disclose protected information without authorization, or use the platform for unlawful discrimination or fraud.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">8. Service availability and changes</h2>
            <p>Features may change or experience interruptions as the platform is maintained and improved. We will not exclude or limit liability where doing so is prohibited by law. Material changes to these terms should be communicated as required by applicable law.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">9. Suspension and termination</h2>
            <p>Access may be restricted or suspended for suspected abuse, security risks, violations of these terms, or legal requirements. Where appropriate and legally required, notice and an opportunity to address the issue will be provided.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">10. Contact and legal review</h2>
            <p>For questions about these terms, contact the Talent4Hire platform operator through its published support contact. These draft terms should be reviewed by a qualified attorney and supplemented with a complete Privacy Policy, accurate business contact information, and applicable governing-law and dispute-resolution provisions before production launch.</p>
          </div>
        </section>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <Link href="/auth" className="inline-flex rounded-xl bg-blue-700 px-5 py-3 font-bold text-white hover:bg-blue-600">
            Return to registration
          </Link>
        </div>
      </article>
    </main>
  );
}
