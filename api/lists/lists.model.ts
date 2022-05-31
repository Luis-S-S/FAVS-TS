/* eslint-disable max-len */
import mongoose from 'mongoose';

const FavsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
}, { versionKey: false, _id: false });

const ListsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  refUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  favs: {
    type: [FavsSchema],
    required: true,
  },
}, { versionKey: false });

export default mongoose.model('List', ListsSchema);
