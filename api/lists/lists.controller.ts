import { Response } from 'express';
import { CustomRequest } from '../../custom.d';
import { List } from './lists.interface';
import {
  getAllLists,
  getListById,
  getListByUserId,
  createList,
  updateList,
  deleteList,
} from './lists.service';

export async function handlerGetAllLists(req: CustomRequest, res: Response) {
  try {
    const lists: List[] = await getAllLists();
    res.status(200).json(lists);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerGetListById(req: CustomRequest, res: Response) {
  try {
    if (!req.user) { throw Error('Unauthorized'); }
    const { _id } = req.user;
    const list: List = await getListById(req.params.id);
    if (list.refUser.toString() === _id.toString()) {
      res.status(200).json(list);
    } else {
      res.status(403).json('Forbidden');
    }
  } catch (error: any) {
    res.status(404).json(error.message);
  }
}

export async function handlerGetListByUserId(req: CustomRequest, res: Response) {
  try {
    if (!req.user) { throw Error('Unauthorized'); }
    const { _id } = req.user;
    const lists: List[] = await getListByUserId(_id);
    res.status(200).json(lists);
  } catch (error: any) {
    res.status(404).json(error.message);
  }
}

export async function handlerCreateList(req: CustomRequest, res: Response) {
  try {
    if (!req.user) { throw Error('Unauthorized'); }
    const { _id } = req.user;
    const newList: List = await createList({ refUser: _id, ...req.body });
    res.status(201).json(newList);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerUpdateList(req: CustomRequest, res: Response) {
  try {
    if (!req.user) { throw Error('Unauthorized'); }
    const { _id } = req.user;
    const list: List = await getListById(req.params.id);
    if (list.refUser.toString() === _id.toString()) {
      const updatedList: List = await updateList(req.params.id, req.body);
      res.status(200).json(updatedList);
    } else {
      res.status(403).json('Forbidden');
    }
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerAddFavsToList(req: CustomRequest, res: Response) {
  try {
    if (!req.user) { throw Error('Unauthorized'); }
    const { _id } = req.user;
    const list: List = await getListById(req.params.id);
    if (list.refUser.toString() === _id.toString()) {
      const newFavsArray = [...list.favs, ...req.body];
      const updatedList: List = await updateList(req.params.id, { favs: newFavsArray });
      res.status(200).json(updatedList);
    } else {
      res.status(403).json('Forbidden');
    }
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}

export async function handlerDeleteList(req: CustomRequest, res: Response) {
  try {
    if (!req.user) { throw Error('Unauthorized'); }
    const { _id } = req.user;
    const list: List = await getListById(req.params.id);
    if (list.refUser.toString() === _id.toString()) {
      const deletedList: List = await deleteList(req.params.id);
      res.status(200).json(deletedList);
    } else {
      res.status(403).json('Forbidden');
    }
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}
