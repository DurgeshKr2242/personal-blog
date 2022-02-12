import { AiOutlineRight } from "react-icons/ai";
const SingleRelatedPost = () => {
  return (
    <div className="flex flex-col gap-2 px-4 py-6 text-sm border-t-[1px] border-white/40 dark:border-black/60">
      <div className="flex flex-col gap-1">
        <p className="text-gray-700 dark:text-gray-400">
          <span className="text-xs font-semibold text-black leading-[5px] dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </span>
        </p>

        <p className="text-xs italic text-gray-700 dark:text-gray-400">
          Durgesh Kumar - Jan 12, 2021
        </p>
      </div>
      <div className="flex justify-end">
        <button className="px-2 py-1 text-xs dark:bg-white/60 bg-black/70 btn">
          Read Article <AiOutlineRight className="font-bold" />
        </button>
      </div>
    </div>
  );
};

export default SingleRelatedPost;
