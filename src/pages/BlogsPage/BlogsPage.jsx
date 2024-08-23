//Images
import Blogs from "../../blogs.js";

//Blogs
import { useEffect } from "react";
export default function BlogsPage() {
  useEffect(() => {
    document.title = "Blogs";
  }, []);

  return (
    <>
      <div className="bg-custom-bg-color pb-16 font-serif">
        <div className="text-custom-primary-color pt-16 space-y-4  text-center">
          <h1 className="text-3xl font-bold">Latest Blogs</h1>

          <div className="flex flex-wrap justify-around ml-8 mr-8">
            {Blogs.map((blog) => (
              <div key={blog.blog_id} className="w-1/4 text-wrap space-y-4 m-4">
                <img src={blog.thumb} className="mx-auto" />
                <h3 className="text-2xl font-semibold">{blog.blog_title}</h3>
                <p>
                  {blog.contentDetails.content &&
                  blog.contentDetails.content.length > 150
                    ? `${blog.contentDetails.content.substring(0, 150)}...`
                    : blog.contentDetails.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
