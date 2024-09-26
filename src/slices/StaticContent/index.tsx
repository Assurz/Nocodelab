import { PrismicRichText } from "@/components/PrismicRichText";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `StaticContent`.
 */
export type StaticContentProps =
  SliceComponentProps<Content.StaticContentSlice>;

/**
 * Component for "StaticContent" Slices.
 */
const StaticContent = ({ slice }: StaticContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-[50rem] px-4 lg:px-0 mx-auto py-[1.875rem] md:py-[3.75rem]">
        <PrismicRichText field={slice.primary.content} />
      </div>
    </section>
  );
};

export default StaticContent;
