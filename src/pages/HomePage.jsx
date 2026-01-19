import React from 'react';
import Hero from '../components/home/Hero.jsx';
import FeaturedProjectsSlider from '../components/home/FeaturedProjectsSlider.jsx';
import EventsPreview from '../components/home/EventsPreview.jsx';
import SectionHeader from '../components/shared/SectionHeader.jsx';

function HomePage() {
  return (
    <div>
      <Hero />

      <section className="section-padding">
        <SectionHeader
          eyebrow="Featured Builds"
          title="Car projects shaping the new wave of Zambian motorsport."
          subtitle="From Lusaka night cruisers to Copperbelt track weapons, these are the stories we are currently documenting."
        />
        <div className="mt-8">
          <FeaturedProjectsSlider />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zcp-black to-black/90 border-y border-zcp-gray/70">
        <SectionHeader
          eyebrow="Upcoming Events"
          title="From city meets to autocross and rollout convoys."
          subtitle="Lock in the next date and pull up with your crew."
        />
        <div className="mt-8">
          <EventsPreview />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
