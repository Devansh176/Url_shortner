"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); //Can fetch values from .env file
const port = process.env.PORT || 5001;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`Successfully server started on port : ${port}`);
});
