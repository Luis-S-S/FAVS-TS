import { Router } from 'express';
import handlerUserLogin from './local.controller';

const router = Router();

router.post('/', handlerUserLogin);

export default router;
