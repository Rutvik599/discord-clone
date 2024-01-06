import { CurrentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { NavigationAction } from "./navigation-action";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { NavigationItem } from "./navigation-item";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";
export const NavigationSidebar = async () => {
  const profile = await CurrentProfile();

  if (!profile) {
    return redirect("/");
  }
  const server = await db.server.findMany({
    where: {
      member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
      <NavigationAction />
      <Separator className="h-[1px] bg-zinc-300 dark:bg-zinc-700 rounded w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {server.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
            id={server.id}
            name={server.name}
            imageurl={server.imageurl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-3">
        <ModeToggle/>
        <Separator className="h-[1px] bg-zinc-300 dark:bg-zinc-700 rounded w-10 mx-auto" />
        <UserButton 
        afterSignOutUrl="/"
        appearance={{
            elements:{
                avatarBox:"h-[38px] w-[38px]"
            }
        }}
        
        />
      </div>
    </div>
  );
};
