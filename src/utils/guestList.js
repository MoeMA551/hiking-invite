 // Simple client-side "list" of RSVPs — no database, per the project brief.
// Stored in the visitor's own browser (localStorage) so a returning visitor
// on the same device/browser sees their own submission reflected below the form.
// Every submission is ALSO emailed to the organizer (see email.js) so nothing
// is lost if the visitor clears their browser data.
const STORAGE_KEY = "hiking-invite-rsvp-list";

export function getGuestList() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addGuestToList(entry) {
  const list = getGuestList();
  const next = [...list, { ...entry, id: crypto.randomUUID(), submittedAt: new Date().toISOString() }];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage full or unavailable — the email still went out, so this is non-fatal
  }
  return next;
}
