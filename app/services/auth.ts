import { Service, Inject } from 'typedi';
import jwt from 'jsonwebtoken';
import config from '../config';
import argon2 from 'argon2';
import { randomBytes } from 'crypto';
import { IUser, IUserInput } from '../interfaces/IUser';
import { prisma, PrismaClient } from '@prisma/client'

@Service()
export default class AuthService {
  constructor(
      // @Inject('logger') private logger,
  ) {}

   prisma = new PrismaClient();

  public async SignUp(userInputDTO): Promise<{ user: IUser; token: string }> {
    try {
      console.log('boy is here');
      const salt = randomBytes(32);
      // this.logger.silly('Hashing password');
      const hashedPassword = await argon2.hash(userInputDTO.password, { salt });
      userInputDTO.password = hashedPassword;
      userInputDTO.salt = salt.toString('hex');
      const userRecord = await this.prisma.user.create({
          data:{
            ...userInputDTO,
          }
      })
      //  this.logger.silly('Generating JWT');
      const token = this.generateToken(userRecord);
      if (!userRecord) {
        throw new Error('User cannot be created');
      }
      //  this.logger.silly('Sending welcome email');
      Reflect.deleteProperty(userRecord, 'password');
      Reflect.deleteProperty(userRecord, 'salt');
      return { user:userRecord, token };
    } catch (e) {
      //  this.logger.error(e);
      throw e;
    }
  }

  public async SignIn(email: string, password: string)
  : Promise<{ user: IUser; token: string }> 
  {
    // const userRecord = await this.userModel.findOne({ email });
    let userRecord = await this.prisma.user.findFirst({
      where:{
        email,
      }
    });
    console.log('ss', userRecord);
    if (!userRecord) {
      throw new Error('User not registered');
    }
    const validPassword = await argon2.verify(userRecord.password, password);
    if (validPassword) {
      // this.logger.silly('Generating JWT');
      const token = this.generateToken(userRecord);
      const user = userRecord
      Reflect.deleteProperty(user, 'password');
      Reflect.deleteProperty(user, 'salt');
      return { user, token };
    } else {
      throw new Error('Invalid Password');
    }
  }

  private generateToken(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    //  this.logger.silly(`Sign JWT for userId: ${user._id}`);
    return jwt.sign(
      {
        _id: user._id, 
        role: user.role,
        name: user.name,
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret,
    );
  }
}