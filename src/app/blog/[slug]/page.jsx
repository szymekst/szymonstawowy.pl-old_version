//Import FileSystem from Node.js
import fs from "fs";
//Import gray-matter and Markdown-to-jsx package
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

//Import utils
import getPostMetadata from "@/utils/getPostMetadata";

function getPostContent(slug) {
    const folder = "posts/";
    const file = folder + `${slug}.mdx`;
    const content = fs.readFileSync(file, "utf8");

    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata("posts");
    return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
    const id = params?.slug ? " ⋅ " + params?.slug : "";
    return {
        title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
    };
}

export default function BlogPost(props) {
    console.log(props);
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return <Markdown>{post.content}</Markdown>;
}
