import React, { useState } from 'react';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import { upcomingEvents, pastEvents } from '../data/events.js';

function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="Events & Meets"
        title="Where Zed Car Projects comes to life."
        subtitle="From controlled track days to late-night meets, these are the spaces where the community links up."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.7fr,1.1fr] items-start">
        <div className="space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zcp-yellow/80">Upcoming</h3>
          {upcomingEvents.length === 0 && (
            <p className="text-sm text-gray-300">No confirmed events yet. Follow us on Instagram for announcements.</p>
          )}
          <div className="space-y-5">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                tabIndex={0}
                className="card-surface overflow-hidden rounded-2xl cursor-pointer hover:border-zcp-yellow/70 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-zcp-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                onClick={() => setActiveEvent({ ...event, scope: 'upcoming' })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveEvent({ ...event, scope: 'upcoming' });
                  }
                }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-gray-200">
                    <span className="rounded-full bg-black/70 px-3 py-1 text-zcp-yellow">{event.type}</span>
                    <span className="hidden sm:inline bg-black/70 px-3 py-1">
                      {new Date(event.date).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="p-5 text-sm">
                  <h3 className="font-display text-xl font-semibold">{event.name}</h3>
                  <p className="mt-1 text-xs text-gray-300">{event.location}</p>
                  <p className="mt-3 text-xs text-gray-300">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zcp-yellow/80">Past Events</h3>
          <div className="space-y-3 text-xs text-gray-300">
            {pastEvents.map((event) => (
              <button
                key={event.id}
                type="button"
                onClick={() => setActiveEvent({ ...event, scope: 'past' })}
                className="flex w-full items-center gap-3 rounded-xl border border-zcp-gray/80 bg-zcp-black/60 p-3 text-left hover:border-zcp-yellow/70 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-zcp-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <div className="h-14 w-20 overflow-hidden rounded-lg">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[13px] text-white">{event.name}</p>
                  <p className="text-[11px] text-gray-400">
                    {new Date(event.date).toLocaleDateString()} · {event.location}
                  </p>
                  <p className="mt-1 line-clamp-2 text-[11px] text-gray-400">{event.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeEvent && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-start justify-center overflow-y-auto px-4 py-8"
          onClick={() => setActiveEvent(null)}
        >
            <div className="w-full max-w-3xl card-surface rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full bg-black flex items-center justify-center max-h-[80vh]">
              <img
                src={activeEvent.image}
                alt={activeEvent.name}
                className="max-h-[80vh] w-auto sm:max-w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                className="absolute top-3 right-3 rounded-full bg-black/80 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-gray-200 hover:text-zcp-yellow"
                onClick={() => setActiveEvent(null)}
              >
                Close
              </button>
              {activeEvent.scope && (
                <span className="absolute top-3 left-3 rounded-full bg-black/80 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-zcp-yellow">
                  {activeEvent.scope === 'upcoming' ? 'Upcoming' : 'Past Event'}
                </span>
              )}
            </div>

            <div className="p-5 sm:p-6 space-y-3 text-sm text-gray-200">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-zcp-yellow">Zed Car Projects Event</p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-white">
                    {activeEvent.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-300">{activeEvent.type}</p>
                </div>
                <div className="text-xs text-right text-gray-300">
                  <p>{new Date(activeEvent.date).toLocaleString()}</p>
                  <p className="mt-1">{activeEvent.location}</p>
                </div>
              </div>

              <p className="text-sm text-gray-200">{activeEvent.description}</p>

              {activeEvent.ticketLink && activeEvent.scope === 'upcoming' && (
                <div className="pt-4">
                  <a
                    href={activeEvent.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-zcp-yellow px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black hover:opacity-90 transition"
                  >
                    Buy Tickets Now
                  </a>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default EventsPage;
