"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const snake_1 = require("../controllers/snake");
exports.main_router = express_1.Router();
exports.main_router.get('/', snake_1.render_main_page);
