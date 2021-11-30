import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../../../generated/graphql";
import { ColoredCircle } from "../ColoredCircle";
import { findNoteFolder } from "../../../utils/findNoteFolder";

interface NoteCardProps {
    name: string;
    status: string;
    id: number;
}

export const NoteCard: React.FC<NoteCardProps> = ({ name, status, id }) => {
    const { data, loading } = useMeQuery();
    return (
        <NextLink href={`/app/n/${id}`}>
            <a>
                <div className="flex cursor-pointer items-center px-2 py-0.5 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <div className="w-2">
                        <ColoredCircle
                            color={
                                data?.me?.folders.filter(
                                    (fold) =>
                                        fold.name ==
                                        findNoteFolder(id, data?.me?.folders)
                                )[0]?.color || "#28c077"
                            }
                        />
                    </div>
                    <p className="ml-2 text-sm font-medium text-gray-700 truncate dark:text-gray-300">
                        {name}
                    </p>
                </div>
            </a>
        </NextLink>
    );
};
