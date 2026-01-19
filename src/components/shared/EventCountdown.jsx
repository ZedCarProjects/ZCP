import React, { useEffect, useState } from 'react';

function getTimeRemaining(targetDate) {
  const total = Date.parse(targetDate) - Date.now();
  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function EventCountdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft.total) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-zcp-gray px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gray-300">
        <span className="h-1.5 w-1.5 rounded-full bg-zcp-gray" />
        Event live or completed
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zcp-red/70 bg-zcp-gray/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-zcp-red">
      <span className="h-1.5 w-1.5 rounded-full bg-zcp-red animate-pulse" />
      <span>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s to event
      </span>
    </div>
  );
}

export default EventCountdown;
