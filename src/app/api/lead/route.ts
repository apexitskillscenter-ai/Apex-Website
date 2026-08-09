import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations";

/**
 * Lead capture endpoint. Currently STUBBED — it validates and logs the lead.
 *
 * ── To deliver leads for real, pick one and wire it below ──────────────
 *
 * 1) EMAIL (Resend):
 *    npm i resend
 *    const { Resend } = await import("resend");
 *    const resend = new Resend(process.env.RESEND_API_KEY);
 *    await resend.emails.send({
 *      from: "leads@yourdomain.com",
 *      to: "info@apexitzafarwal.com",
 *      subject: `New lead: ${data.name}`,
 *      text: JSON.stringify(data, null, 2),
 *    });
 *
 * 2) GOOGLE SHEET (Apps Script web app):
 *    await fetch(process.env.SHEET_WEBHOOK_URL!, {
 *      method: "POST",
 *      body: JSON.stringify(data),
 *    });
 *
 * 3) SUPABASE:
 *    Insert `data` into a `leads` table via the Supabase client.
 *
 * Add the relevant secret to .env.local and Vercel project settings.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // ── STUB: replace with real delivery (see options above) ──
    console.log("[LEAD]", new Date().toISOString(), data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
