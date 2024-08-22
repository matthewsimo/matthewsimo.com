import BlurFade from "@/components/blur-fade";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BlurFade>{children}</BlurFade>;
}
