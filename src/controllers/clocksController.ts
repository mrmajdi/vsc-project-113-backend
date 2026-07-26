// @vsc repo:vsc-project-113-backend file:src/controllers/clocksController.ts task:b11-src-controllers-clockscontroller-ts module:backend session:113
import { Request, Response, NextFunction } from 'express';
import clockService from '../services/clockService';

/**
 * Get all world clocks with current local times.
 * @param req - Express request object
 * @param res - Express response object
 * @param next - Express next function for error handling
 */
export async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await clockService.getAllTimes();
    res.json(data);
  } catch (error) {
    next(error);
  }
}
