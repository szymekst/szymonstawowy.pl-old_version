import Image from "next/image";
import React from "react";

import cialoizdrowie from "@assets/img/cialoizdrowieWebsite.png";
import parafiawszystkich from "@assets/img/parafiawszystkichWebsite.png";
import vumo from "@assets/img/vumoWebsite.png";
import ziebicka14 from "@assets/img/ziebicka14Website.png";
import medidesk from "@assets/img/medideskWebsite.png";
import funk from "@assets/img/funkWebsite.png";

import ReadMoreSVG from "@assets/svg/read-more.svg";

const realisations = [
    {
        pageName: "Vumo.ai",
        link: "https://vumo.ai/",
        image: vumo,
        techStack: ["React", "TailwindCSS", "Gatsby", "GraphQL", "WordPress"],
        description:
            "Strona tworzona od zera. Dla tego projektu wystąpiła konieczność poznania i zaimplementowania GatbsbyJS oraz GraphQL. Zintegrowanie strony z WordPressem pozwala na korzystanie z niego jako Headless CMS. W tym projekcie pojawiła się potrzeba napisania programu wysyłającego zdjęcie do API dostarczonego przez klienta, a następnie pobranie i wyświetlenie zwróconego, przerobionego zdjęcia. Podczas tworzenia strony dla Vumo.ai miałem przyjemność po raz pierwszy skorzystać z TailwindCSS, który stał się moim ulubionym frameworkiem CSS.",
    },
    {
        pageName: "Medidesk.pl",
        link: "https://medidesk.pl/",
        image: medidesk,
        techStack: [
            "BricksBuilder",
            "WordPress",
            "CSS",
            "JavaScript",
            "Polylang",
            "LottieFiles",
            "Adobe After Effects",
        ],
        description:
            "Szeroko rozbudowana strona internetowa, tworzona od zera przy użyciu BricksBuilder. Większość elementów na stronie została odpowiednio wystylizowana przy użyciu CSS'a. Oprócz standarowej procedury budowania strony internetowej oraz zastosowania kilku linijek JavaScriptu miałem przyjemność zrobić animację w programie Adobe After Effects, które przy użyciu LottieFiles znalazły się na stronie.",
    },
    {
        pageName: "Ziebicka14.pl",
        link: "https://ziebicka14.pl/",
        image: ziebicka14,
        techStack: ["Elementor", "WordPress", "CSS", "JavaScript"],
        description:
            "Częściowo współpracowałem przy tej stronie. Największym i najciekawszym zadaniem była implementacja modułu znajdującego się na podstronie mieszkania.",
    },
    {
        pageName: "Funk.pl",
        link: "https://funk.pl/",
        image: funk,
        techStack: ["Stimulus", "Nunjucks", "Bootstrap", "TYPO3 CMS"],
        description:
            "Współpraca przy stronie, pomagałem tworzyć poszczególne sekcje czy implementować pojedyncze rozwiązania. Po raz pierwszy pracowałem ze Stimulusem oraz Nunjucks.",
    },
    {
        pageName: "Cialoizdrowie.pl",
        link: "https://cialoizdrowie.pl/",
        image: cialoizdrowie,
        techStack: ["BricksBuilder", "WordPress", "CSS", "JavaScript"],
        description:
            "Strona tworzona od zera. Projekt w całości wykonany w page builderze BricksBuilder.io wraz z WordPressem jako backend strony. Wykonałem wszystkie podstrony, sekcje, animacje oraz funkcjonalności dla tego projektu. BricksBuilder użyty do stworzenia tej strony, po tym projekcie został moim ulubionym narzędziem do tworzenia stron dla WordPress.",
    },
    {
        pageName: "Parafiawszystkich.pl",
        link: "https://parafiawszystkich.pl/",
        image: parafiawszystkich,
        techStack: ["Elementor", "WordPress", "CSS"],
        description:
            "Strona tworzona od zera. Jest to mój pierwszy projekt jaki miałem przyjemność wykonać przy użyciu WordPressa oraz Elementora. Wykonałem wszystkie podstrony, sekcje, animacje oraz funkcjonalności dla tego projektu. Głównym wyzwaniem dla tej witryny była implementacja WCAG, które nie będzie wymagało pluginu.",
    },
];

const PortfolioSection = () => {
    return (
        <div className="container flex flex-col pt-5 pb-10 gap-10 md:pt-10 md:pb-20 md:gap-20">
            <h2
                data-aos="fade-up"
                className="text-2xl text-center pt-5 md:-mb-8"
            >
                Moje <span className="font-black">portfolio</span>
            </h2>
            {realisations.map((realisation, key) => {
                return (
                    <div
                        key={key}
                        className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-16 md:[&>a]:even:order-2"
                    >
                        <a
                            data-aos={
                                key % 2 === 0 ? "fade-left" : "fade-right"
                            }
                            href={realisation.link}
                        >
                            <Image
                                src={realisation.image}
                                alt={realisation.pageName}
                                quality={100}
                                className="rounded-2xl md:w-full"
                            />
                        </a>
                        <div className="flex flex-col gap-4 md:justify-center">
                            <h3 data-aos="fade-up">{realisation.pageName}</h3>
                            <ul
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="columns-2 list-disc list-inside"
                            >
                                {realisation.techStack.map((item, key) => {
                                    return <li key={key}>{item}</li>;
                                })}
                            </ul>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="text-gray-100"
                            >
                                {realisation.description}
                            </p>
                            <a
                                data-aos="fade-up"
                                target="_blank"
                                href={realisation.link}
                                className="flex self-start items-center gap-2 pb-2"
                            >
                                <ReadMoreSVG />
                                Zobacz stronę
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PortfolioSection;
