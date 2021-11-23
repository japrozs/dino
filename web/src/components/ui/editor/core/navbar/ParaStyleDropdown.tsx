import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const PARAGRAPH_STYLES = ["h1", "h2", "h3", "h4", "paragraph", "multiple"];

export const ParaStyleDropDown: React.FC<{ onChange: any; initialValue: any }> =
    ({ onChange, initialValue }) => {
        return (
            <>
                {initialValue != null && (
                    <div className="w-48">
                        <Listbox value={initialValue} onChange={onChange}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                    <span className="block truncate">
                                        {initialValue}
                                    </span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        {"<>"}
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {PARAGRAPH_STYLES.map((style, i) => (
                                            <Listbox.Option
                                                key={i}
                                                className="relative py-2 pl-10 pr-4 text-gray-900 cursor-pointer hover:bg-gray-100"
                                                value={style}
                                            >
                                                <span className="block font-normal truncate">
                                                    {style}
                                                </span>
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                )}
            </>
        );
    };
