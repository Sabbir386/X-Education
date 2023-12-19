import { Admin } from './admin.model';
import { Request, Response } from 'express';

const createAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Hash the password before saving it to the database

    const admin = new Admin({
      email,
      password: password,
      role: 'admin',
    });

    await admin.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const AdminControllers = {
  createAdmin,
};
