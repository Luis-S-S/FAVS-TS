import usersModel from './users.model';
import { CreateUser, UpdateUser } from './users.interface';

export async function getAllUsers() {
  return await usersModel.find({});
}

export async function getUserById(id: string) {
  return await usersModel.findById(id);
}

export async function getUserByEmail(email: string) {
  return await usersModel.findOne({ email });
}

export async function createUser(user: CreateUser) {
  return await usersModel.create(user);
}

export async function updateUser(id: string, user: UpdateUser) {
  return await usersModel.findByIdAndUpdate(id, user, { new: true });
}

export async function deleteUser(id: string) {
  return await usersModel.findByIdAndDelete(id);
}
