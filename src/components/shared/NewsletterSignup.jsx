import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('Thanks for locking in. We will update you on new meets and track days.');
    setEmail('');
  };

  return (
    <div className="card-surface rounded-2xl p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zcp-yellow">Stay Ahead of the Grid</p>
      <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold">
        Get notified about meets, track days and new feature builds.
      </h3>
      <p className="mt-3 text-xs sm:text-sm text-gray-300">
        No spam. Just pure Zambian car culture in your inbox.
      </p>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-full border border-zcp-gray bg-black/60 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-zcp-yellow focus:outline-none focus:ring-1 focus:ring-zcp-yellow"
        />
        <button type="submit" className="btn-primary text-[11px]">
          Join the Grid
        </button>
      </form>
      {status && <p className="mt-3 text-[11px] text-zcp-neon">{status}</p>}
    </div>
  );
}

export default NewsletterSignup;
