import { Request, Response } from 'express';
import { User } from './users.interface';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from './users.service';

export async function handlerGetAllUsers(req: Request, res: Response) {
  try {
    const users: User[] = await getAllUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerGetUserById(req: Request, res: Response) {
  try {
    const user: User = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json(error.message);
  }
}

export async function handlerCreateUser(req: Request, res: Response) {
  try {
    const newUser: User = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerUpdateUser(req: Request, res: Response) {
  try {
    const updatedUser: User = await updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerDeleteUser(req: Request, res: Response) {
  try {
    const deletedUser: User = await deleteUser(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}
