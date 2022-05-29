import { Express } from 'express';
import users from './api/user';

export default function routes(app: Express) {
  app.use('/users', users);
}
