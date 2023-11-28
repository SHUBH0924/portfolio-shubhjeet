import Image from "next/image";
import { Metadata } from "next";
import { getSingleBlog } from "@/sanity/sanity.query";
import type { BlogType } from "@/types";
import { PortableText } from "@portabletext/react";
// import fallBackImage from "@/public/project.png";

type Props = {
  params: {
    blog: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.blog;
  const blog: BlogType = await getSingleBlog(slug);

  return {
    title: `${blog.title} | blog`,
    description: blog.metadesc,
    openGraph: {
      images:
        blog.blogImage?.image ||
        "https://res.cloudinary.com/victoreke/image/upload/v1689892912/docs/project.png",
      title: blog.title,
      description: blog.metadesc,
    },
  };
}

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog: BlogType = await getSingleBlog(slug);
  // const src = {src: blog.blogImage?.image}
  console.log(blog)

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {blog.title}
          </h1>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={blog.blogImage?.image}
          alt={blog.blogImage?.alt || blog.title}
        />
        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={blog?.content} />
        </div>
      </div>
    </main>
  );
}