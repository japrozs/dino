import { Context } from "../types";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<Context> = ({ context }, next) => {
    if (!context.req.session.userId) {
        throw new Error("not authenticated");
    }

    return next();
};


export const expressIsAuth = (req: any, _res: any, next: any) => {
    if (!req.session.userId) {
        throw new Error("not authenticated");
    }
    return next();
};