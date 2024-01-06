// This Code is Inititalinze prisma client When code Change (HOT Relode) 

import { PrismaClient } from "@prisma/client";

declare global{
    var prisma : PrismaClient | undefined;
}
// using this code not every time prisma client intialize when we cahnge the code 
export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !=="production") globalThis.prisma = db;