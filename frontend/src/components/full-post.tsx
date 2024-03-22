import { Blog } from "../hooks";
import { AppBar } from "./appbar";
import { Avatar } from "./blog-card";

export const FullPost = ({ blog }: { blog: Blog }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <AppBar />
      <div className="grid grid-cols-12 h-full  mt-10 p-4">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">{blog.title}</h1>
              <p className="text-gray-400">Posted on August 24, 2024</p>
            </div>
            <div>
              <p>{blog.content}</p>
            </div>
          </div>
        </div>
        <div className=" hidden lg:col-span-4 w-full lg:flex lg:flex-col">
          <div>
            <h2 className="font-medium">Author</h2>
          </div>
          <div className="flex items-center p-2 gap-3">
            <div>
              <Avatar username={blog.author.username} />
            </div>
            <div>
              <h2 className="text-xl font-bold">{blog.author.username}</h2>
              <p>
                Random catch phrase about the author's ability to grab the users
                attention
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
