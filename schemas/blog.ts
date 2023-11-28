import { MdNewspaper } from "react-icons/md";
import { defineField } from "sanity";

const blog = {
  name: "blog",
  title: "Blog",
  description: "Blog Schema",
  type: "document",
  icon: MdNewspaper,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
      name: "metadesc",
      title: "Meta Description",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "blogthumbnail",
      title: "Blog Thumbnail",
      type: "image",
    },
    {
      name: "blogImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    },
  ],
};

export default blog;