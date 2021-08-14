import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../api';
import config from '../config';
import { FastifyInstance } from 'fastify';
export default async ({ app }: { app: FastifyInstance }) => {

   await app.register(require('fastify-express'));

  /**
   * API Status Check !!
   */
  app.get('/status', (req, res) => {
    res.status(200);
  });
  app.head('/status', (req, res) => {
    res.status(200)
  });

  /* Setting up basics */
//   app.enable('trust proxy');
//   app.register(cors());
//   app.register(require('method-override')());
//   app.register(require('body-parser').json());
 
  // Load API routes with /api 
//   app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
//   app.register((req, res, next) => {
//     const err = new Error('Not Found');
//     err['status'] = 404;
//     next(err);
//   });

//   /// error handlers
//   app.use((err, req, res, next) => {
//     /**
//      * Handler 401
//      */
//     if (err.name === 'UnauthorizedError') {
//       return res
//         .status(err.status)
//         .send({ message: err.message })
//         .end();
//     }
//     return next(err);
//   });
//   app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//       errors: {
//         message: err.message,
//       },
//     });
//   });

  
}