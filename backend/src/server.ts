import "dotenv/config";
import env from "./util/validateEnv";
import mongoose from "mongoose";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";
import userRoutes from "./routes/users";

import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { requiresAuth } from "./middleware/auth";
import bodyParser from "body-parser";
const app = express();




app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: "*",}))

const PORT = env.PORT || 5000
app.use(session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
        mongoUrl: env.MONGO_URL
    }),
}));



mongoose.set('strictQuery', true);
console.log("Connected to MongoDB")
mongoose.connect(env.MONGO_URL).then(
).catch(err => console.error(err));





app.use("/api/users", userRoutes);
app.use("/api/notes", requiresAuth, notesRoutes);

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;

    //check if error is from HTTPError model
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
});






app.listen(PORT, ()=>{
    console.log("App listening on port", PORT)
})