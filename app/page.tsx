import Image from "next/image";

import Hero from "./custom_components/Hero";
import AboutMe from "./custom_components/AboutMe";
import ContactComp from "./custom_components/ContactComp";
import QuoteSection from "./custom_components/QuoteSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Hero />
      <AboutMe />
      <ContactComp />
      <QuoteSection />  {/* Add the Quote section here */}
    </main>
  );
}
