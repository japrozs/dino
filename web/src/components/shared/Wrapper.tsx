import React from "react";
import Sidebar from "./Sidebar";

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="w-full">
                <div>{children}</div>
            </div>
        </div>
    );
};
