 // Simple client-side "list" of RSVPs — no database, per the project brief.
// Stored in the visitor's own browser (localStorage) so a returning visitor
// on the same device/browser sees their own submission reflected below the form.
// Every submission is ALSO emailed to the organizer (see email.js) so nothing
// is lost if the visitor clears their browser data.
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbw-K-KVa3j4PgOQS9jBE8kBwHGOOERnw8BTDCkMprx9os6QxsNjEFTlJl3CutVMD5a1/exec";

export async function getGuestList() {
  const res = await fetch(SHEET_URL);
  if (!res.ok) throw new Error("Could not load guest list.");
  return res.json();
}

export async function addGuestToList(entry) {
  const res = await fetch(SHEET_URL, {
    method: "POST",
    // Plain text avoids a CORS "preflight" request that Google's Apps Script
    // doesn't handle well — the script itself still parses this as JSON.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(entry),
  });
  if (!res.ok) throw new Error("Could not save RSVP.");
  return res.json();
}
