import React from "react";

interface ColoredCircleProps {
    color: string;
}

export const ColoredCircle: React.FC<ColoredCircleProps> = ({ color }) => {
    return (
        <div
            className="colored-circle"
            style={{
                backgroundColor: color,
            }}
        ></div>
    );
};
