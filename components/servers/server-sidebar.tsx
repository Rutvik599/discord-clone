import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { ChannelType } from "@prisma/client";
import { channel } from "diagnostics_channel";
import { redirect } from "next/navigation";
import { ServerHeader } from "./server-header";

interface ServerSideBarProps{
    serverId:string;
}
export const ServerSideBar = async({serverId}:ServerSideBarProps)=>{
    const profile = await CurrentProfile();
    if(!profile){
        return redirect('/');
    }

    const server = await db.server.findUnique({
        where:{  // Prisma Schema that help to feth the data
            id:serverId,
        },
        include:{
            channel:{
                orderBy:{
                    createdAt:"asc"
                }
            },
            member:{
                include:{
                    profile:true,
                },
                orderBy:{
                    role:"asc",
                }
            }
        }
    })
    
    const textChannels = server?.channel.filter((channel)=>channel.type === ChannelType.TEXT); // Finding Text Channel 
    const audioChannels = server?.channel.filter((channel)=>channel.type === ChannelType.AUDIO); // Finding Audio Channel 
    const videoChannels = server?.channel.filter((channel)=>channel.type === ChannelType.VIDEO); // Finding Video Channel 

    const members = server?.member.filter((member)=>member.profileId !== profile.id) // find the all channel memeber except current profile id
    
    if(!server){
        return redirect('/');
    }
    
    const role = server.member.find((member)=>member.profileId === profile.id)?.role // Finding Our Role in application
    return (
        <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
            <ServerHeader 
            server={server}
            role={role}
            />
            </div>
    );
}