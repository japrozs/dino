import { useMeQuery } from "../../generated/graphql";
import { Spinner } from "./Spinner";
import { BiDotsVerticalRounded, BiPlus } from "react-icons/bi";
import { NoteCard } from "../ui/cards/Note";
import { FolderCard } from "../ui/cards/Folder";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
    const { data, loading } = useMeQuery();
    console.log(data);
    return (
        <>
            {data && !loading ? (
                <div className="max-w-sm bg-gray-100 w-60 sidebar">
                    <div className="flex items-center p-2 text-white cursor-pointer hover:bg-gray-200">
                        <img
                            src={data.me?.imgUrl}
                            alt={data.me?.name}
                            className="rounded-sm w-7 h-7"
                        />
                        <p className="ml-3 text-sm font-medium text-gray-800">
                            {data.me?.name}
                        </p>
                        <BiDotsVerticalRounded className="ml-auto mr-1 text-lg text-gray-800" />
                    </div>
                    <nav className="pt-3">
                        <div className="flex items-center px-2 mb-1 group">
                            <h1
                                className="font-semibold text-gray-500"
                                style={{ fontSize: "0.75rem" }}
                            >
                                FOLDERS
                            </h1>
                            <BiPlus className="w-5 h-5 ml-auto mr-0 text-gray-600 transition border border-gray-400 rounded-sm opacity-0 cursor-pointer group-hover:opacity-100 hover:border-gray-500" />
                        </div>
                        {data.me?.folders.map((folder) => (
                            <FolderCard
                                key={folder.id}
                                name={folder.name}
                                notes={folder.noteIds}
                            />
                        ))}
                        <div className="flex items-center px-2 mt-3 mb-1 group">
                            <h1
                                className="font-semibold text-gray-500"
                                style={{ fontSize: "0.75rem" }}
                            >
                                ALL NOTES
                            </h1>
                            <BiPlus className="w-5 h-5 ml-auto mr-0 text-gray-600 transition border border-gray-400 rounded-sm opacity-0 cursor-pointer group-hover:opacity-100 hover:border-gray-500" />
                        </div>
                        {data.me?.notes.map((note) => (
                            <NoteCard
                                key={note.id}
                                name={note.title}
                                status={note.status}
                                id={note.id}
                            />
                        ))}
                    </nav>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Sidebar;
