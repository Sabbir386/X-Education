import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const adminSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});
adminSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const admin = this;
  if (!admin.isModified('password')) {
    return next();
  }
  admin.password = await bcrypt.hash(admin.password, Number(10));
  next();
});

export const Admin = mongoose.model('Admin', adminSchema);
