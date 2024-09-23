import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextWithBanner`.
 */
export type TextWithBannerProps =
  SliceComponentProps<Content.TextWithBannerSlice>;

/**
 * Component for "TextWithBanner" Slices.
 */
const TextWithBanner = ({ slice }: TextWithBannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 lg:px-0"
    >
      <div className="max-w-6xl mx-auto h-[11rem] md:h-[15rem] rounded-[0.75rem] bg-[#560707] flex text-center items-center justify-center">
        <h1 className="text-white font-bold text-[1.5rem] md:text-[2rem]">
          {slice.primary.title}
        </h1>
      </div>
    </section>
  );
};

export default TextWithBanner;
