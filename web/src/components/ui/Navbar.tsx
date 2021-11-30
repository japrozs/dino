import React, { Fragment, useCallback, useEffect, useState } from "react";
import {
    BaseEditor,
    Editor as StaticEditor,
    Range,
    Transforms,
    Element as SlateElement,
    Descendant,
} from "slate";
import { ReactEditor, useSlateStatic } from "slate-react";
import { Icon } from "./editor/core/navbar/Icon";
import { ParaStyleDropDown } from "./editor/core/navbar/ParaStyleDropdown";
import { MdOutlineDelete } from "react-icons/md";
import { BiImageAlt, BiLink } from "react-icons/bi";
import { DeleteNoteModal } from "./modals/DeleteNote";
import { useRouter } from "next/router";
import {
    useAddNoteToFolderMutation,
    useDeleteNoteFromFolderMutation,
    useMeQuery,
} from "../../generated/graphql";
import { findNoteFolder } from "../../utils/findNoteFolder";
import { Listbox, Transition } from "@headlessui/react";
import { findFolderId } from "../../utils/FindFolderId";
import { useApolloClient } from "@apollo/client";
import { insertImage } from "./editor/core/renderElement";
import { AddImageModal } from "./modals/AddImage";

interface NavbarProps {
    saving: boolean;
    id: number;
}
type SlateEditor = BaseEditor & ReactEditor;

function getActiveStyles(editor: SlateEditor) {
    return new Set(Object.keys(StaticEditor.marks(editor) ?? {}));
}

export function isLinkNodeAtSelection(editor: SlateEditor, selection: any) {
    if (selection == null) {
        return false;
    }

    return (
        StaticEditor.above(editor, {
            at: selection,
            match: (n: any) => n.type === "link",
        }) != null
    );
}

export function toggleStyle(editor: SlateEditor, style: any) {
    const activeStyles = getActiveStyles(editor);
    if (activeStyles.has(style)) {
        StaticEditor.removeMark(editor, style);
    } else {
        StaticEditor.addMark(editor, style, true);
    }
}

const CHARACTER_STYLES = [
    "bold",
    "italic",
    "underline",
    "code",
    "highlighted",
    "link",
];

function getTextBlockStyle(editor: SlateEditor) {
    const selection = editor.selection;
    if (selection == null) {
        return null;
    }
    // gives the forward-direction points in case the selection was
    // was backwards.
    const [start, end] = Range.edges(selection);

    //path[0] gives us the index of the top-level block.
    let startTopLevelBlockIndex = start.path[0];
    const endTopLevelBlockIndex = end.path[0];

    let blockType = null;
    while (startTopLevelBlockIndex <= endTopLevelBlockIndex) {
        const [node, _] = StaticEditor.node(editor, [startTopLevelBlockIndex]);
        if (blockType == null) {
            blockType = (node as any).type;
        } else if (blockType !== (node as any).type) {
            return "multiple";
        }
        startTopLevelBlockIndex++;
    }

    return blockType;
}

function toggleBlockType(editor: SlateEditor, blockType: any) {
    const currentBlockType = getTextBlockStyle(editor);
    const changeTo = currentBlockType === blockType ? "paragraph" : blockType;
    Transforms.setNodes(
        editor,
        { type: changeTo },
        {
            at: editor.selection as any,
            match: (n) => StaticEditor.isBlock(editor, n),
        }
    );
}

export const Navbar: React.FC<NavbarProps> = ({ saving, id }) => {
    const editor = useSlateStatic();
    const onBlockTypeChange = useCallback(
        (targetType) => {
            if (targetType === "multiple") {
                return;
            }
            toggleBlockType(editor, targetType);
        },
        [editor]
    );
    const blockType = getTextBlockStyle(editor);
    const [open, setOpen] = useState(false);
    const [imageOpen, setImageOpen] = useState(false);
    const router = useRouter();
    const { data, loading } = useMeQuery();
    const [selected, setSelected] = useState(
        findNoteFolder(id, data && !loading && data.me?.folders)
    );
    const [deleteNoteFromFolderMutation] = useDeleteNoteFromFolderMutation();
    const [addNoteToFolderMutation] = useAddNoteToFolderMutation();
    const client = useApolloClient();

    useEffect(() => {
        const currentFolder = findNoteFolder(id, data?.me?.folders);
        const currentFolderId = findFolderId(
            currentFolder,
            (data as any).me?.folders as any
        );
        console.log(currentFolderId);
        if (currentFolder == selected) {
            return;
        }
        (async () => {
            await deleteNoteFromFolderMutation({
                variables: {
                    folderId: currentFolderId,
                    noteId: id,
                },
            });
        })();

        if (selected == "No Folder") {
            (async () => {
                await client.resetStore();
            })();
            return;
        }

        const newFolderId = findFolderId(
            selected,
            (data as any).me?.folders as any
        );
        (async () => {
            await addNoteToFolderMutation({
                variables: {
                    folderId: newFolderId,
                    noteId: id,
                },
            });
            await client.resetStore();
        })();
    }, [selected]);

    return (
        <div className="z-10 flex items-center sticky top-0 px-2 py-1.5 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
            <ParaStyleDropDown
                initialValue={blockType}
                onChange={onBlockTypeChange}
            />
            {CHARACTER_STYLES.map((style, i) => (
                <Icon
                    key={i}
                    style={style}
                    isActive={
                        style == "link"
                            ? isLinkNodeAtSelection(editor, editor.selection)
                            : getActiveStyles(editor).has(style)
                    }
                    editor={editor}
                />
            ))}
            <BiImageAlt
                className={
                    "p-1  w-7 h-7 text-gray-800 rounded-sm cursor-pointer border border-white dark:border-gray-800 dark:hover:border-gray-600 mx-1 hover:bg-gray-100 hover:border-gray-300 dark:text-gray-200 dark:hover:bg-gray-700"
                }
                onClick={() => setImageOpen(true)}
            />
            {saving ? (
                <p className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Saving...
                </p>
            ) : (
                <p className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Saved
                </p>
            )}
            <div className="flex items-center ml-auto mr-2">
                {data && !loading && (
                    <>
                        <div className="w-32">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="text-left relative w-full py-1.5 pl-3  bg-gray-50 border border-gray-300 rounded-sm cursor-pointer sm:text-sm hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-100 dark:bg-gray-600 dark:border-gray-500 dark:hover:bg-gray-600">
                                        <span className="block truncate menlo dark:text-gray-200">
                                            {selected}
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-gray-700">
                                            {data.me?.folders.map((folder) => (
                                                <Listbox.Option
                                                    className="relative py-2 pl-4 pr-4 text-gray-900 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                                                    value={folder.name}
                                                    key={folder.id}
                                                >
                                                    <span className="block truncate menlo">
                                                        {folder.name}
                                                    </span>
                                                </Listbox.Option>
                                            ))}
                                            <Listbox.Option
                                                className="relative py-2 pl-4 pr-4 text-gray-900 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                                                value={"No Folder"}
                                            >
                                                <span className="block truncate menlo">
                                                    No Folder
                                                </span>
                                            </Listbox.Option>
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <MdOutlineDelete
                            onClick={() => setOpen(true)}
                            className="p-1 ml-2 rounded-sm cursor-pointer w-7 h-7 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        />
                    </>
                )}
            </div>
            <DeleteNoteModal
                open={open}
                setOpen={setOpen}
                id={
                    typeof router.query.id == "string"
                        ? parseInt(router.query.id)
                        : -1
                }
            />
            <AddImageModal
                editor={editor}
                open={imageOpen}
                setOpen={setImageOpen}
            />
        </div>
    );
};
