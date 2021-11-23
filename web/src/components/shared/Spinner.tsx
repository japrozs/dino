import React from "react";

type SpinnerProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {};

export const Spinner: React.FC<SpinnerProps> = ({ ...props }) => {
    return (
        <div className={"spinner"} {...props}>
            Loading...
        </div>
    );
};
