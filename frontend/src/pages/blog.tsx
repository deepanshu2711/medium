import { useParams } from "react-router-dom";
import { FullPost } from "../components/full-post";
import { useBlog } from "../hooks";
import { BlogSkeleton } from "../components/blog-skeleton";

export const Blog = () => {
  const { id } = useParams();

  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div className="mt-20">
        <BlogSkeleton />
      </div>
    );
  }
  return <div>{blog && <FullPost blog={blog} />}</div>;
};
