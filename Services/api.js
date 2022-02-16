import client from "./sanity";

const blogFields = `
    title,
    subtitle,
    description,
    'slug' : slug.current,
    date,
    'coverImage' : coverImage.asset->url,
    "author" : author->{name, "avatar" : avatar.asset->url},
`;

export const getAllBlogs = async () => {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
};

export const getBlogBySlug = async (slug) => {
  const result = await client.fetch(
    `*[_type =="blog" && slug.current ==$slug] {${blogFields}}`,
    { slug }
  );

  return result[0];
};
