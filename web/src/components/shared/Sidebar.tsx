import { useMeQuery } from "../../generated/graphql";
import { Spinner } from "./Spinner";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { NoteCard } from "../ui/cards/Note";
import { FolderCard } from "../ui/cards/Folder";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
    const { data, loading } = useMeQuery();
    return (
        <>
            {data && !loading ? (
                <div className="max-w-sm bg-gray-100 w-72 sidebar">
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
                        <h1
                            className="px-2 mb-1 text-sm font-semibold text-gray-500"
                            style={{ fontSize: "0.75rem" }}
                        >
                            FOLDERS
                        </h1>
                        <FolderCard name="School work" />
                        <FolderCard name="Computer Science" />
                        <FolderCard name="SAT" />
                        <FolderCard name="Favorites" />
                        <h1
                            className="px-2 mt-3 mb-1 font-semibold text-gray-500"
                            style={{ fontSize: "0.75rem" }}
                        >
                            ALL NOTES
                        </h1>
                        <NoteCard name={"Food for thought"} status={"active"} />
                        <NoteCard name={"Colleges"} status={"inactive"} />
                        <NoteCard
                            name={"Ideas for products"}
                            status={"active"}
                        />
                        <NoteCard name={"Daily thoughts"} status={"deleted"} />
                        <NoteCard name={"EBRW tips"} status={"inactive"} />
                    </nav>
                </div>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default Sidebar;
