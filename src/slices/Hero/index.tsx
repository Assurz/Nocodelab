import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { type SliceComponentProps, type JSXMapSerializer, PrismicImage } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  
};

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative bg-white">
      <div className="mx-auto w-full max-w-6xl py-[30px] lg:py-[50px] mx-auto px-4 md:px-6 flex flex-col gap-y-[50px] md:flex-row">
        <div className="lg:flex-[0.65] flex flex-col">
          <div className="max-w-xl lg:pt-[30px] [&_.block-img>img]:h-[90px] [&_.block-img>img]:mb-2.5">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>
          {isFilled.link(slice.primary.buttonLink) && (
            <PrismicNextLink
              field={slice.primary.buttonLink}
              className="self-start rounded bg-[#560707] mt-6 lg:mt-7 px-5 py-3 font-medium text-white"
            >
              {slice.primary.buttonText || "Start learning"}
            </PrismicNextLink>
          )}
        </div>
        <div className="relative lg:flex-[0.35] lg:w-[380px]">
          {isFilled.image(backgroundImage) && (
            <PrismicNextImage
              field={backgroundImage}
              alt=""
              // fill={true}
              className="pointer-events-none select-none object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
