This project is to test the API

Step # 1 : create a new Next.JS Application 

Step # 2 : Create a table books in the database . We can use Neon Database which provides serverless plateform for postgrep

Step # 3 : Add the support for drizzle ORM in the project using following commands. These commands can be get from the drizzle ORM website https://orm.drizzle.team/docs/installation-and-db-connection/postgresql/neon

npm i drizzle-orm @neondatabase/serverless
npm i -D drizzle-kit

Step # 4 : Get the drizzle connectivity code from the website as :

import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
 
neonConfig.fetchConnectionCache = true;
 
const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql);
 
const result = await db.select().from(...);

Step # 5 : Add the DB connectivity connection code and store it in the .env file present on the root. If not present you can create this file 

Step # 6 : Now add the database schema inside the project
For this you can create books folder inside the src\app
Then again create a folder database in the books folder.

Step# 7 : Create a schema files for each table with that name as books.ts
define the schema in it using the sample code form the drizzle orm website link : https://orm.drizzle.team/docs/sql-schema-declaration

