// app/api/chatbot/route.ts
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

// Inisialisasi OpenAI dengan API key dari env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { input } = await request.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",  // atau "gpt-4"
      messages: [{ role: "user", content: input }],
    });

    const message = response.choices[0].message?.content || "";

    return NextResponse.json({ message });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada AI service." },
      { status: 500 }
    );
  }
}
