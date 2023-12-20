import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
interface AuthenticatedRequest extends Request {
  user?: any;
}
export const isAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - No token provided' });
  }
  try {
    const decoded: any = jwt.verify(token, 'secret-key');
    if (decoded.role !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Forbidden - Admin access required' });
    }
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
};
