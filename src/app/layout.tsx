import "./globals.css";

import { Inter, Syne } from "next/font/google";
import Image from 'next/image'
import { asText } from "@prismicio/client";
import { PrismicText, PrismicImage } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";

import footerLayout from '../public/footer-illustration.svg'

import { createClient, repositoryName } from "@/prismicio";
import { Heading } from "@/components/Heading";

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
    </html>
  );
}

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="bg-[#0D0D0D] min-h-[500px] py-8 px-6 text-white relative">
      <div className="max-w-6xl mx-auto gap-x-[60px] border-t border-[#515151] pt-8 flex flex-col md:flex-row justify-between items-start relative z-2">
        <div className="mb-8 md:mb-0 flex-1">
          <Heading size="sm" as="h3" className="text-white mb-4">Join our mailing list</Heading>
          <div className="flex flex-col md:flex-row gap-x-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 max-w-[400px] bg-transparent border border-gray-700 rounded-md px-4 py-2 w-64"
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
            <div className="min-w-[150px] md:min-w-[unset]">
              <ul className="space-y-2">
                <li>Lessons</li>
                <li>Home</li>
                <li>About</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="min-w-[150px] md:min-w-[unset]">
              <ul className="space-y-2">
                <li>Privacy Policy</li>
                <li>Accessibility</li>
                <li>Cookie Policy</li>
                <li>Site Map</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 flex flex-col relative z-2">
        <p className="text-sm text-gray-400 mb-4 md:mb-6">
          Made with ❤️ for Nigerians ©️ 2024 Nocodelab.
        </p>
        <hr className="border-gray-800 mb-10" />
        <div className="flex space-x-4">
          <div className="w-10 h-10 bg-white" />
          <div className="w-10 h-10 bg-white" />
          <div className="w-10 h-10 bg-white" />
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
    <header className="bg-white py-8 px-6 ">
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
                <PrismicNextLink field={item.link}>
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
