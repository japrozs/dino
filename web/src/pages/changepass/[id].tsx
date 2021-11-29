import React, { useState } from "react";
import { Form, Formik } from "formik";
import { InputField } from "../../components/ui/InputField";
import { useChangePasswordMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { Meta } from "../../components/shared/Meta";

interface ChangePasswordProps {}

const ChangePassword: React.FC<ChangePasswordProps> = ({}) => {
    const [tokenError, setTokenError] = useState("");
    const router = useRouter();
    const [changePasswordMutation] = useChangePasswordMutation();
    return (
        <>
            <Head>
                <Meta title={"Change Password"} />
                <title>Change Password - Dino</title>
            </Head>
            <div className="m-5 sm:m-0">
                <div className="max-w-lg mx-auto mt-3">
                    <h1 className="mb-3 text-2xl font-semibold text-gray-800">
                        Change password
                    </h1>
                    <Formik
                        initialValues={{ newPassword: "" }}
                        onSubmit={async (values, { setErrors }) => {
                            const response = await changePasswordMutation({
                                variables: {
                                    newPassword: values.newPassword,
                                    token:
                                        typeof router.query.id === "string"
                                            ? router.query.id
                                            : "",
                                },
                            });
                            if (response.data?.changePassword.errors) {
                                const errorMap = toErrorMap(
                                    response.data.changePassword.errors
                                );
                                if ("token" in errorMap) {
                                    setTokenError(errorMap.token);
                                }
                                setErrors(errorMap);
                                console.log(errorMap);
                            } else if (response.data?.changePassword.user) {
                                console.log("here...");
                                // login worked
                                router.push("/app");
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <InputField
                                    name="newPassword"
                                    placeholder="new password"
                                    label="New Password"
                                />
                                {tokenError ? (
                                    <div>
                                        <p>{tokenError}</p>
                                        <NextLink href="/forgot-password">
                                            <a>Click here to get a new one</a>
                                        </NextLink>
                                    </div>
                                ) : null}
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="px-2 py-1 mt-5 text-sm border border-gray-300 rounded-sm hover:bg-gray-100"
                                >
                                    Change password
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
