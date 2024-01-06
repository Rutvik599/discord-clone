import { ServerSideBar } from "@/components/servers/server-sidebar";
import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await CurrentProfile();

  if (!profile) {
    return redirectToSignIn();
  }
  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      member: {
        some: {
          profileId: profile.id, // Using this we can find that who can acces the server | Only memebers can access the server
        },
      },
    },
  });
  if (!server) {
    return redirect("/");
  }
  return (
    <div>
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerSideBar serverId={params.serverId}/>
      </div>
      <main className="h-full md:pl-60">
      {children}</main>
    </div>
  );
};
export default ServerIdLayout;
