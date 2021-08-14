import expressLoader from './express';
import fastifyLoader from './fastify';
// import mongooseLoader from './mongoose';
import Logger from './logger';
import config from '../config/index';

// import injector from './injector'

export default async ({ serverApp }) => {

//     const mongoConnection = await mongooseLoader()
//     const userModel = {
//       name: 'userModel',
//       model: require('../models/user').default,
//     };
//     const shopModel ={
//       name:'shopModel',
//       model: require('../models/shop').default,
//     }
//   const { agenda } = await injector({
//     mongoConnection,
//     models: [
//       userModel,
//       shopModel
//     ]
//   });
    await  config.serverType === 'express' ? expressLoader({ app: serverApp }) : fastifyLoader({ app: serverApp });
    Logger.info(`${config.serverType} ready to go!!`);
  };