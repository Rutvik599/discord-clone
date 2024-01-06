// Creating server and assign a admin 
import {v4 as uuidv4} from "uuid"; // for invite code
import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";

export async function POST(req:Request) {
    try{
        const {name,imageurl} = await req.json();
        const profile = await CurrentProfile();
        if(!profile){
            return new NextResponse("Unauthorized",{status:401});
        }
        const server = await db.server.create({
            data:{
                profileId:profile.id,
                name,
                imageurl,
                inviteCode:uuidv4(),
                channel:{
                    create:[
                        {name:"general",profileId:profile.id}
                    ]
                },
                member:{
                    create:[
                        {profileId:profile.id,role:MemberRole.ADMIN}
                    ]
                }
            }
        })
        return NextResponse.json(server);
    }catch(err){
        console.log("[SERVER_POST]",err);
        return new NextResponse("Internal Error",{status:500});
    }
}