import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'diego@rocketseat.com.br',
    password: '1234567890',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native',
      { title: 'JavaScript', experience: 100 },
    ],
  });

  console.log(user);
  
  return response.json({ message: 'Hello World' });
};
