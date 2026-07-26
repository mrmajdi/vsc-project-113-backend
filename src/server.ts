// @vsc repo:vsc-project-113-backend file:src/server.ts task:b9-src-server-ts module:backend session:113
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import indexRouter from './routes/index';
import clocksRouter from './routes/clocks';

dotenv.config();

const app: Express = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', indexRouter);
app.use('/api/clocks', clocksRouter);

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'مسیر یافت نشد' });
});

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  const status = 500;
  const responseBody = {
    error: 'خطای سرور داخلی',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  };
  res.status(status).json(responseBody);
});

const port = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`سرور روی پورت ${port} در حال اجرا است`);
});

export default app;
