import {auth} from "@clerk/nextjs"; // that check user authentication from clerk
import { createUploadthing, type FileRouter } from "uploadthing/next";
// uploadnothing api file 
const f = createUploadthing();
 
const handleAuth = ()=>{
    const {userId} = auth();
    if(!userId) throw new Error("Unauthorized user")
    return {userId:userId};
}
 

export const ourFileRouter = {
  serverImage :f({image:{maxFileSize:"4MB",maxFileCount:1}})
  .middleware(()=>handleAuth())
  .onUploadComplete(()=>{}),
  messageFile:f(["image","pdf"])
  .middleware(()=>handleAuth())
  .onUploadComplete(()=>{})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;