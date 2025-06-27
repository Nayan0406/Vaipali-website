import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    setLoading(true); // ✅ start loading
    try {
      const res = await axios.get("https://vaipali-website-backend.vercel.app/api/blogs");
      setBlogs(res.data.blogs);
    } catch (err) {
      console.error("Error fetching blogs", err);
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  useEffect(() => {
    fetchBlogs();
    const interval = setInterval(() => {
      fetchBlogs();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // ✅ Show spinner if loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#0f0f11] text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
        Blog List
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            onClick={() => handleCardClick(blog._id)}
            className="cursor-pointer bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {blog.image && (
              <img
                src={`${blog.image}`}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
            )}

            <div className="p-5 flex flex-col gap-2 text-white">
              <h3 className="text-xl font-bold text-purple-400">{blog.title}</h3>

              <p className="text-sm text-gray-200">
                {blog.content.length > 150
                  ? blog.content.slice(0, 150) + "..."
                  : blog.content}
              </p>
              <div className="text-sm text-white mb-1">
                By : <span className="font-medium">{blog.author}</span><br />
                <p>{formatDate(blog.date)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
