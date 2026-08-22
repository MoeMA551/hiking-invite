import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "guestList.json");
const PORT = 3001;

const app = express();
app.use(express.json());

async function readGuestList() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

async function writeGuestList(list) {
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
}

app.get("/api/guests", async (_req, res) => {
  try {
    res.json(await readGuestList());
  } catch (err) {
    console.error("Failed to read guest list:", err);
    res.status(500).json({ error: "Could not read guest list." });
  }
});

app.post("/api/guests", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required." });
  }

  try {
    const list = await readGuestList();
    const entry = {
      name,
      email,
      message: message || "",
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
    };
    const next = [...list, entry];
    await writeGuestList(next);
    res.status(201).json(next);
  } catch (err) {
    console.error("Failed to save RSVP:", err);
    res.status(500).json({ error: "Could not save RSVP." });
  }
});

app.listen(PORT, () => {
  console.log(`Guest list server running at http://localhost:${PORT}`);
  console.log(`Writing to ${DATA_FILE}`);
});
