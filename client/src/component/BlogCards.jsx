import React from 'react';
import { Link } from 'react-router-dom';


const BlogCards = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/blog.png",
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracy Wilson",
      date: "August 8, 2025",
      authorImage: "/author.png"
    },
    {
      id: 2,
      image: "/blog.png",
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracy Wilson",
      date: "August 8, 2025",
      authorImage: "/author.png"
    },
    {
      id: 3,
      image: "/blog.png",
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracy Wilson",
      date: "August 8, 2025",
      authorImage: "/author.png"
    },
    {
      id: 4,
      image: "/blog.png",
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracy Wilson",
      date: "August 8, 2025",
      authorImage: "/author.png"
    },
    {
      id: 5,
      image: "/blog.png",
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracy Wilson",
      date: "August 8, 2025",
      authorImage: "/author.png"
    },
    {
      id: 6,
      image: "/blog.png",
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracy Wilson",
      date: "August 8, 2025",
      authorImage: "/author.png"
    },
    {
      id: 7,
      image: "/blog.png",
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracy Wilson",
      date: "August 8, 2025",
      authorImage: "/author.png"
    },
    {
      id: 8,
      image: "/blog.png",
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracy Wilson",
      date: "August 8, 2025",
      authorImage: "/author.png"
    },
    {
      id: 9,
      image: "/blog.png",
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracy Wilson",
      date: "August 8, 2025",
      authorImage: "/author.png"
    }
  ];

  return (
    <div className="min-h-screen text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Blogs</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            "Empowering businesses to thrive through innovative IT solutions"
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-2">
            "Transforming ideas into impactful digital solutions with over 10 years of expertise."
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative overflow-hidden pt-4 pl-2 pb-2 pr-2">
                <img
                  src={post.image}
                  alt={post.title}
                  className=" h-48 "
                />
                <div className="absolute inset-0 "></div>
              </div>
              <button className=" bg-gray-400 text-purple-400 text-xs md:text-sm font-medium py-1 px-3 mt-2 ml-5 rounded-b-xs">
                Technology
              </button>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold mb-4 text-white leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  {post.title}
                </h3>


                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-gray-300 text-sm font-medium">{post.author}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;