import { DefaultElement } from "slate-react";

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

function Image({ attributes, children, element }: any) {
    return (
        <div contentEditable={false} {...attributes}>
            <div>
                <img
                    src={String(element.url)}
                    alt={element.caption}
                    className={"image"}
                />
            </div>
            {children}
        </div>
    );
}
