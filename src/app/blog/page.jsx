//Import Next.js Stuff
import Link from "next/link";
import Image from "next/image";

//Import utils and components
import getPostMetadata from "@/utils/getPostMetadata";
import TitleSection from "@components/TitleSection";
import PaginationControls from "@components/PaginationControls";

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

const page = ({ searchParams }) => {
    const postMetadata = getPostMetadata("posts");

    const currentPage = searchParams["currentPage"] ?? "1";
    const postsPerPage = searchParams["postsPerPage"] ?? "3";

    const skipPosts = (Number(currentPage) - 1) * Number(postsPerPage);
    const limitPosts = skipPosts + Number(postsPerPage);

    const allPosts = postMetadata.slice(skipPosts, limitPosts);

    const numOfPages = Math.ceil(
        Number(postMetadata.length) / Number(postsPerPage)
    );

    return (
        <>
            <TitleSection title="The Blog" />
            <div className="dark:bg-black-200">
                <div className="container">
                    <h2 className="dark:text-white mb-[16px]">
                        All blog posts
                    </h2>
                    <div className="flex flex-col gap-[16px] md:grid md:grid-cols-2 md:gap-x-[16px] md:gap-y-[24px] lg:grid-cols-3 lg:gap-x-[32px] lg:gap-y-[48px] ">
                        {allPosts.map((post, index) => {
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
                                        <p>{post.excerpt}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <PaginationControls
                        currentPageProp={currentPage}
                        postsPerPageProp={postsPerPage}
                        numOfPages={numOfPages}
                        hasPrevPage={skipPosts > 0}
                        hasNextPage={limitPosts < postMetadata.length}
                    />
                </div>
            </div>
        </>
    );
};

export default page;
