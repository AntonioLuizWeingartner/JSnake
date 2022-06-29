"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const path_1 = __importDefault(require("path"));
const my_app = express_1.default();
const PORT = process.env.PORT || 3000;
my_app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
my_app.use(routes_1.main_router);
my_app.listen(PORT);
