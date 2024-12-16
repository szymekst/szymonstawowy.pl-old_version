"use client";

//Import React and NextJS Stuff
import { useEffect, useState } from "react";

//Import SVGs
import Circle from "@/assets/svg/circle.svg";
import Sun from "@/assets/svg/sun.svg";
import Moon from "@/assets/svg/moon.svg";

const checkDarkMode = () => {
    if (typeof window !== "undefined") {
        return localStorage.theme === "dark" ? true : false;
    }
};

const changeDarkMode = (prop) => {
    if (prop === true) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    }
};

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(checkDarkMode());
    useEffect(() => {
        changeDarkMode(darkMode);
    });

    return (
        <label className="relative flex items-center bg-black-200 dark:bg-white py-2 px-4 rounded-[29px] cursor-pointer">
            {""}
            <input
                type="checkbox"
                className="w-0 h-0 opacity-0 absolute"
                onClick={() => {
                    setDarkMode(!darkMode);
                }}
            />
            <div className="relative flex gap-4">
                <Circle className="absolute left-[calc(100%-24px)] dark:left-0 dark:[&_rect]:fill-black-200 transition-all" />
                <Sun />
                <Moon />
            </div>
        </label>
    );
};

export default ThemeButton;
