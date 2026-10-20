'use client';

import { useState } from 'react';

type Message = {
  role: 'jason' | 'user';
  text: string;
};

const starterMessage =
  "Hi! I'm Jason Styles, your Talant4Hire assistant. I can help you navigate the platform, understand recruiting workflows, and learn about employer tools. What would you like help with?";

function getReply(input: string): string {
  const text = input.toLowerCase();

  if (text.includes('subscription') || text.includes('price') || text.includes('plan')) {
    return 'Talant4Hire currently displays Starter AI Screening at $99/month, Growth Recruiter at $249/month, and Enterprise Autonomous Hub at $499/month. These displayed plans are not proof of an active payment. Secure subscription verification must be connected before paid tools are unlocked.';
  }

  if (text.includes('interview') || text.includes('video')) {
    return 'The interview workflow should let candidates review the process, provide consent, and schedule or join an interview. Interview notes and job-related evidence should be available to authorized employers for human review. A real video interview service still needs to be connected.';
  }

  if (text.includes('candidate') || text.includes('application') || text.includes('score') || text.includes('rating')) {
    return 'Employers should review candidate qualifications against job-related criteria, with documented evidence, configurable evaluation rules, and a review history. AI-generated assessments should support human review, not automatically reject candidates.';
  }

  if (text.includes('employer') || text.includes('recruit')) {
    return 'The Employer AI Hub is where employers can manage recruiting workflows. Premium features should only become available after the server verifies the employer’s subscription and permissions.';
  }

  if (text.includes('help') || text.includes('page') || text.includes('navigate')) {
    return 'Use Job Reel to explore listings, Candidate to view candidate tools, and Employer AI Hub to explore recruiting plans. Tell me which feature you are trying to use, and I’ll guide you.';
  }

  return 'I’m Jason’s starter assistant. I can currently answer common questions about plans, candidate reviews, recruiting, and interviews. Live AI answers will be available after a secure AI service is connected.';
}

export default function JasonAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'jason', text: starterMessage },
  ]);

  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      { role: 'user', text },
      { role: 'jason', text: getReply(text) },
    ]);
    setInput('');
  }

  return (
    <div className="fixed bottom-5 right-4 z-[100] sm:right-6">
      {open && (
        <section
          aria-label="Jason Styles assistant"
          className="mb-3 flex h-[min(32rem,70vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <header className="flex items-center justify-between bg-slate-900 px-4 py-3 text-white">
            <div>
              <p className="font-bold">Jason Styles</p>
              <p className="text-xs text-emerald-300">Talant4Hire assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Jason assistant"
              className="rounded-lg px-3 py-2 text-lg hover:bg-slate-700"
            >
              ×
            </button>
          </header>

          <div
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-3"
          >
            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`max-w-[90%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === 'user'
                    ? 'ml-auto bg-blue-600 text-white'
                    : 'mr-auto border border-slate-200 bg-white text-slate-800'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="flex gap-2 border-t border-slate-200 bg-white p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              aria-label="Message Jason"
              placeholder="Ask Jason for help..."
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? 'Close Jason assistant' : 'Open Jason assistant'}
        className="ml-auto flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white shadow-xl transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <span aria-hidden="true">✦</span>
        <span>{open ? 'Close Jason' : 'Ask Jason'}</span>
      </button>
    </div>
  );
}
