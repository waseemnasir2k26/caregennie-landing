import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_WINDOW = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

// Validation
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { type, name, email, agency, carerCount } = body;

    // Validate required fields
    if (!type || !name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (type === "beta" && !agency) {
      return NextResponse.json(
        { success: false, message: "Agency name is required for beta applications." },
        { status: 400 }
      );
    }

    // Try Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: "CareGennie <noreply@caregennie.app>",
          to: email,
          subject:
            type === "waitlist"
              ? "Welcome to the CareGennie Waiting List!"
              : "CareGennie Beta Application Received",
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #0D7377;">Welcome to CareGennie${type === "beta" ? " Beta" : ""}!</h1>
              <p>Hi ${name},</p>
              <p>${
                type === "waitlist"
                  ? "Thank you for joining the CareGennie waiting list. We'll be in touch as soon as your slot opens."
                  : "Thank you for applying to the CareGennie beta programme. Our team will review your application and get back to you shortly."
              }</p>
              ${agency ? `<p><strong>Agency:</strong> ${agency}</p>` : ""}
              ${carerCount ? `<p><strong>Team size:</strong> ${carerCount} carers</p>` : ""}
              <p>Best regards,<br/>The CareGennie Team</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Resend email failed:", emailError);
        // Continue — don't block signup if email fails
      }
    }

    // Try webhook fallback if configured
    if (process.env.SIGNUP_WEBHOOK_URL) {
      try {
        await fetch(process.env.SIGNUP_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type,
            name,
            email,
            agency: agency || "",
            carerCount: carerCount || "",
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.error("Webhook failed:", webhookError);
      }
    }

    // Always log to console for development
    console.log(`[CareGennie Signup] ${type}:`, {
      name,
      email,
      agency: agency || "N/A",
      carerCount: carerCount || "N/A",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        type === "waitlist"
          ? "You've been added to the waiting list!"
          : "Your beta application has been received!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
