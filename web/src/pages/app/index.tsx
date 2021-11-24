import React from "react";
import { Wrapper } from "../../components/shared/Wrapper";
import { Editor } from "../../components/ui/editor/editor";
import { useMeQuery } from "../../generated/graphql";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
    const { data } = useMeQuery();
    return (
        <Wrapper>
            <h1>
                hello to <code>dino.app</code>
            </h1>
        </Wrapper>
    );
};

export default Index;
