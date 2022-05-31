import { Express } from 'express';
import users from './api/users';

export default function routes(app: Express) {
  app.use('/api/users', users);
}
