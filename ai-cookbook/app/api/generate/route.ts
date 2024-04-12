import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
require('dotenv').config({ path: ['.env.local', '.env'] });


export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const body = await req.json();
        const userInput = body.userInput;
        console.log(userInput);
        // Correctly use NextResponse
        return  NextResponse.json({ message: "Success" });
    } else {
        return NextResponse.json({ error: 'Method Not Allowed' });
    }
}