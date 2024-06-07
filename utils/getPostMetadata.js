//Import FileSystem and path from Node.js
import fs from "fs";
import path from "path";
//Import gray-matter package
import matter from "gray-matter";

import { createDateObject } from "@app/blog/page";

export default function getPostMetadata(basePath) {
    //Create path to folder e.g. "posts/"
    const folder = basePath + "/";
    //Read contents of given directiory
    const files = fs.readdirSync(path.resolve(process.cwd(), folder));
    //Select only .mdx files
    const mdxPosts = files.filter((file) => file.endsWith(".mdx"));

    //Create Posts array with title and slug
    const posts = mdxPosts
        .map((filename) => {
            const fileContents = fs.readFileSync(
                path.resolve(process.cwd(), `${basePath}/${filename}`)
            );
            const matterResult = matter(fileContents);
            const filePath = `${basePath}/${filename}`;
            return {
                title: matterResult.data.title,
                date: matterResult.data.date,
                excerpt: matterResult.data.excerpt,
                img: matterResult.data.featImg,
                alt: matterResult.data.alt,
                filePath: filePath,
            };
        })
        .sort((a, b) => {
            const dateObjectA = createDateObject(a.date);
            const dateObjectB = createDateObject(b.date);

            return dateObjectB - dateObjectA;
        });

    return posts;
}
