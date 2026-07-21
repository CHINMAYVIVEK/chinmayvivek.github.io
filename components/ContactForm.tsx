"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9n-L_F7boN_3VOad3dLsXx89Pv7N8Q-Y4BoqHSAZ7WjCNvQ/viewform?embedded=true";

/** Compact height so Google Sign-in fits without scrolling */
const AUTH_CARD_HEIGHT_PX = 540;
/** Iframe document height when the form is visible */
const FORM_DOC_HEIGHT_PX = 1500;
/** Card viewport when showing the full form (scrolls if form is longer) */
const FORM_CARD_HEIGHT_PX = 720;

type FormPhase = "auth" | "form";

export function ContactForm() {
  const [phase, setPhase] = useState<FormPhase>("auth");
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const interactedRef = useRef(false);

  const showForm = useCallback(() => {
    setPhase("form");
    setIframeKey((k) => k + 1);
  }, []);

  useEffect(() => {
    let expandTimer: ReturnType<typeof setTimeout> | undefined;

    const onWindowBlur = () => {
      if (document.activeElement === iframeRef.current) {
        interactedRef.current = true;
      }
    };

    const onWindowFocus = () => {
      if (interactedRef.current && phase === "auth") {
        expandTimer = setTimeout(() => {
          showForm();
        }, 600);
      }
    };

    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("focus", onWindowFocus);
    return () => {
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("focus", onWindowFocus);
      if (expandTimer) clearTimeout(expandTimer);
    };
  }, [phase, showForm]);

  const cardHeight = phase === "auth" ? AUTH_CARD_HEIGHT_PX : FORM_CARD_HEIGHT_PX;
  const iframeHeight = phase === "auth" ? AUTH_CARD_HEIGHT_PX : FORM_DOC_HEIGHT_PX;

  return (
    <div
      className={`contact-form-card site-card contact-form-card--${phase}`}
      style={{ height: cardHeight }}
    >
      <div className="contact-form-card__frame">
        <iframe
          key={iframeKey}
          ref={iframeRef}
          title="Contact Chinmay Vivek"
          src={FORM_URL}
          width="100%"
          height={iframeHeight}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {phase === "auth" && (
        <button
          type="button"
          className="contact-form-card__expand"
          onClick={showForm}
        >
          Signed in? Expand form
        </button>
      )}
    </div>
  );
}
