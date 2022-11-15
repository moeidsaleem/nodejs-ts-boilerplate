import express from "express";
import config from "./config/index";
import Logger from "./lib/logger";
import * as libs from "./lib";

async function startServer() {
  const app: express.Application = express();
  await libs.default({ serverApp: app });

  app &&
    app.listen(config.port, () => {
      Logger.info(`
                  /|");
   _______________)|..");
 <'______________<(,_|)");
            .((()))| ))");
            (======)| '\\");
           ((( \"_\"()|_ \\");
          '()))(_)/_/ ' )");
          .--/_\\ /(  /./");
         /'._.--\\ .-(_/");
        / / )\\___:___)");
       ( -.'.._  |  /");
        \\  \\_\\ ( | )");
         '. /\\)_(_)|");
           '-|  XX |");
            %%%%%%%%");
           / %%%%%%%\\");
          ( /.-'%%%. \\");
         /(.'     \\ :|");
        / ,|       ) )");
      _|___)      (__|_.		   ⚡️-------------------------------------------------------⚡️
      )___/       )___(			      ⚡️|	Running Node Server for ${process.env.NODE_ENV}	|⚡️
       |x/      mrf\\ >			      ⚡️|	      Version: ${process.env.VERSION}                    |⚡️
       |x)         / '.			      ⚡️|	    Ready now on port: ${config.port}             |⚡️
       |x\\       _(____''.__                  ⚡️|	    Author: ${process.env.AUTHOR}           |⚡️
     --\\ -\\--");                              ⚡️| Hire Me: ${process.env.AUTHOR_URL}  |⚡️
      --\\__|--"); 

    `);
    });
}

startServer();
