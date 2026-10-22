'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '../../lib/supabase/client';

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<'signup' | 'login'>('signup');
  const [companyName, setCompanyName] = useState('');
  const [accountType, setAccountType] = useState<'candidate' | 'employer'>('candidate');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');

    if (mode === 'signup' && (!termsAccepted || !privacyAccepted)) {
      setMessage('Please accept both the Terms & Conditions and Privacy Policy to create your account.');
      return;
    }

    if (mode === 'signup' && accountType === 'employer' && !companyName.trim()) {
      setMessage('Please enter your company name.');
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();

      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              account_type: accountType,
              company_name: accountType === 'employer' ? companyName.trim() : null,
              terms_accepted: true,
              terms_version: '2026-10-21',
              privacy_accepted: true,
              privacy_version: '2026-10-22',
            },
          },
        });

        if (error) throw error;

        if (data.session) {
          router.replace('/');
          router.refresh();
          return;
        }

        setMessage(
          'Registration received. Check your email to confirm your account before signing in.'
        );
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) throw error;

        router.replace('/');
        router.refresh();
        return;
      }
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-8 inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200">
          ← Back to Talent4Hire
        </Link>

        <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-black">
              T
            </div>
            <h1 className="text-2xl font-bold">Talent4Hire</h1>
            <p className="mt-2 text-sm text-slate-400">
              Candidate & employer account access
            </p>
          </div>

          <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-800 p-1">
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setMessage('');
              }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                mode === 'signup'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Create account
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setMessage('');
              }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                mode === 'login'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Sign in
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'signup' && (
              <div>
                <label htmlFor="accountType" className="mb-2 block text-sm font-medium">
                  Account type
                </label>
                <select
                  id="accountType"
                  value={accountType}
                  onChange={(event) => setAccountType(event.target.value as 'candidate' | 'employer')}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option value="candidate">Candidate — free job seeker account</option>
                  <option value="employer">Employer — free job posting account</option>
                </select>
              </div>
            )}

            {mode === 'signup' && accountType === 'employer' && (
              <div>
                <label htmlFor="companyName" className="mb-2 block text-sm font-medium">
                  Company name
                </label>
                <input
                  id="companyName"
                  type="text"
                  autoComplete="organization"
                  value={companyName}
                  onChange={(event) => setCompanyName(event.target.value)}
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                  placeholder="Your company"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={8}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
                placeholder="At least 8 characters"
              />
            </div>

            {mode === 'signup' && (
              <>
              <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(event) => setTermsAccepted(event.target.checked)}
                  required
                  className="mt-1 h-4 w-4 accent-blue-600"
                />
                <span>
                  I have read and agree to the{' '}
                  <Link href="/terms" className="font-semibold text-blue-300 underline hover:text-blue-200">
                    Terms &amp; Conditions
                  </Link>
                  . Acceptance is required to create an account.
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(event) => setPrivacyAccepted(event.target.checked)}
                  required
                  className="mt-1 h-4 w-4 accent-blue-600"
                />
                <span>
                  I have read and acknowledge the{' '}
                  <Link href="/privacy" className="font-semibold text-blue-300 underline hover:text-blue-200">
                    Privacy Policy
                  </Link>
                  . Acceptance is required to create an account.
                </span>
              </label>
              </>
            )}

            {message && (
              <p role="status" className="rounded-xl border border-slate-700 bg-slate-800 p-3 text-sm text-slate-200">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? 'Please wait...'
                : mode === 'signup'
                  ? 'Create free account'
                  : 'Sign in'}
            </button>
          </form>

          {mode === 'signup' && (
            <p className="mt-5 text-center text-xs leading-5 text-slate-400">
              Candidate accounts include free job-seeking tools. Employer accounts start with free job postings; paid AI features require a separately verified subscription.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
