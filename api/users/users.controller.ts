import { Request, Response } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from './users.service';

export async function handlerGetAllUsers(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerGetUserById(req: Request, res: Response) {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json(error.message);
  }
}

export async function handlerCreateUser(req: Request, res: Response) {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerUpdateUser(req: Request, res: Response) {
  try {
    const updatedUser = await updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerDeleteUser(req: Request, res: Response) {
  try {
    const deletedUser = await deleteUser(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}
