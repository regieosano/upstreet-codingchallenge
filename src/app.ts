import app from "./server";

import { port } from "./settings";

const PORT = port;

const onError = (error: NodeJS.ErrnoException) => {
    if (error.syscall !== "listen") {
        throw error;
      }
  
      const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  
      // handle specific listen errors with friendly messages
      switch (error.code) {
        case "EACCES":
          console.log(bind + " requires elevated privileges");
          process.exit(1);
          break;
        case "EADDRINUSE":
          console.log(bind + " is already in use");
          process.exit(1);
          break;
        default:
          throw error;
      }
}

const onListening = () => {
    const addr = app.name;
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + PORT;
    console.log("Listening on " + bind);
}

app.set("port", PORT);

app.listen(PORT);
app.on("error", (err: any) => {
  onError(err);
});
app.on("listening", onListening);