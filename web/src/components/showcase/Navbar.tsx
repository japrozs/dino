/* eslint-disable react/no-unknown-property */
import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import NextLink from "next/link";

interface NavbarProps {}
const navigation = [
    { name: "Product", href: "/product", current: false },
    { name: "Download", href: "/download", current: false },
    { name: "Pricing", href: "/pricing", current: false },
    { name: "Community", href: "/community", current: false },
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

export const ShowcaseNavbar: React.FC<NavbarProps> = ({}) => {
    return (
        <Disclosure
            as="nav"
            className="sticky top-0 z-10 bg-white border-b border-gray-200"
        >
            {({ open }) => (
                <>
                    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div
                            className="relative flex items-center justify-between"
                            style={{
                                height: "56px",
                            }}
                        >
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-700 rounded-sm hover:bg-gray-100 focus:outline-none">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <HiX
                                            className="block w-6 h-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <BiMenu
                                            className="block w-6 h-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                                <div className="flex items-center flex-shrink-0">
                                    <svg
                                        className="block w-auto h-11 lg:hidden"
                                        width="171"
                                        height="171"
                                        viewBox="0 0 171 171"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_d_22_34)">
                                            <rect
                                                x="4"
                                                width="163"
                                                height="163"
                                                rx="26"
                                                fill="#FCFAFA"
                                            />
                                            <path
                                                d="M65.5854 61.6991V7.59353L85.719 27.2531V82.2923L65.5854 61.6991Z"
                                                fill="#252020"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                            <path
                                                d="M105.415 101.301V155.406L85.281 135.747V80.7077L105.415 101.301Z"
                                                fill="#252020"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                            <path
                                                d="M64.7449 101.398L10.5942 101.398L30.2698 81.2814L85.3549 81.2814L64.7449 101.398Z"
                                                fill="#252020"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                            <path
                                                d="M139.776 81.7186L85.6252 81.7186L105.301 61.6022L160.386 61.6022L139.776 81.7186Z"
                                                fill="#252020"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                            <path
                                                d="M123.777 43.9087L104.112 62.6428L104.113 35.6888L123.777 16.9546L123.777 43.9087Z"
                                                fill="#252020"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                            <path
                                                d="M65.6277 127.311L45.9634 146.045L45.9635 119.091L65.6277 100.357L65.6277 127.311Z"
                                                fill="#252020"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                            <path
                                                d="M46.9402 41.9541L65.7581 61.537L38.7817 61.6304L19.9638 42.0476L46.9402 41.9541Z"
                                                fill="#252020"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                            <path
                                                d="M132.288 100.992L151.106 120.575L124.129 120.668L105.312 101.085L132.288 100.992Z"
                                                fill="#252020"
                                                stroke="white"
                                                strokeWidth="0.5"
                                            />
                                            <rect
                                                x="7.5"
                                                y="3.5"
                                                width="156"
                                                height="156"
                                                rx="25.5"
                                                stroke="#E3DFDF"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_d_22_34"
                                                x="0"
                                                y="0"
                                                width="171"
                                                height="171"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood
                                                    floodOpacity="0"
                                                    result="BackgroundImageFix"
                                                />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    result="hardAlpha"
                                                />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feComposite
                                                    in2="hardAlpha"
                                                    operator="out"
                                                />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow_22_34"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect1_dropShadow_22_34"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <svg
                                        className="hidden w-auto h-8 lg:block"
                                        width="414"
                                        height="159"
                                        viewBox="0 0 414 159"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M59.25 58.377V0.593877L80.75 21.6052V80.3863L59.25 58.377Z"
                                            fill="#252020"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                        <path
                                            d="M101.75 100.623V158.406L80.25 137.395V78.6137L101.75 100.623Z"
                                            fill="#252020"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                        <path
                                            d="M58.377 100.75L0.593877 100.75L21.6052 79.25L80.3863 79.25L58.377 100.75Z"
                                            fill="#252020"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                        <path
                                            d="M138.377 79.75L80.5939 79.75L101.605 58.25L160.386 58.25L138.377 79.75Z"
                                            fill="#252020"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                        <path
                                            d="M121.328 39.3929L100.328 59.4162L100.329 30.6071L121.328 10.5838L121.328 39.3929Z"
                                            fill="#252020"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                        <path
                                            d="M59.3284 128.393L38.3284 148.416L38.3285 119.607L59.3284 99.5838L59.3284 128.393Z"
                                            fill="#252020"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                        <path
                                            d="M39.3937 37.2833L59.4897 58.2137L30.6807 58.3135L10.5847 37.3833L39.3937 37.2833Z"
                                            fill="#252020"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                        <path
                                            d="M130.394 100.283L150.49 121.214L121.681 121.314L101.585 100.383L130.394 100.283Z"
                                            fill="#252020"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                        <path
                                            d="M207.573 118H234.85C257.209 118 270.355 104.129 270.355 80.4756V80.3721C270.355 56.7705 257.105 43.3135 234.85 43.3135H207.573V118ZM220.927 106.717V54.5967H233.452C248.307 54.5967 256.743 63.7578 256.743 80.4238V80.5273C256.743 97.5557 248.462 106.717 233.452 106.717H220.927ZM286.504 55.2695C290.541 55.2695 293.646 52.0605 293.646 48.2305C293.646 44.2969 290.541 41.1396 286.504 41.1396C282.467 41.1396 279.31 44.2969 279.31 48.2305C279.31 52.0605 282.467 55.2695 286.504 55.2695ZM280.034 118H292.922V63.1367H280.034V118ZM303.895 118H316.782V86.1689C316.782 78.25 321.492 72.8672 328.894 72.8672C336.243 72.8672 339.866 77.2666 339.866 85.082V118H352.754V82.4941C352.754 69.7617 345.87 61.998 333.811 61.998C325.478 61.998 319.888 65.8281 317.041 71.7285H316.782V63.1367H303.895V118ZM387.38 119.087C403.477 119.087 413.932 108.373 413.932 90.5684V90.4648C413.932 72.7637 403.321 61.998 387.328 61.998C371.387 61.998 360.828 72.8672 360.828 90.4648V90.5684C360.828 108.321 371.231 119.087 387.38 119.087ZM387.432 108.684C379.202 108.684 373.975 102.11 373.975 90.5684V90.4648C373.975 79.0781 379.306 72.4531 387.328 72.4531C395.506 72.4531 400.785 79.0264 400.785 90.4648V90.5684C400.785 102.059 395.558 108.684 387.432 108.684Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NextLink
                                                key={item.name}
                                                href={item.href}
                                            >
                                                <a
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-100 text-black"
                                                            : "text-gray-900 hover:bg-gray-100 ",
                                                        "px-3 py-2 rounded-sm text-sm font-medium"
                                                    )}
                                                >
                                                    {item.name}
                                                </a>
                                            </NextLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center hidden pr-0 sm:block sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <NextLink href="/login">
                                    <a>
                                        <button className="font-medium px-3 py-1.5 text-sm border border-gray-300 rounded-sm hover:bg-gray-100">
                                            Log in
                                        </button>
                                    </a>
                                </NextLink>
                                <NextLink href="/register">
                                    <a>
                                        <button className="font-medium ml-3 px-3 py-1.5 text-sm border border-gray-300 rounded-sm hover:bg-gray-100">
                                            Sign up
                                        </button>
                                    </a>
                                </NextLink>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-800 hover:bg-gray-100",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
