"use client";

//Import React and NextJS Stuff
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

//Import components
import ThemeButton from "./ThemeButton";

//Import SVGs
import Hamburger from "@/assets/svg/hamburger.svg";
import CloseIcon from "@/assets/svg/close.svg";

//Links in menu
export const menuLinks = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Blog",
        url: "/blog",
    },
];

const HeaderMenus = ({ title }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        show
            ? document.documentElement.classList.add("overflow-y-hidden")
            : document.documentElement.classList.remove("overflow-y-hidden");
    });

    return (
        <>
            <header className="dark:bg-black-200 ">
                <div className="flex justify-between items-center container py-[20px]">
                    <Link
                        href="/"
                        className="text-lg font-bold h-full dark:text-white"
                    >
                        {title}
                    </Link>
                    <button
                        role="button"
                        aria-label="hamburger-menu"
                        className="w-[32px] h-[32px] flex flex-col gap-[4px] justify-center items-center md:hidden"
                        onClick={() => {
                            setShow((prev) => !prev);
                        }}
                    >
                        <Hamburger className="dark:[&_path]:fill-white" />
                    </button>
                    <div className="hidden md:flex gap-[14px]">
                        {menuLinks.map((link, index) => {
                            return (
                                <Link
                                    href={link.url}
                                    key={index}
                                    className="w-full text-center text-lg dark:text-white p-[8px]"
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <ThemeButton />
                    </div>
                </div>
                <div
                    className={`${
                        show ? "translate-y-0" : "translate-y-[-100%]"
                    } w-screen max-h-dvh bg-white dark:bg-black-200 absolute top-0 bottom-0 left-0 z-50 flex flex-col justify-center items-center transition`}
                >
                    <Link
                        href="/"
                        className="font-semibold text-lg dark:text-white"
                    ></Link>
                    <div className="flex flex-col gap-[20px] items-center pt-[54px]">
                        {menuLinks.map((link, index) => {
                            return (
                                <Link
                                    href={link.url}
                                    key={index}
                                    className="w-full text-center text-lg dark:text-white p-[8px]"
                                    onClick={() => {
                                        setShow(false);
                                    }}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <ThemeButton />
                    </div>
                    <div className="absolute bottom-0 p-[20px] w-full flex justify-center bg-white dark:bg-black-200">
                        <button
                            role="button"
                            aria-label="close-menu"
                            onClick={() => {
                                setShow((prev) => !prev);
                            }}
                        >
                            <CloseIcon className="dark:[&_path]:fill-white" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};
export default HeaderMenus;
