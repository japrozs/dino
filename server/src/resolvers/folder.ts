import { Folder } from "../entities/Folder";
import { isAuth } from "../middleware/isAuth";
import { Context } from "../types";
import { Arg, Ctx, Int, Mutation, UseMiddleware } from "type-graphql";
import { chooseRandomFolderColor } from "../utils/chooseRandomFolderColor";

export class FolderResolver {
    @UseMiddleware(isAuth)
    @Mutation(() => Boolean)
    async createFolder(@Arg("name") name: string, @Ctx() { req }: Context) {
        if (name.trim().length == 0) {
            return false;
        }
        await Folder.create({
            name,
            noteIds: [],
            creatorId: req.session.userId,
            color: chooseRandomFolderColor(),
        }).save();
        return true;
    }

    @UseMiddleware(isAuth)
    @Mutation(() => Boolean)
    async addNoteToFolder(
        @Arg("folderId", () => Int) folderId: number,
        @Arg("noteId", () => Int) noteId: number
    ) {
        const fold = await Folder.findOne(folderId);
        if (fold?.noteIds.includes(noteId.toString())) {
            return true;
        }
        await Folder.update(
            { id: folderId },
            {
                noteIds: [noteId.toString(), ...(fold?.noteIds as string[])],
            }
        );
        return true;
    }

    @UseMiddleware(isAuth)
    @Mutation(() => Boolean)
    async deleteNoteFromFolder(
        @Arg("folderId", () => Int) folderId: number,
        @Arg("noteId", () => Int) noteId: number,
        @Ctx() { req }: Context
    ) {
        const folder = await Folder.findOne(folderId, {
            relations: ["creator"],
        });
        if (folder?.creator.id != req.session.userId) {
            return false;
        }

        let arr = folder?.noteIds;
        let i = arr?.indexOf(noteId.toString());
        console.log(arr);
        if (i == -1) {
            return false;
        }
        arr?.splice(i as number, 1);
        console.log(arr);

        await Folder.update(folderId, {
            noteIds: arr,
        });

        return true;
    }

    @UseMiddleware(isAuth)
    @Mutation(() => Boolean)
    async deleteFolder(
        @Arg("id", () => Int) id: number,
        @Ctx() { req }: Context
    ) {
        const fold = await Folder.findOne(id, { relations: ["creator"] });
        if (fold?.creator.id != req.session.userId) {
            return false;
        }

        await Folder.delete({ id });
        return true;
    }
}
