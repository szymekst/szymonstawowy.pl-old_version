const TitleSection = ({ title }) => {
    return (
        <div className="dark:bg-black-200 py-5 md:py-8">
            <div className="container px-2 md:px-8 lg:px-16">
                <h1
                    data-aos="fade-up"
                    className="uppercase text-center dark:text-white border-y-[1px] border-black-200 dark:border-white"
                >
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default TitleSection;
