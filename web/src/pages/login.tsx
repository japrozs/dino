import { useRouter } from "next/router";
import React, { useState } from "react";
import { useLoginMutation } from "../generated/graphql";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMut] = useLoginMutation();
    const router = useRouter();

    const login = async () => {
        const res = await loginMut({
            variables: {
                email,
                password,
            },
        });
        console.log("login res ::", res);
        if (res.data?.login.user) {
            router.push("/app");
        }
    };
    return (
        <div>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button type="submit" onClick={login}>
                Submit
            </button>
        </div>
    );
};

export default Login;
