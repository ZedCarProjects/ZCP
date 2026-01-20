import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { socialLinks } from '../../config/social.js';
import zcpLogo from '../../assets/logo-zcp.png'; // add this file
import { FaHome, FaInfoCircle, FaTools, FaCalendarAlt, FaPhotoVideo, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home', icon: FaHome },
  { to: '/about', label: 'About', icon: FaInfoCircle },
  { to: '/projects', label: 'Builds', icon: FaTools },
  { to: '/events', label: 'Events', icon: FaCalendarAlt },
  { to: '/media', label: 'Media', icon: FaPhotoVideo },
  { to: '/contact', label: 'Contact', icon: FaEnvelope }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zcp-gray/80 bg-black/70 backdrop-blur">
      <nav className="px-4 sm:px-6 lg:px-10 xl:px-16 py-2 sm:py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={zcpLogo}
            alt="Zed Car Projects logo"
            className="h-14 sm:h-16 w-auto object-contain"
            style={{ height: 49 }}
          />
        </Link>

        <button
          className="sm:hidden inline-flex items-center justify-center rounded-full border border-zcp-gray p-2 text-gray-200 hover:border-zcp-yellow hover:text-zcp-yellow"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </div>
        </button>

        <div className="hidden sm:flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em]">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `inline-flex items-center gap-1.5 transition hover:text-zcp-yellow ${
                  isActive ? 'text-zcp-yellow' : 'text-gray-300'
                }`
              }
            >
              {Icon && <Icon className="h-3 w-3" aria-hidden="true" />}
              <span>{label}</span>
            </NavLink>
          ))}
          <a
            href={socialLinks.whatsappChannel}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zcp-gray/80 bg-zcp-black/70 px-3 py-1 text-[10px] tracking-[0.25em] text-zcp-yellow hover:border-zcp-yellow hover:bg-zcp-yellow/10"
          >
            <FaWhatsapp className="h-3.5 w-3.5" aria-hidden="true" />
            <span>WHATSAPP</span>
          </a>
        </div>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-zcp-gray/80 bg-black/95">
          <div className="px-4 pb-4 pt-2 space-y-2 text-xs font-semibold uppercase tracking-[0.2em]">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-full px-4 py-2 transition ${
                    isActive ? 'bg-zcp-yellow text-black' : 'text-gray-200 hover:bg-zcp-gray'
                  }`
                }
              >
                {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                <span>{label}</span>
              </NavLink>
            ))}
            <a
              href={socialLinks.whatsappChannel}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full px-4 py-2 text-[10px] tracking-[0.25em] text-zcp-yellow border border-zcp-gray/80 hover:bg-zcp-yellow hover:text-black"
            >
              <FaWhatsapp className="h-3.5 w-3.5" aria-hidden="true" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
