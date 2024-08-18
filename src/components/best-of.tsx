import Heading from "./heading";
import Link from "./link";

type BestOfProps = {
  title: string;
  link: string;
};
const BestOf = ({ title, link }: BestOfProps) => (
  <Heading level={6} as="h4">
    <Link href={link}>{title}</Link>
  </Heading>
);

BestOf.displayName = "BestOf";

export default BestOf;
