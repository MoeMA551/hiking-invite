import emailjs from "@emailjs/browser";

// These three values come from your EmailJS account (see README step "Set up EmailJS").
// They are read from a .env file at build time — never commit real keys, use .env.example as the template.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Where every RSVP notification goes. Hardcoded on purpose — it's always you,
// not something a visitor fills in — so the template's "To Email" field can
// just reference {{to_email}} instead of needing a fixed address pasted in.
const ORGANIZER_EMAIL = "moemyintaung258@gmail.com";

/**
 * Sends the RSVP straight from the visitor's browser to your inbox via EmailJS.
 * No backend/server and no database involved.
 *
 * @param {{name: string, email: string, message?: string}} rsvp
 */
export async function sendRsvpEmail(rsvp) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file — see the README."
    );
  }

  const templateParams = {
    to_email: ORGANIZER_EMAIL,
    guest_name: rsvp.name,
    guest_email: rsvp.email,
    guest_message: rsvp.message || "(no message)",
    submitted_at: new Date().toLocaleString(),
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  });
}