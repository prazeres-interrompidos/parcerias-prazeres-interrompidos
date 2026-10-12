import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const directory=sqliteTable('directory',{id:integer('id').primaryKey(),payload:text('payload').notNull(),revision:integer('revision').notNull(),ownerId:text('owner_id'),updatedAt:text('updated_at').notNull()});
export const githubSync=sqliteTable('github_sync',{id:integer('id').primaryKey(),ciphertext:text('ciphertext').notNull(),publishedRevision:integer('published_revision').notNull().default(0),lastError:text('last_error'),leaseUntil:integer('lease_until').notNull().default(0)});
