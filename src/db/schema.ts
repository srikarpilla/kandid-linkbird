import { pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const campaigns = pgTable('campaigns', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  status: varchar('status', { length: 20 }).notNull(),
  createdAt: timestamp('created_at').notNull(),
});

export const leads = pgTable('leads', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull(),
  company: varchar('company', { length: 100 }).notNull(),
  campaignId: varchar('campaign_id', { length: 36 }).notNull(),
  status: varchar('status', { length: 20 }).notNull(),
  lastContactDate: timestamp('last_contact_date').notNull(),
});
