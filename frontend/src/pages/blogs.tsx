import { AppBar } from "../components/appbar";
import { BlogCard } from "../components/blog-card";
import { BlogSkeleton } from "../components/blog-skeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-6xl mx-auto p-4">
      <AppBar />
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            authorName={blog.author.username || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate={"2nd Feb 2024"}
          />
        ))}
    </div>
  );
};
