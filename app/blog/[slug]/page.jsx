import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogDetails } from "@/lib/blogDetails";
import { tools } from "@/lib/toolsList";
import { blogs } from "@/lib/blogs";

const SITE_URL = "https://toolscenterhub.com";

/* Convert display dates like "July 30, 2026" into ISO 8601
   for OpenGraph/schema, since Google rejects non-ISO dates
   for rich results. Falls back to the raw string if unparsable. */
function toIsoDate(value) {
  if (!value) return undefined;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : parsed.toISOString();
}

/* ===========================
   SEO METADATA (per post)
=========================== */

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogDetails[slug];

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  const url = `${SITE_URL}/blog/${slug}`;
  const ogImage = blog.image?.startsWith("http")
    ? blog.image
    : `${SITE_URL}${blog.image}`;

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription,
    keywords: Array.isArray(blog.keywords)
      ? blog.keywords.join(", ")
      : blog.keywords,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },

    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      url,
      siteName: "ToolsCenterHub",
      type: "article",
      publishedTime: toIsoDate(blog.date),
      modifiedTime: toIsoDate(blog.lastUpdated || blog.date),
      authors: [blog.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      images: [ogImage],
    },
  };
}

/* ===========================
   STATIC PARAMS (pre-render + reliable indexing)
=========================== */

export function generateStaticParams() {
  return Object.keys(blogDetails).map((slug) => ({ slug }));
}

/* ===========================
   PAGE
=========================== */

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const blog = blogDetails[slug];

  if (!blog) {
    notFound();
  }

  const relatedTools = tools.filter((tool) =>
    blog.relatedTools.includes(tool.slug)
  );

  const relatedBlogs = blogs.filter((item) =>
    blog.relatedBlogs.includes(item.slug)
  );

  const url = `${SITE_URL}/blog/${slug}`;
  const ogImage = blog.image?.startsWith("http")
    ? blog.image
    : `${SITE_URL}${blog.image}`;

  /* BlogPosting Schema */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    image: ogImage,
    author: {
      "@type": "Organization",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "ToolsCenterHub",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
    datePublished: toIsoDate(blog.date),
    dateModified: toIsoDate(blog.lastUpdated || blog.date),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  /* Breadcrumb Schema */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: blog.title, item: url },
    ],
  };

  /* FAQ Schema (reuses the exact FAQs rendered below) */
  const faqSchema =
    blog.faq?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  return (
    <div className="max-w-4xl mx-auto px-5 py-10">

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* FAQ Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb (visible) */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{blog.title}</span>
      </nav>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        {blog.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
        <span>👤 {blog.author}</span>
        <span>📅 {blog.date}</span>
        <span>⏱ {blog.readingTime}</span>
      </div>

      {/* Featured Image */}
      <div className="relative w-full aspect-[1162/586] rounded-2xl overflow-hidden mb-10">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-contain"
        />
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
        <p className="text-gray-700 leading-8">
          {blog.introduction}
        </p>
      </section>

      {/* What Is */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          {blog.whatIsTitle}
        </h2>

        <p className="text-gray-700 leading-8">
          {blog.whatIs}
        </p>
      </section>

      {/* Importance */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Why is it Important?
        </h2>

        <p className="text-gray-700 leading-8">
          {blog.importance}
        </p>
      </section>

      {/* How it Works */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          How Does it Work?
        </h2>

        <p className="text-gray-700 leading-8">
          {blog.howItWorks}
        </p>
      </section>

      {/* Steps */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Step-by-Step Guide
        </h2>

        <ol className="list-decimal pl-6 space-y-2">
          {blog.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Examples */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Examples
        </h2>

        {blog.examples.map((example, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 mb-4 bg-gray-50"
          >
            <h3 className="font-semibold text-xl mb-2">
              {example.title}
            </h3>

            <p>{example.description}</p>
          </div>
        ))}
      </section>

      {/* Benefits */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Benefits
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          {blog.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Mistakes */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Common Mistakes
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          {blog.mistakes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        {blog.faq.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold text-xl mb-2">
              {item.question}
            </h3>

            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      {/* Conclusion */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Conclusion
        </h2>

        <p className="text-gray-700 leading-8">
          {blog.conclusion}
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 rounded-2xl p-8 text-center my-12">
        <h2 className="text-2xl font-bold mb-3">
          {blog.cta.title}
        </h2>

        <p className="text-gray-700 mb-6">
          {blog.cta.description}
        </p>

        <Link
          href={blog.cta.link}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          {blog.cta.buttonText}
        </Link>
      </section>

      {/* Related Tools */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">
          Related Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {relatedTools.map((tool) => (

            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold group-hover:text-blue-600">
                {tool.name}
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                {tool.description}
              </p>

              <span className="inline-block mt-5 text-blue-600 font-medium">
                Open Tool →
              </span>

            </Link>

          ))}

        </div>
      </section>

      {/* Related Blogs */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Related Articles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {relatedBlogs.map((blog) => (

            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">

                <p className="text-sm text-gray-500 mb-2">
                  📅 {blog.date}
                </p>

                <h3 className="text-lg font-bold leading-7 group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mt-2 line-clamp-2">
                  {blog.description}
                </p>

                <div className="mt-5 flex items-center text-blue-600 font-medium text-sm">
                  Read Article
                  <span className="ml-2 group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>

              </div>

            </Link>

          ))}

        </div>
      </section>

    </div>
  );
}