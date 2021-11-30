import {
    useSelected,
    useFocused,
    useSlateStatic,
    DefaultElement,
} from "slate-react";
import { Editor, Transforms, Path, Node, Element } from "slate";
import { ReactEditor } from "slate-react";
import { SlateEditor } from "../editor";
import router from "next/router";

export const renderElement = (props: any) => {
    const { element, children, attributes } = props;
    switch (element.type) {
        case "paragraph":
            return <p {...attributes}>{children}</p>;
        case "H1":
            return (
                <h1
                    className="text-gray-900 dark:text-gray-100"
                    {...attributes}
                >
                    {children}
                </h1>
            );
        case "H2":
            return (
                <h2
                    className="text-gray-900 dark:text-gray-100"
                    {...attributes}
                >
                    {children}
                </h2>
            );
        case "H3":
            return (
                <h3
                    className="text-gray-900 dark:text-gray-100"
                    {...attributes}
                >
                    {children}
                </h3>
            );
        case "H4":
            return (
                <h4
                    className="text-gray-900 dark:text-gray-100"
                    {...attributes}
                >
                    {children}
                </h4>
            );
        case "code":
            return <code {...attributes}>{children}</code>;
        case "image":
            return <Image {...props} />;
        default:
            return <DefaultElement {...props} />;
    }
};

const Image = ({ attributes, element, children }: any) => {
    const selected = useSelected();
    const focused = useFocused();

    return (
        <div
            {...attributes}
            className={`my-2 ${
                selected &&
                focused &&
                "rounded-sm shadow border-2 border-green-500"
            }`}
        >
            <div contentEditable={false}>
                <img
                    className="w-full h-auto rounded-sm"
                    alt={element.alt}
                    src={element.url}
                />
            </div>
            {children}
        </div>
    );
};

export const insertImage = (editor: SlateEditor, url: any) => {
    if (!url) return;

    const { selection } = editor;
    const image = {
        type: "image",
        alt: "",
        url,
        children: [{ text: "" }],
    };
    console.log(image);

    ReactEditor.focus(editor);

    if (!!selection) {
        const [parentNode, parentPath] = Editor.parent(
            editor,
            selection.focus?.path
        );

        if (
            // @ts-ignore
            editor.isVoid(parentNode) ||
            (Node as any).string(parentNode).length
        ) {
            // Insert the new image node after the void node or a node with content
            Transforms.insertNodes(editor, image, {
                at: Path.next(parentPath),
                select: true,
            });
        } else {
            // If the node is empty, replace it instead
            Transforms.removeNodes(editor, { at: parentPath });
            Transforms.insertNodes(editor, image, {
                at: parentPath,
                select: true,
            });
        }
    } else {
        // Insert the new image node at the bottom of the Editor when selection
        // is falsey
        Transforms.insertNodes(editor, image, { select: true });
    }
};
