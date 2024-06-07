import getPostMetadata from "@/utils/getPostMetadata";
import { createBlogPostSlug } from "@/utils/createBlogPostSlug";
import Link from "next/link";

const RecentPosts = () => {
    const postMetadata = getPostMetadata("posts");

    const recentPosts = postMetadata.slice(0, 4);
    return (
        <div className="dark:bg-black-200 pb-8">
            <div className="container flex flex-col">
                <h2 className="dark:text-white mb-4">Najnowsze wpisy</h2>
                {recentPosts.map((post, index) => {
                    return (
                        <Link
                            key={index}
                            href={createBlogPostSlug("/blog/", post.title)}
                        >
                            {post.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentPosts;
