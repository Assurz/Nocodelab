import Link from "next/link";

type Props = {
    links: {
        name: string;
        href?: string;
        subLinks?: { name: string; href: string }[]
    }[]
}

export const SitemapContent = ({ links }: Props) => {
    return (
        <div className="pt-[2.5rem] pb-[6.25rem] px-8">
            <ol className="list-decimal space-y-1 font-medium">
                {links.map((item) => {
                    if (item.subLinks) {
                        return (
                            <>
                                <li>
                                    <span className="block">{item.name}</span>
                                    <ul className="pl-6 list-disc space-y-0.5">
                                        {item.subLinks.map((subItem) => (
                                            <li>
                                                <Link className="hover:underline" href={subItem.href}>
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </>
                        )
                    }
                    if (item.href) {
                        return (
                            <li>
                                <Link className="hover:underline" href={item.href}>{item.name}</Link>
                            </li>
                        )
                    }
                    return null
                })}
            </ol>
        </div>
    )

}