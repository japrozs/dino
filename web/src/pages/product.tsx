/* eslint-disable react/no-unknown-property */
import React from "react";
import { ShowcaseNavbar } from "../components/showcase/Navbar";
import NextLink from "next/link";
import Head from "next/head";

interface productProps {}

const Product: React.FC<productProps> = ({}) => {
    return (
        <div>
            <Head>
                <title>Dino</title>
            </Head>
            <ShowcaseNavbar />
            <div className="flex flex-col items-center pt-5 sm:pt-8 md:flex-row">
                <div className="w-full p-1 px-9">
                    <h1 className="mb-1 text-5xl font-bold text-gray-900">
                        Simple and smart.
                    </h1>
                    <p className="my-6 mt-4 text-lg font-medium text-gray-700">
                        <code>Dino</code> is a new way to jot down your thoughts
                        and all the stuff that you want to access easily and
                        quickly. Cos
                        {"'"} not everything is about <code>productivity</code>
                    </p>
                    <NextLink href="/login">
                        <a>
                            <button className="px-6 py-2 text-base font-medium border border-gray-300 rounded-sm hover:bg-gray-100">
                                Try Dino
                            </button>
                        </a>
                    </NextLink>
                </div>
                <div className="flex justify-center w-full pt-6 align-middle sm:pt-0">
                    <img
                        className="w-auto h-60 sm:h-96"
                        src="https://ouch-cdn2.icons8.com/cJRcXDb8IbYn85VGT69dULzEfHogefrtvhP1gH37I_I/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjA2/L2UxN2IwMDBjLWE5/YWItNDBiOC05NDBh/LWEwNGUxMTU0YmI3/Ni5zdmc.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col items-center pt-20 sm:pt-16 md:flex-row">
                <div className="w-full p-1 pr-2 md:w-1/4 pl-9">
                    <img
                        className="w-24 h-auto mb-4"
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=128,quality=100/front-static/pages/product/spot/spot-team-up.png"
                        alt=""
                    />
                    <h1 className="mb-1 text-3xl font-bold text-gray-900">
                        Easy to use
                    </h1>
                    <p className="my-6 mt-4 text-xl font-medium text-gray-700">
                        Unlike other tools, <code>Dino</code> has a zero
                        learning curve which means you can start using it
                        without any confusion
                    </p>
                </div>
                <div className="flex justify-center p-3 pt-6 align-middle sm:w-3/4 sm:pt-0 sm:pl-14">
                    <img
                        // className="w-full h-auto border border-gray-300 rounded-md sm:m-3 sm:w-auto sm:h-96"
                        className="w-auto h-48 border border-gray-300 rounded-md w-border sm:h-96"
                        src="https://github.com/japrozs/dino/raw/master/assets/main.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col items-center pt-20 sm:pt-16 md:flex-row">
                <div className="w-full p-1 pr-2 md:w-1/4 pl-9">
                    <img
                        className="w-auto h-12 mb-4"
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/product/spot/spot-workflow.png"
                        alt=""
                    />
                    <h1 className="mb-1 text-3xl font-bold text-gray-900">
                        Clean and organised
                    </h1>
                    <p className="my-6 mt-4 text-xl font-medium text-gray-700">
                        <code>Dino</code> user interface is clean, minimal and
                        organised so you only get to see your docs when you want
                        to
                    </p>
                </div>
                <div className="flex justify-center p-3 pt-6 align-middle sm:w-3/4 sm:pt-0 sm:pl-14">
                    {/* <img
                        className="w-auto h-64 border border-gray-300 rounded-md w-border sm:h-96"
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/product/value-props/context-tile.png"
                        alt=""
                    /> */}
                    <img
                        className="w-auto h-48 border border-gray-300 rounded-md w-border sm:h-96"
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/product/value-props/ecosystem-tile-v3.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center py-9">
                <svg
                    className="w-auto h-20 mx-auto"
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
                            color-interpolation-filters="sRGB"
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
                            <feComposite in2="hardAlpha" operator="out" />
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

                <h1 className="mx-auto mt-2 text-4xl font-bold">
                    Try Dino today
                </h1>
                <NextLink href="/login">
                    <a className="mx-auto w-36">
                        <button className="px-6 py-2 mx-auto mt-6 text-base font-medium border border-gray-300 rounded-sm w-36 hover:bg-gray-100">
                            Try Dino
                        </button>
                    </a>
                </NextLink>
            </div>
            <div className="p-5 border-t border-gray-delay-300">
                <div className="flex flex-wrap items-center justify-center space-x-4 space-y-2 sm:space-y-0">
                    <a
                        href={"/"}
                        className={
                            "text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-sm text-sm font-medium"
                        }
                    >
                        Terms {"&"} Privacy
                    </a>
                    <a
                        href={"/"}
                        className={
                            "text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-sm text-sm font-medium"
                        }
                    >
                        Security
                    </a>
                    <a
                        href={"/"}
                        className={
                            "text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-sm text-sm font-medium"
                        }
                    >
                        Status
                    </a>
                    <a
                        href={"/"}
                        className={
                            "text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-sm text-sm font-medium"
                        }
                    >
                        Docs
                    </a>
                    <a
                        href={"/"}
                        className={
                            "text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-sm text-sm font-medium"
                        }
                    >
                        Pricing
                    </a>
                    <a
                        href={"/"}
                        className={
                            "text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-sm text-sm font-medium"
                        }
                    >
                        Blog
                    </a>
                    <a
                        href={"/"}
                        className={
                            "text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-sm text-sm font-medium"
                        }
                    >
                        About
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Product;
