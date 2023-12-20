import httpStatus from 'http-status';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from './user.model';

const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = new User({
      email,
      password: password,
      role: 'user',
    });

    await user.save();
    res.status(httpStatus.OK).json({ message: 'User registered successfully' });
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: 'Internal server error' });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ error: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign(
      { email: user.email, role: user.role },
      'secret-key',
      { expiresIn: '1h' },
    );
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Login Successfull!',
      token: token,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const userControllers = {
  createUser,
  login,
};
