import { Pool } from 'pg';
import * as pgCore from 'drizzle-orm/pg-core';

import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
export const db = pgCore.drizzle(pool, { schema });

