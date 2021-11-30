import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useCreateFolderMutation } from "../../../generated/graphql";
import { useApolloClient } from "@apollo/client";
import { Spinner } from "../../shared/Spinner";

interface FolderModalProps {
    open: boolean;
    setOpen: any;
}

export const FolderModal: React.FC<FolderModalProps> = ({ open, setOpen }) => {
    const [folderName, setFolderName] = useState("");
    const [createFolderMutation, { loading }] = useCreateFolderMutation();
    const client = useApolloClient();

    const createFolder = async () => {
        if (folderName.trim().length == 0) {
            return;
        }
        await createFolderMutation({
            variables: {
                name: folderName,
            },
        });
        await client.resetStore();
        setFolderName('')
        setOpen(false);
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
                        <div className="inline-block p-2 overflow-hidden text-left align-bottom transition-all transform bg-white rounded shadow-xl dark:bg-gray-700 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="flex items-center p-1">
                                <input
                                    className="w-full font-normal text-gray-200 bg-transparent focus:outline-none"
                                    placeholder="Name of the folder"
                                    onChange={(e) =>
                                        setFolderName(e.target.value)
                                    }
                                    value={folderName}
                                />
                                {loading ? (
                                    <Spinner />
                                ) : (
                                    <BiRightArrowAlt
                                        onClick={createFolder}
                                        className={`w-6 h-6 ${
                                            folderName.trim().length == 0
                                                ? "text-gray-500 dark:text-gray-400"
                                                : "text-gray-800 dark:text-gray-200"
                                        } transition ${
                                            folderName.trim().length != 0 &&
                                            "cursor-pointer"
                                        }`}
                                    />
                                )}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};
