import Express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import configExpress from './config/express';
import connectDB from './config/database';
import routes from './routes';

const app = Express();

dotenv.config();
connectDB();
configExpress(app);
routes(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Root FAVS API');
});

export default app;
