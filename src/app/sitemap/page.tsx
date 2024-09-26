import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SitemapContent } from "./SitemapContent";


export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client
        .getByUID("page", 'sitemap')
        .catch(() => notFound());

    return {
        title: asText(page.data.title),
        description: page.data.meta_description,
    };
}

export default async function Page() {
    const client = createClient();
    const page = await client
        .getByUID("page", 'sitemap')
        .catch(() => notFound());

    const pages = await client.getAllByType("blogPost")

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        {
            name: "Lessons", subLinks: pages.map(item => ({
                name: item.data.title as string,
                href: `/lessons/${item.uid}`
            }))
        },
        { name: "FAQs", href: "/faqs" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Accessibility", href: "/accessibility" },

    ]

    return (<div className="max-w-6xl mx-auto px-4 lg:px-6">
        <SliceZone slices={page.data.slices} components={components} />
        <SitemapContent links={links} />
    </div>);
}
