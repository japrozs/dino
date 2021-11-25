export const findFolderId = (name: string, folders: any[]) => {
    let id = -1;
    folders.map((folder) => {
        if (folder.name == name) {
            console.log("here folder");
            id = folder.id;
        }
    });
    return id;
};
