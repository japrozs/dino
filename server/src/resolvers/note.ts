import { isAuth } from "../middleware/isAuth";
import { Context } from "../types";
import { Arg, Ctx, Int, Mutation, Query, UseMiddleware } from "type-graphql";
import { Note } from "../entities/Note";

export class NoteResolver {
    @UseMiddleware(isAuth)
    @Mutation(() => Boolean)
    async createNote(@Arg("title") title: string, @Ctx() { req }: Context) {
        if (title.trim().length == 0) {
            return false;
        }
        await Note.create({
            title,
            creatorId: req.session.userId,
            body: "",
        }).save();
        return true;
    }

    @UseMiddleware(isAuth)
    @Query(() => Note)
    async getNote(@Arg("id", () => Int) id: number) {
        return Note.findOne({ where: { id } });
    }

    @UseMiddleware(isAuth)
    @Mutation(() => Boolean)
    async updateNote(
        @Arg("id", () => Int!) id: number,
        @Arg("body") body: string,
        @Ctx() { req }: Context
    ) {
        const note = await Note.findOne(id, { relations: ["creator"] });
        if (note?.creator.id != req.session.userId) {
            return false;
        }

        await Note.update(id, {
            body,
        });
        return true;
    }

    @UseMiddleware(isAuth)
    @Mutation(() => Boolean)
    async updateNoteTitle(
        @Arg("id", () => Int!) id: number,
        @Arg("title") title: string,
        @Ctx() { req }: Context
    ) {
        const note = await Note.findOne(id, { relations: ["creator"] });
        if (note?.creator.id != req.session.userId) {
            return false;
        }

        await Note.update(id, {
            title,
        });
        return true;
    }
}
