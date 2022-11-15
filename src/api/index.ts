import { Router as RouterExpress } from "express";

import config from "../config";
// import auth from "./routes/auth";

// guaranteed to get dependencies
export default () => {
  const app = RouterExpress();
  //   auth(app);
  // user(app);
  // shop(app);
  return app;
};
