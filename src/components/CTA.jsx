import React from "react";

export default function CTA() {
  const waLink = `https://wa.me/918943710783?text=${encodeURIComponent(
    "Hi, I want a site visit/quote for a solar setup."
  )}`;
  return (
    <section id="quote" className="cta">
      <div className="container cta-inner">
        <h2>Ready to go solar?</h2>
        <p>Ping us on WhatsApp for a quick quote or site visit.</p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn icon-btn--wa"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path fill="#25D366" d="M16 3C9.37 3 4 8.37 4 15c0 2.3.62 4.46 1.8 6.38L4 29l7.79-1.77A12.8 12.8 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22.5c-1.83 0-3.6-.49-5.15-1.42l-.37-.22-4.03.92.88-3.94-.24-.4A9.47 9.47 0 0 1 6.5 15C6.5 9.76 10.76 5.5 16 5.5S25.5 9.76 25.5 15 21.24 25.5 16 25.5z"/>
            <path fill="#25D366" d="M22.1 18.52c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.2.3-.75.97-.92 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.56-.89-2.14-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.09 3.2 5.07 4.48 2.98 1.29 2.98.86 3.52.82.54-.03 1.77-.72 2.02-1.41.25-.69.25-1.27.17-1.41-.07-.14-.27-.22-.56-.36z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
