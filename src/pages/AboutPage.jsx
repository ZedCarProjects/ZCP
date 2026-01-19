import React from 'react';
import SectionHeader from '../components/shared/SectionHeader.jsx';

function AboutPage() {
  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="About Zed Car Projects"
        title="A home for Zambian car culture, on and off the track."
        subtitle="We document the stories, people and builds that make Zambia's automotive scene unique — from grassroots rollouts to organised motorsport."
      />
      <div className="mt-10 max-w-3xl space-y-6 text-sm text-gray-200">
        <p>
          Zed Car Projects started as a small group of friends filming late-night rollouts in Lusaka and
          has grown into a community platform for drivers, builders and creatives from across Zambia.
        </p>
        <p>
          We focus on telling authentic stories â€” the long nights in the garage, the budget track builds,
          the first passes down the strip and the moments when the whole city pulls up for a meet.
        </p>
        <p>
          Whether you are into stance, time attack, drag, rally or just proud of your daily driver, this is
          your grid.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
