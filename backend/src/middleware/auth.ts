import { Request, Response, NextFunction} from "express";
import createHttpError from "http-errors";

export const requiresAuth= (req:Request, res:Response, next:NextFunction) => {
    if (req.session.userId) {
        next();
    } else {
        next(createHttpError(401, "User not authenticated"));
    }
};