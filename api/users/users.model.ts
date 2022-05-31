/* eslint-disable func-names, no-return-await, max-len */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { User } from './users.interface';

const UsersSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  lists: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'lists',
  },
}, { versionKey: false });

UsersSchema.pre('save', async function (next) {
  const user: User = this;
  try {
    const salt: string = await bcrypt.genSalt(10);
    const hash: string = await bcrypt.hash(user.password, salt);

    user.password = hash;
    next();
  } catch (error: any) {
    next(error);
  }
});

UsersSchema.pre('findOneAndUpdate', async function (next) {
  interface Query extends mongoose.Query<any, any, {}, any> {
    _update?: any;
  }
  const query: Query = this;
  try {
    if (query._update.password) {
      const salt: string = await bcrypt.genSalt(10);
      const hash: string = await bcrypt.hash(query._update.password, salt);
      query._update.password = hash;
    }
    next();
  } catch (error: any) {
    next(error);
  }
});

UsersSchema.virtual('profile').get(function () {
  const { _id, email } = this;
  return { _id, email };
});

UsersSchema.methods.confirmPassword = async function (incomingPassword: string) {
  const user = this;
  return await bcrypt.compare(incomingPassword, user.password);
};

export default mongoose.model('User', UsersSchema);
