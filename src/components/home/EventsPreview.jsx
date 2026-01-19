import React from 'react';
import { Link } from 'react-router-dom';
import { upcomingEvents } from '../../data/events.js';

function EventsPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr,1fr] items-start">
      <div className="grid gap-5 sm:grid-cols-2">
        {upcomingEvents.map((event) => (
          <Link key={event.id} to="/events" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-zcp-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl">
            <article className="card-surface overflow-hidden rounded-2xl">
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-gray-200">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-zcp-yellow">{event.type}</span>
                  <span className="hidden sm:inline bg-black/70 px-3 py-1">{new Date(event.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="p-4 text-sm">
                <h3 className="font-display text-lg font-semibold">{event.name}</h3>
                <p className="mt-1 text-xs text-gray-300">{event.location}</p>
                <p className="mt-2 text-xs text-gray-400 line-clamp-3">{event.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="card-surface rounded-2xl p-5 flex flex-col justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zcp-yellow">Pull Up</p>
          <h3 className="mt-2 font-display text-xl font-semibold">Bring your build, your crew and your camera.</h3>
          <p className="mt-3 text-xs text-gray-300">
            Our meets and track days are for everyone — from stock daily drivers to full track builds.
          </p>
        </div>
        <Link to="/events" className="btn-primary text-[11px] w-fit">
          View full event calendar
        </Link>
      </div>
    </div>
  );
}

export default EventsPreview;
