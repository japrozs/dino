import type { NextPage } from "next";
import { useMeQuery } from "../generated/graphql";

const Home: NextPage = () => {
    const { data } = useMeQuery();
    return (
        <div>
            <h1>hey there!</h1>
        </div>
    );
};

export default Home;
