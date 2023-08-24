import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const publisher = pgTable('publisher', {
    publisher_id: serial('publisher_id').primaryKey(),
    publisher_name: varchar('publisher_name', { length: 400 })
});
