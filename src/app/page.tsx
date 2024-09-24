import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText, KeyTextField } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { HomePage } from "./home-page";
import { BlogPostDocument, CategoriesDocument } from "../../prismicio-types";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

type BlogPosts = BlogPostDocument & {
  data: BlogPostDocument['data'] & { category: CategoriesDocument & { data: Pick<CategoriesDocument['data'], 'name'> } }
}

export default async function Page() {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());
  const blogPosts = await client.getAllByType("blogPost", {
    fetchLinks: ['categories.name']
  }).catch(() => notFound()) as BlogPosts[]


  const items = blogPosts.reduce((acc, curr) => {
    const currCategory = curr.data.category
    if (!currCategory?.data?.name || !currCategory?.uid) return acc
    if (!acc[currCategory.uid]) {
      acc[currCategory.uid] = {
        categoryName: currCategory.data.name,
        categoryUid: currCategory.uid,
        posts: [curr]
      }
    }
    else {
      acc[currCategory.uid].posts.push(curr)
    }

    return acc
  }, {} as Record<string, { categoryName: KeyTextField; categoryUid: string; posts: BlogPosts[] }>)
  const data = Object.values(items)


  return <>
    <SliceZone slices={page.data.slices} components={components} />
    <HomePage data={data} />
  </>;
}
