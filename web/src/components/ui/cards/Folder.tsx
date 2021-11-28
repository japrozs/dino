import React, { useState, Fragment } from "react";
import {
    BiCaretRight,
    BiCaretDown,
    BiDotsVerticalRounded,
} from "react-icons/bi";
import {
    useGetNoteQuery,
    useDeleteFolderMutation,
} from "../../../generated/graphql";
import NextLink from "next/link";
import { MdOutlineDelete } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { useApolloClient } from "@apollo/client";
import { ColoredCircle } from "../ColoredCircle";

interface FolderCardProps {
    name: string;
    notes: string[];
    id: number;
    color: string;
}

export const FolderCard: React.FC<FolderCardProps> = ({
    name,
    notes,
    id,
    color,
}) => {
    const [showContents, setShowContents] = useState(false);
    const [deleteFolderMutation] = useDeleteFolderMutation();
    const client = useApolloClient();

    const deleteFolder = async () => {
        await deleteFolderMutation({
            variables: {
                id,
            },
        });
        await client.resetStore();
    };

    return (
        <div>
            <div
                onClick={() => setShowContents(!showContents)}
                className="group flex cursor-pointer items-center px-2 py-0.5 hover:bg-gray-200"
            >
                {showContents ? (
                    <BiCaretDown className="mr-1 text-sm text-gray-700" />
                ) : (
                    <BiCaretRight className="mr-1 text-sm text-gray-700" />
                )}
                <ColoredCircle color={color} />
                <p className="ml-1.5 text-sm font-medium text-gray-700 truncate">
                    {name}
                </p>
                <Menu as="div" className={"ml-auto mr-0"}>
                    <div>
                        <Menu.Button className={"focus:outline-none"}>
                            <BiDotsVerticalRounded className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100" />
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
                        <Menu.Items className="absolute right-0 z-20 mt-2 origin-top bg-white divide-y divide-gray-100 rounded-md shadow-lg left-2 w-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="flex items-center py-1">
                                <div
                                    onClick={deleteFolder}
                                    className="flex items-center w-full px-2 py-2 hover:bg-gray-100 hover:text-gray-800"
                                >
                                    <MdOutlineDelete className="w-4 h-4 mr-1 text-gray-700" />
                                    <p className="text-sm font-medium text-gray-700 cursor-pointer ">
                                        Delete
                                    </p>
                                </div>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            {showContents && (
                <div className="">
                    {notes.map((note, i) => (
                        <FolderNoteCard key={i} id={note} />
                    ))}
                </div>
            )}
        </div>
    );
};

interface FolderNoteCardProps {
    id: string;
}

export const FolderNoteCard: React.FC<FolderNoteCardProps> = ({ id }) => {
    const { data } = useGetNoteQuery({
        variables: {
            id: parseInt(id),
        },
    });
    return (
        <NextLink href={`/app/n/${id}`}>
            <a>
                <div className="flex pl-7 cursor-pointer items-center pr-2 py-0.5 hover:bg-gray-200">
                    <p className="text-sm font-medium text-gray-700 truncate">
                        {data?.getNote.title}
                    </p>
                </div>
            </a>
        </NextLink>
    );
};
