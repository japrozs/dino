import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SlateEditor } from "../editor/editor";
import { insertImage } from "../editor/core/renderElement";

interface AddImageModalProps {
    open: boolean;
    setOpen: any;
    editor: SlateEditor;
}

export const AddImageModal: React.FC<AddImageModalProps> = ({
    open,
    setOpen,
    editor,
}) => {
    const [imageUrl, setImageUrl] = useState("");

    const handleInsertImage = () => {
        insertImage(editor, imageUrl);
        setOpen(false);
        setImageUrl('')
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
                        <div className="inline-block p-3 overflow-hidden text-left align-bottom transition-all transform bg-white rounded shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <p className={"text-sm text-gray-500"}>Image URL</p>
                            <input
                                value={imageUrl}
                                placeholder="Enter Image URL"
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full p-1 px-2 mt-2 text-sm bg-gray-100 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:border-blue-100"
                            />
                            <div className="flex items-center justify-end mt-5">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-sm hover:bg-gray-100 focus:outline-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleInsertImage}
                                    className="px-3 py-1.5 ml-3 text-sm border border-gray-300 rounded-sm hover:bg-gray-100 focus:outline-none"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};
