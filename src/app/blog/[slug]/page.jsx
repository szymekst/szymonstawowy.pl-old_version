//Import FileSystem from Node.js
import fs from "fs";
//Import packages
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

import { metadata } from "@app/layout";

//Get content from file with this slug, slug is taken from staticParams
function getPostContent(slug) {
    const folder = "posts/";
    const file = folder + `${slug}.mdx`;
    const content = fs.readFileSync(file, "utf8");

    const matterResult = matter(content);
    return matterResult;
}

//Return title of the page
export async function generateMetadata({ params }) {
    const post = getPostContent(params.slug);
    return {
        title: `${post.data.title + " | " + metadata.title}`,
    };
}

export default function BlogPost({ params }) {
    const post = getPostContent(params.slug);
    return <Markdown>{post.content}</Markdown>;
}
