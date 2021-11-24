import React, { Fragment, useCallback } from "react";
import {
    BaseEditor,
    Editor as StaticEditor,
    Range,
    Transforms,
    Element,
} from "slate";
import { ReactEditor, useSlateStatic } from "slate-react";
import { Icon } from "./editor/core/navbar/Icon";
import { ParaStyleDropDown } from "./editor/core/navbar/ParaStyleDropdown";

interface NavbarProps {
    saving: boolean;
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

const CHARACTER_STYLES = ["bold", "italic", "underline", "code"];

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

export const Navbar: React.FC<NavbarProps> = ({ saving }) => {
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

    return (
        <div className="z-10 flex items-center sticky top-0 px-2 py-1.5 bg-white border-b border-gray-200">
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
            {saving ? <p>Saving...</p> : <p>Saved</p>}
        </div>
    );
};
