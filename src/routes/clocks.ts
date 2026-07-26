// @vsc repo:vsc-project-113-backend file:src/routes/clocks.ts task:b10-src-routes-clocks-ts module:backend session:113
import { Router } from 'express';
import { getAll } from '../controllers/clocksController';

const router = Router();

router.get('/', getAll);

export default router;
