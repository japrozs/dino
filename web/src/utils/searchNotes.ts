import { RegularNoteFragment } from "../generated/graphql";

export const searchNotes = (query: string, notes: RegularNoteFragment[]) => {
    let arr: any[] = [];
    notes.map((note) => {
        if (
            note.title.trim().toLowerCase().includes(query.trim().toLowerCase())
        ) {
            arr.push(note);
        }
    });

    return arr;
};
