// @vsc repo:vsc-project-113-backend file:src/routes/index.ts task:b10-src-routes-index-ts module:backend session:113
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

export default router;
