import React, { useState } from "react";
import { BiCaretRight, BiCaretDown } from "react-icons/bi";

interface FolderCardProps {
    name: string;
}

export const FolderCard: React.FC<FolderCardProps> = ({ name }) => {
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
                <div>
                    <p>these are the contents</p>
                </div>
            )}
        </div>
    );
};
