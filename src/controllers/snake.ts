import { Response, Request, NextFunction } from "express";
import pug from 'pug'
import path from 'path'

export function render_main_page(req :Request, res : Response, next : NextFunction ) {
    const compiled_file = pug.compileFile(path.join(__dirname, '..', 'views', 'index.pug'));
    const page_string = compiled_file();
    res.send(page_string);
    res.end();
}