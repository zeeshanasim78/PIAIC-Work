import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar, date } from 'drizzle-orm/pg-core';
  
export const cust_order = pgTable('cust_order', {
    order_id: serial('order_id').primaryKey(),
    order_date: date('order_date'),
    cutomer_id: integer('customer_id'),
    shipping_method_id: integer('shipping_method_id'),
    dest_address_id:integer('dest_address_id')
  //author_name: varchar('author_name', { length: 400 }),
});
 