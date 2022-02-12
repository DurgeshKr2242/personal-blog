import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            excerpt
            featuredPost
            id
            slug
            title
            author {
              name
              bio
              id
              photo {
                url
              }
            }
            featuredImage {
              url
            }
            categories {
              name
              slug
              id
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(orderBy: createdAt_ASC
        last : 3
        ) {
        title
        featuredImage {
          url
        }
        id
        createdAt
        slug
        author {
          name
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories_: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $catrgories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });
  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};
