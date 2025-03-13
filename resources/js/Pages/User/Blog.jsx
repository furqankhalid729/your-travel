import React from "react";
import { blogPosts } from "../../Components/User/Blog/BlogPosts";
import BlogCard from "../../Components/User/snippets/BlogCard";
import UserLayout from "../../Layout/UserLayout";

const Blog = () => {
  return (
    <>
      <h1 className=" text-2xl sm:text-5xl font-bold text-red-500 mt-12 text-center">
        Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:mx-16">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            image={post.image}
            title={post.title}
            description={post.content}
          />
        ))}
      </div>
    </>
  );
};
Blog.layout = page => <UserLayout children={page} title="Blog" />
export default Blog;
