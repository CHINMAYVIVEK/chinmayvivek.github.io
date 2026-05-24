"use client";

import { useState } from "react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9n-L_F7boN_3VOad3dLsXx89Pv7N8Q-Y4BoqHSAZ7WjCNvQ/viewform?embedded=true";

const FORM_URL_NEW_TAB =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9n-L_F7boN_3VOad3dLsXx89Pv7N8Q-Y4BoqHSAZ7WjCNvQ/viewform";

export function ContactForm() {
  const [showForm, setShowForm] = useState(false);

  if (!showForm) {
    return (
      <div className="site-card flex h-[min(600px,70vh)] min-h-[480px] flex-col items-center justify-center gap-5 p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)]">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <h3 className="site-card__title text-lg mb-2">Send a message</h3>
          <p className="site-card__body text-sm max-w-xs mx-auto">
            Load the contact form here, or open it in a new tab on Google Forms.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={() => setShowForm(true)} className="site-btn site-btn--primary">
            Load contact form
          </button>
          <a
            href={FORM_URL_NEW_TAB}
            target="_blank"
            rel="noopener noreferrer"
            className="site-btn site-btn--ghost"
          >
            Open in new tab
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="site-card p-4 lg:p-6 h-[min(600px,70vh)] overflow-hidden">
      <iframe
        title="Contact Chinmay Vivek"
        src={FORM_URL}
        className="w-full h-full min-h-[480px] border-0 rounded-lg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
