import React from "react";

import ReactSVG from "@assets/svg/react.svg";
import NextjsSVG from "@assets/svg/nextjs.svg";
import TailwindSVG from "@assets/svg/tailwind-css.svg";
import GitSVG from "@assets/svg/git.svg";
import JavascriptSVG from "@assets/svg/javascript.svg";
import FigmaSVG from "@assets/svg/figma.svg";

const skillsIconsClass =
    "dark:[&_path]:fill-white group-hover:[&_path]:fill-white group-hover:[&_path]:dark:fill-black-200";

const mySkills = [
    {
        name: "React",
        icon: <ReactSVG className={skillsIconsClass} />,
    },
    {
        name: "Next.JS",
        icon: <NextjsSVG className={skillsIconsClass} />,
    },
    {
        name: "TailwindCSS",
        icon: <TailwindSVG className={skillsIconsClass} />,
    },
    {
        name: "Git",
        icon: <GitSVG className={skillsIconsClass} />,
    },
    {
        name: "JavaScript",
        icon: <JavascriptSVG className={skillsIconsClass} />,
    },
    {
        name: "Figma",
        icon: <FigmaSVG className={skillsIconsClass} />,
    },
];

const SkillSection = () => {
    return (
        <div className="container py-5 flex flex-col gap-5 md:py-10">
            <h2 className="text-2xl text-center">
                Mój <span className="font-black">skill set</span>
            </h2>
            <div className="grid gap-5 grid-cols-[repeat(2,minmax(0,180px))] md:grid-cols-[repeat(3,minmax(0,186px))] md:gap-10 justify-center md:justify-around lg:md:grid-cols-[repeat(4,minmax(0,186px))]">
                {mySkills.map((skill, index) => {
                    return (
                        <div
                            key={index}
                            className="aspect-[1] flex flex-col items-center justify-between p-6 rounded-[4px] border-2 border-black-100 dark:border-white group hover:bg-black-200 hover:dark:bg-white transition-all md:py-9"
                        >
                            {skill.icon}
                            <p className="text-black-100 text-base font-black text-center group-hover:text-white dark:text-white group-hover:dark:text-black-200">
                                {skill.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillSection;
