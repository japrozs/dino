import type { NextPage } from "next";
import { useMeQuery } from "../generated/graphql";

const Home: NextPage = () => {
    const { data } = useMeQuery();
    return (
        <div>
            <h1 className="text-green-500">hey there!</h1>
            {data?.me ? (
                <code>{JSON.stringify(data?.me, null, 4)}</code>
            ) : (
                <code>not logged in!</code>
            )}
        </div>
    );
};

export default Home;
