// Getting Current profile of user from the database 

import { auth } from "@clerk/nextjs";
import { db } from "./db";

export const CurrentProfile = async()=>{
    const {userId} = auth();
    if(!userId){
        return null; 
    }

    const profile = await db.profile.findUnique({
        where:{
            userId
        }
    });
    return profile
}