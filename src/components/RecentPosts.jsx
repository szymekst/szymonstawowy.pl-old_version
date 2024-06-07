import getPostMetadata from "@/utils/getPostMetadata";
import { createBlogPostSlug } from "@/utils/createBlogPostSlug";
import Link from "next/link";
import Image from "next/image";
import { createDateString } from "@app/blog/page";

const RecentPosts = () => {
    const postMetadata = getPostMetadata("posts");

    const recentPosts = postMetadata.slice(0, 4);
    return (
        <div className="dark:bg-black-200 pb-16">
            <div className="container flex flex-col gap-6 md:gap-8">
                <h2 className="dark:text-white mb-4">Najnowsze wpisy</h2>
                {recentPosts.map((post, index) => {
                    return (
                        <Link
                            key={index}
                            href={createBlogPostSlug("/blog/", post.title)}
                            className={`flex flex-col [&_*]:cursor-pointer group ${
                                index === 1 || index === 2 ? "md:flex-row" : ""
                            }`}
                        >
                            <div
                                className={`h-[240px] w-full ${
                                    index === 1 || index === 2
                                        ? "md:max-w-[320px] md:mr-6"
                                        : ""
                                }`}
                            >
                                <Image
                                    src={
                                        post.img ??
                                        "/blog-imgs/placeholder-image.png"
                                    }
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPctevgfgAHYQL2xHt5JgAAAABJRU5ErkJggg=="
                                    width={400}
                                    height={300}
                                    alt={post.alt}
                                    className={`w-full h-full object-cover group-hover:brightness-95 transition-all`}
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-purple-200 text-sm font-semibold">
                                    {createDateString(post.date)}
                                </p>
                                <h3 className="dark:text-white group-hover:text-purple-200 transition-colors">
                                    {post.title}
                                </h3>
                                <p>{post.excerpt}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentPosts;
