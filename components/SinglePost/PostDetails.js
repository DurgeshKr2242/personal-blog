import React from "react";

const PostDetails = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full max-w-2xl gap-6 px-10 pt-6 shadow-md bg-gray-200/30 dark:bg-gray-900/30 rounded-2xl">
      <div className="flex justify-start w-full">
        <p className="text-sm btn bg-Blue hover:underline">#Productivity</p>
      </div>
      <img
        className="object-cover w-full shadow-lg h-80 rounded-3xl"
        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="CarPic"
      />

      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-center text-gray-700 dark:text-gray-400">
            Durgesh Kumar - October 30, 2021
          </p>
          <p className="text-left text-gray-700 dark:text-gray-400">
            <span className="font-semibold text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              officiis quisquam, reiciendis accusantium voluptatibus ut ratione
              dolorem iure non odio consectetur facilis quae deleniti voluptates
              fugiat sapiente inventore in praesentium.
            </span>
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint
          earum excepturi voluptatibus doloremque perferendis quis accusamus
          optio omnis repellendus suscipit saepe nobis voluptate quidem magni
          iure dolore eligendi quod, quas incidunt repellat placeat officiis
          atque! Nihil aut velit, hic commodi eaque explicabo impedit dolorem
          quaerat excepturi magni maxime. Ea autem placeat, temporibus doloribus
          molestiae, sapiente, vitae magnam sequi nostrum officia ab nulla ullam
          perspiciatis? Labore asperiores praesentium laboriosam quisquam, ab at
          deleniti ipsum quibusdam adipisci illum quas nisi excepturi eligendi
          numquam reiciendis! Ad beatae eius tenetur possimus neque ipsa quam
          sed, facere optio soluta iure molestiae officia adipisci magni?
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
