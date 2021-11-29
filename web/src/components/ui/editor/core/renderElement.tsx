import {
    useSelected,
    useFocused,
    useSlateStatic,
    DefaultElement,
} from "slate-react";
import { Editor, Transforms, Path, Node, Element } from "slate";
import { ReactEditor } from "slate-react";
import { SlateEditor } from "../editor";

export const renderElement = (props: any) => {
    const { element, children, attributes } = props;
    switch (element.type) {
        case "paragraph":
            return <p {...attributes}>{children}</p>;
        case "H1":
            return <h1 {...attributes}>{children}</h1>;
        case "H2":
            return <h2 {...attributes}>{children}</h2>;
        case "H3":
            return <h3 {...attributes}>{children}</h3>;
        case "H4":
            return <h4 {...attributes}>{children}</h4>;
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

const Link = ({ attributes, element, children }: any) => {
    const editor = useSlateStatic();
    const selected = useSelected();
    const focused = useFocused();

    return (
        <div className="relative inline">
            <a {...attributes} href={element.href}>
                {children}
            </a>
            {selected && focused && (
                <div
                    className="absolute left-0 flex items-center gap-10 px-10 py-6 bg-gray-100 border border-gray-300 rounded-sm"
                    contentEditable={false}
                >
                    <a href={element.href} rel="noreferrer" target="_blank">
                        {element.href}
                    </a>
                    <button onClick={() => removeLink(editor)}>faUnlink</button>
                </div>
            )}
        </div>
    );
};

const removeLink = (editor: SlateEditor, opts = {}) => {
    Transforms.unwrapNodes(editor, {
        ...opts,
        match: (n) =>
            !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
    });
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
