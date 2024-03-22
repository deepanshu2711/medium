import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export const BlogCard = ({
  id,
  title,
  content,
  publishedDate,
  authorName,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b mt-4 cursor-pointer">
        <div className="flex items-center gap-2">
          <Avatar username={authorName} />
          <span className="font-medium">{authorName}</span>.{" "}
          <span className="text-gray-500 text-sm ">{publishedDate}</span>
        </div>
        <div className="font-bold text-xl lg:text-3xl mt-2">{title}</div>
        <div className="line-clamp-5 lg:line-clamp-3 font-normal mt-2">
          {content}
        </div>
        <div className="text-gray-500 text-sm my-6">{`${Math.ceil(
          content.length / 200
        )} min read`}</div>
      </div>
    </Link>
  );
};

export function Avatar({ username }: { username: string }) {
  return (
    <div className="border-2 border-black relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {username.slice(0, 1).toUpperCase()}
      </span>
    </div>
  );
}
