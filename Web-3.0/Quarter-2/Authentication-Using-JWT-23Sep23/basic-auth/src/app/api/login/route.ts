import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";


export async function POST(request: NextRequest) {

    const { uname, pass } = await request.json();

    if (!uname || !pass) {
        return NextResponse.json({ message: 'Missing AUthentication Information' }, { status: 400 })
    }
    else {
        if ((uname == "zeeshan" && pass == "123@jwt")) {
            // return NextResponse.json({ message: " User Authentiacted" }, { status: 200 })
            const secret = new TextEncoder().encode(
                process.env.JWT_SECRET
            );

            console.log("secret: ", secret);
            const alg = "HS256";

            const jwt = await new jose.SignJWT({ email: uname })
                .setProtectedHeader({ alg })
                .setIssuedAt()
                .setExpirationTime("2h")
                .sign(secret);

            cookies().set("token", jwt, {
                httpOnly: true,
            });

        }
        else
            return NextResponse.json({ message: "Error : User NOT Authentiacted" }, { status: 400 })
    }


}