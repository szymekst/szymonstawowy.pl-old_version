//Import SVG
import Boy from "@assets/svg/boy.svg";
import GitHubSVG from "@assets/svg/github-logo.svg";
import ReactSVG from "@assets/svg/react.svg";
import NextjsSVG from "@assets/svg/nextjs.svg";
import TailwindSVG from "@assets/svg/tailwind-css.svg";
import GitSVG from "@assets/svg/git.svg";
import JavascriptSVG from "@assets/svg/javascript.svg";
import FigmaSVG from "@assets/svg/figma.svg";

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
            <div className="container py-5 flex flex-col md:grid md:grid-cols-2 md:py-10">
                <div className="flex justify-center md:justify-end">
                    <Boy className="w-full object-cover" />
                </div>

                <div className="flex flex-col gap-5 md:gap-7 mt-9 md:mt-0 md:-order-1 md:justify-center">
                    <h1 className="text-3xl">
                        Cześć! <br />
                        Jestem <span className="font-black">Szymek!</span>
                        <span className="animate-[wave_2.5s_linear_infinite] origin-[70%_70%] inline-block ml-2">
                            👋
                        </span>
                    </h1>
                    <p>
                        W najbliższej przyszłości chciałbym aspirować do
                        zostania Frontend Developerem, a dalej kto wie... Może i
                        nawet Fullstack Developerem! 😊
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
            <div className="container py-5 flex flex-col gap-5 md:py-10">
                <h2 className="text-2xl text-center py-5">
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
        </div>
    );
}
