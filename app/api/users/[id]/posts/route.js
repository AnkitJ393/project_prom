import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// In API route handlers, params are typically passed like this.
export const GET = async (req, { params }) => {
  const { id } = params; // Extract 'id' from the request parameters

  try {
    await connectToDB();

    // Fetch prompts based on the creator's ID (which is passed in 'id')
    const prompts = await Prompt.find({ creator: id }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts created by user", {
      status: 500,
    });
  }
};
