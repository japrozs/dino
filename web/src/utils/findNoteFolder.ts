export const findNoteFolder = (id: number, folders: any) => {
    let name = "No Folder";
    folders.map((folder: any) => {
        console.log("folder.noteIds ::", folder.noteIds);
        console.log("id ::", id);
        console.log(folder.noteIds.includes(id.toString()));
        if (folder.noteIds.includes(id.toString())) {
            console.log("here..");
            name = folder.name;
        }
    });

    return name;
};
