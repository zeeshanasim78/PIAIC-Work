import { book } from "@/app/database/schema/book";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/app/database/schema/db";


export async function GET(req:NextRequest , {params} : {params : {id : number}}) {
    try {
        const data = await db.select().from(book).where(eq(book.book_id , params.id))
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            message : (error as {message : string}).message
        })
    }
}