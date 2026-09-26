import { appendFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

// Submissions are kept on local disk so nothing needs an external database,
// matching the behaviour of the original Flask backend.
const ROOT = process.cwd();
export const UPLOAD_DIR = path.join(ROOT, "uploads");
const DATA_DIR = path.join(ROOT, "data");

export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
export const ALLOWED_CV_EXTENSIONS = ["pdf", "doc", "docx"];
export const MAX_CV_BYTES = 5 * 1024 * 1024; // 5MB, matches original site's limit

export async function logSubmission(kind: "contact" | "cv", record: Record<string, string>) {
  await mkdir(DATA_DIR, { recursive: true });
  const line = JSON.stringify({ ...record, received_at: new Date().toISOString() });
  await appendFile(path.join(DATA_DIR, `${kind}_submissions.jsonl`), line + "\n", "utf-8");
}

export function field(form: FormData, name: string) {
  const value = form.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function secureFilename(name: string) {
  const base = path.basename(name).normalize("NFKD").replace(/[^\w.-]+/g, "_");
  return base.replace(/^[._]+/, "") || "cv";
}

export async function saveCv(file: File) {
  await mkdir(UPLOAD_DIR, { recursive: true });
  const timestamp = new Date().toISOString().replace(/\D/g, "").slice(0, 14);
  const storedName = `${timestamp}_${secureFilename(file.name)}`;
  await writeFile(path.join(UPLOAD_DIR, storedName), Buffer.from(await file.arrayBuffer()));
  return storedName;
}
