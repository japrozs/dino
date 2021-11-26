import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const PARAGRAPH_STYLES = ["H1", "H2", "H3", "H4", "Paragraph", "Multiple"];

export const ParaStyleDropDown: React.FC<{ onChange: any; initialValue: any }> =
    ({ onChange, initialValue }) => {
        return (
            <>
                {initialValue != null && (
                    <div className="w-48">
                        <Listbox value={initialValue} onChange={onChange}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-full py-1.5 pl-3 pr-10 text-left bg-gray-50 border border-gray-300 rounded-sm cursor-pointer sm:text-sm hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-100">
                                    <span className="block text-gray-800 truncate menlo">
                                        {initialValue}
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
                                                className="relative py-2 pl-4 pr-4 text-gray-900 cursor-pointer hover:bg-gray-100"
                                                value={style}
                                            >
                                                <span className="block font-normal text-gray-800 truncate menlo">
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
