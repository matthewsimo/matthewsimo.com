import { Expand } from "@/lib/type-utils";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

const headingClasses = cva([], {
  variants: {
    level: {
      1: `text-5xl sm:text-7xl leading-relaxed tracking-tighter`,
      2: `text-4xl sm:text-6xl leading-relaxed tracking-tighter`,
      3: `text-3xl sm:text-5xl leading-relaxed tracking-tight`,
      4: `text-2xl sm:text-4xl leading-relaxed tracking-tight`,
      5: `text-xl sm:text-3xl leading-normal tracking-tight`,
      6: `text-xl sm:text-2xl leading-normal tracking-tight`,
    },
    weight: {
      light: `font-extralight`,
      normal: `font-normal`,
      bold: `font-bold`,
    },
    family: {
      sans: `font-sans`,
      mono: `font-mono`,
      inherit: `font-inherit`,
    },
  },
});

export type HeadingProps = PropsWithChildren<
  Expand<
    {
      as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      className?: string;
    } & VariantProps<typeof headingClasses>
  >
>;
const Heading = ({
  as = "h1",
  level = 1,
  weight = "normal",
  family = "sans",
  className = "",
  ...restProps
}: HeadingProps) => {
  const Comp = as;
  return (
    <Comp
      className={headingClasses({ level, weight, family, className })}
      {...restProps}
    />
  );
};

Heading.displayName = "Heading";

export default Heading;

{
  /* <script lang="ts">
	type validAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	export let as: validAs = 'h1';

	const levels = {
		1: `text-5xl sm:text-7xl leading-relaxed tracking-tighter`,
		2: `text-4xl sm:text-6xl leading-relaxed tracking-tighter`,
		3: `text-3xl sm:text-5xl leading-relaxed tracking-tight`,
		4: `text-2xl sm:text-4xl leading-relaxed tracking-tight`,
		5: `text-xl sm:text-3xl leading-normal tracking-tight`,
		6: `text-xl sm:text-2xl leading-normal tracking-tight`
	};
	export let level: keyof typeof levels = 1;

	const weights = {
		light: `font-extralight`,
		normal: `font-normal`,
		bold: `font-bold`
	};
	export let weight: keyof typeof weights = 'normal';

	const families = {
		sans: `font-sans`,
		mono: `font-mono`,
		inherit: `font-inherit`
	};
	export let family: keyof typeof families = 'sans';

	export let classes = ``;
</script>

<svelte:element
	this={as}
	class={`${levels[level]} ${weights[weight]} ${families[family]} ${classes}`}
	{...$$restProps}><slot /></svelte:element
> */
}
