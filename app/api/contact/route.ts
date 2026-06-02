import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2500;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return { limited: false, retryAfter: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      limited: true,
      retryAfter: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);

  return { limited: false, retryAfter: 0 };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeSubject(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { message: "Email service is not configured yet." },
      { status: 500 },
    );
  }

  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (rateLimit.limited) {
    return NextResponse.json(
      { message: "Too many messages. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfter),
        },
      },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 },
    );
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 },
    );
  }

  const body = payload as Record<string, unknown>;
  const name = normalizeText(body.name);
  const email = normalizeText(body.email).toLowerCase();
  const message = normalizeText(body.message);

  if (!name || name.length > 120) {
    return NextResponse.json(
      { message: "Please enter your name." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email) || email.length > 160) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length < MIN_MESSAGE_LENGTH) {
    return NextResponse.json(
      { message: "Please share a few more details about your project." },
      { status: 400 },
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { message: "Please keep your message under 2500 characters." },
      { status: 400 },
    );
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "OKWEBDEV Contact <onboarding@resend.dev>";
  const subjectName = normalizeSubject(name);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const resend = new Resend(apiKey);
  const emailLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ];

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New project inquiry from ${subjectName}`,
      text: emailLines.join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New project inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Thanks, your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again or email me directly." },
      { status: 500 },
    );
  }
}
