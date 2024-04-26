import app from "./src/app";
import { config } from "./src/config/config";

const startServer = async () => {
  const port = config.port;
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
};
startServer();
