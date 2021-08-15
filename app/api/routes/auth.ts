import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import AuthService from '../../services/auth';
import { IUserInput } from '../../interfaces/IUser';
import middlewares from '../middlewares';
import { celebrate, Joi } from 'celebrate';
import { PrismaClient } from '@prisma/client';

const route  = Router();

export default (app:Router)=>{
    app.use('/auth', route)
    const prisma = new PrismaClient();
    const authServiceInstance = Container.get(AuthService);

    route.get('/yo', async (req,res) => {
        // let user = await prisma.user.create({
        //     data:{
        //         firstName:'laove',
        //         lastName:'prisma',
        //         email:'moeidxsaleem@gmail.com',
        //         password:'fucsker123',
        //         phone:'0902078601'
        //     }
        // });
        let user = await prisma.user.findMany();

        console.log('user', user);
        res.json(user);
    })

    route.post('/signup', 
    celebrate({
        body:Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().required(),
            phone: Joi.string(),
            password: Joi.string().required(),
        })
    }), async(req:Request, res:Response, next: NextFunction)=>{
    // const logger = Container.get('logger');
    console.log('request body', req.body);
        // logger.debug('req', req.body);
        try{
            const { user, token } = await authServiceInstance.SignUp(req.body as IUserInput);
            return res.status(201).json({user, token})
        }catch(e){
            console.log('ee',e);
            return next(e)
        }
    });


    route.post('/signin', celebrate({
        body: Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required()
        })
    }), async (req:Request, res:Response, next:NextFunction)=>{
        try{
        const {email, password} = req.body;
        const {user, token } = await authServiceInstance.SignIn(email, password);
        return res.json({user, token}).status(200);
                 
    }catch(e){
        // logger.error("Error loading e")
        next(e)
    }
    })


    // route.post('/logout', middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
    //     // const logger = Container.get('logger');
    //     // logger.debug('Calling Sign-Out endpoint with body: %o', req.body)
    //     try {
    //       return res.status(200).end();
    //     } catch (e) {
    //       logger.error('🔥 error %o', e);
    //       return next(e);
    //     }
    //   });
}