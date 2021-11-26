import React, { useState } from "react";
import { Wrapper } from "../../components/shared/Wrapper";
import { Welcome } from "../../components/ui/Welcome";
import Head from "next/head";
import { Meta } from "../../components/shared/Meta";

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
    return (
        <>
            <Head>
                <Meta title={"Home"} />
                <title>Home - Dino</title>
            </Head>
            <Wrapper>
                <Welcome />
            </Wrapper>
        </>
    );
};

export default Index;
