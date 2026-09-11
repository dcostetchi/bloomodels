import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/hero";
import { WhatWeDo } from "@/components/home/what-we-do";
import { StudioShowcase } from "@/components/home/studio-showcase";
import { Numbers } from "@/components/home/numbers";
import { Benefits } from "@/components/home/benefits";
import { HowItWorksPreview } from "@/components/home/how-it-works-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CtaFinal } from "@/components/home/cta-final";

interface HomePageProps {
  readonly params: Promise<{ locale: string }>;
}

export default async function HomePage({
  params,
}: HomePageProps): Promise<React.JSX.Element> {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <WhatWeDo />
      <StudioShowcase />
      <Numbers />
      <Benefits />
      <HowItWorksPreview />
      <Testimonials />
      <CtaFinal />
    </>
  );
}
