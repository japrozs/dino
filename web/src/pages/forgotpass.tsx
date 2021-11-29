import React, { useState } from "react";
import { useForgotPasswordMutation } from "../generated/graphql";

interface forgotpassProps {}

const Forgotpass: React.FC<forgotpassProps> = ({}) => {
    const [email, setEmail] = useState("");
    const [sentEmailLink, setSentEmailLink] = useState(false);
    const [forgotPasswordMut] = useForgotPasswordMutation();

    const forgotPassword = async () => {
        await forgotPasswordMut({
            variables: {
                email,
            },
        });
        setSentEmailLink(true);
    };

    return (
        <div>
            <div className="max-w-md mx-auto mt-3">
                <h1 className="mb-4 text-3xl font-semibold text-gray-800">
                    Forgot password
                </h1>
                {sentEmailLink && (
                    <p className="mt-1 mb-3 text-sm font-medium text-green-500">
                        We{"'"}ve sent an email with a link to change your
                        password!
                    </p>
                )}
                <p className={"text-sm text-gray-500"}>Email</p>
                <input
                    className="w-full p-1 px-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:border-blue-100"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <button
                    onClick={forgotPassword}
                    className="px-2 py-1 mt-6 text-sm border border-gray-300 rounded-sm hover:bg-gray-100"
                >
                    Forgot password
                </button>
            </div>
        </div>
    );
};

export default Forgotpass;
