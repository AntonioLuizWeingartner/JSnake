import { Router } from 'express'
import { render_main_page } from '../controllers/snake';

export const main_router = Router();

main_router.get('/', render_main_page); 


