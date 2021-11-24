import React, { useState } from "react";
import { Wrapper } from "../../components/shared/Wrapper";
import { useMeQuery } from "../../generated/graphql";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
    const { data } = useMeQuery();
    return (
        <Wrapper>
            <div className="flex items-center justify-center h-screen">
                <h1>
                    hello to <code>dino.app</code>
                </h1>
            </div>
        </Wrapper>
    );
};

export default Index;
