import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
require('dotenv').config({ path: ['.env.local', '.env'] });


export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') 
    {

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const body = await req.json();
        const userInput = body.userInput;
        console.log(userInput);

        const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
            {
                role: "system",
                content: "You are a cooking/baking assistant. You give helpful cooking tips and tricks, and create recipes for the user"
            },
            {
                role: "user",
                content: userInput
            }
        ];

        try {
            //Request a response from GPT-3.5 Turbo
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: messages,
                temperature: 0.7,
                max_tokens: 800,
                top_p: 1,
            });
            console.log(response.choices[0].message.content);
            // Correctly use NextResponse
            return NextResponse.json({ message: "Success", response: response.choices[0].message.content});

        } catch (error) {
            console.log("Error:", error);
            return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
        }
      


        
    } else {
        return NextResponse.json({ error: 'Method Not Allowed' });
    }
}