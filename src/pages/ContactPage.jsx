import React from 'react';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import { socialLinks } from '../config/social.js';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

function ContactPage() {
  return (
    <section className="section-padding">
      <SectionHeader
        eyebrow="Contact"
        title="Link up with Zed Car Projects."
        subtitle="Hit us up for collaborations, event coverage, feature builds or to plug in your crew."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr,1fr] items-start">
        {/* Phone, WhatsApp & email contacts */}
        <div className="card-surface rounded-2xl p-6 sm:p-8 text-sm text-gray-200 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zcp-yellow">Direct contact</p>
          <p className="text-xs text-gray-300">
            Reach out directly to coordinate shoots, meets or to talk about your build.
          </p>

          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">Primary contact</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+260971988856"
                  className="inline-flex items-center gap-2 rounded-full border border-zcp-gray px-3 py-1 text-xs hover:border-zcp-yellow hover:text-zcp-yellow"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zcp-gray/60 text-[11px]">
                    <FaPhoneAlt className="h-3.5 w-3.5" />
                  </span>
                  0971 988856
                </a>
                <a
                  href="https://wa.me/260971988856"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zcp-gray px-3 py-1 text-xs hover:border-zcp-yellow hover:text-zcp-yellow"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zcp-neon/80 text-[10px] text-black">
                    <FaWhatsapp className="h-3.5 w-3.5" />
                  </span>
                  WhatsApp
                </a>
                <a
                  href="mailto:zedcarprojects@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-zcp-gray px-3 py-1 text-xs hover:border-zcp-yellow hover:text-zcp-yellow"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zcp-gray/60 text-[11px]">
                    <FaEnvelope className="h-3.5 w-3.5" />
                  </span>
                  zedcarprojects@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">Secondary contact</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+260978417038"
                  className="inline-flex items-center gap-2 rounded-full border border-zcp-gray px-3 py-1 text-xs hover:border-zcp-yellow hover:text-zcp-yellow"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zcp-gray/60 text-[11px]">
                    <FaPhoneAlt className="h-3.5 w-3.5" />
                  </span>
                  0978 417038
                </a>
                <a
                  href="https://wa.me/260978417038"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zcp-gray px-3 py-1 text-xs hover:border-zcp-yellow hover:text-zcp-yellow"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zcp-neon/80 text-[10px] text-black">
                    <FaWhatsapp className="h-3.5 w-3.5" />
                  </span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social media links with icons */}
        <div className="space-y-4">
          <div className="card-surface rounded-2xl p-4 text-xs text-gray-300">
            <p className="font-semibold text-[11px] uppercase tracking-[0.25em] text-zcp-yellow">Socials</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zcp-gray/80 bg-zcp-black/60 px-3 py-1 hover:border-zcp-yellow hover:text-zcp-yellow"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zcp-gray/80 text-white">
                  <FaFacebookF className="h-3.5 w-3.5" />
                </span>
                Facebook
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zcp-gray/80 bg-zcp-black/60 px-3 py-1 hover:border-zcp-yellow hover:text-zcp-yellow"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zcp-gray/80 text-white">
                  <FaInstagram className="h-3.5 w-3.5" />
                </span>
                Instagram
              </a>
              <a
                href={socialLinks.youtubeChannel}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zcp-gray/80 bg-zcp-black/60 px-3 py-1 hover:border-zcp-yellow hover:text-zcp-yellow"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zcp-gray/80 text-white">
                  <FaYoutube className="h-3.5 w-3.5" />
                </span>
                YouTube
              </a>
              <a
                href={socialLinks.tiktokDiscover}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zcp-gray/80 bg-zcp-black/60 px-3 py-1 hover:border-zcp-yellow hover:text-zcp-yellow"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zcp-gray/80 text-white">
                  <FaTiktok className="h-3.5 w-3.5" />
                </span>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
