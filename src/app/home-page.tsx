import { KeyTextField } from "@prismicio/client";
import { BlogPostDocument, CategoriesDocument } from "../../prismicio-types";
import { Heading } from "@/components/Heading";
import { PrismicImage } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

type BlogPosts = BlogPostDocument & {
    data: BlogPostDocument['data'] & { category: CategoriesDocument & { data: Pick<CategoriesDocument['data'], 'name'> } }
}

type Props = {
    data: { categoryName: KeyTextField; categoryUid: string; posts: BlogPosts[] }[]
}

const ModuleSection = ({ categoryName, posts }: Props['data'][number]) => {
    return (
        <div className="grid-col-1">
            <Heading as="h3" size="lg" className="mb-6 font-semibold">{categoryName}</Heading>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link className='flex hover:underline items-center gap-x-1' href={`/lessons/${post.uid}`}>
                            <PrismicImage field={post.data.icon} />
                            {post.data.title}
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    )
}


export const HomePage = ({ data }: Props) => {
    return (
        <div className="max-w-6xl px-4 md:px-6 mx-auto w-full">
            <Heading as="h2" size="xl" className="mb-8" >All Lessons</Heading>
            <div className="grid lg:grid-cols-2 gap-y-[80px] mb-[60px]">
                {[...data].map((item) => (
                    <ModuleSection key={item.categoryUid} categoryName={item.categoryName} categoryUid={item.categoryUid} posts={item.posts} />
                ))}
            </div>

            <div className="py-[60px]">
                <div className="">
                    <h3>By the end of this course you should be able to:</h3>
                    <p>A Free Resource Website created to teach web design beginners in Nigeria how to code.</p>
                </div>
                <div className="">


                </div>

            </div>
        </div>
    )
}