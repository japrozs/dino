import { useRouter } from "next/router";
import React from "react";
import { Spinner } from "../../../components/shared/Spinner";
import { Wrapper } from "../../../components/shared/Wrapper";
import { Editor } from "../../../components/ui/editor/editor";
import { useGetNoteQuery } from "../../../generated/graphql";
import Head from "next/head";
import { Meta } from "../../../components/shared/Meta";
import { useIsAuth } from "../../../utils/useIsAuth";

interface NotePageProps {}

const NotePage: React.FC<NotePageProps> = ({}) => {
    useIsAuth();
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
                    <div className="flex flex-col items-center justify-center max-w-full min-h-screen dark:bg-black-800">
                        <Spinner />
                    </div>
                )}
            </Wrapper>
        </>
    );
};

export default NotePage;
