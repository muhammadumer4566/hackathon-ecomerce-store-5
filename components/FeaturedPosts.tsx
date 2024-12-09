import React from "react";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: "/images/post1.jpeg",
      badge: "NEW",
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 2,
      image: "/images/post2.jpeg",
      badge: "NEW",
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 3,
      image: "/images/post3.jpeg",
      badge: "NEW",
      title: "Loudest à la Madison #1 (L'intégral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      tags: ["Google", "Trending", "New"],
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h4 className="text-blue-500 text-sm uppercase font-medium">
          Practice Advice
        </h4>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">Featured Posts</h2>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden"
          >
            {/* Post Image */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium py-1 px-3 rounded-full">
                {post.badge}
              </span>
            </div>

            {/* Post Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="capitalize">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-lg text-gray-800">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
                <div className="flex items-center gap-1">
                  <span className="material-icons">schedule</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-icons"></span>
                  <span>{post.comments}</span>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
