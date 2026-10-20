'use client';

import React, { useState } from 'react';

export default function Talant4HireHub() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [selectedCategory, setSelectedCategory] = useState('All Manufacturing');
  const [currentTier, setCurrentTier] = useState('Growth Recruiter ($249/mo)');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const jasonMessages = {
    jobs: "Hello! I'm Jason Styles, your AI Recruitment Host. Use the category dropdown below to filter local Holland, MI openings or click 'Apply with AI' for instant automated screening.",
    candidate: "Welcome to your Candidate Hub. Review your questionnaire fit scores, video interview analytics, and active profile status managed by my AI algorithms.",
    employer: "Employer AI Hub online. Select your paid subscription tier, configure automated application screening, and review candidate ranking analytics below."
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

  const jobsList = [
    { company: 'Gentex Corporation', loc: 'Holland, MI (Northside)', role: '3rd Shift Production Team Lead', pay: '$23 - $27 / hr', category: 'Production & Assembly' },
    { company: 'Haworth Inc.', loc: 'Holland, MI (Adams St)', role: 'Machine Builder Apprentice', pay: '$22 - $26 / hr', category: 'Skilled Trades' },
    { company: 'LG Energy Solution', loc: 'Holland, MI (E. 48th St)', role: 'Cell Manufacturing Technician', pay: '$24 - $29 / hr', category: 'Engineering & Tech' },
    { company: 'Request Foods', loc: 'Holland, MI (South Washington)', role: 'Machine Operator – 2nd Shift', pay: '$20 - $22 / hr', category: 'Production & Assembly' },
    { company: 'Magna Engineered Glass', loc: 'Holland, MI (John F Donnelly Dr)', role: 'Manufacturing Engineer', pay: '$85,000 - $110,000 / yr', category: 'Engineering & Tech' }
  ];

  const filteredJobs = selectedCategory === 'All Manufacturing' 
    ? jobsList 
    : jobsList.filter(j => j.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between">
      {/* Top Navbar with Dropdown Menus & Navigation */}
      <header className="bg-slate-900 text-white shadow-xl sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-3 rounded-2xl font-bold flex items-center justify-center shadow-lg">
              <i className="fa-solid fa-industry text-xl"></i>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">Talant4Hire</span>
              <span className="hidden sm:inline-block text-xs bg-blue-900/60 text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/30 ml-2 font-medium">Holland, MI Hub</span>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => setActiveTab('jobs')} 
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'jobs' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}>
              <i className="fa-solid fa-compass"></i> Job Reel & AI Screen
            </button>
            <button 
              onClick={() => setActiveTab('candidate')} 
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'candidate' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}>
              <i className="fa-solid fa-user-graduate"></i> Candidate Portal
            </button>
            <button 
              onClick={() => setActiveTab('employer')} 
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${activeTab === 'employer' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}>
              <i className="fa-solid fa-briefcase"></i> Employer AI Hub & Tiers
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-white p-2">
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => { setActiveTab('jobs'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800">Job Reel & AI Screen</button>
            <button onClick={() => { setActiveTab('candidate'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800">Candidate Portal</button>
            <button onClick={() => { setActiveTab('employer'); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800">Employer AI Hub & Tiers</button>
          </div>
        )}
      </header>

      {/* Non-Affiliation Notice Banner */}
      <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs text-center font-medium shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <i className="fa-solid fa-triangle-exclamation text-amber-600 text-sm"></i>
          <span><strong>Notice:</strong> All job postings are independently sourced for Holland, MI manufacturing companies and are <strong>not affiliated with Talant4Hire</strong>.</span>
        </div>
      </div>

      {/* Main Dashboard Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Jason Styles AI Assistant Card with Video & Dynamic Context */}
        <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-blue-500/30 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 bg-slate-800 rounded-2xl overflow-hidden border-4 border-blue-500/50 shadow-2xl flex-shrink-0 flex items-center justify-center group">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              poster="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80">
              <source src="/jason-styles.mp4" type="video/mp4" />
              <source src="/jason-ad.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-2 right-2 bg-emerald-500 w-4 h-4 rounded-full border-2 border-slate-900 animate-pulse" title="Jason Styles Active"></div>
          </div>

          <div className="space-y-3 text-center lg:text-left flex-grow z-10">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">Jason Styles AI Recruiter</span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check text-[10px]"></i> Active on {activeTab.toUpperCase()} View
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Your 24/7 Autonomous Recruitment Host</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              "{jasonMessages[activeTab]}"
            </p>
          </div>
        </section>

        {/* TAB 1: JOB REEL & INTERACTIVE CATEGORY DROPDOWN */}
        {activeTab === 'jobs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2.5 rounded-xl"><i className="fa-solid fa-industry"></i></div>
                  Holland, MI Manufacturing Job Reel
                </h1>
                <p className="text-sm text-slate-500 mt-1">Browse active local plant openings screened and analyzed by Jason Styles.</p>
              </div>

              {/* Interactive Category Dropdown Menu */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider whitespace-nowrap"><i className="fa-solid fa-filter text-blue-600 mr-1"></i> Filter:</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-sm w-full md:w-64">
                  <option value="All Manufacturing">All Manufacturing Categories</option>
                  <option value="Production & Assembly">Production & Assembly</option>
                  <option value="Skilled Trades">Skilled Trades & Maintenance</option>
                  <option value="Engineering & Tech">Engineering & Technical</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, idx) => (
                <div key={idx} className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 p-6 flex flex-col justify-between space-y-6 transition-all group">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{job.company}</span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">{job.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.role}</h3>
                    <div className="text-base font-extrabold text-emerald-600">{job.pay}</div>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <i className="fa-solid fa-location-dot text-rose-500"></i> {job.loc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs text-slate-400 font-medium">Screened by Jason Styles</span>
                    <button 
                      onClick={() => alert(`Starting Jason Styles Autonomous AI Video Interview for ${job.role} at ${job.company}!`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-600/20 flex items-center gap-2">
                      <i className="fa-solid fa-video"></i> Apply with AI
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CANDIDATE PORTAL & DASHBOARD */}
        {activeTab === 'candidate' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <h1 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                <div className="bg-indigo-100 text-indigo-600 p-2.5 rounded-xl"><i className="fa-solid fa-user-graduate"></i></div>
                Candidate Dashboard & AI Scores
              </h1>
              <p className="text-sm text-slate-500 mt-1">Review your questionnaire results, video interview ratings, and profile status evaluated by Jason Styles.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <i className="fa-solid fa-file-pen text-blue-600"></i> Your Professional Candidate Profile
                </h3>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Editable Resume & Skill Summary</label>
                  <textarea 
                    rows={6}
                    className="w-full p-4 text-sm bg-slate-50 border border-slate-300 rounded-2xl font-mono outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 shadow-inner"
                    defaultValue="Alex Morgan | Holland, MI\nSenior CNC Machinist & Production Specialist\nExperience: 8+ years in Holland plants (Gentex, Haworth supply chain).\nSkills: G-Code, PLC Troubleshooting, Lean Six Sigma Green Belt.\nStatus: Ready for AI Video Interview with Jason Styles."
                  />
                </div>
                <button 
                  onClick={() => alert('Profile successfully synchronized with Jason Styles AI evaluator!')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md shadow-blue-600/30 flex items-center gap-2">
                  <i className="fa-solid fa-rotate"></i> Synchronize & Re-run AI Match
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <i className="fa-solid fa-chart-line text-emerald-600"></i> AI Performance Breakdown
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Questionnaire Fit</span>
                        <p className="text-lg font-black text-slate-900">94% Accuracy</p>
                      </div>
                      <div className="bg-emerald-100 text-emerald-700 p-2.5 rounded-xl"><i className="fa-solid fa-check text-lg"></i></div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Video Interview Score</span>
                        <p className="text-lg font-black text-slate-900">4.8 / 5.0 Rating</p>
                      </div>
                      <div className="bg-blue-100 text-blue-700 p-2.5 rounded-xl"><i className="fa-solid fa-video text-lg"></i></div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase">Shortlist Tier</span>
                        <p className="text-lg font-black text-indigo-600">Top 5% Candidate</p>
                      </div>
                      <div className="bg-indigo-100 text-indigo-700 p-2.5 rounded-xl"><i className="fa-solid fa-trophy text-lg"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EMPLOYER AI HUB & SUBSCRIPTION TIERS */}
        {activeTab === 'employer' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2.5 rounded-xl"><i className="fa-solid fa-briefcase"></i></div>
                  Employer AI Hub & Subscription Tiers
                </h1>
                <p className="text-sm text-slate-500 mt-1">Manage your active paid subscription, configure Jason Styles automated screening, and view candidate ratings.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 px-5 py-3 rounded-2xl text-right shadow-sm">
                <span className="text-[11px] text-blue-700 font-bold uppercase tracking-wider block">Active Plan</span>
                <span className="text-sm font-black text-slate-900">{currentTier}</span>
              </div>
            </div>

            {/* Paid Subscription Tiers Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Select Your Paid AI Subscription Tier</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingTiers.map((tier, idx) => (
                  <div key={idx} className={`bg-white rounded-3xl shadow-sm border p-8 flex flex-col justify-between space-y-6 relative transition-all ${currentTier.includes(tier.name) ? 'border-blue-600 ring-4 ring-blue-500/20 shadow-xl bg-blue-50/20' : 'border-slate-200 hover:shadow-lg'}`}>
                    <div className="space-y-4">
                      <span className="text-xs font-extrabold uppercase tracking-widest bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full inline-block">{tier.badge}</span>
                      <h4 className="text-xl font-black text-slate-900">{tier.name}</h4>
                      <div className="text-3xl font-black text-blue-600">{tier.price}</div>
                      <ul className="space-y-3 pt-2 text-xs text-slate-600">
                        {tier.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-emerald-500 text-sm"></i>
                            <span className="font-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      onClick={() => { setCurrentTier(`${tier.name} (${tier.price})`); alert(`Successfully upgraded/subscribed to ${tier.name}! Jason Styles is now powering your autonomous recruitment pipeline.`); }}
                      className={`w-full py-3.5 rounded-2xl text-sm font-bold transition-all shadow-md ${currentTier.includes(tier.name) ? 'bg-emerald-600 text-white shadow-emerald-600/30' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                      {currentTier.includes(tier.name) ? 'Active Plan' : 'Upgrade & Activate'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Employer Pipeline Controls & Candidate Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <i className="fa-solid fa-robot text-blue-600"></i> Jason Styles Autonomous Pipeline Controls
                </h3>
                <p className="text-xs text-slate-500">Configure how Jason analyzes incoming applications and conducts automated video interviews.</p>
                
                <div className="space-y-3 text-xs">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                    <span className="font-semibold text-slate-700">AI Auto-Analysis of Applications</span>
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Enabled</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Automated Questionnaire Dispatch</span>
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Active</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Autonomous Video Interviewing by Jason</span>
                    <span className="text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Active (Paid Tier)</span>
                  </div>
                </div>

                <button 
                  onClick={() => alert('Pipeline parameters successfully updated!')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl text-sm font-bold transition-all shadow-md shadow-blue-600/30">
                  Save Pipeline Settings
                </button>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <i className="fa-solid fa-chart-pie text-indigo-600"></i> Candidate Rating & Interview Analytics
                </h3>
                <p className="text-xs text-slate-500">Aggregate performance scores across recent candidate video interviews.</p>

                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                    <div>
                      <p className="font-extrabold text-slate-900 text-sm">Alex Morgan</p>
                      <p className="text-xs text-slate-500">CNC Machinist Candidate</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">96% Match</span>
                      <p className="text-[11px] text-slate-400 mt-1">Video Score: 4.9/5</p>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                    <div>
                      <p className="font-extrabold text-slate-900 text-sm">David Miller</p>
                      <p className="text-xs text-slate-500">Robotics Technician</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">91% Match</span>
                      <p className="text-[11px] text-slate-400 mt-1">Video Score: 4.7/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Professional Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-8 text-center text-xs text-slate-500 space-y-2">
        <p className="font-medium">© 2026 Talant4Hire Hub & Jason Styles AI Recruiter. All rights reserved.</p>
        <p className="text-amber-600 font-semibold"><i className="fa-solid fa-triangle-exclamation mr-1"></i> Independently curated for Holland, MI manufacturing companies. Not affiliated with Talant4Hire.</p>
      </footer>
    </div>
  );
}
