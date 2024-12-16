import React from "react";

import Boy2 from "@assets/svg/boy2.svg";

const AboutMeSection = () => {
    return (
        <div className="container py-5 flex flex-col md:grid md:grid-cols-2 md:py-10 md:gap-20 relative">
            <div className=" md:top-0 flex justify-center md:justify-end mb-6 md:mb-0">
                <Boy2 className="w-full" />
            </div>

            <div className="flex flex-col gap-5 md:gap-7 md:justify-centerm">
                <h2 className="text-3xl md:text-5xl">
                    O <span className="font-black">mnie</span>
                </h2>
                <p>
                    Jestem pasjonatą i samoukiem programowania w Front-endzie
                    (Next.js & Tailwind). Z ogromnym entuzjazjem podchodzę do
                    poznawania nowych technologii. Pixel perfect design i
                    pisanie jasnego, czytelnego, wysoce wydajnego kodu są dla
                    mnie ważne.
                </p>
                <p>
                    Moja przygoda z programowaniem rozpoczęła się jeszcze przed
                    pójściem do szkoły średniej (2018). Na zajęciach z Frontendu
                    zrozumiałem, że jest to coś dla mnie i chciałbym z tym
                    związać swoją przyszłośc. <br />
                    Kontynuowałem, więc nauke na własną rękę i próbowałem
                    samodzielnie, od podstaw zrozumieć jak pisać kod - wtedy
                    jeszcze w czystym HTML, CSS, JS. <br />
                    Po zakończeniu edukacji rozpocząłem pracę w firmię
                    zajmującej się głownie CMS&apos;em TYPO3 oraz WordPress
                    (2022). Tam po raz pierwszy zetknąłem się z React oraz
                    TailwindCSS podczas pisania projeku w GatsbyJS - zakochałem
                    się w tym od pierwszego kodzenia 😊
                </p>
                <p>
                    Poznawałem i poznajdę do tej pory ten stack technologii,
                    wymieniłem jedynie GatsbyJS na NextJS, twierdzę, że pozwala
                    mi to na więcej swobody oraz jest lepiej rozwinięte i
                    zadbane. I właśnie przy użyciu tych narzędzi powstała ta
                    strona - React, Next.JS, TailwindCSS oraz MDX.
                </p>
                <p>
                    Programuje hobbistycznie, a kiedy tego nie robie to czytam
                    dużo książek (głownie literatura faktu oraz piękna) oraz
                    biegam krótkie dystanse - pomaga mi to zachować czystą i
                    spokojną głowe.
                </p>
            </div>
        </div>
    );
};

export default AboutMeSection;
