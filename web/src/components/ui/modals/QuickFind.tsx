import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiSearch } from "react-icons/bi";
import { useMeQuery } from "../../../generated/graphql";
import { findNoteFolder } from "../../../utils/findNoteFolder";
import { searchNotes } from "../../../utils/searchNotes";
import NextLink from "next/link";

interface QuickFindProps {
    open: boolean;
    setOpen: any;
}

export const QuickFindModal: React.FC<QuickFindProps> = ({ open, setOpen }) => {
    const { data, loading } = useMeQuery();
    const [query, setQuery] = useState("");
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-opacity-75 bg-black-500" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block pb-2 overflow-hidden text-left align-bottom transition-all transform bg-white rounded shadow-xl dark:bg-black-700 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="flex items-center p-2 px-3 mb-1 bg-gray-100 dark:bg-black-800 dark:text-gray-200">
                                <BiSearch className="w-5 h-5 text-gray-500" />
                                <input
                                    value={query}
                                    className="w-full py-1 ml-2 bg-transparent focus:outline-none"
                                    placeholder="Search for notes ..."
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                            <div className="px-3 pt-1">
                                <p className="mb-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                    NOTES
                                </p>
                            </div>
                            {query.trim().length == 0 && (
                                <>
                                    {data?.me?.notes.slice(0, 7).map((note) => (
                                        <NextLink
                                            href={`/app/n/${note.id}`}
                                            key={note.id}
                                        >
                                            <a>
                                                <div className="flex items-center p-2 px-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-black-600">
                                                    <h1 className="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        {note.title}
                                                    </h1>
                                                    {findNoteFolder(
                                                        note.id,
                                                        data.me?.folders
                                                    ) != "No Folder" && (
                                                        <p className="ml-5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                                            {findNoteFolder(
                                                                note.id,
                                                                data.me?.folders
                                                            )}
                                                        </p>
                                                    )}
                                                </div>
                                            </a>
                                        </NextLink>
                                    ))}
                                </>
                            )}
                            {query.trim().length != 0 && (
                                <>
                                    {searchNotes(
                                        query,
                                        data?.me?.notes as any
                                    ).map((note) => (
                                        <NextLink
                                            href={`/app/n/${note.id}`}
                                            key={note.id}
                                        >
                                            <a>
                                                <div className="flex items-center p-2 px-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-black-600">
                                                    <h1 className="text-sm font-medium text-gray-800 dark:text-gray-300">
                                                        {note.title}
                                                    </h1>
                                                    {findNoteFolder(
                                                        note.id,
                                                        data?.me?.folders
                                                    ) != "No Folder" && (
                                                        <p className="ml-5 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                                            {findNoteFolder(
                                                                note.id,
                                                                data?.me
                                                                    ?.folders
                                                            )}
                                                        </p>
                                                    )}
                                                </div>
                                            </a>
                                        </NextLink>
                                    ))}
                                </>
                            )}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};
