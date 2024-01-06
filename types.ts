import {server, Member, Profile } from "@prisma/client"

// this file return type of data that we need in server header file 

export type ServerWithMemeberWithProfile = server &{
    member:(Member & {profile:Profile})[]
}