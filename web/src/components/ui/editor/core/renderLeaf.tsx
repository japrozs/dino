export const renderLeaf = ({ attributes, children, leaf }: any) => {
    let el = <>{children}</>;

    if (leaf.bold) {
        el = <strong className="bold">{el}</strong>;
    }

    if (leaf.code) {
        el = <code>{el}</code>;
    }

    if (leaf.italic) {
        el = <em>{el}</em>;
    }

    if (leaf.underline) {
        el = <u>{el}</u>;
    }

    return <span {...attributes}>{el}</span>;
};
