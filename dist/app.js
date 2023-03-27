"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// although this synax is valid in
// Node.JS, it is experimetnal -
// after compliation to JS,
// it will change to the default
// "require" syntax
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use("/todos", todos_1.default);
app.use(express_1.default.json());
// error handling middleware - has 4 parameters
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
