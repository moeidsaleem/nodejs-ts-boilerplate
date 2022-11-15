export interface ISample {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  salt: string;
}

export interface ISampleInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  salt?: string;
  phone?: string;
}
