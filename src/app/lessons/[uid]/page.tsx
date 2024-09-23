import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { BlogPage } from "./blog-page";
import { BlogPostDocument, CategoriesDocument } from "../../../../prismicio-types";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("blogPost", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.title,
    description: page.data.summary,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("blogPost", params.uid, {
      fetchLinks: ['categories.name']
    })
    .catch(() => notFound());

  const data = page.data as BlogPostDocument['data'] & { category: CategoriesDocument & { data: Pick<CategoriesDocument['data'], 'name'> } }

  return (
    <div>
      <BlogPage data={data} />
    </div>
  )
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("blogPost");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
