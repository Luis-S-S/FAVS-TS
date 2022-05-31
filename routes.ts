import { Express } from 'express';
import users from './api/users';
import lists from './api/lists';
import auth from './auth/local';

export default function routes(app: Express) {
  app.use('/api/users', users);
  app.use('/api/lists', lists);
  app.use('/auth/local', auth);
}
