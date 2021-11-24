import { useRouter } from "next/router";
import React from "react";
import { Spinner } from "../../../components/shared/Spinner";
import { Wrapper } from "../../../components/shared/Wrapper";
import { Editor } from "../../../components/ui/editor/editor";
import { useGetNoteQuery } from "../../../generated/graphql";

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
        <Wrapper>
            {data && !loading ? <Editor note={data?.getNote} /> : <Spinner />}
        </Wrapper>
    );
};

export default NotePage;
