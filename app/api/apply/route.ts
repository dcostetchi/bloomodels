import { NextResponse } from "next/server";
import { applyFormSchema } from "@/lib/validations";
import { saveApplication } from "@/lib/applications";
import { sendApplicationEmail } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request): Promise<NextResponse> {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(`apply:${ip}`, 15, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = applyFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const { application, persistedToDisk } = await saveApplication(parsed.data);
    const emailed = await sendApplicationEmail(application);

    // Disk write is best-effort (fails on Vercel's read-only filesystem) and
    // email is opt-in via RESEND_API_KEY — only fail the request if neither
    // succeeded, since that means the application was recorded nowhere.
    if (!persistedToDisk && !emailed) {
      console.error(
        "Application lost: no disk write and no email configured.",
        application.id
      );
      return NextResponse.json(
        { error: "Could not save application. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Unexpected error saving application:", error);
    return NextResponse.json(
      { error: "Could not save application. Please try again." },
      { status: 500 }
    );
  }
}
