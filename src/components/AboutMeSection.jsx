import React from "react";

import Boy2 from "@assets/svg/boy2.svg";

const AboutMeSection = () => {
    return (
        <div className="container py-5 flex flex-col md:grid md:grid-cols-2 md:py-10 md:gap-20 relative">
            <div
                data-aos="fade-right"
                className=" md:top-0 flex justify-center md:justify-end mb-6 md:mb-0"
            >
                <Boy2 className="w-full" />
            </div>

            <div className="flex flex-col gap-5 md:gap-7 md:justify-centerm">
                <h2 data-aos="fade-up" className="text-3xl md:text-5xl">
                    O <span className="font-black">mnie</span>
                </h2>
                <p data-aos="fade-up">
                    Jestem pasjonatom i samoukiem programowania w Frontendzie
                    (Next.js & Tailwind). Z ogromnym entuzjazmem podchodzę do
                    poznawania nowych technologii. Pixel perfect design i
                    pisanie jasnego, czytelnego, wysoce wydajnego kodu są dla
                    mnie bardzo ważne.
                </p>
                <p data-aos="fade-up">
                    Moja przygoda z programowaniem rozpoczęła się jeszcze przed
                    pójściem do szkoły średniej (2018). Na zajęciach z Frontendu
                    zrozumiałem, że jest to coś dla mnie i chciałbym z tym
                    związać swoją przyszłość. <br />
                    Kontynuowałem, więc naukę na własną rękę i próbowałem
                    samodzielnie, od podstaw zrozumieć jak pisać kod — wtedy
                    jeszcze w czystym HTML, CSS, JS. <br />
                    Po zakończeniu edukacji rozpocząłem pracę w firmie
                    zajmującej się głównie CMS&apos;em TYPO3 oraz WordPress
                    (2022). Tam po raz pierwszy zetknąłem się z React oraz
                    TailwindCSS podczas pisania projektu w GatsbyJS. 😊
                </p>
                <p data-aos="fade-up">
                    Poznawałem i poznaję do tej pory ten stack technologii,
                    wymieniłem jedynie GatsbyJS na NextJS, twierdzę, że pozwala
                    mi to na więcej swobody. I właśnie przy użyciu tych narzędzi
                    powstała ta strona — React, Next.JS, TailwindCSS oraz MDX.
                </p>
            </div>
        </div>
    );
};

export default AboutMeSection;
