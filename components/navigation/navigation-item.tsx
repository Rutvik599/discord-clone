"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";

interface NavigationItemProps {
  id: string;
  imageurl: string;
  name: string;
}
export const NavigationItem = ({ id, imageurl, name }: NavigationItemProps) => {
    const params = useParams()
    const router = useRouter()
    const onClick = ()=>{
        router.push(`/servers/${id}`);
    }
  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button onClick={onClick} className="group relative flex items-center">
        <div className={cn(
           "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
           params?.serverId !== id && "group-hover:h-[26px]",
           params?.serverId === id ? "h-[30px]" : "h-[8px]",
        )}/>
        <div className={cn(
            "relative group flex mx-3 h-[38px] w-[38px] rounded-24px group-hover:rounded-[26px] transition-all overflow-hidden",
            params?.serverId === id && "bg-primary/10 text-primary rounded-[12px]"
        )}>
            <Image
            fill
            src={imageurl}
            alt={name + "'s Server"} 
            />
        </div>
      </button>
    </ActionTooltip>
  );
};
