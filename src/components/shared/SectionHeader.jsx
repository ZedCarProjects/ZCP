import React from 'react';

function SectionHeader({ eyebrow, title, subtitle, align = 'left', icon: Icon }) {
  const alignmentClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <header className={`flex flex-col gap-2 ${alignmentClass}`}>
      {eyebrow && (
        <p className="section-heading inline-flex items-center gap-2">
          {Icon && (
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-zcp-gray/80 text-[11px]">
              <Icon className="h-3 w-3" aria-hidden="true" />
            </span>
          )}
          <span>{eyebrow}</span>
        </p>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}

export default SectionHeader;
