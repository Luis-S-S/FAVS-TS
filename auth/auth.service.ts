import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { CustomRequest } from '../custom.d';
import { getUserByEmail } from '../api/users/users.service';

const composable = require('composable-middleware');

export default function isAuthenticated() {
  return composable().use(async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const secretKey = process.env.JWT_SECRET_KEY;
      if (!secretKey) { return res.status(500).json('Internal server error').end(); }

      const { authorization } = req.headers;
      if (!authorization) { return res.status(401).json('Unauthorized').end(); }

      const [, token] = authorization.split(' ');
      const payload = await jwt.verify(token, secretKey);

      if (typeof payload === 'string') { return res.status(401).json('Unauthorized').end(); }

      const user = await getUserByEmail(payload.email);
      if (!user) { return res.status(401).json('Unauthorized').end(); }

      req.user = user;
      next();
      return null;
    } catch (error) {
      return res.status(401).json('Unauthorized').end();
    }
  });
}
