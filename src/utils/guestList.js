export async function getGuestList() {
  const res = await fetch("/api/guests");
  if (!res.ok) throw new Error("Could not load guest list.");
  return res.json();
}

export async function addGuestToList(entry) {
  const res = await fetch("/api/guests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  });
  if (!res.ok) throw new Error("Could not save RSVP.");
  return res.json();
}
