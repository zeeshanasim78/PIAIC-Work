Connectivity with Database using Drizzle ORM

In this project we will establish the connectivity with Neon Data with our project

Step # 1 : Create a new project using npx create-next-app@latest

Step # 2 : Make that project current folder and install the drille package for Neon using commands
npm i drizzle-orm @neondatabase/serverless
npm i -D drizzle-kit

Step # 3 : Create a folder db. Add a file in it and paste following code for database connectivity

import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
const db = drizzle(sql);
