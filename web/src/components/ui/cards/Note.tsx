import React from "react";
import NextLink from "next/link";

interface NoteCardProps {
    name: string;
    status: string;
    id: number;
}

export const NoteCard: React.FC<NoteCardProps> = ({ name, status, id }) => {
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
        <NextLink href={`/app/n/${id}`}>
            <a>
                <div className="flex cursor-pointer items-center px-2 py-0.5 hover:bg-gray-200">
                    <div className={`mr-2 colored-circle-${dotColor}`}></div>
                    <p className="text-sm font-medium text-gray-700 truncate">
                        {name}
                    </p>
                </div>
            </a>
        </NextLink>
    );
};
