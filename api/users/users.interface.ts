import mongoose from 'mongoose';

export interface User {
    _id: mongoose.Types.ObjectId;
    email: string;
    password: string;
    lists: mongoose.Types.ObjectId[];
}

export interface CreateUser {
    email: string;
    password: string;
}

export interface UpdateUser {
    email?: string;
    password?: string;
    lists?: mongoose.Types.ObjectId[];
}
