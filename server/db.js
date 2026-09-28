import { neon, neonConfig } from "@neondatabase/serverless";
import dns from "node:dns";
import "dotenv/config";

dns.setDefaultResultOrder("ipv4first");

function createRetryingFetch({ maxRetries = 5, timeoutMs = 15000, delayMs = 400 } = {}) {
  const originalFetch = globalThis.fetch;
  return async function retryingFetch(url, options) {
    let lastErr;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      const signal = options.signal ? AbortSignal.any([options.signal, controller.signal]) : controller.signal;
      try {
        const res = await originalFetch(url, { ...options, signal });
        if (res.status < 500) return res;
        await res.arrayBuffer();
      } catch (err) {
        lastErr = err;
      } finally {
        clearTimeout(timer);
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs * (attempt + 1)));
    }
    throw lastErr;
  };
}

neonConfig.fetchFunction = createRetryingFetch();

const {
  NEON_DATABASE_URL,
  DATABASE_URL,
  PGHOST,
  PGDATABASE,
  PGUSER,
  PGPASSWORD,
  PGPORT = "5432",
} = process.env;

const connectionString =
  NEON_DATABASE_URL ||
  DATABASE_URL ||
  (PGHOST && PGDATABASE && PGUSER && PGPASSWORD
    ? `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}?sslmode=require`
    : undefined);

if (!connectionString) {
  console.error("NEON_DATABASE_URL (or PGHOST/PGDATABASE/PGUSER/PGPASSWORD) missing in server/.env");
  process.exit(1);
}

export const sql = neon(connectionString);