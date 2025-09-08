import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this env var is set correctly
});

export const db = drizzle(pool, { schema });
