'use client';

import React, { useState } from 'react';

export default function Talent4HireHub() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [currentTier, setCurrentTier] = useState('Growth Recruiter ($249/mo)');
  const [isSubscribed, setIsSubscribed] = useState(true);

  // Jason Styles contextual messages per page
  const jasonMessages = {
    jobs: "Hello! I'm Jason Styles, your AI Recruitment Host. I've independently aggregated these Holland, MI manufacturing openings. Select any role to begin your automated video screening with me.",
    candidate: "Welcome to your Candidate Hub. I've scanned your profile against local plant standards. Your questionnaire fit score is sitting strong at 94%!",
    employer: "Employer Dashboard online. Choose your paid AI tier below to unlock my full suite: automated application analysis, custom question dispatch, and autonomous video interviews."
  };

  const pricingTiers = [
    {
      name: 'Starter AI Screening',
      price: '$99 / month',
      badge: 'Basic Automation',
      features: ['AI Auto-Analysis of Applications', 'Automated Questionnaires', 'Basic Skill Matching', 'Jason Styles Standard Support']
    },
    {
      name: 'Growth Recruiter',
      price: '$249 / month',
      badge: 'Most Popular',
      features: ['Everything in Starter', 'Autonomous AI Video Interviews by Jason', 'Behavioral & Technical Ratings', 'Automated Shortlist Generation']
    },
    {
      name: 'Enterprise Autonomous Hub',
      price: '$499 / month',
      badge: 'Full Scale',
      features: ['Everything in Growth', 'Custom AI Interview Personas', 'Deep Diagnostic Analytics', 'Priority ATS Integration & API Access']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2.5 rounded-xl font-bold flex items-center justify-center shadow-inner">
              <i className="fa-solid fa-industry text-lg"></i>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">Talent4Hire</span>
              <span className="hidden sm:inline-block text-xs bg-slate-800 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/30 ml-2">Holland, MI Hub</span>
            </div>
          </div>
          <nav className="flex space-x-1 sm:space-x-2">
            <button 
              onClick={() => setActiveTab('jobs')} 
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${activeTab === 'jobs' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}>
              <i className="fa-solid fa-compass mr-1"></i> Job Reel
            </button>
            <button 
              onClick={() => setActiveTab('candidate')} 
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${activeTab === 'candidate' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}>
              <i className="fa-solid fa-user-graduate mr-1"></i> Candidate
            </button>
            <button 
              onClick={() => setActiveTab('employer')} 
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${activeTab === 'employer' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}>
              <i className="fa-solid fa-briefcase mr-1"></i> Employer AI Hub
            </button>
          </nav>
        </div>
      </header>

      {/* Non-Affiliation Warning Notice */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2 text-xs text-center font-medium shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <i className="fa-solid fa-triangle-exclamation text-amber-600"></i>
          <span><strong>Notice:</strong> All job postings are independently sourced for Holland, MI manufacturing companies and are <strong>not affiliated with Talent4Hire</strong>.</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Jason Styles AI Assistant Bar (Present on every page with page-relevant help) */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-5 rounded-2xl shadow-xl border border-blue-500/30 flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-slate-800 rounded-2xl overflow-hidden border-2 border-blue-400 shadow-inner flex-shrink-0 flex items-center justify-center">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80">
              <source src="/jason-ad.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-1 right-1 bg-emerald-500 w-3 h-3 rounded-full border-2 border-slate-900 animate-pulse" title="Jason Styles Active"></div>
          </div>
          <div className="space-y-2 text-center md:text-left flex-grow">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-xs bg-blue-600 text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Jason Styles AI Recruiter</span>
              <span className="text-xs text-emerald-400 font-semibold"><i className="fa-solid fa-circle-check mr-1"></i> Active on {activeTab.toUpperCase()} View</span>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              "{jasonMessages[activeTab]}"
            </p>
          </div>
        </section>

        {/* TAB 1: JOB REEL */}
        {activeTab === 'jobs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <i className="fa-solid fa-industry text-blue-600"></i> Holland, MI Manufacturing Job Reel
                </h1>
                <p className="text-sm text-slate-500 mt-1">Verified local openings with automated AI video interview screening by Jason Styles.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { company: 'Gentex Corporation', loc: 'Holland, MI (Northside)', role: '3rd Shift Production Team Lead', pay: '$23 - $27 / hr' },
                { company: 'Haworth Inc.', loc: 'Holland, MI (Adams St)', role: 'Machine Builder Apprentice', pay: '$22 - $26 / hr' },
                { company: 'LG Energy Solution', loc: 'Holland, MI (E. 48th St)', role: 'Cell Manufacturing Technician', pay: '$24 - $29 / hr' },
                { company: 'Request Foods', loc: 'Holland, MI (South Washington)', role: 'Machine Operator – 2nd Shift', pay: '$20 - $22 / hr' },
                { company: 'Magna Engineered Glass', loc: 'Holland, MI (John F Donnelly Dr)', role: 'Manufacturing Engineer', pay: '$85,000 - $110,000 / yr' }
              ].map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
                  <div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">{job.company}</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{job.role}</h3>
                    <p className="text-sm font-semibold text-emerald-600 mt-1">{job.pay}</p>
                    <p className="text-xs text-slate-500 mt-1"><i className="fa-solid fa-location-dot text-rose-500 mr-1"></i>{job.loc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs text-slate-400">Full-Time • Direct Hire</span>
                    <button 
                      onClick={() => alert(`Starting Jason Styles Automated AI Video Interview for ${job.role} at ${job.company}!`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-medium transition-all shadow-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-video"></i> Apply with AI
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CANDIDATE DASHBOARD */}
        {activeTab === 'candidate' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <i className="fa-solid fa-user-graduate text-blue-600"></i> Candidate Dashboard & AI Scores
              </h1>
              <p className="text-sm text-slate-500 mt-1">Review your questionnaire results and video interview analytics evaluated by Jason Styles.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                <h3 className="text-lg font-semibold text-slate-800">Your Active Professional Profile</h3>
                <textarea 
                  rows={5}
                  className="w-full p-3.5 text-sm bg-slate-50 border border-slate-300 rounded-xl font-mono outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Alex Morgan | Holland, MI\nSenior CNC Machinist & Production Specialist\nExperience: 8+ years in Holland plants (Gentex, Haworth supply chain).\nSkills: G-Code, PLC Troubleshooting, Lean Six Sigma Green Belt.\nStatus: Ready for AI Video Interview with Jason Styles."
                />
                <button 
                  onClick={() => alert('Profile synchronized with Jason Styles AI evaluator!')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm">
                  Update Profile & Re-run AI Match
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800">AI Performance Breakdown</h3>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border flex justify-between items-center">
                      <span>Questionnaire Fit Score</span>
                      <strong className="text-emerald-600 text-sm">94%</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border flex justify-between items-center">
                      <span>Jason Styles Video Score</span>
                      <strong className="text-emerald-600 text-sm">4.8 / 5.0</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border flex justify-between items-center">
                      <span>Shortlist Status</span>
                      <strong className="text-blue-600 text-sm">Top 5% Tier</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EMPLOYER AI HUB & PAID SUBSCRIPTION TIERS */}
        {activeTab === 'employer' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <i className="fa-solid fa-briefcase text-blue-600"></i> Employer AI Hub & Subscription Tiers
                </h1>
                <p className="text-sm text-slate-500 mt-1">Manage your active paid subscription, configure Jason Styles automated screening, and view candidate analytics.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl text-right">
                <span className="text-[11px] text-blue-700 font-bold uppercase block">Active Subscription Plan</span>
                <span className="text-sm font-extrabold text-slate-900">{currentTier}</span>
              </div>
            </div>

            {/* Paid Subscription Plans */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Choose Your Paid AI Subscription Tier</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingTiers.map((tier, idx) => (
                  <div key={idx} className={`bg-white rounded-2xl shadow-sm border p-6 flex flex-col justify-between space-y-6 relative transition-all ${currentTier.includes(tier.name) ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-md bg-blue-50/20' : 'border-slate-200'}`}>
                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">{tier.badge}</span>
                      <h4 className="text-xl font-bold text-slate-900">{tier.name}</h4>
                      <div className="text-2xl font-extrabold text-blue-600">{tier.price}</div>
                      <ul className="space-y-2 pt-2 text-xs text-slate-600">
                        {tier.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <i className="fa-solid fa-check text-emerald-500"></i>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      onClick={() => { setCurrentTier(`${tier.name} (${tier.price})`); setIsSubscribed(true); alert(`Successfully upgraded/subscribed to ${tier.name}! Jason Styles is now powering your autonomous pipeline.`); }}
                      className={`w-full py-3 rounded-xl text-sm font-semibold transition-all shadow-sm ${currentTier.includes(tier.name) ? 'bg-emerald-600 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                      {currentTier.includes(tier.name) ? 'Active Plan' : 'Upgrade & Activate'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Employer Control Panel & Candidate Ratings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <i className="fa-solid fa-robot text-blue-600"></i> Jason Styles Autonomous Pipeline Controls
                </h3>
                <p className="text-xs text-slate-500">Configure how Jason analyzes incoming applications and conducts automated video interviews.</p>
                
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border flex justify-between items-center">
                    <span>AI Auto-Analysis of Applications</span>
                    <span className="text-emerald-600 font-bold">Enabled</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border flex justify-between items-center">
                    <span>Automated Questionnaire Dispatch</span>
                    <span className="text-emerald-600 font-bold">Active</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border flex justify-between items-center">
                    <span>Autonomous Video Interviewing by Jason</span>
                    <span className="text-emerald-600 font-bold">Active (Paid Tier)</span>
                  </div>
                </div>

                <button 
                  onClick={() => alert('Pipeline parameters updated successfully!')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm">
                  Save Pipeline Settings
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                  <i className="fa-solid fa-chart-pie text-blue-600"></i> Candidate Rating & Interview Analytics
                </h3>
                <p className="text-xs text-slate-500">Aggregate performance scores across recent candidate video interviews.</p>

                <div className="space-y-3">
                  <div className="p-3 bg-slate-50 rounded-xl border flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Alex Morgan</p>
                      <p className="text-xs text-slate-500">CNC Machinist Candidate</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-600">96% Match</span>
                      <p className="text-[11px] text-slate-400">Video Score: 4.9/5</p>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">David Miller</p>
                      <p className="text-xs text-slate-500">Robotics Technician</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-600">91% Match</span>
                      <p className="text-[11px] text-slate-400">Video Score: 4.7/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-center text-xs text-slate-500 space-y-1">
        <p>© 2026 Talent4Hire Hub & Jason Styles AI Recruiter. All rights reserved.</p>
        <p className="text-amber-600 font-medium"><i className="fa-solid fa-triangle-exclamation mr-1"></i> Independently curated for Holland, MI manufacturing companies. Not affiliated with Talent4Hire.</p>
      </footer>
    </div>
  );
}
