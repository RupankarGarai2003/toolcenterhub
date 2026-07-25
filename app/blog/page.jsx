import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/blogs";

export const metadata = {
  title: "Blog | ToolsCenterHub",
  description: "Latest articles, tutorials and guides.",
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Our Latest Blogs
        </h1>

        <p className="text-gray-600 mt-3">
          Tutorials, guides and useful articles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">

        {blogs.map((blog) => (

          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
          >

            {/* Image */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                  {blog.category}
                </span>

                <span>{blog.date}</span>
              </div>

              <h2 className="text-xl font-bold leading-7 mb-3 group-hover:text-blue-600 transition">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm leading-6 line-clamp-2 mb-5">
                {blog.description}
              </p>

              <span className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                Read More
                <span className="ml-1">→</span>
              </span>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}