import { Folder } from "../entities/Folder";
import { isAuth } from "../middleware/isAuth";
import { Context } from "../types";
import { Arg, Ctx, Int, Mutation, UseMiddleware } from "type-graphql";

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
        await Folder.update(
            { id: folderId },
            {
                noteIds: [noteId.toString(), ...(fold?.noteIds as string[])],
            }
        );
        return true;
    }
}
