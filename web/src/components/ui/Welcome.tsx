import React from "react";

interface WelcomeProps {}

export const Welcome: React.FC<WelcomeProps> = ({}) => {
    return (
        <div className="flex flex-col items-center justify-center max-w-full min-h-screen">
            <h1>
                Welcome to <code>dino.app</code>
            </h1>
        </div>
    );
};
