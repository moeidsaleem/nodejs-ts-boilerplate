import { Container } from 'typedi';
import { PrismaClient } from '@prisma/client'
import { IUser } from '../../interfaces/IUser';

const attachCurrentUser = async (req, res, next) => {
  // const Logger = Container.get('logger');
  try {
      const prisma = new PrismaClient();
      let user = await prisma.user.findFirst({
          where: {
              id: req.user.id
          }
      });
      console.log('user', user);
      if (!user) {
        return res.sendStatus(401);
      }
      if (user) {
        Reflect.deleteProperty(user, 'password');
        Reflect.deleteProperty(user, 'salt');
        req.currentUser = user;
        return next();
      }
  } catch (e) {
    // Logger.error('🔥 Error attaching user to req: %o', e);
    return next(e);
  }
};

export default attachCurrentUser;