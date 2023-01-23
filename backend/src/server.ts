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

const app = express();


mongoose.set('strictQuery', true);
console.log("Connected to MongoDB")
mongoose.connect(env.MONGO_URL).then(
).catch((err: any) => console.error(err));



app.use(cors({
    // origin: 'http://localhost:3000',
    origin: 'https://fullstack-ts-note.netlify.app',
    credentials: true //to accept cookies from clients
}))


app.use(morgan("dev"));
app.use(express.json());
const PORT = env.PORT || 5000

app.use(session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hour
    store: MongoStore.create({
        mongoUrl: env.MONGO_URL
    }),
}));


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