import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const directory=sqliteTable('directory',{id:integer('id').primaryKey(),payload:text('payload').notNull(),revision:integer('revision').notNull(),ownerId:text('owner_id'),updatedAt:text('updated_at').notNull()});
