import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({mesage:"Hello MAchine"});
    
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    console.log(data);

    return NextResponse.json({
        status:"Ok",
        mesage:"Hello from Post Request"});
       
}

