import { Query } from "type-graphql";

export class NoteResolver {
    @Query(() => String)
    hello() {
        return "hello from resolvers/note.ts";
    }
}
