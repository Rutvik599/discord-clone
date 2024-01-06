import { createNextRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
//this file call CORE.TS
// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});