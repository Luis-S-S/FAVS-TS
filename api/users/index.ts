import { Router } from 'express';
import {
  handlerGetAllUsers,
  handlerGetUserById,
  handlerCreateUser,
  handlerUpdateUser,
  handlerDeleteUser,
} from './users.controller';

const router = Router();

// const { isAuthenticated } = require('../../auth/auth.service');

router.get('/', handlerGetAllUsers); // isAuthenticated(),
router.get('/:id', handlerGetUserById);
router.post('/', handlerCreateUser);
router.patch('/:id', handlerUpdateUser);
router.delete('/:id', handlerDeleteUser);

export default router;
