import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routeHandler from "./routes/route";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    routeHandler(req,res);
  },
);

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
