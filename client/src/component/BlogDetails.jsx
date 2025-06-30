import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true); // ✅ Start loading
      try {
        const res = await axios.get(`https://vaipali-website-backend.vercel.app/api/blogs/${id}`);
        setBlog(res.data.blog);

        const allBlogs = await axios.get("https://vaipali-website-backend.vercel.app/api/blogs");
        const filtered = allBlogs.data.blogs.filter((b) => b._id !== id);
        setOtherBlogs(filtered);
      } catch (err) {
        console.error("Error loading blog:", err);
      } finally {
        setLoading(false); // ✅ End loading
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

  // ✅ Show loading spinner
  if (loading || !blog) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg">Loading blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white px-4 sm:px-6 lg:px-12 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Other Blogs */}
        <div className="w-full lg:w-1/3 lg:max-h-screen lg:overflow-y-auto lg:sticky lg:top-4 scrollbar-hide">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">Other Blogs</h2>
          <div className="space-y-6">
            {otherBlogs.map((b) => (
              <div
                key={b._id}
                onClick={() => navigate(`/blogs/${b._id}`)}
                className="cursor-pointer bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
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
                  <p className="text-sm text-gray-300 mb-1">
                    {b.content.length > 100 ? b.content.slice(0, 100) + "..." : b.content}
                  </p>
                  <p className="text-xs text-gray-500">
                    By {b.author || "Admin"} <br /> {formatDate(b.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Blog Details */}
        <div className="lg:w-2/3 scrollbar-hide">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{blog.title}</h1>
            <button
              onClick={() => navigate("/blog")}
              className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded shadow-md transition cursor-pointer"
            >
              ← Back to List
            </button>
          </div>

          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-h-[400px] object-cover rounded-lg mb-6"
            />
          )}

          <p className="text-sm text-gray-400 mb-4">
            By <span className="font-medium">{blog.author || "Admin"}</span> • {formatDate(blog.date)}
          </p>

          <p className="text-gray-200 leading-relaxed whitespace-pre-line text-justify">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
