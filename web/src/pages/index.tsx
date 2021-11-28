import type { NextPage } from "next";
import { useMeQuery } from "../generated/graphql";
import { ShowcaseNavbar } from "../components/showcase/Navbar";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const { data, loading } = useMeQuery();
    const router = useRouter();
    if (!loading && data?.me != null) {
        router.push("/app");
    }
    return (
        <div>
            <ShowcaseNavbar />
            <div className="flex flex-col items-center pt-5 sm:pt-12 md:flex-row">
                <div className="w-full p-1 px-9">
                    <h1 className="mb-1 text-5xl font-bold text-gray-900">
                        All your notes.
                        <br /> everywhere
                    </h1>
                    <p className="my-6 mt-4 text-lg font-medium text-gray-700">
                        <code>Dino</code> is a new way to jot down your thoughts
                        and all the stuff that you want to access easily anf
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
                        src="https://ouch-cdn2.icons8.com/B7tv246-7CYquGe8KkJ4sqNb__SEFbE8wrpCM-rckfM/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzI1/L2YwZDQyMGY4LTZh/MGMtNDU2Ny05ZDA0/LTVhZTRiNzIxMzZk/MS5zdmc.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col items-center pt-20 sm:pt-16 md:flex-row">
                <div className="w-full p-1 pr-2 sm:w-1/4 pl-9">
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
                <div className="flex justify-center w-3/4 pt-6 align-middle sm:pt-0 sm:pl-14">
                    <img
                        className="w-auto m-3 border border-gray-300 rounded-md h-72 sm:h-96"
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/product/value-props/ecosystem-tile-v3.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col items-center pt-20 sm:pt-16 md:flex-row">
                <div className="w-full p-1 pr-2 sm:w-1/4 pl-9">
                    <img
                        className="w-auto mb-4 h-9"
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
                <div className="flex justify-center w-3/4 pt-6 align-middle sm:pt-0 sm:pl-14">
                    <img
                        className="w-auto m-3 border border-gray-300 rounded-md h-72 sm:h-96"
                        src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/product/value-props/context-tile.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center py-9">
                <img
                    className="w-auto h-20 mx-auto"
                    src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/icons/notion-app-icon-3d.png"
                    alt="Workflow"
                />
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

export default Home;
