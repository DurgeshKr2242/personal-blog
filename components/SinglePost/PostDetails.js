import React from "react";

const PostDetails = ({ blogDetails }) => {
  const { Title, Description, Slug, Content, author, createdAt, CoverImage } =
    blogDetails;
  console.log(Title);
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-2xl gap-6 px-10 pt-6 shadow-md bg-gray-200/30 dark:bg-gray-900/30 rounded-2xl">
      <div className="flex justify-start w-full">
        <p className="text-sm btn bg-Blue hover:underline">#Productivity</p>
      </div>

      <img
        className="object-cover w-full shadow-lg h-80 rounded-3xl"
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${CoverImage.data.attributes.formats.large.url}`}
        // layout="fill"
        alt={CoverImage.data.attributes.alternativeText}
      />
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-bold text-center">{Title}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-center text-gray-700 dark:text-gray-400">
            {author.data.attributes.username} - {createdAt}
          </p>
          <p className="text-left text-gray-700 dark:text-gray-400">
            <span className="font-semibold text-black dark:text-white">
              {Description}
            </span>
          </p>
        </div>

        <p>{Content}</p>
      </div>
    </div>
  );
};

export default PostDetails;
