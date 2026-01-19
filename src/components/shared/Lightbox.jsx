import React from 'react';

function Lightbox({ isOpen, image, caption, onClose, onNext, onPrev }) {
  if (!isOpen || !image) return null;

  const handleOverlayClick = () => {
    if (onClose) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative max-w-5xl px-4 w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-6 right-0 text-xs uppercase tracking-[0.25em] text-gray-300 hover:text-zcp-yellow"
          onClick={onClose}
        >
          Close
        </button>

        <div className="relative w-full flex items-center justify-center">
          {onPrev && (
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-0 sm:-left-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-gray-200 hover:text-zcp-yellow border border-zcp-gray/70"
              onClick={onPrev}
            >
              <span className="text-lg">‹</span>
            </button>
          )}

          <img src={image} alt={caption || ''} className="max-h-[80vh] w-full object-contain" />

          {onNext && (
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-0 sm:-right-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-gray-200 hover:text-zcp-yellow border border-zcp-gray/70"
              onClick={onNext}
            >
              <span className="text-lg">›</span>
            </button>
          )}
        </div>

        {caption && <p className="mt-3 text-center text-sm text-gray-300">{caption}</p>}
      </div>
    </div>
  );
}

export default Lightbox;
