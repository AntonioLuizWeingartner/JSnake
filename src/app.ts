import express from 'express'
import { main_router } from './routes/routes';
import path from 'path'

const my_app = express();
const PORT = process.env.PORT || 3000;
my_app.use(express.static(path.join(__dirname, "public")));
my_app.use(main_router);


my_app.listen(PORT);