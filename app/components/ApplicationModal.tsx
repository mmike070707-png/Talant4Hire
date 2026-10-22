'use client';

import { useEffect, useState } from 'react';

type Job = {
company: string;
role: string;
category: string;
pay: string;
loc: string;
};

type ApplicationModalProps = {
job: Job | null;
onClose: () => void;
};

export default function ApplicationModal({ job, onClose }: ApplicationModalProps) {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [experience, setExperience] = useState('');
const [skills, setSkills] = useState('');
const [resume, setResume] = useState('');
const [status, setStatus] = useState('');

useEffect(() => {
if (!job) return;
try {
const saved = localStorage.getItem('talant4hire_candidate_profile');
if (saved) {
const profile = JSON.parse(saved);
setName(profile.name || '');
setEmail(profile.email || '');
setPhone(profile.phone || '');
setExperience(profile.experience || '');
setSkills(profile.skills || '');
setResume(profile.resume || '');
}
} catch {
// Continue with an empty form if saved browser data is invalid.
}
}, [job]);

if (!job) return null;

function submitApplication(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();

const application = {
  id: `${Date.now()}`,
  job: {
    company: job!.company,
    role: job!.role,
    category: job!.category,
    pay: job!.pay,
    loc: job!.loc,
  },
  candidate: { name, email, phone, experience, skills, resume },
  status: 'Draft saved on this device',
  submittedAt: new Date().toISOString(),
};

try {
  const applications = JSON.parse(
    localStorage.getItem('talant4hire_applications') || '[]'
  );
  applications.push(application);
  localStorage.setItem('talant4hire_applications', JSON.stringify(applications));
  localStorage.setItem(
    'talant4hire_candidate_profile',
    JSON.stringify({ name, email, phone, experience, skills, resume })
  );
  setStatus('Application draft saved on this device. It has NOT been sent to the employer.');
} catch {
  setStatus('Unable to save. Check your browser storage settings and try again.');
}

}

return (
<div className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-sm p-4 flex items-center justify-center overflow-y-auto">
<section
role="dialog"
aria-modal="true"
aria-labelledby="application-title"
className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto p-6 sm:p-8"
>
<div className="flex justify-between items-start gap-4 mb-6">
<div>
<p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Jason Styles · Application Assistant</p>
<h2 id="application-title" className="text-2xl font-black text-slate-900 mt-2">Apply for {job.role}</h2>
<p className="text-sm text-slate-500 mt-1">{job.company} · {job.loc} · {job.pay}</p>
</div>
<button type="button" onClick={onClose} aria-label="Close application" className="rounded-xl px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold">✕</button>
</div>

    <form onSubmit={submitApplication} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="text-sm font-semibold text-slate-700">Full name *
          <input required autoComplete="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 p-3 font-normal" />
        </label>
        <label className="text-sm font-semibold text-slate-700">Email *
          <input required type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 p-3 font-normal" />
        </label>
        <label className="text-sm font-semibold text-slate-700">Phone
          <input type="tel" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 p-3 font-normal" />
        </label>
        <label className="text-sm font-semibold text-slate-700">Years of relevant experience
          <input value={experience} onChange={e => setExperience(e.target.value)} placeholder="e.g. 5 years" className="mt-1 w-full rounded-xl border border-slate-300 p-3 font-normal" />
        </label>
      </div>

      <label className="block text-sm font-semibold text-slate-700">Skills relevant to this role
        <textarea rows={3} value={skills} onChange={e => setSkills(e.target.value)} placeholder="List relevant skills, certifications, and training" className="mt-1 w-full rounded-xl border border-slate-300 p-3 font-normal" />
      </label>

      <label className="block text-sm font-semibold text-slate-700">Resume or work history
        <textarea rows={5} value={resume} onChange={e => setResume(e.target.value)} placeholder="Paste your resume or summarize your work history" className="mt-1 w-full rounded-xl border border-slate-300 p-3 font-normal" />
      </label>

      <p className="text-xs text-slate-500">Privacy notice: this prototype saves your details in this browser on this device. It does not upload your information, contact the employer, or conduct an AI interview.</p>

      {status && <p role="status" className="rounded-xl bg-blue-50 border border-blue-200 p-3 text-sm text-blue-800">{status}</p>}

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-bold">Save application draft</button>
        <button type="button" onClick={onClose} className="rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 font-bold">Close</button>
      </div>
    </form>
  </section>
</div>

);
}
