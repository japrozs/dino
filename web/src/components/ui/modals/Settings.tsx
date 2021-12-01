/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
    useForgotPasswordMutation,
    useLogoutMutation,
    useMeQuery,
    useUpdateNameMutation,
} from "../../../generated/graphql";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { Spinner } from "../../shared/Spinner";

interface SettingsModalProps {
    open: boolean;
    setOpen: any;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
    open,
    setOpen,
}) => {
    const { data, loading } = useMeQuery();
    const [name, setName] = useState(data && !loading && data?.me?.name);
    const [sentEmailLink, setSentEmailLink] = useState(false);
    const [forgotPasswordMutation] = useForgotPasswordMutation();
    const client = useApolloClient();
    const router = useRouter();
    const [logout] = useLogoutMutation();
    const [updateNameMutation] = useUpdateNameMutation();

    const forgotPassword = async () => {
        await forgotPasswordMutation({
            variables: {
                email: data?.me?.email || "",
            },
        });
        setSentEmailLink(true);
    };

    const logUserOut = async () => {
        await logout();
        router.push("/");
        await client.resetStore();
    };

    const updateName = async () => {
        await updateNameMutation({
            variables: {
                name: name || data?.me?.name || "",
            },
        });
        await client.resetStore();
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-opacity-75 bg-black-500" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div
                            className="inline-block p-4 overflow-x-hidden overflow-y-scroll text-left align-bottom transition-all transform bg-white rounded shadow-xl dark:bg-black-700 sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
                            style={{
                                maxHeight: "35rem",
                            }}
                        >
                            {data && !loading ? (
                                <>
                                    <h1 className="pb-1 mb-1 text-base font-medium text-gray-800 border-b border-gray-300 dark:text-gray-200 dark:border-gray-600">
                                        Account
                                    </h1>
                                    <p className="mt-3 text-sm text-gray-800 dark:text-gray-400">
                                        Photo
                                    </p>
                                    <img
                                        src={data.me?.imgUrl}
                                        alt={data.me?.name}
                                        className="w-20 h-20 mt-2 rounded-full"
                                    />
                                    <button className="px-2 py-1 mt-2 text-sm border border-gray-300 rounded-sm focus:outline-none hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:border-gray-400">
                                        Upload photo
                                    </button>
                                    <hr className="my-3 border-t border-gray-300 dark:border-gray-600" />
                                    <p className="mb-3 text-sm text-gray-800 dark:text-gray-300">
                                        Personal Info
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Email
                                    </p>
                                    <p className="text-sm text-gray-800 menlo dark:text-gray-200">
                                        {data.me?.email}
                                    </p>
                                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-300">
                                        Name
                                    </p>
                                    <input
                                        className="w-full p-1 px-2 mt-2 text-sm bg-gray-100 border border-gray-300 rounded-sm dark:bg-black-700 focus:outline-none focus:ring focus:border-blue-100 dark:border-gray-600 dark:text-gray-200"
                                        value={name || ""}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    {data && !loading && name != data.me?.name && (
                                        <>
                                            <button
                                                onClick={updateName}
                                                className="px-2 py-1 mt-3 text-sm border border-gray-300 rounded-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:border-gray-400"
                                            >
                                                Update
                                            </button>
                                        </>
                                    )}
                                    <hr className="my-3 mt-5 border-t border-gray-300 dark:border-gray-600" />
                                    <p className="mb-1 text-sm text-gray-800 dark:text-gray-300">
                                        Password
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Log out after reseting the password, to
                                        use it
                                    </p>
                                    <div className="flex items-center my-2 mt-4">
                                        <button
                                            onClick={forgotPassword}
                                            className="px-2 py-1 text-sm border border-gray-300 rounded-sm hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:border-gray-400"
                                        >
                                            Change password
                                        </button>
                                    </div>
                                    {sentEmailLink && (
                                        <p className="mt-1 text-sm font-medium text-green-500">
                                            We{"'"}ve sent an email with a link
                                            to change your password!
                                        </p>
                                    )}
                                    <hr className="my-3 mt-5 border-t border-gray-300 dark:border-gray-600" />
                                    <p className="mb-1 text-sm text-gray-800 dark:text-gray-300">
                                        Log out of all devices
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gr">
                                        You will be logged out of all other
                                        active sessions besides this one and
                                        will have to log back in.
                                    </p>
                                    <button
                                        onClick={logUserOut}
                                        className="px-3 py-1.5 mt-2 text-sm text-red-600 border border-red-300 rounded-sm hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-btn-dark"
                                    >
                                        Log out
                                    </button>
                                    <hr className="my-3 mt-5 border-t border-gray-300 dark:border-gray-600" />
                                    <p className="mb-3 text-sm text-gray-800 dark:text-gray-300">
                                        Danger zone Info
                                    </p>
                                    <button className="px-3 py-1.5 text-sm text-red-600 border border-red-300 rounded-sm hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-btn-dark">
                                        Delete account
                                    </button>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center max-w-full min-h-screen dark:bg-gray-800">
                                    <Spinner />
                                </div>
                            )}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};
