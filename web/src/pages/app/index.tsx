import React from "react";
import { Wrapper } from "../../components/shared/Wrapper";
import { Editor } from "../../components/ui/editor/editor";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
    return (
        <Wrapper>
            <Editor />
        </Wrapper>
    );
};

export default Index;
