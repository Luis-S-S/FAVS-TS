import { CreateList, UpdateList } from './lists.interface';
import listModel from './lists.model';

export async function getAllLists() {
  return await listModel.find({});
}

export async function getListById(id: string) {
  return await listModel.findById(id);
}

export async function getListByUserId(userId: string) {
  return await listModel.find({ refUser: userId });
}

export async function createList(list: CreateList) {
  return await listModel.create(list);
}

export async function updateList(id: string, list: UpdateList) {
  return await listModel.findByIdAndUpdate(id, list, { new: true });
}

export async function deleteList(id: string) {
  return await listModel.findByIdAndDelete(id);
}
