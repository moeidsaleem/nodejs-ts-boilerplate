export interface IUser {
    id: Number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    salt: string;

  }
  
  export interface IUserInput {
    firstName: string;
    lastName: string;

    email: string;
    password: string;
    salt?: String;
    phone?: string;

  }