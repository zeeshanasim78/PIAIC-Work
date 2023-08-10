import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";


const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
neonConfig.fetchConnectionCache = true;
export const db = drizzle(sql);



