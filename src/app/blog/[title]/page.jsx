//Import FileSystem from Node.js and React Stuff
import fs from "fs";
import Image from "next/image";

//Import packages
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import slugify from "slugify";

//Import utils & functions <-- DRY
import { exportPostMetadata } from "../page";
import { createDate } from "../page";

//Import metadata
import { metadata } from "@app/layout";

//Get current post data by title
const getCurrentPost = (postMetadata, titleProp) => {
    const currentByTitle = postMetadata.filter(
        (post) =>
            slugify(post.title, {
                lower: true,
                remove: /[*+~.()'"!:@]/g,
            }) === titleProp
    );
    return currentByTitle[0];
};

//Get content from MDX file
const getPostContent = (titleProp) => {
    const postMetadata = exportPostMetadata();
    const currentPost = getCurrentPost(postMetadata, titleProp);

    const file = currentPost.filePath;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);

    return matterResult;
};

// Return title of the page
export async function generateMetadata({ params }) {
    const post = getPostContent(params.title);
    return {
        title: `${post.data.title + " | " + metadata.title}`,
    };
}

export default function BlogPost({ params }) {
    const post = getPostContent(params.title);
    return (
        <div className="dark:bg-black-200">
            <div className="container py-[20px] lg:py-[30px]">
                <div className="flex flex-col gap-[16px] md:gap-[32px] pb-[30px]">
                    <p className="text-purple-200 text-sm font-semibold">
                        {createDate(post.data.date)}
                    </p>
                    <h1 className="text-lg md:text-3xl dark:text-white">
                        {post.data.title}
                    </h1>
                    <Image
                        src={
                            post.data.featImg ??
                            "/blog-imgs/placeholder-image.png"
                        }
                        alt={post.data.alt}
                        width={1360}
                        height={430}
                        className="w-full max-h-[260px] md:max-h-[430px] object-cover"
                    />
                    <div className="flex flex-col gap-[12px]">
                        <Markdown>{post.content}</Markdown>
                    </div>
                </div>
            </div>
        </div>
    );
}
