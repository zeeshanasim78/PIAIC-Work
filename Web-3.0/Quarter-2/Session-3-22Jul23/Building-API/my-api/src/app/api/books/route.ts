import { NextResponse } from "next/server";

export async function GET(request: Request)
{
    const res = {
        name:"First API"
    }
    return NextResponse.json(res);

}