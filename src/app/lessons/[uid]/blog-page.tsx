import { PrismicImage } from "@prismicio/react"
import { BlogPostDocument, CategoriesDocument } from "../../../../prismicio-types"
import { PrismicRichText } from "@/components/PrismicRichText"
import { Heading } from "@/components/Heading"
import { ArrowIcon } from "./icons"

type Props = {
    data: BlogPostDocument['data'] & { category: CategoriesDocument & { data: Pick<CategoriesDocument['data'], 'name'> } }
}


export const BlogPage = ({ data }: Props) => {
    const { title, category, headerImage, content, icon, headerImageCaption, previousPost, nextPost } = data
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-x-1 text-[1rem] md:text-[1.125rem] mb-[3.125rem]">
                <a className="text-black text-[length:inherit] font-medium ">{category.data?.name}</a>
                <p className="text-black text-[length:inherit]">/</p>
                <p className="font-normal text-[length:inherit]">{title}</p>
            </div>
            <div className="max-w-[50rem] mx-auto">
                <PrismicImage field={icon} className="block h-8 mb-3" />
                <Heading className="mb-[1.875rem]">{title}</Heading>
                <figure className="mb-[2.5rem] flex flex-col items-center">
                    <PrismicImage field={headerImage} className="" />
                    {!!headerImageCaption && <figcaption> <PrismicRichText field={headerImageCaption} /></figcaption>}
                </figure>
                <div className="mb-[6.5625rem]">
                    <PrismicRichText field={content} />
                </div>
            </div>
            <hr className="border-[#560707]" />
            <nav className="flex my-[1.875rem] max-w-[50rem] mx-auto justify-between">
                {'uid' in previousPost && !!previousPost.uid && (
                    <a href={`/lessons/${previousPost.uid}`} className="text-[#0D0D0D] hover:underline text-[1.5rem] font-medium gap-x-3 flex items-center">
                        <ArrowIcon className="" />
                        Previous lesson
                    </a>
                )}
                {'uid' in nextPost && !!nextPost.uid && (
                    <a href={`/lessons/${nextPost.uid}`} className="text-[#0D0D0D] text-[1.5rem] font-medium gap-x-3 flex items-center">
                        Next lesson
                        <ArrowIcon className="transform rotate-180" />
                    </a>
                )}
            </nav>

        </div>
    )
}