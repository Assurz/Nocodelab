import "./globals.css";

import { Inter, Syne } from "next/font/google";
import Image from 'next/image'
import { asText, asLink } from "@prismicio/client";
import { PrismicText, PrismicImage } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import { GoogleAnalytics } from '@next/third-parties/google'

import footerLayout from '../public/footer-illustration.svg'

import { createClient, repositoryName } from "@/prismicio";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import { InstagramIcon, TiktokIcon, TwitterIcon } from "./lessons/[uid]/icons";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne'
})

// export const metadata = {
//   icons: {
//     icon: ''
//   }
// }

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={syne.variable}>
      <body className="overflow-x-hidden antialiased">
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-W9SKVHS8GY" />
    </html>
  );
}

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="bg-[#0D0D0D] min-h-[31.25rem] py-8 px-4 md:px-6 text-white relative">
      <div className="max-w-6xl mx-auto md:gap-x-[3.75rem] border-t border-[#515151] pt-8 flex flex-col md:flex-row justify-between items-start relative z-2">
        <div className="mb-8 md:mb-0 flex-1">
          <Heading size="sm" as="h3" className="text-white mb-4">Join our mailing list</Heading>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 md:w-64 lg:max-w-[25rem] bg-transparent border border-gray-700 rounded-md px-4 py-2"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-md">
            A Free Resource Website created to teach no-code web
            design/development for beginners in Nigeria.
          </p>
        </div>

        <div className="flex-1">
          <PrismicImage field={settings.data.siteLogoWhite} className="h-6 mb-10 md:mb-12" />
          <div className="flex flex-row gap-8">
            <div className="min-w-[7.5rem] md:min-w-[unset]">
              <nav className="space-y-2 flex flex-col">
                <Link className="hover:underline" href="/">Home</Link>
                <Link className="hover:underline" href="/about">About</Link>
                <Link className="hover:underline" href="/faqs">FAQs</Link>
              </nav>
            </div>
            <div className="min-w-[7.5rem] md:min-w-[unset]">
              <nav className="space-y-2 flex flex-col">
                <Link className="hover:underline" href="/privacy-policy">Privacy Policy</Link>
                <Link className="hover:underline" href="/accessibility">Accessibility</Link>
                {/* <Link className="hover:underline" href="/faqs">Site Map</Link> */}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 flex flex-col relative z-2">
        <p className="text-sm text-gray-400 mb-4 md:mb-6">
          Made with ❤️ for Nigerians ©️ {new Date().getFullYear()} Nocodeinsight.
        </p>
        <hr className="border-gray-800 mb-10" />
        <div className="flex items-center space-x-4">
          <a href={asLink(settings.data.instagram) || '#'} className="tranform hover:-translate-y-[0.25rem] transition-transform">
            <InstagramIcon />
          </a>
          <a href={asLink(settings.data.tiktok) || '#'} className="tranform hover:-translate-y-[0.25rem] transition-transform">
            <TiktokIcon />
          </a>
          {!!asLink(settings.data.twitter) && (
            <a href={asLink(settings.data.twitter) || '#'} className="tranform hover:-translate-y-[0.25rem] transition-transform">
              <TwitterIcon />
            </a>
          )}

        </div>
      </div>


      <div className="absolute z-1 right-0 bottom-0 hidden md:block">
        <Image src={footerLayout} alt="" />
      </div>

    </footer>
  )
}

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <header className="bg-white py-8 px-4 md:px-6 ">
      <div className="max-w-6xl mx-auto flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          <PrismicImage field={settings.data.siteLogo} className="h-8" />
        </PrismicNextLink>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <PrismicNextLink className="hover:underline" field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
