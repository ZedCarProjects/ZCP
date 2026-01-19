import React, { useState } from 'react';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import { photoGallery, videos } from '../data/media.js';
import Lightbox from '../components/shared/Lightbox.jsx';
import { socialLinks } from '../config/social.js';

function MediaPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activePhoto =
    typeof activeIndex === 'number' && activeIndex >= 0 && activeIndex < photoGallery.length
      ? photoGallery[activeIndex]
      : null;

  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="Media"
        title="Capturing Zambian car culture in motion."
        subtitle="A rotating feed of photos and videos from the streets, track and paddock."
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr,1.1fr] items-start">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zcp-yellow/80 mb-4">Photo Gallery</h3>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {photoGallery.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative overflow-hidden rounded-2xl border border-zcp-gray/80 bg-zcp-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-zcp-yellow/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <img
                  src={photo.image}
                  alt="Zed Car Projects media"
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-zcp-yellow/80 mb-4">Videos</h3>
          <div className="space-y-4">
            {/* Main uploads playlist from YouTube channel */}
            <article className="card-surface overflow-hidden rounded-2xl">
              <div className="aspect-video w-full">
                <iframe
                  src={socialLinks.youtubeUploadsPlaylist}
                  title="Zed Car Projects YouTube uploads"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="p-4 text-sm flex items-center justify-between">
                <h3 className="font-display text-base font-semibold">Latest from YouTube</h3>
                <a
                  href={socialLinks.youtubeChannel}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] uppercase tracking-[0.25em] text-zcp-yellow hover:text-white"
                >
                  Open channel
                </a>
              </div>
            </article>

            {/* Curated feature videos if you still want them */}
            {videos.map((video) => (
              <article key={video.id} className="card-surface overflow-hidden rounded-2xl">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <div className="p-4 text-sm">
                  <h3 className="font-display text-base font-semibold">{video.title}</h3>
                </div>
              </article>
            ))}

            {/* TikTok + Instagram CTA */}
            <article className="card-surface rounded-2xl p-4 text-xs text-gray-300 flex flex-col gap-3">
              <p className="font-semibold text-[11px] uppercase tracking-[0.25em] text-zcp-yellow">More Clips</p>
              <p>
                For behind-the-scenes, vertical edits and quick drops, follow us on TikTok and Instagram.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={socialLinks.tiktokDiscover}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zcp-gray px-3 py-1 hover:border-zcp-yellow hover:text-zcp-yellow"
                >
                  TikTok Discover
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zcp-gray px-3 py-1 hover:border-zcp-yellow hover:text-zcp-yellow"
                >
                  Instagram Feed
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={activeIndex !== null}
        image={activePhoto?.image}
        caption=""
        onClose={() => setActiveIndex(null)}
        onNext={
          activeIndex !== null
            ? () => setActiveIndex((activeIndex + 1) % photoGallery.length)
            : undefined
        }
        onPrev={
          activeIndex !== null
            ? () => setActiveIndex((activeIndex - 1 + photoGallery.length) % photoGallery.length)
            : undefined
        }
      />
    </section>
  );
}

export default MediaPage;
