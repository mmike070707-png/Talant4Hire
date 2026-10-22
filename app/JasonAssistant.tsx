'use client';

import { useState } from 'react';

type Message = {
  role: 'assistant' | 'user';
  text: string;
};

const starterMessage =
  "Hi! I'm Jason Styles, your Talent4Hire AI recruitment host. I can help with recruiting workflows, employer tools, candidate reviews, and interviews. What would you like help with?";

export default function JasonAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: starterMessage },
  ]);

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const history = messages.map((message) => ({
      role: message.role,
      content: message.text,
    }));

    setMessages((current) => [...current, { role: 'user', text }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/jason', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...history, { role: 'user', content: text }],
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Jason could not respond.');
      }

      setMessages((current) => [
        ...current,
        { role: 'assistant', text: data.reply || 'Please try again.' },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          text: error instanceof Error ? error.message : 'Connection error. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
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
              <p className="text-xs text-emerald-300">
                {loading ? 'Thinking...' : 'AI recruitment assistant'}
              </p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close Jason assistant" className="rounded-lg px-3 py-2 text-lg hover:bg-slate-700">
              ×
            </button>
          </header>

          <div aria-live="polite" className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-3">
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
            {loading && <div className="mr-auto rounded-2xl border bg-white px-3 py-2 text-sm text-slate-500">Jason is thinking...</div>}
          </div>

          <form onSubmit={sendMessage} className="flex gap-2 border-t border-slate-200 bg-white p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              aria-label="Message Jason"
              placeholder="Ask Jason for help..."
              disabled={loading}
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <button type="submit" disabled={!input.trim() || loading} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50">
              {loading ? '...' : 'Send'}
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
