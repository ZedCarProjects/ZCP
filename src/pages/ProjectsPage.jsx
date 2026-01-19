import React, { useState } from 'react';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import { projects } from '../data/projects.js';

function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeImages =
    activeProject?.images && activeProject.images.length > 0
      ? activeProject.images
      : activeProject
      ? [activeProject.heroImage]
      : [];

  const handleNextImage = () => {
    if (!activeImages.length) return;
    setActiveImageIndex((prev) => (prev + 1) % activeImages.length);
  };

  const handlePrevImage = () => {
    if (!activeImages.length) return;
    setActiveImageIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="Builds & Projects"
        title="Car builds across Zambia."
        subtitle="A curated look at some of the cars shaping the Zed Car Projects community."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            tabIndex={0}
            className="card-surface flex cursor-pointer flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-zcp-yellow/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-zcp-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            onClick={() => {
              setActiveProject(project);
              setActiveImageIndex(0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveProject(project);
                setActiveImageIndex(0);
              }
            }}
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={project.heroImage}
                alt={project.name}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-gray-200">
                <span className="rounded-full bg-black/70 px-3 py-1 text-zcp-yellow">{project.category}</span>
                <span className="hidden sm:inline bg-black/70 px-3 py-1">{project.location}</span>
              </div>
            </div>
            <div className="p-4 flex flex-1 flex-col text-sm">
              <h3 className="font-display text-lg font-semibold">{project.name}</h3>
              <p className="mt-1 text-xs text-gray-400">Owner: {project.owner}</p>
              <p className="mt-3 text-xs text-gray-300 line-clamp-3">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          <div className="min-h-full flex items-start justify-center px-4 py-8">
            <div
              className="relative w-full max-w-5xl card-surface rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 z-20 rounded-full bg-black/80 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-gray-200 hover:text-zcp-yellow"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>

              <div className="bg-black relative flex items-center justify-center">
                {activeImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      className="absolute left-2 sm:left-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-gray-200 hover:text-zcp-yellow border border-zcp-gray/70"
                      onClick={handlePrevImage}
                    >
                      <span className="text-lg">‹</span>
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      className="absolute right-2 sm:right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-gray-200 hover:text-zcp-yellow border border-zcp-gray/70"
                      onClick={handleNextImage}
                    >
                      <span className="text-lg">›</span>
                    </button>
                  </>
                )}
                <img
                  src={activeImages[activeImageIndex] || activeProject.heroImage}
                  alt={activeProject.name}
                  className="w-full max-h-[60vh] object-contain"
                />
                <div className="pointer-events-none -mt-px h-12 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {activeImages.length > 1 && (
                <div className="px-5 sm:px-6 pt-4 pb-3 border-b border-zcp-gray/70 bg-black/60 overflow-x-auto">
                  <div className="flex gap-4 min-w-max">
                    {activeImages.map((img, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative h-20 sm:h-24 w-32 sm:w-40 flex-shrink-0 overflow-hidden rounded-xl border transition ${
                          index === activeImageIndex
                            ? 'border-zcp-yellow ring-2 ring-zcp-yellow/70'
                            : 'border-zcp-gray/70 hover:border-zcp-yellow/70'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${activeProject.name} view ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-5 sm:p-6 space-y-4 text-sm text-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-zcp-yellow">Featured Build</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-white">
                      {activeProject.name}
                    </h3>
                    <p className="text-xs text-gray-400">Owner: {activeProject.owner}</p>
                  </div>
                  <div className="text-xs text-right text-gray-300">
                    <p>{activeProject.location}</p>
                    <p className="mt-1 text-zcp-neon">{activeProject.status}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-200">{activeProject.description}</p>
                {activeProject.specs?.length > 0 && (
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
                      Setup Highlights
                    </p>
                    <ul className="mt-2 grid gap-1 text-xs text-gray-200 sm:grid-cols-2">
                      {activeProject.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2">
                          <span className="h-1 w-3 rounded-full bg-zcp-yellow" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
export default ProjectsPage;
