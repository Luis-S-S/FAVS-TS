import { ObjectId } from 'mongoose';

export interface User {
    _id: ObjectId;
    email: string;
    password: string;
    lists: ObjectId[];
}

export interface CreateUser {
    email: string;
    password: string;
}

export interface UpdateUser {
    email?: string;
    password?: string;
    lists?: ObjectId[];
}
