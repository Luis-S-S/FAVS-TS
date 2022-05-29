import express, { Express } from 'express';
import cors from 'cors';

export default function configExpress(app: Express) {
  app.use(cors());
  app.use(express.json());
}
