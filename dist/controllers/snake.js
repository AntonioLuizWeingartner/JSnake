"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pug_1 = __importDefault(require("pug"));
const path_1 = __importDefault(require("path"));
function render_main_page(req, res, next) {
    const compiled_file = pug_1.default.compileFile(path_1.default.join(__dirname, '..', 'views', 'index.pug'));
    const page_string = compiled_file();
    res.send(page_string);
    res.end();
}
exports.render_main_page = render_main_page;
