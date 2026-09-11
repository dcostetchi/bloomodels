import { NextResponse } from "next/server";
import { applyFormSchema } from "@/lib/validations";
import { saveApplication } from "@/lib/applications";
import { sendApplicationEmail } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request): Promise<NextResponse> {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(`apply:${ip}`, 5, 10 * 60 * 1000)) {
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
    const application = await saveApplication(parsed.data);
    await sendApplicationEmail(application);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Could not save application. Please try again." },
      { status: 500 }
    );
  }
}
