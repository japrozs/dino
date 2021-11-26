import { useRouter } from "next/router";
import React from "react";
import { Spinner } from "../../../components/shared/Spinner";
import { Wrapper } from "../../../components/shared/Wrapper";
import { Editor } from "../../../components/ui/editor/editor";
import { useGetNoteQuery } from "../../../generated/graphql";
import Head from "next/head";
import { Meta } from "../../../components/shared/Meta";

interface NotePageProps {}

const NotePage: React.FC<NotePageProps> = ({}) => {
    const router = useRouter();
    const id =
        typeof router.query.id == "string" ? parseInt(router.query.id) : -1;
    const { data, loading } = useGetNoteQuery({
        variables: {
            id,
        },
    });
    return (
        <>
            <Head>
                <Meta title={data?.getNote.title || ""} />
                <title>{data?.getNote.title} - Dino</title>
            </Head>
            <Wrapper>
                {data && !loading ? (
                    <Editor note={data?.getNote} />
                ) : (
                    <Spinner />
                )}
            </Wrapper>
        </>
    );
};

export default NotePage;
