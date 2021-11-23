import areEqual from "deep-equal";
import isHotkey from "is-hotkey";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { Navbar, toggleStyle } from "../Navbar";
import { renderElement } from "./core/renderElement";
import { renderLeaf } from "./core/renderLeaf";

interface EditorProps {}

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
type SlateEditor = BaseEditor & ReactEditor;

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

export const Editor: React.FC<EditorProps> = ({}) => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState<Descendant[]>([
        {
            type: "h1",
            children: [{ text: "Heading 1" }],
        },
        {
            type: "h2",
            children: [{ text: "Heading 2" }],
        },
        {
            type: "h3",
            children: [{ text: "Heading 3" }],
        },
    ] as any);
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

    return (
        <Slate editor={editor} value={value} onChange={onChangeHandler}>
            <Navbar />
            <div className="max-w-3xl px-8 pt-6 mx-auto">
                <p
                    className="mb-4 text-4xl font-semibold text-gray-800 focus:outline-none"
                    contentEditable
                >
                    🚀 Your first dino document!
                </p>
                <div className="editor" ref={editorRef}>
                    <Editable
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        onKeyDown={onKeyDown}
                    />
                </div>
            </div>
        </Slate>
    );
};
