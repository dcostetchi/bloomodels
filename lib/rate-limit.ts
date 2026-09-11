interface Bucket {
  count: number;
  resetAt: number;
}

// In-memory: resets on redeploy and isn't shared across instances. Fine for a low-traffic
// application form; swap for Redis/Upstash if traffic or horizontal scaling grows.
const buckets = new Map<string, Bucket>();

export function isRateLimited(
  key: string,
  limit: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (existing.count >= limit) {
    return true;
  }

  existing.count += 1;
  return false;
}
