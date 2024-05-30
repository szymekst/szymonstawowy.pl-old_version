export const FooterLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
    },
    {
        name: "GitHub",
        url: "https://www.github.com",
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
                                    href={link.url}
                                    className="text-xl dark:text-white"
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <p className="text-center text-black-100 text-xl pt-8 dark:text-white md:pt-0 md:-order-1">
                            &copy; {currentYear()}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
