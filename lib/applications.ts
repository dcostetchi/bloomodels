import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { ApplyFormValues } from "@/lib/validations";

export interface StoredApplication extends ApplyFormValues {
  readonly id: string;
  readonly submittedAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "applications.json");

async function readApplications(): Promise<readonly StoredApplication[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredApplication[]) : [];
  } catch {
    return [];
  }
}

export interface SaveApplicationResult {
  readonly application: StoredApplication;
  readonly persistedToDisk: boolean;
}

// On Vercel the deployed app directory is read-only (only /tmp is writable,
// and it isn't shared or durable across invocations), so this write is
// best-effort — it works on Railway/a real server, but on Vercel it will
// fail every time. The caller must treat email as the real record and only
// error out if that also fails; see app/api/apply/route.ts.
export async function saveApplication(
  values: ApplyFormValues
): Promise<SaveApplicationResult> {
  const application: StoredApplication = {
    ...values,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    const existing = await readApplications();
    const updated = [...existing, application];
    await writeFile(DATA_FILE, JSON.stringify(updated, null, 2), "utf-8");
    return { application, persistedToDisk: true };
  } catch (error) {
    console.error("Failed to persist application to disk:", error);
    return { application, persistedToDisk: false };
  }
}
