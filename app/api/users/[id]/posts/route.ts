import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    try {
        await connectToDB()

        const prompts = await Prompt.find({ creator: id }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 