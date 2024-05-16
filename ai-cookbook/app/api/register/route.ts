import { signIn } from "next-auth/react";
import prisma from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { saltAndHashPassword } from "@/util/password";
import { error } from "console";


export  async function POST(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST')
    {
        const body = await req.json();
        const { username, email, password } = body;

        const pHash = await saltAndHashPassword(password as string)

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: pHash,
            }
        })
        // Sign in the user using NextAuth.js
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            return NextResponse.json({error: result.error})
        }
        return NextResponse.json({success: true});

    }
}