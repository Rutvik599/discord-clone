"use client";
// Create new Server page after default server

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import { useModal } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Copy, RefreshCw, icons } from "lucide-react";


export const InviteModal = () => {
  const {isOpen,onClose,type} = useModal();

  const isModalOpen = isOpen && type === "invite";
  

 
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite Friends
          </DialogTitle>
        </DialogHeader>
       <div className="p-6">
        <Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
          Server Invite Link
        </Label>
        <div className="flex items-center mt-2 gap-x-2">
          <Input className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0" value="Invite Link"/>
          <Button size="icon">
            <Copy className="w-4 h-4"/>
          </Button>
        </div>
        <Button variant="link" size="sm" className="text-xs text-zinc-500 mt-4">Genrate New Link <RefreshCw className="h-4 w-4 ml-2"/> </Button>
       </div>
      </DialogContent>
    </Dialog>
  );
};
