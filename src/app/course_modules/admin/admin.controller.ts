import httpStatus from 'http-status';
import { Admin } from './admin.model';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const admin = new Admin({
      email,
      password: password,
      role: 'admin',
    });

    await admin.save();
    res
      .status(httpStatus.OK)
      .json({ message: 'Admin registered successfully' });
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal server error' });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await Admin.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign(
      { email: user.email, role: user.role },
      'secret-key',
      { expiresIn: '1h' },
    );

    res.json({ token });
    res.status(200).json({
      success: true,
      message: 'Login Successfull!',
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const AdminControllers = {
  createAdmin,
  login,
};
