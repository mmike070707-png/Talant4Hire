import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Talent4Hire',
  description: 'Privacy information for Talent4Hire accounts, resumes, job activity, and AI-assisted recruitment.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <article className="mx-auto max-w-3xl space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-10">
        <Link href="/" className="text-sm font-semibold text-blue-300 hover:text-blue-200">← Back to Talent4Hire</Link>
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-slate-400">Version 2026-10-22 · Draft for review</p>
        <p>This policy describes the intended handling of information on Talent4Hire. The operator must verify that the practices described here match the live service and obtain legal review before treating this draft as final.</p>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">1. Information collected</h2>
          <p>Depending on the features you use, information may include account details, candidate profiles and resumes, job preferences, saved jobs, application-link activity, employer details, job postings, support messages, and security or usage logs. Do not submit passwords or unnecessary sensitive personal information into profile or resume fields.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">2. How information is used</h2>
          <p>Information may be used to operate accounts, provide job search and job-management features, save preferences, measure activity you request, respond to support requests, protect the platform, and provide authorized matching or recruitment tools. A feature should not be represented as active until it has actually been implemented and tested.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">3. AI-assisted recruitment</h2>
          <p>When you choose to use an AI feature, information you authorize may be processed to summarize job-related qualifications, compare stated criteria, or support structured interviews. AI output may be inaccurate and is decision support for human review, not an automatic hiring or rejection decision.</p>
          <p>Talent4Hire does not intend to infer personality, health, or protected characteristics from a person's face or voice. Before candidate information, interview responses, recordings, or transcripts are sent to an AI provider, the feature must disclose the relevant processing and obtain required consent or authorization.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">4. External application websites</h2>
          <p>When you select an employer's application link, you leave Talent4Hire and interact with that employer or its service provider. Their privacy practices apply to information you submit on their site. Clicking an application link does not mean Talent4Hire receives your application or its outcome.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">5. Service providers and sharing</h2>
          <p>Information may be processed by providers needed to run the platform, such as authentication, hosting, database, and AI providers. Information may also be disclosed when required by law or reasonably necessary to protect users and the service. Talent4Hire does not intend to sell personal information; the operator must verify actual practices and applicable legal obligations.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">6. Retention and security</h2>
          <p>Information should be retained only as long as needed for disclosed purposes, legal obligations, dispute resolution, and security. Access controls and database policies must be configured to restrict information to authorized users. No online service can guarantee absolute security. Specific retention periods and deletion behavior must be documented and implemented.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">7. Your choices and rights</h2>
          <p>Depending on applicable law, you may have rights to request access to, correction of, or deletion of your information and to withdraw consent where processing relies on consent. Requests may be subject to lawful exceptions or retention requirements. Account deletion, data export, and privacy-request handling must be implemented and tested before being promised as available.</p>
          <p>The operator must publish a verified privacy contact before launch.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">8. Children</h2>
          <p>Talent4Hire is intended for employment-related use and is not designed for children under 13. Users must comply with applicable age and eligibility requirements.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">9. Policy changes and contact</h2>
          <p>This policy may be updated as the service evolves. Material changes should be communicated as required by law. The operator must add verified business and privacy contact details before launch.</p>
        </section>

        <p className="border-t border-slate-800 pt-5 text-sm text-slate-400">Draft notice: this page is not proof that every privacy control described is operational. Review the actual data flows, database access rules, AI-provider terms, retention, deletion, and legal requirements before launch.</p>
        <Link href="/terms" className="font-semibold text-blue-300 underline hover:text-blue-200">Read Terms &amp; Conditions</Link>
      </article>
    </main>
  );
}
