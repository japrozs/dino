import { useApolloClient } from "@apollo/client";
import areEqual from "deep-equal";
import isHotkey from "is-hotkey";
import React, {
    createRef,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import {
    GetNoteQuery,
    UpdateNoteTitleDocument,
    useGetNoteQuery,
    useUpdateNoteMutation,
    useUpdateNoteTitleMutation,
} from "../../../generated/graphql";
import { Navbar, toggleStyle } from "../Navbar";
import { renderElement } from "./core/renderElement";
import { renderLeaf } from "./core/renderLeaf";
import ContentEditable from "react-contenteditable";
import { withHistory } from "slate-history";

interface EditorProps {
    note: GetNoteQuery["getNote"];
}

type CustomElement = {
    type: string;
    url?: string;
    children: CustomText[];
};
type CustomText = { text: string };
declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}
export type SlateEditor = BaseEditor & ReactEditor;

const useEditorConfig = (editor: SlateEditor) => {
    const onKeyDown = useCallback(
        (event) => KeyBindings.onKeyDown(editor, event),
        [editor]
    );
    const { isVoid } = editor;
    editor.isVoid = (element) => {
        return ["image"].includes(element.type) || isVoid(element);
    };
    return { renderElement, renderLeaf, onKeyDown };
};

const KeyBindings = {
    onKeyDown: (editor: any, event: any) => {
        if (isHotkey("mod+b", event)) {
            toggleStyle(editor, "bold");
            return;
        }
        if (isHotkey("mod+i", event)) {
            toggleStyle(editor, "italic");
            return;
        }
        if (isHotkey("mod+`", event)) {
            toggleStyle(editor, "code");
            return;
        }
        if (isHotkey("mod+u", event)) {
            toggleStyle(editor, "underline");
            return;
        }
    },
};

const useSelection = (editor: SlateEditor) => {
    const [selection, setSelection] = useState(editor.selection);
    const setSelectionOptimized = useCallback(
        (newSelection) => {
            // don't update the component state if selection hasn't changed.
            if (areEqual(selection, newSelection)) {
                return;
            }
            setSelection(newSelection);
        },
        [setSelection, selection]
    );

    return [selection, setSelectionOptimized];
};

export const Editor: React.FC<EditorProps> = ({ note }) => {
    const editor = useMemo(() => withReact(withHistory(createEditor())), []);
    const [value, setValue] = useState<Descendant[]>(
        note.body == ""
            ? [
                  {
                      type: "Paragraph",
                      children: [{ text: "" }],
                  },
                  {
                      type: "image",
                      alt: "",
                      src: "https://www.placecage.com/gif/600/250",
                      children: [{ text: "" }],
                  },
              ]
            : (JSON.parse(note.body).value as any)
    );
    const { renderElement, onKeyDown } = useEditorConfig(editor);
    const [selection, setSelection] = useSelection(editor);
    const editorRef = useRef(null);
    const onChangeHandler = useCallback(
        (document) => {
            setValue(document);
            // @ts-ignore
            setSelection(editor.selection);
        },
        [editor.selection, setSelection]
    );
    const [updateNoteMutation, { loading }] = useUpdateNoteMutation();
    const [updateNoteTitleMutation, { loading: titleChangeLoading }] =
        useUpdateNoteTitleMutation();
    const [title, setTitle] = useState(note.title);
    const client = useApolloClient();

    useEffect(() => {
        console.log(value);
        const timeout = setTimeout(async () => {
            await updateNoteMutation({
                variables: {
                    id: note.id,
                    body: JSON.stringify({ value }),
                },
            });
        }, 500);

        return () => clearTimeout(timeout);
    }, [value]);

    useEffect(() => {
        const timeout = setTimeout(async () => {
            await updateNoteTitleMutation({
                variables: {
                    id: note.id,
                    title: title.replace(
                        /(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g,
                        ""
                    ),
                },
            });
            await client.resetStore();
        }, 300);

        return () => clearTimeout(timeout);
    }, [title]);

    const editableRef = useRef<any>();
    const [editableText, setEditableText] = useState("Edit me.");
    return (
        <div className="bg-gray-700">
            <Slate editor={editor} value={value} onChange={onChangeHandler}>
                <Navbar saving={loading || titleChangeLoading} id={note.id} />
                <div className="max-w-3xl px-8 pt-6 mx-auto">
                    <ContentEditable
                        innerRef={editableRef}
                        tagName="p"
                        html={title}
                        className="mb-4 text-4xl font-semibold text-gray-800 focus:outline-none dark:text-gray-200"
                        onChange={(e) => {
                            if (e.target.value.trim().length == 0) {
                                return;
                            } else {
                                setTitle(e.target.value);
                            }
                        }}
                    />
                    <div className="text-white editor" ref={editorRef}>
                        <Editable
                            renderElement={renderElement}
                            renderLeaf={renderLeaf}
                            placeholder={"Start writing here"}
                            renderPlaceholder={({ children, attributes }) => (
                                <div {...attributes}>
                                    <p>{children}</p>
                                </div>
                            )}
                            onKeyDown={onKeyDown}
                        />
                    </div>
                </div>
            </Slate>
        </div>
    );
};
