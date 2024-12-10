import Image from "next/image";

import arcelormittal from "@assets/img/arcelormittalWebsite.png";
import cialoizdrowie from "@assets/img/cialoizdrowieWebsite.png";
import parafiawszystkich from "@assets/img/parafiawszystkichWebsite.png";
import vumo from "@assets/img/vumoWebsite.png";

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
        pageName: "poland.arcelormittal.com",
        link: "https://poland.arcelormittal.com/",
        image: arcelormittal,
        techStack: ["Nunjucks", "Stimulus", "Sass", "Bootstrap"],
        description:
            "Poland.arcelormittal.com - moim główny zadaniem do wykonania na tej stronie internetowej było stworzenie menu nawigacji w wersji desktopowej jak i zarówno mobilnej, pomijając integracje z Typo3. Przed rozpoczęciem pracy nad tym zadaniem zaszła potrzeba zaznajomienia się ze stackiem technologicznym panującym w tym projekcie - Nunjucks, Stimulus. Po za pracą nad menu, musiałem utworzyć jeszcze przyciski oraz większość ich motywów wraz z animacjami. Miałem też drobnostkowy wkład w poszczególne sekcje strony. Projekt ten nie był solowy, współpracowałem nad nim wraz z dwiema innymi osobami zajmującymi się frontem.",
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
            <div className="container"></div>
        </div>
    );
};

export default PortfolioSection;
