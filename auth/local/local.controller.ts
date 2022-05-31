import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { getUserByEmail } from '../../api/users/users.service';

export default async function handlerUserLogin(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) { return res.status(500).json('Internal server error').end(); }

    const user = await getUserByEmail(email);
    if (!user) { return res.status(404).json('Login failed'); }

    const isSuccess: boolean = await user.confirmPassword(password);
    if (!isSuccess) { return res.status(401).json('Login failed'); }

    const token = jwt.sign(user.profile, secretKey);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(401).json('Login failed');
  }
}
