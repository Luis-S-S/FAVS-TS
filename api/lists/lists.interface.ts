import { ObjectId } from 'mongoose';

export interface Favs {
    title: string;
    description: string;
    link: string;
}

export interface List {
    name: string;
    refUser: ObjectId;
    favs: Favs[];
}

export interface CreateList {
    name: string;
    favs: Favs[];
}

export interface UpdateList {
    name?: string;
    favs?: Favs[];
}
