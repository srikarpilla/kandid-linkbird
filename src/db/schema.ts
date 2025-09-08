import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const campaigns = pgTable('campaigns', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  status: text('status').notNull(),
  created_at: timestamp('created_at').defaultNow(),
});

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company').notNull(),
  campaign_id: serial('campaign_id').references(() => campaigns.id),
  status: text('status').notNull(),
  last_contact_date: timestamp('last_contact_date'),
});
