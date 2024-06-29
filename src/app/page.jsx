//Import SVG
import Boy from "@assets/svg/boy.svg";
import Boy2 from "@assets/svg/boy2.svg";
import GitHubSVG from "@assets/svg/github-logo.svg";
import ReactSVG from "@assets/svg/react.svg";
import NextjsSVG from "@assets/svg/nextjs.svg";
import TailwindSVG from "@assets/svg/tailwind-css.svg";
import GitSVG from "@assets/svg/git.svg";
import JavascriptSVG from "@assets/svg/javascript.svg";
import FigmaSVG from "@assets/svg/figma.svg";

import { metadata } from "./layout";

export async function generateMetadata() {
    return {
        title: `${"Strona główna" + " | " + metadata.title}`,
    };
}

const mySocials = [
    {
        name: "GitHub",
        link: "https://www.github.com/szymekst",
        icon: <GitHubSVG className="dark:[&_path]:fill-white" />,
    },
];

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

export default function Home() {
    return (
        <div className="dark:bg-black-200">
            {/* Hero section */}
            <div className="container py-5 flex flex-col md:grid md:grid-cols-2 md:py-10">
                <div className="flex justify-center md:justify-end">
                    <Boy className="w-full" />
                </div>

                <div className="flex flex-col gap-5 md:gap-7 mt-9 md:mt-0 md:-order-1 md:justify-center">
                    <h1 className="text-3xl md:text-5xl">
                        Cześć! <br />
                        Jestem <span className="font-black">Szymek!</span>
                        <span className="animate-[wave_2.5s_linear_infinite] origin-[70%_70%] inline-block ml-2">
                            👋
                        </span>
                    </h1>
                    <p>
                        W najbliższej przyszłości chciałbym aspirować do
                        zostania Frontend Developerem, a dalej kto wie...
                        <br /> Może i nawet Fullstack Developerem! 😊
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

            {/* Skill-set section */}
            <div className="container py-5 flex flex-col gap-5 md:py-10">
                <h2 className="text-2xl text-center">
                    Mój <span className="font-black">skill set</span>
                </h2>
                <div className="grid gap-5 grid-cols-[repeat(2,minmax(0,180px))] md:grid-cols-[repeat(3,minmax(0,186px))] md:gap-10 justify-center md:justify-around lg:md:grid-cols-[repeat(4,minmax(0,186px))]">
                    {mySkills.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className="aspect-[1] flex flex-col items-center justify-between p-6 rounded-[4px] border-2 border-black-100 dark:border-white group hover:bg-black-200 hover:dark:bg-white transition-all cursor-pointer md:py-9"
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

            {/* About me section */}
            <div className="container py-5 flex flex-col md:grid md:grid-cols-2 md:py-10 md:gap-20 relative">
                <div className=" md:top-0 flex justify-center md:justify-end mb-6 md:mb-0">
                    <Boy2 className="w-full" />
                </div>

                <div className="flex flex-col gap-5 md:gap-7 md:justify-centerm">
                    <h2 className="text-3xl md:text-5xl">
                        O <span className="font-black">mnie</span>
                    </h2>
                    <p>
                        Jestem pasjonatą i samoukiem programowania w
                        Front-endzie (Next.js & Tailwind). Z ogromnym
                        entuzjazjem podchodzę do poznawania nowych technologii.
                        Pixel perfect design i pisanie jasnego, czytelnego,
                        wysoce wydajnego kodu są dla mnie ważne.
                    </p>
                    <p>
                        Moja przygoda z programowaniem rozpoczęła się jeszcze
                        przed pójściem do szkoły średniej (2018). Na zajęciach z
                        Frontendu zrozumiałem, że jest to coś dla mnie i
                        chciałbym z tym związać swoją przyszłośc. <br />
                        Kontynuowałem, więc nauke na własną rękę i próbowałem
                        samodzielnie, od podstaw zrozumieć jak pisać kod - wtedy
                        jeszcze w czystym HTML, CSS, JS. <br />
                        Po zakończeniu edukacji rozpocząłem pracę w firmię
                        zajmującej się głownie CMS&apos;em TYPO3 oraz WordPress
                        (2022). Tam po raz pierwszy zetknąłem się z React oraz
                        TailwindCSS podczas pisania projeku w GatsbyJS -
                        zakochałem się w tym od pierwszego kodzenia 😊
                    </p>
                    <p>
                        Poznawałem i poznajdę do tej pory ten stack technologii,
                        wymieniłem jedynie GatsbyJS na NextJS, twierdzę, że
                        pozwala mi to na więcej swobody oraz jest lepiej
                        rozwinięte i zadbane. I właśnie przy użyciu tych
                        narzędzi powstała ta strona - React, Next.JS,
                        TailwindCSS oraz MDX.
                    </p>
                    <p>
                        Programuje hobbistycznie, a kiedy tego nie robie to
                        czytam dużo książek (głownie literatura faktu oraz
                        piękna) oraz biegam krótkie dystanse - pomaga mi to
                        zachować czystą i spokojną głowe.
                    </p>
                </div>
            </div>
        </div>
    );
}
