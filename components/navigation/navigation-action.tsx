"use client";

import { Plus } from "lucide-react";
import { ActionTooltip } from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";
export const NavigationAction = () => {
  const {onOpen} = useModal();
  return (
    <div>
        <ActionTooltip
        side="right"
        align="center"
        label="Add a Server"
        >
      <button className="group flex items-center" onClick={()=> onOpen("createServer")}> {/* In this we are setting onOpen true so that we can true the create server page true */}
        <div className="flex mx-3 h-[38px] w-[38px] rounded-[24px] group-hover:rounded-[12px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus className="group-hover:text-white transition text-emerald-500" size={25}/>
        </div>
      </button></ActionTooltip>
    </div>
  );
};
