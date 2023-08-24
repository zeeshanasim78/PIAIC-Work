import { NextRequest, NextResponse } from "next/server";
import { db} from "@/app/database/schema/db";
import { author } from "@/app/database/schema/author";
import { book } from "@/app/database/schema/book";
import { publisher } from "@/app/database/schema/publisher";
import {cust_order} from "@/app/database/schema/cust_order"
import { eq } from "drizzle-orm";
import { TimestampFsp } from "drizzle-orm/mysql-core";
import { timeStamp } from "console";


async function getAuthors() {
  const result = await db.select().from(author);
  return result;
}

async function getBooks() {
  const result = await db.select().from(book);
  return result;
}

async function getPublishers() {
  const result = await db.select().from(publisher);
  return result;
}

async function addAuthor(auth_id :number, auth_name: string) {
  const newAuthor = { author_id:auth_id , author_name: auth_name };
  return await db.insert(author).values(newAuthor).returning();
}

 async function addPublisher(pub_id:number, pub_name: string) {
  const newPublisher = {publisher_id:pub_id, publisher_name: pub_name };
  return await db.insert(publisher).values(newPublisher).returning();
}

 async function addCustomerOrder(p_order_id:number,p_order_date:string, p_c_id: number, p_ship_mthd_id:number,p_dest_add_id:number  ) {
  const newCustomerOrder = {  order_id : p_order_id, 
                              order_date: (new Date).toISOString() , 
                              customer_id: p_c_id, 
                              shipping_method_id:p_ship_mthd_id, 
                              dest_address_id:p_dest_add_id };

  return await db.insert(cust_order).values(newCustomerOrder).returning();
}

async function updAuthor(auth_id : bigint , auth_name: string) {
  return await db
    .update(author)
    .set({ author_name: auth_name })
    .where(eq(author.author_id,1));
}

async function delAuthor(auth_id:Int32Array) {
    return await db.delete(author).where(eq(author.author_id, 1)).returning();
    // Check the Error of authid
}


export async function GET(request: NextRequest) {
    
    const url = request.nextUrl;
    
    if (url.searchParams.has("allbooks")) {
        const dbResponse = await getBooks();
        //const name = url.searchParams.get("name");
          return NextResponse.json(dbResponse, { status: 201 });
    }
    else if (url.searchParams.has("authors")) {
        const dbResponse = await getAuthors();
        return NextResponse.json(dbResponse, { status: 201 });
    }
    else if (url.searchParams.has("publishers")) {
        const dbResponse = await getPublishers();
        return NextResponse.json(dbResponse, { status: 201 });
    }
    else
    {
        return new NextResponse("Please check the parameters");
    }
  
}


export async function POST(request: NextRequest) {

   const url = request.nextUrl;
    
  if (url.searchParams.has("add_author_name")) {
    const a_name = url.searchParams.get("add_author_name") as string;
    const a_id = Number(url.searchParams.get("add_author_id") as string);
    try{
      const dbResponse = await addAuthor(a_id, a_name);
      return NextResponse.json(dbResponse, { status: 201 });
    }
    catch(ex)
    {
      return NextResponse.json(ex , { status: 501 });
    }
 
  }
  else if (url.searchParams.has("add_publisher_name")) {
    const p_name = url.searchParams.get("add_publisher_name") as string;
    const p_id = Number(url.searchParams.get("add_publisher_id") as string);
    console.log(p_name,p_id);

    try
    {
      const dbResponse = await addPublisher(p_id,p_name);
      return NextResponse.json(dbResponse, { status: 201 });
    }
    catch(ex)
    {
      return NextResponse.json(ex , { status: 501 });
    }
    
  }
  else if (url.searchParams.has("add_cust_order_id")) {
    const c_order_id = url.searchParams.get("cust_order_id") as string;
    const c_id = url.searchParams.get("cust_id") as string;
    const shp_mtd_id = url.searchParams.get("ship_mthd_id") as string;
    const dest_addrs_id = url.searchParams.get("dest_add_id") as string;
    const order_date = new Date;
    try{
      const dbResponse = await addCustomerOrder(Number(c_order_id),order_date,Number(c_id),Number(shp_mtd_id),Number(dest_addrs_id));
    return NextResponse.json(dbResponse, { status: 201 });
    }
    catch(ex){    return NextResponse.json(ex, { status: 510 });}
  }
  else
  {
    return new NextResponse("Invalid POST parameters");
    }

  
}
