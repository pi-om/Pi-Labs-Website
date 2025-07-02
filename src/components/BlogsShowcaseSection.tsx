import React from "react";

// Dummy blog data for showcase
const blogs = [
  {
    image: "/public/scout_img.png",
    title: "The sunset faded to twilight",
    author: "Donald Rafael",
    date: "April 8, 2018",
  },
  {
    image: "/public/og-image-update.png",
    title: "I shouted above the sudden noise.",
    author: "Donald Rafael",
    date: "February 14, 2019",
  },
  {
    image: "/public/placeholder.svg",
    title: "The great excavation lay far from the plaza",
    author: "Donald Rafael",
    date: "",
  },
  {
    image: "/public/text-mask-image.jpg",
    title: "Testing images in the post",
    author: "Donald Rafael",
    date: "",
  },
  {
    image: "/public/Layer 2.png",
    title: "The station generally occupied by the pilot",
    author: "Donald Rafael",
    date: "October 20, 2011",
  },
];

const BlogsShowcaseSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column: 1 large + 2 small */}
        <div className="flex flex-col gap-6 md:col-span-2">
          {/* Large blog - increased height */}
          <div className="relative h-96 md:h-[520px] rounded-lg overflow-hidden group">
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white z-10">
              <div className="text-xs opacity-80 mb-2">
                WRITTEN BY {blogs[0].author} • {blogs[0].date}
              </div>
              <h2 className="text-3xl font-bold leading-tight">
                {blogs[0].title}
              </h2>
            </div>
          </div>
          {/* 2 small blogs below */}
          <div className="grid grid-cols-2 gap-6">
            {blogs.slice(1, 3).map((blog, idx) => (
              <div
                key={idx}
                className="relative h-40 md:h-48 rounded-lg overflow-hidden group flex flex-col justify-end"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="relative z-10 p-4 text-white">
                  {blog.author && blog.date && (
                    <div className="text-xs opacity-80 mb-1">
                      WRITTEN BY {blog.author} • {blog.date}
                    </div>
                  )}
                  <h3 className="text-lg font-bold leading-tight">
                    {blog.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right column: 2 medium blogs stacked, total height matches left */}
        <div className="flex flex-col gap-6">
          {blogs.slice(3).map((blog, idx) => (
            <div
              key={idx}
              className="relative h-80 md:h-[360px] rounded-lg overflow-hidden group flex flex-col justify-end"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative z-10 p-4 text-white">
                {blog.author && blog.date && (
                  <div className="text-xs opacity-80 mb-1">
                    WRITTEN BY {blog.author} • {blog.date}
                  </div>
                )}
                <h3 className="text-lg font-bold leading-tight">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsShowcaseSection;
