import React from 'react';
import { Link } from 'react-router-dom';
import { upcomingEvents } from '../../data/events.js';
import EventCountdown from '../shared/EventCountdown.jsx';
import heroImage from '../../assets/ZCP team.jpg';

function Hero() {
  const nextEvent = upcomingEvents[0];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-zcp-black" />
      </div>

      <div className="relative section-padding pb-24 pt-24 sm:pt-28 lg:pt-32">
        <div className="max-w-4xl">
          <p className="section-heading">The People's Brand</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Built in Zambia.
            <span className="block text-zcp-yellow">Driven Everywhere.</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm sm:text-base text-gray-200">
            Zed Car Projects documents the people, builds and events pushing Zambian car culture forward.
            From late-night meets to race and spin days and many more.
          </p>

          {nextEvent && (
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-300">
              <EventCountdown targetDate={nextEvent.date} />
              <span className="hidden sm:inline">Next: {nextEvent.name}</span>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/projects" className="btn-primary">
              View Builds
            </Link>
            <Link to="/events" className="btn-secondary">
              Upcoming Events
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-gray-400">
            <span>Street • Pad • Strip</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
