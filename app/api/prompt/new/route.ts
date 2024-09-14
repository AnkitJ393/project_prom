import {connectToDB} from '@utils/database.js'
import Prompt from '@models/prompt';
import { NextRequest, NextResponse } from 'next/server';

export const POST=async(req:NextRequest,res:NextResponse)=>{
        const {userId,prompt,tag}=await req.json();
    
    try {
        await connectToDB();

        const newPrompt=new Prompt({
            creator:userId,
            prompt,
            tag
        })

        await newPrompt.save();

        return new NextResponse(JSON.stringify(newPrompt),{
            status:201
        })
        
    } catch (error) {
        return new NextResponse('Failed to create new Response',{
            status:501
        })

    }

}