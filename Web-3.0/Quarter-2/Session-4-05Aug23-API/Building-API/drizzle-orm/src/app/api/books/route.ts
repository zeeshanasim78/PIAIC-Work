import { NextRequest, NextResponse } from "next/server";
import { db} from "@/app/database/schema/db";
import { author } from "@/app/database/schema/author";
import { book } from "@/app/database/schema/book";
import { publisher } from "@/app/database/schema/publisher";
import { eq } from "drizzle-orm";


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

 async function addAuthor(auth_name: string) {
  const newAuthor = { author_name: auth_name };
  return await db.insert(author).values(newAuthor).returning();
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
    
    if (url.searchParams.has("books")) {
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
  
  //  console.log(data.name, data.email);
  //return NextResponse.json(dbResponse, { status: 201 });
}

export async function POST(request: NextRequest) {
}
