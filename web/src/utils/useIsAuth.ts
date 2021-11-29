import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated/graphql";

export const useIsAuth = () => {
    const { data, loading } = useMeQuery();
    const router = useRouter();
    console.log("data ::", data);
    useEffect(() => {
        if (!loading && !data?.me) {
            router.replace("/");
        }
    }, [loading, data, router]);
};
