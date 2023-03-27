// although this synax is valid in
// Node.JS, it is experimetnal -
// after compliation to JS,
// it will change to the default
// "require" syntax
import express, { Request, Response, NextFunction } from "express";

import todoRoutes from "./routes/todos";

const app = express();

app.use("/todos", todoRoutes);

app.use(express.json());

// error handling middleware - has 4 parameters
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
