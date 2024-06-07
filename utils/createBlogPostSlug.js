import slugify from "slugify";

export const createBlogPostSlug = (basePath, slug) => {
    const newSlug =
        basePath +
        slugify(slug, {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
        });

    return newSlug;
};
