import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
};

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    const [field, { error }] = useField(props as any);
    return (
        <div className={"mt-3"}>
            <label className={"text-sm text-gray-500"} htmlFor={field.name}>
                {label}
            </label>
            <input
                className={
                    !!error
                        ? "w-full p-1 px-2 mt-1 text-sm bg-gray-100 border rounded-sm border-red-300 focus:outline-none focus:ring focus:border-blue-100"
                        : "w-full p-1 px-2 mt-1 text-sm bg-gray-100 border rounded-sm border-gray-300 focus:outline-none focus:ring focus:border-blue-100"
                }
                {...field}
                {...props}
                id={field.name}
                placeholder={props.placeholder}
            />
            {error ? (
                <span className={"mt-1 font-medium text-sm text-red-400"}>
                    {error}
                </span>
            ) : null}
        </div>
    );
};
