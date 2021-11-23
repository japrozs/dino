import React from "react";

interface NoteCardProps {
    name: string;
    status: string;
}

export const NoteCard: React.FC<NoteCardProps> = ({ name, status }) => {
    let dotColor = "";
    switch (status) {
        case "active":
            dotColor = "green";
            break;
        case "inactive":
            dotColor = "gray";
            break;
        case "deleted":
            dotColor = "red";
            break;
        default:
            dotColor = "green";
            break;
    }
    return (
        <div className="flex cursor-pointer items-center px-2 py-0.5 hover:bg-gray-200">
            <div className={`mr-2 colored-circle-${dotColor}`}></div>
            <p className="text-sm font-medium text-gray-700 truncate">{name}</p>
        </div>
    );
};
