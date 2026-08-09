import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * CMS webhook target for on-publish content refresh (ISR).
 *
 * When you adopt a headless CMS (Sanity, Contentful, etc.), point its
 * "on publish" webhook here. Send a secret + the path(s) to refresh, e.g.:
 *   POST /api/revalidate
 *   { "secret": "...", "path": "/courses/graphic-designing" }
 *
 * Set REVALIDATE_SECRET in .env.local and the CMS webhook config.
 * Until a CMS is connected this route simply guards and no-ops safely.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const secret = body?.secret;

    if (
      process.env.REVALIDATE_SECRET &&
      secret !== process.env.REVALIDATE_SECRET
    ) {
      return NextResponse.json({ ok: false, error: "Invalid secret" }, { status: 401 });
    }

    const path = typeof body?.path === "string" ? body.path : "/";
    revalidatePath(path);

    return NextResponse.json({ ok: true, revalidated: path });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
