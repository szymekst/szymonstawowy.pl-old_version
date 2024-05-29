//Import FileSystem from Node.js
import fs from "fs";
//Import packages
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import slugify from "slugify";

//Import utils
import getPostMetadata from "@/utils/getPostMetadata";

import { metadata } from "@app/layout";

//Get content from file with this slug, slug is taken from staticParams
function getPostContent(slug) {
    const folder = "posts/";
    const file = folder + `${slug}.mdx`;
    const content = fs.readFileSync(file, "utf8");

    const matterResult = matter(content);
    return matterResult;
}

//Create static params, in this case slug
export const generateStaticParams = async () => {
    const posts = getPostMetadata("posts");
    return posts.map((post) => ({ slug: post.slug }));
};

//Return title of the page
export async function generateMetadata({ params }) {
    return {
        title: `${params?.slug + " | " + metadata.title}`,
    };
}

export default function BlogPost(props) {
    console.log(props);
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return <Markdown>{post.content}</Markdown>;
}
