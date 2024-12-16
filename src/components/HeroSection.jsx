import React from "react";

//Import SVG
import Boy from "@assets/svg/boy.svg";
import GitHubSVG from "@assets/svg/github-logo.svg";

const mySocials = [
    {
        name: "GitHub",
        link: "https://www.github.com/szymekst",
        icon: <GitHubSVG className="dark:[&_path]:fill-white" />,
    },
];

const HeroSection = () => {
    return (
        <div className="container py-5 flex flex-col md:grid md:grid-cols-2 md:py-10">
            <div
                data-aos="fade-left"
                className="flex justify-center md:justify-end"
            >
                <Boy className="w-full" />
            </div>

            <div
                data-aos="fade-right"
                className="flex flex-col gap-5 md:gap-7 mt-9 md:mt-0 md:-order-1 md:justify-center select-none"
            >
                <h1 className="text-3xl md:text-5xl">
                    Cześć! <br />
                    Jestem <span className="font-black">Szymon!</span>
                    <span className="animate-[wave_2.5s_linear_infinite] origin-[70%_70%] inline-block ml-2">
                        👋
                    </span>
                </h1>
                <p>
                    W przyszłości chciałbym stać się Frontend Developerem, a
                    dalej kto wie...
                    <br /> Może nawet Fullstack Developerem! 😊
                </p>
                <div className="flex gap-6">
                    {mySocials.map((social, index) => {
                        return (
                            <a
                                key={index}
                                href={social.link}
                                className="p-3 flex bg-white border-2 border-black-100 rounded-[4px] dark:bg-black-200 dark:border-white hover:brightness-95 hover:dark:brightness-90 transition-all"
                                target="_blank"
                            >
                                {social.icon}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
