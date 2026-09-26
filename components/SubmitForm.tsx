"use client";

import { useState, type FormEvent, type ReactNode } from "react";

// Shared wrapper for the contact and CV forms: posts the fields as multipart
// form data to `endpoint` (an API route in app/api) and shows success/error messages.

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success"; name: string }
  | { kind: "error"; message: string };

const GENERIC_ERROR = "Something went wrong. Please try again.";

export default function SubmitForm({
  endpoint,
  submitLabel,
  successMessage,
  children,
}: {
  endpoint: string;
  submitLabel: string;
  successMessage: string;
  children: ReactNode;
}) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    setStatus({ kind: "sending" });
    try {
      const res = await fetch(endpoint, { method: "POST", body: new FormData(form) });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ kind: "error", message: data.error ?? GENERIC_ERROR });
        return;
      }
      form.reset();
      setStatus({ kind: "success", name: data.name });
    } catch {
      setStatus({ kind: "error", message: GENERIC_ERROR });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {status.kind === "success" && (
        <div className="form-alert success" role="status">
          Thanks {status.name}, {successMessage}
        </div>
      )}
      {status.kind === "error" && (
        <div className="form-alert error" role="alert">
          {status.message}
        </div>
      )}
      {children}
      <button type="submit" className="btn btn-burgundy btn-block" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
