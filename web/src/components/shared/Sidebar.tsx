/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import {
    useCreateNoteMutation,
    useLogoutMutation,
    useMeQuery,
} from "../../generated/graphql";
import { BiDotsVerticalRounded, BiPlus, BiCog, BiSearch } from "react-icons/bi";
import { NoteCard } from "../ui/cards/Note";
import { FolderCard } from "../ui/cards/Folder";
import { FolderModal } from "../ui/modals/Folder";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { Menu, Transition } from "@headlessui/react";
import { SettingsModal } from "../ui/modals/Settings";
import { QuickFindModal } from "../ui/modals/QuickFind";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
    const { data, loading } = useMeQuery();
    const [open, setOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [findOpen, setFindOpen] = useState(false);
    const [createNote] = useCreateNoteMutation();
    const router = useRouter();
    const client = useApolloClient();
    const [logout] = useLogoutMutation();

    const newNote = async () => {
        const note = await createNote({
            variables: {
                title: "😃 New Note",
            },
        });
        const id = note.data?.createNote.id;
        router.push(`/app/n/${id}`);
        await client.resetStore();
    };

    const logUserOut = async () => {
        await logout();
        router.push("/");
        await client.resetStore();
    };

    return (
        <>
            {data && !loading ? (
                <div className="max-w-sm bg-gray-100 w-60 sidebar">
                    <Menu as="div" className="w-60">
                        <div>
                            <Menu.Button className="flex items-center p-2 text-white cursor-pointer w-60 hover:bg-gray-200">
                                <img
                                    src={data.me?.imgUrl}
                                    alt={data.me?.name}
                                    className="w-6 h-6 rounded-sm"
                                />
                                <p className="ml-3 text-sm font-medium text-gray-800">
                                    {data.me?.name}
                                </p>
                                <BiDotsVerticalRounded className="ml-auto mr-1 text-lg text-gray-800" />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 origin-top bg-white divide-y divide-gray-100 rounded-md shadow-lg left-2 w-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1.5">
                                    <div className="flex items-center">
                                        <code className="px-2 text-xs">
                                            {data.me?.email}
                                        </code>
                                        <BiDotsVerticalRounded className="ml-auto mr-2 text-gray-700 rounded-sm cursor-pointer" />
                                    </div>
                                    <div className="flex items-center px-2 py-1 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
                                        <img
                                            src={data.me?.imgUrl}
                                            alt={data.me?.name}
                                            className="rounded-sm w-7 h-7"
                                        />
                                        <div>
                                            <p className="ml-3 text-base font-medium text-gray-800">
                                                {data.me?.name}
                                            </p>

                                            <p className="ml-3 text-xs text-gray-500">
                                                Standard Plan
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        onClick={logUserOut}
                                        className="px-2 py-1 pt-1.5 text-sm cursor-pointer font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                    >
                                        Log out
                                    </p>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <div
                        onClick={() => setFindOpen(true)}
                        className="flex items-center px-2 py-1.5 cursor-pointer hover:bg-gray-200"
                    >
                        <BiSearch className="w-4 h-4 text-gray-500" />
                        <p className="ml-2 text-sm font-medium text-gray-700">
                            Quick Find
                        </p>
                    </div>
                    <div
                        onClick={() => setSettingsOpen(true)}
                        className="flex items-center px-2 py-1.5 cursor-pointer hover:bg-gray-200"
                    >
                        <BiCog className="w-4 h-4 text-gray-500" />
                        <p className="ml-2 text-sm font-medium text-gray-700">
                            Settings
                        </p>
                    </div>
                    <nav className="pt-1">
                        <div className="flex items-center px-2 mb-1 group">
                            <h1
                                className="font-semibold text-gray-500"
                                style={{ fontSize: "0.75rem" }}
                            >
                                FOLDERS
                            </h1>
                            <BiPlus
                                onClick={() => setOpen(true)}
                                className="w-5 h-5 ml-auto mr-0 text-gray-600 transition border border-gray-400 rounded-sm opacity-0 cursor-pointer group-hover:opacity-100 hover:border-gray-500"
                            />
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
                            <BiPlus
                                onClick={newNote}
                                className="w-5 h-5 ml-auto mr-0 text-gray-600 transition border border-gray-400 rounded-sm opacity-0 cursor-pointer group-hover:opacity-100 hover:border-gray-500"
                            />
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
            <FolderModal open={open} setOpen={setOpen} />
            <SettingsModal open={settingsOpen} setOpen={setSettingsOpen} />
            <QuickFindModal open={findOpen} setOpen={setFindOpen} />
        </>
    );
};

export default Sidebar;
