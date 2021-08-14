import 'reflect-metadata';
import fastify from 'fastify';
import express from 'express';
import config from './config/index';
import Logger from './lib/logger';


let startExpress = () => {
  return express();
}

let startFastify = () => {
  return fastify();
}



async function startServer() {
  let app = config.serverType === 'express' ? startExpress() : startFastify();
  await require('./lib').default({ serverApp: app });
  app && app.listen(config.port, (err: any) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }
    Logger.info(`
      ################################################
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            ${config.serverType} Server listening on port: ${config.port}
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      ################################################
    `);
  });
}

startServer();

