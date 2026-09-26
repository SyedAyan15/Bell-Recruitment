import { NextResponse } from "next/server";
import { EMAIL_RE, field, logSubmission } from "@/lib/submissions";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = field(form, "name");
  const email = field(form, "email");

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  await logSubmission("contact", {
    name,
    email,
    phone: field(form, "phone"),
    subject: field(form, "subject"),
    message: field(form, "message"),
  });
  return NextResponse.json({ ok: true, name: name || "there" });
}
