//Import Next.js Stuff
import Link from "next/link";
import Image from "next/image";

//Import utils and components
import getPostMetadata from "@/utils/getPostMetadata";
import TitleSection from "@components/TitleSection";

const createDate = (stringDate) => {
    const days = [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota",
    ];

    const months = [
        "Sty",
        "Lut",
        "Mar",
        "Kwi",
        "Maj",
        "Cze",
        "Lip",
        "Sie",
        "Wrz",
        "Paź",
        "Lis",
        "Gru",
    ];

    //Create Array from date with format DD.MM.YYYY
    const dateToArray = stringDate.split(".");

    //Convert date to YYYY-MM-DD
    const dateObject = new Date(
        dateToArray[2],
        dateToArray[1] - 1,
        dateToArray[0]
    );

    //Get day & month name
    const dayName = days[dateObject.getDay()];
    const monthName = months[dateObject.getMonth()];

    const stringToReturn = `${dayName}, ${dateObject.getDate()} ${monthName} ${dateObject.getFullYear()}`;

    return stringToReturn;
};

const page = () => {
    const postMetadata = getPostMetadata("posts");
    return (
        <>
            <TitleSection title="The Blog" />
            <div className="dark:bg-black-200">
                <div className="container">
                    <h2 className="dark:text-white mb-[16px]">
                        All blog posts
                    </h2>
                    <div className="flex flex-col gap-[16px] md:grid md:grid-cols-2 md:gap-x-[16px] md:gap-y-[24px] lg:grid-cols-3 lg:gap-x-[32px] lg:gap-y-[48px] ">
                        {postMetadata.map((post, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={`/blog/${post.slug}`}
                                    className="flex flex-col [&_*]:cursor-pointer group"
                                >
                                    <div className="h-[240px] w-full mb-[32px]">
                                        <Image
                                            src={
                                                post.img !== undefined
                                                    ? post.img
                                                    : "/blog-imgs/placeholder-image.png"
                                            }
                                            width={400}
                                            height={300}
                                            alt={post.alt}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        <p className="text-purple-200 text-sm font-semibold">
                                            {createDate(post.date)}
                                        </p>
                                        <h3 className="dark:text-white">
                                            {post.title}
                                        </h3>
                                        <p></p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    {/* {numPages > 1 ? (
                        <div className="pt-[30px] pb-[50px] flex flex-col items-center gap-[20px] text-sm font-medium dark:text-white md:flex-row md:justify-between md:pt-[50px] md:pb-[60px] lg:py-[30px]">
                            <Link
                                to={prevPage}
                                rel="prev"
                                className={
                                    prevIsFirst ? "pointer-events-none" : ""
                                }
                            >
                                ← Poprzednia
                            </Link>
                            <div className="flex justify-center gap-[2px]">
                                {Array.from({ length: numPages }, (_, i) =>
                                    numPages >= 8 ? (
                                        <>
                                            {i < 3 ? (
                                                <Link
                                                    key={`pagination-number${
                                                        i + 1
                                                    }`}
                                                    to={`${
                                                        i === 0
                                                            ? "/blog"
                                                            : "/blog/" + (i + 1)
                                                    }`}
                                                    className="w-[40px] h-[40px] rounded-[8px] flex justify-center items-center"
                                                    activeClassName="!bg-purple-200 text-purple-100 dark:!bg-white dark:text-black-100"
                                                >
                                                    {i + 1}
                                                </Link>
                                            ) : (
                                                ""
                                            )}
                                            {i === 4 ? (
                                                <div className="w-[40px] h-[40px] rounded-[8px] flex justify-center items-center">
                                                    ...
                                                </div>
                                            ) : (
                                                ""
                                            )}

                                            {i >= numPages - 3 &&
                                            i <= numPages ? (
                                                <>
                                                    <Link
                                                        key={`pagination-number${
                                                            i + 1
                                                        }`}
                                                        to={`${
                                                            i === 0
                                                                ? "/blog"
                                                                : "/blog/" +
                                                                  (i + 1)
                                                        }`}
                                                        className="w-[40px] h-[40px] rounded-[8px] flex justify-center items-center"
                                                        activeClassName="!bg-purple-200 text-purple-100 dark:!bg-white dark:text-black-100"
                                                    >
                                                        {i + 1}
                                                    </Link>
                                                </>
                                            ) : (
                                                ""
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                key={`pagination-number${
                                                    i + 1
                                                }`}
                                                to={`${
                                                    i === 0
                                                        ? "/blog"
                                                        : "/blog/" + (i + 1)
                                                }`}
                                                className="w-[40px] h-[40px] rounded-[8px] flex justify-center items-center"
                                                activeClassName="!bg-purple-200 text-purple-100 dark:!bg-white dark:text-black-100"
                                            >
                                                {i + 1}
                                            </Link>
                                        </>
                                    )
                                )}
                            </div>
                            <Link
                                to={nextPage}
                                rel="next"
                                className={
                                    nextIsLast ? "pointer-events-none" : ""
                                }
                            >
                                Nastepna →
                            </Link>
                        </div>
                    ) : (
                        <></>
                    )} */}
                </div>
            </div>
        </>
    );
};

export default page;
