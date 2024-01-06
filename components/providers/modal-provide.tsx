"use client"; // this mean this is not react server side component 
import { useEffect, useState } from "react";
import { CreateServerModel } from "../models/create-server-model";
import { InviteModal } from "../models/invite-modal";

export const ModalProvider = () =>{
    const [isMounted,setisMounted] = useState(false); // Handle Hydration Error; 

    useEffect(()=>{
        setisMounted(true);
    },[]);

    if(!isMounted){
        return null
    }
    return (
        <>
      <CreateServerModel/>
      <InviteModal/>
        </>
    );
}