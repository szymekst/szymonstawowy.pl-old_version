import React from "react";

const realisations = [
    {
        pageName: "vumo.ai",
        link: "https://vumo.ai/",
        image: "",
        techStack: ["React", "TailwindCSS", "Gatsby", "GraphQL", "WordPress"],
        description:
            "Vumo.ai - strona tworzona od zera. Dla tego projektu wystąpiła konieczność poznania i zaimplementowania GatbsbyJS oraz GraphQL. Zintegrowanie strony z WordPressem pozwala na korzystanie z niego jako Headless CMS. W tym projekcie pojawiła się potrzeba napisania programu wysyłającego zdjęcie do API dostarczonego przez klienta, a następnie pobranie i wyświetlenie zwróconego, przerobionego zdjęcia. Podczas tworzenia strony dla Vumo.ai miałem przyjemność po raz pierwszy skorzystać z TailwindCSS, który stał się moim ulubionym frameworkiem CSS.",
    },
    {
        pageName: "poland.arcelormittal.com",
        link: "https://poland.arcelormittal.com/",
        image: "",
        techStack: ["Nunjucks", "Stimulus", "Sass", "Bootstrap"],
        description:
            "Poland.arcelormittal.com - moim główny zadaniem do wykonania na tej stronie internetowej było stworzenie menu nawigacji w wersji desktopowej jak i zarówno mobilnej, pomijając integracje z Typo3. Przed rozpoczęciem pracy nad tym zadaniem zaszła potrzeba zaznajomienia się ze stackiem technologicznym panującym w tym projekcie - Nunjucks, Stimulus. Po za pracą nad menu, musiałem utworzyć jeszcze przyciski oraz większość ich motywów wraz z animacjami. Miałem też drobnostkowy wkład w poszczególne sekcje strony.",
    },
    {
        pageName: "cialoizdrowie.pl",
        link: "https://cialoizdrowie.pl/",
        image: "",
        techStack: ["BricksBuilder", "WordPress", "CSS", "JavaScript"],
        description:
            "Cialoizdrowie.pl - strona tworzona od zera. Projekt w całości wykonany w page builderze BricksBuilder.io wraz z WordPressem jako backend.",
    },
    {
        pageName: "parafiawszystkich.pl",
        link: "https://parafiawszystkich.pl/",
        image: "",
        techStack: ["Elementor", "WordPress", "CSS"],
        description: "",
    },
];

const PortfolioSection = () => {
    return <div>PortfolioSection</div>;
};

export default PortfolioSection;
