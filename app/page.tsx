import Image from "next/image";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ContactComp from "./components/ContactComp";
import QuoteSection from "./components/QuoteSection";
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
