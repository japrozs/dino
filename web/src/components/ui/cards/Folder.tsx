import React, { useState } from "react";
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import { useGetNoteQuery } from "../../../generated/graphql";
import NextLink from "next/link";

interface FolderCardProps {
    name: string;
    notes: string[];
}

export const FolderCard: React.FC<FolderCardProps> = ({ name, notes }) => {
    const [showContents, setShowContents] = useState(false);
    return (
        <div>
            <div
                onClick={() => setShowContents(!showContents)}
                className="flex cursor-pointer items-center px-2 py-0.5 hover:bg-gray-200"
            >
                {showContents ? (
                    <BiCaretDown className="mr-1 text-sm text-gray-700" />
                ) : (
                    <BiCaretRight className="mr-1 text-sm text-gray-700" />
                )}
                <p className="text-sm font-medium text-gray-700 truncate">
                    {name}
                </p>
            </div>
            {showContents && (
                <div className="">
                    {notes.map((note, i) => (
                        <FolderNoteCard key={i} id={note} />
                    ))}
                </div>
            )}
        </div>
    );
};

interface FolderNoteCardProps {
    id: string;
}

export const FolderNoteCard: React.FC<FolderNoteCardProps> = ({ id }) => {
    const { data } = useGetNoteQuery({
        variables: {
            id: parseInt(id),
        },
    });
    let dotColor = "";
    switch (data?.getNote.status) {
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
                <div className="flex pl-7 cursor-pointer items-center pr-2 py-0.5 hover:bg-gray-200">
                    <div className={`mr-2 colored-circle-${dotColor}`}></div>
                    <p className="text-sm font-medium text-gray-700 truncate">
                        {data?.getNote.title}
                    </p>
                </div>
            </a>
        </NextLink>
    );
};
