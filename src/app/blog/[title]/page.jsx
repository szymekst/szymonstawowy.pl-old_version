//Import FileSystem from Node.js and React Stuff
import fs from "fs";
import Image from "next/image";

//Import packages
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import slugify from "slugify";

//Import utils & functions <-- DRY
import { createDate } from "../page";

//Import metadata
import { metadata } from "@app/layout";
import getPostMetadata from "@/utils/getPostMetadata";

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
    const postMetadata = getPostMetadata("posts");
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
            <div className="container py-5 lg:py-8">
                <div className="flex flex-col gap-4 md:gap-8 min-h-screen">
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
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPctevgfgAHYQL2xHt5JgAAAABJRU5ErkJggg=="
                        alt={post.data.alt}
                        width={1360}
                        height={430}
                        quality={100}
                        className="w-full max-h-[260px] md:max-h-[430px] object-cover"
                    />
                    <div className="flex flex-col gap-3">
                        <Markdown className="blog_post">
                            {post.content}
                        </Markdown>
                    </div>
                </div>
            </div>
        </div>
    );
}
