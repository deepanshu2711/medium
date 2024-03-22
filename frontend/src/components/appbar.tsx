import { Link } from "react-router-dom";
import { Avatar } from "./blog-card";

export const AppBar = () => {
  return (
    <div className="p-3 flex justify-between items-center border-b">
      <Link to={"/blogs"}>
        <div className="text-3xl lg:text-5xl font-bold text-gray-500 cursor-pointer">
          Medium
        </div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <button className="px-8 py-1  bg-green-700 text-white rounded-full mr-4 font-semibold hover:bg-green-800">
            Publish
          </button>
        </Link>
        <Avatar username="Deepanshu" />
      </div>
    </div>
  );
};
