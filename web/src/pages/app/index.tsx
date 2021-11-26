import React, { useState } from "react";
import { Wrapper } from "../../components/shared/Wrapper";
import { Welcome } from "../../components/ui/Welcome";
import { useMeQuery } from "../../generated/graphql";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
    return (
        <Wrapper>
            <Welcome />
        </Wrapper>
    );
};

export default Index;
