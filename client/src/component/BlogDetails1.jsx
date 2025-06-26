import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/blogs/${id}`);
        setBlog(res.data.blog);

        const allBlogs = await axios.get("http://localhost:8000/api/blogs");
        const filtered = allBlogs.data.blogs.filter((b) => b._id !== id);
        setOtherBlogs(filtered);
      } catch (err) {
        console.error("Error loading blog:", err);
      }
    };

    fetchBlogData();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!blog) return <div className="text-white text-center py-20">Loading blog...</div>;

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Other Blogs */}
        <div className="lg:w-1/3 lg:pr-10">
          <h2 className="text-2xl font-bold mb-6">Other Blogs</h2>
          <div className="space-y-6">
            {otherBlogs.map((b) => (
              <div
                key={b._id}
                onClick={() => navigate(`/blogs/${b._id}`)}
                className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                {b.image && (
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-1">{b.title}</h3>
                  <p className="text-xm text-white mb-1">
                    {b.content.length > 100 ? b.content.slice(0, 100) + "..." : b.content}
                  </p>
                  <p className="text-s text-gray-400">
                    By {b.author} <br /> {formatDate(b.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Blog Details */}
        <div className="lg:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-400">{blog.title}</h1>
            <button
              onClick={() => navigate("/blog")}
              className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded cursor-pointer"
            >
              Back to List
            </button>
          </div>

          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-80 object-cover rounded mb-6"
            />
          )}

          <p className="text-sm text-gray-400 mb-6">
            By <span className="font-medium">{blog.author}</span> • {formatDate(blog.date)}
          </p>
          <p className="text-gray-200 leading-relaxed whitespace-pre-line">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
