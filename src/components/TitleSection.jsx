const TitleSection = ({ title }) => {
    return (
        <div className="dark:bg-black-200 py-[20px] md:py-[30px]">
            <div className="container px-[10px] md:px-[30px] lg:px-[70px]">
                <h1 className="uppercase text-center dark:text-white border-y-[1px] border-black-300 dark:border-white">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default TitleSection;
