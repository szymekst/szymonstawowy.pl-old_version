export const FooterLinks = [
    {
        name: "GitHub",
        url: "https://www.github.com/szymekst",
    },
    {
        name: "Email",
        url: "praca.szymonstawowy@gmail.com",
    },
];

const currentYear = () => {
    return new Date().getFullYear();
};

const Footer = () => {
    return (
        <>
            <footer className="dark:bg-black-200">
                <div className="container pt-8 pb-6 flex flex-col justify-center md:flex-row md:justify-start">
                    <div className="flex flex-col justify-center items-center gap-3 md:flex-row">
                        {FooterLinks.map((link, index) => {
                            return (
                                <a
                                    key={index}
                                    href={
                                        link.url.includes("@")
                                            ? "mailto:" + link.url
                                            : link.url
                                    }
                                    className="hover_link text-xl dark:text-white"
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <p className="text-center text-black-100 text-xl dark:text-white  md:-order-1">
                            &copy; {currentYear()}
                        </p>
                        <p className="text-xl text-black-100 dark:text-white pt-8 md:pt-0">
                            🖤 to{" "}
                            <a
                                target="_blank"
                                href="https://www.figma.com/community/file/1318529372146880502/illustration-based-portfolio-website-template"
                            >
                                Design
                            </a>{" "}
                            &{" "}
                            <a
                                target="_blank"
                                href="https://www.figma.com/community/file/1235152009438565697/the-blog-a-web-personal-blog"
                            >
                                Design #2
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
