//Import FileSystem from Node.js
import fs from "fs";
//Import gray-matter package
import matter from "gray-matter";

export default function getPostMetadata(basePath) {
    //Create path to folder e.g. "posts/"
    const folder = "./" + basePath + "/";
    //Read contents of given directiory
    const files = fs.readdirSync(folder);
    //Select only .mdx files
    const mdxPosts = files.filter((file) => file.endsWith(".mdx"));

    //Create Posts array with title and slug
    const posts = mdxPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
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
    });
    return posts;
}
