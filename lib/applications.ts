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

export async function saveApplication(
  values: ApplyFormValues
): Promise<StoredApplication> {
  await mkdir(DATA_DIR, { recursive: true });

  const existing = await readApplications();
  const entry: StoredApplication = {
    ...values,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };

  const updated = [...existing, entry];
  await writeFile(DATA_FILE, JSON.stringify(updated, null, 2), "utf-8");

  return entry;
}
