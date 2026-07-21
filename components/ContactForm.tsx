const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9n-L_F7boN_3VOad3dLsXx89Pv7N8Q-Y4BoqHSAZ7WjCNvQ/viewform?embedded=true";

/** Inner document height — tall forms scroll inside the card */
const FORM_DOC_HEIGHT_PX = 1400;

export function ContactForm() {
  return (
    <div className="contact-form-card site-card">
      <div className="contact-form-card__frame">
        <iframe
          title="Contact Chinmay Vivek"
          src={FORM_URL}
          width="100%"
          height={FORM_DOC_HEIGHT_PX}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
