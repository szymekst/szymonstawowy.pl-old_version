import Image from "next/image";

import cialoizdrowie from "@assets/img/cialoizdrowieWebsite.png";
import parafiawszystkich from "@assets/img/parafiawszystkichWebsite.png";
import vumo from "@assets/img/vumoWebsite.png";
import ziebicka14 from "@assets/img/ziebicka14Website.png";
import medidesk from "@assets/img/medideskWebsite.png";
import funk from "@assets/img/funkWebsite.png";

const realisations = [
    {
        pageName: "vumo.ai",
        link: "https://vumo.ai/",
        image: vumo,
        techStack: ["React", "TailwindCSS", "Gatsby", "GraphQL", "WordPress"],
        description:
            "Vumo.ai - strona tworzona od zera. Dla tego projektu wystąpiła konieczność poznania i zaimplementowania GatbsbyJS oraz GraphQL. Zintegrowanie strony z WordPressem pozwala na korzystanie z niego jako Headless CMS. W tym projekcie pojawiła się potrzeba napisania programu wysyłającego zdjęcie do API dostarczonego przez klienta, a następnie pobranie i wyświetlenie zwróconego, przerobionego zdjęcia. Podczas tworzenia strony dla Vumo.ai miałem przyjemność po raz pierwszy skorzystać z TailwindCSS, który stał się moim ulubionym frameworkiem CSS.",
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
            "Medidesk.pl - szeroko rozbudowana strona internetowa, tworzona od zera przy użyciu BricksBuilder. Większość elementów na stronie została odpowiednio wystylizowana przy użyciu CSS'a. Oprócz standarowej procedury budowania strony internetowej oraz zastosowania kilku linijek JavaScriptu miałem przyjemność zrobić animację w programie Adobe After Effects, które przy użyciu LottieFiles znalazły się na stronie.",
    },
    {
        pageName: "Ziebicka14.pl",
        link: "https://ziebicka14.pl/",
        image: ziebicka14,
        techStack: ["Elementor", "WordPress", "CSS", "JavaScript"],
        description:
            "Ziebicka14.pl - częściowo współpracowałem przy tej stronie. Największym i najciekawszym zadaniem była implementacja modułu znajdującego się na podstronie mieszkania.",
    },
    {
        pageName: "Funk.pl",
        link: "https://funk.pl/",
        image: funk,
        techStack: ["Stimulus", "Nunjucks", "Bootstrap", "TYPO3 CMS"],
        description:
            "Funk.pl - współpraca przy stronie, pomagałem tworzyć poszczególne sekcje czy implementować pojedyncze rozwiązania. Po raz pierwszy pracowałem ze Stimulusem oraz Nunjucks.",
    },
    {
        pageName: "cialoizdrowie.pl",
        link: "https://cialoizdrowie.pl/",
        image: cialoizdrowie,
        techStack: ["BricksBuilder", "WordPress", "CSS", "JavaScript"],
        description:
            "Cialoizdrowie.pl - strona tworzona od zera. Projekt w całości wykonany w page builderze BricksBuilder.io wraz z WordPressem jako backend strony. Wykonałem wszystkie podstrony, sekcje, animacje oraz funkcjonalności dla tego projektu. BricksBuilder użyty do stworzenia tej strony, po tym projekcie został moim ulubionym narzędziem do tworzenia stron dla WordPress.",
    },
    {
        pageName: "parafiawszystkich.pl",
        link: "https://parafiawszystkich.pl/",
        image: parafiawszystkich,
        techStack: ["Elementor", "WordPress", "CSS"],
        description:
            "Cialoizdrowie.pl - strona tworzona od zera. Jest to mój pierwszy projekt jaki miałem przyjemność wykonać przy użyciu WordPressa oraz Elementora. Wykonałem wszystkie podstrony, sekcje, animacje oraz funkcjonalności dla tego projektu. Głównym wyzwaniem dla tej witryny była implementacja WCAG, które nie będzie wymagało pluginu.",
    },
];

const PortfolioSection = () => {
    return (
        <div className="dark:bg-black-200">
            <div className="container flex flex-col">
                {realisations.map((realisation, key) => {
                    return (
                        <a key={key} target="_blank" href={realisation.link}>
                            {realisation.pageName}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default PortfolioSection;
