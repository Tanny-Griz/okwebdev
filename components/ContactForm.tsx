"use client";

import { FormEvent, useState } from "react";
import {
  AlertCircle,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Lightbulb,
  LoaderCircle,
  Lock,
  Send,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmitState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

const services = [
  "Custom websites",
  "E-commerce / Online stores",
  "Portfolio websites",
  "Landing pages",
  "Redesign & improvements",
  "Ongoing support",
];

function validateForm({ name, email, message }: FormState) {
  if (!name.trim()) {
    return "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return "Please enter a valid email address.";
  }

  if (message.trim().length < 20) {
    return "Please share a few more details about your project.";
  }

  if (message.trim().length > 2500) {
    return "Please keep your message under 2500 characters.";
  }

  return "";
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  const messageLength = form.message.trim().length;
  const isSubmitting = submitState.status === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationMessage = validateForm(form);

    if (validationMessage) {
      setSubmitState({ status: "error", message: validationMessage });
      return;
    }

    setSubmitState({ status: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        setSubmitState({
          status: "error",
          message:
            data.message ||
            "Something went wrong. Please try again or email me directly.",
        });
        return;
      }

      setForm(initialFormState);
      setSubmitState({
        status: "success",
        message: data.message || "Thanks, your message has been sent.",
      });
    } catch {
      setSubmitState({
        status: "error",
        message: "Network error. Please try again or email me directly.",
      });
    }
  }

  return (
    <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl shadow-black/5 lg:grid-cols-[1.25fr_0.75fr]">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 text-left sm:p-8 lg:p-10"
        noValidate
      >
        <div>
          <label
            htmlFor="contact-name"
            className="mb-3 block text-sm font-semibold text-black"
          >
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="h-13 w-full rounded-xl border border-black/12 bg-white px-4 text-base text-black outline-none transition placeholder:text-black/35 focus:border-[#1bae70] focus:ring-4 focus:ring-[#1bae70]/10"
            placeholder="e.g. John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-3 block text-sm font-semibold text-black"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="h-13 w-full rounded-xl border border-black/12 bg-white px-4 text-base text-black outline-none transition placeholder:text-black/35 focus:border-[#1bae70] focus:ring-4 focus:ring-[#1bae70]/10"
            placeholder="e.g. john@example.com"
          />
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <label
              htmlFor="contact-message"
              className="block text-sm font-semibold text-black"
            >
              What&apos;s your idea or project about?
            </label>
            <span className="shrink-0 text-xs text-black/40">
              {messageLength}/2500
            </span>
          </div>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={20}
            maxLength={2500}
            rows={6}
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            className="min-h-44 w-full resize-y rounded-xl border border-black/12 bg-white px-4 py-4 text-base leading-7 text-black outline-none transition placeholder:text-black/35 focus:border-[#1bae70] focus:ring-4 focus:ring-[#1bae70]/10"
            placeholder="Tell me more about your idea, goals, and what you'd like to build..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-[#1bae70] px-5 text-base font-semibold text-white shadow-lg shadow-[#1bae70]/20 transition hover:-translate-y-0.5 hover:bg-[#15975f] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <LoaderCircle className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5 transition group-hover:translate-x-0.5" />
          )}
          <span>{isSubmitting ? "Sending..." : "Send message"}</span>
        </button>

        <div aria-live="polite" className="min-h-6">
          {submitState.message ? (
            <p
              className={`flex items-center justify-center gap-2 text-sm ${
                submitState.status === "success"
                  ? "text-[#11784f]"
                  : "text-red-600"
              }`}
            >
              {submitState.status === "success" ? (
                <CheckCircle2 className="h-4 w-4 shrink-0" />
              ) : (
                <AlertCircle className="h-4 w-4 shrink-0" />
              )}
              <span>{submitState.message}</span>
            </p>
          ) : (
            <p className="flex items-center justify-center gap-2 text-sm text-black/45">
              <Lock className="h-4 w-4 shrink-0" />
              <span>Your information is safe and will never be shared.</span>
            </p>
          )}
        </div>
      </form>

      <aside className="border-t border-black/10 bg-[#f7faf8] p-6 text-left sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
        <div className="flex gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#dff4ed] text-[#1bae70]">
            <Lightbulb className="h-7 w-7" />
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-black">
              Tell me about your idea
            </h3>
            <p className="mt-5 text-base leading-7 text-black/60">
              Share your goals, preferences, timeline, or any references you
              have. The more details, the better I can help.
            </p>
          </div>
        </div>

        <div className="my-9 h-px bg-black/10" />

        <div className="flex gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#dff4ed] text-[#1bae70]">
            <BriefcaseBusiness className="h-7 w-7" />
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-black">
              I can help you with:
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-base text-black/75"
                >
                  <Check className="h-4 w-4 shrink-0 text-[#1bae70]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
