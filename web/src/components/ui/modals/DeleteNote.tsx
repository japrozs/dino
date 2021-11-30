import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDeleteNoteMutation } from "../../../generated/graphql";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

interface DeleteNoteModalProps {
    open: boolean;
    setOpen: any;
    id: number;
}

export const DeleteNoteModal: React.FC<DeleteNoteModalProps> = ({
    open,
    setOpen,
    id,
}) => {
    const [deleteNoteMutation] = useDeleteNoteMutation();
    const router = useRouter();
    const client = useApolloClient();

    const deleteNote = async () => {
        await deleteNoteMutation({
            variables: {
                id,
            },
        });
        router.push(`/app`);
        await client.resetStore();
    };

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
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
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
                        <div className="inline-block p-3 overflow-hidden text-left align-bottom transition-all transform bg-white rounded shadow-xl dark:bg-gray-700 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <p className="mb-6 font-medium text-gray-800 text-md dark:text-gray-200">
                                Are you sure you want to delete this note ?
                            </p>
                            <div className="flex items-center justify-end mt-2">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="transition px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-500 dark:text-gray-300 rounded-sm hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={deleteNote}
                                    className="transition px-3 py-1.5 ml-3 text-sm text-red-600 border border-red-300 rounded-sm hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-btn-dark"
                                >
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};
