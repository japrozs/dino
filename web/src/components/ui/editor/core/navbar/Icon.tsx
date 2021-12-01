import {
    BiBold,
    BiItalic,
    BiCode,
    BiUnderline,
    BiHighlight,
    BiLink,
} from "react-icons/bi";
import {
    BaseEditor,
    Descendant,
    Range,
    Element as SlateElement,
    Transforms,
    Editor as StaticEditor,
} from "slate";
import { ReactEditor } from "slate-react";
import { toggleStyle } from "../../../Navbar";

interface IconProps {
    style: string;
    isActive: boolean;
    editor: SlateEditor;
}
type SlateEditor = BaseEditor & ReactEditor;

type LinkElement = { type: "link"; url: string; children: Descendant[] };

export const Icon: React.FC<IconProps> = ({ style, isActive, editor }) => {
    const normalClassName =
        "p-1  w-7 h-7 text-gray-800 dark:text-gray-200 cursor-pointer border border-white dark:border-black-navbar mx-1";

    const activeClassName =
        "p-1  w-7 h-7 text-gray-800  cursor-pointer dark:bg-black-pantone bg-gray-100 rounded-sm mx-1 border border-gray-300 dark:border-gray-700 dark:text-gray-200";

    const toggleMark = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.preventDefault();
        toggleStyle(editor, style);
    };

    const normalIconMap: Record<any, any> = {
        bold: <BiBold className={normalClassName} onClick={toggleMark} />,
        italic: <BiItalic className={normalClassName} onClick={toggleMark} />,
        underline: (
            <BiUnderline className={normalClassName} onClick={toggleMark} />
        ),
        code: <BiCode className={normalClassName} onClick={toggleMark} />,
        highlighted: (
            <BiHighlight className={normalClassName} onClick={toggleMark} />
        ),
    };

    const activeIconMap: Record<any, any> = {
        bold: <BiBold className={activeClassName} onClick={toggleMark} />,
        italic: <BiItalic className={activeClassName} onClick={toggleMark} />,
        underline: (
            <BiUnderline className={activeClassName} onClick={toggleMark} />
        ),
        code: <BiCode className={activeClassName} onClick={toggleMark} />,
        highlighted: (
            <BiHighlight className={activeClassName} onClick={toggleMark} />
        ),
    };

    return (
        <>
            {isActive ? (
                <>{activeIconMap[style]}</>
            ) : (
                <>{normalIconMap[style]}</>
            )}
        </>
    );
};
