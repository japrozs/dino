import { useApolloClient } from "@apollo/client";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/ui/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    const [registerMut] = useRegisterMutation();
    const router = useRouter();
    const client = useApolloClient();
    return (
        <div className="m-5 sm:m-0">
            <div className="max-w-md mx-auto mt-3">
                <h1 className="mb-4 text-3xl font-semibold text-gray-800">
                    Register
                </h1>
                <Formik
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={async (values, { setErrors }) => {
                        const res = await registerMut({
                            variables: {
                                options: values,
                            },
                        });
                        if (res.data?.register.errors) {
                            setErrors(toErrorMap(res.data.register.errors));
                        } else if (res.data?.register.user) {
                            router.push("/app");
                            await client.resetStore();
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <InputField
                                name="name"
                                placeholder="Name"
                                label="Name"
                            />
                            <InputField
                                name="email"
                                placeholder="Email"
                                label="Email"
                            />
                            <InputField
                                name="password"
                                placeholder="Password"
                                label="Password"
                                type={"password"}
                            />
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="px-3 py-1.5 mt-7 border border-gray-300 rounded-sm text-md hover:bg-gray-100"
                            >
                                Register
                            </button>
                            <p className="mt-3 text-sm text-gray-500">
                                Already have an account?{" "}
                                <span
                                    className="font-medium text-purple-500 cursor-pointer"
                                    onClick={() => router.push("/login")}
                                >
                                    Login
                                </span>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
