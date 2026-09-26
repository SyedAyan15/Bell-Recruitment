import { NextResponse } from "next/server";
import {
  ALLOWED_CV_EXTENSIONS,
  EMAIL_RE,
  MAX_CV_BYTES,
  field,
  logSubmission,
  saveCv,
} from "@/lib/submissions";

function fail(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  const form = await request.formData();
  const name = field(form, "name");
  const email = field(form, "email");
  const file = form.get("cv");

  if (!email || !EMAIL_RE.test(email)) return fail("Please enter a valid email address.");
  if (!(file instanceof File) || !file.name) return fail("Please attach your CV before submitting.");

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_CV_EXTENSIONS.includes(ext)) return fail("Please upload a PDF, DOC, or DOCX file.");
  if (file.size > MAX_CV_BYTES) return fail("Your CV must be 5MB or smaller.");

  const storedFile = await saveCv(file);
  await logSubmission("cv", {
    name,
    email,
    phone: field(form, "phone"),
    linkedin: field(form, "linkedin"),
    stored_file: storedFile,
  });
  return NextResponse.json({ ok: true, name: name || "there" });
}
