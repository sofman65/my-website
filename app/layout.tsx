import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./custom_components/Navbar/Navbar";
import Footer from "./custom_components/Footer";
import Chatbot from "./custom_components/Chatbot";
import { orbitron } from "@/lib/fonts";
import { ReactNode } from 'react';
import SharedCanvas from "./custom_components/SharedCanvas";
import MailchimpPopup from "./custom_components/MailchimpPopup";


export const metadata = {
  title: "Spaceslam",
  description: "Lets Slam The Future Together",
};




export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={orbitron.className}>
      <body>


        
        <Navbar />

        <div className="bg-black text-white">
        <SharedCanvas />

          {children}


          <Footer />

        </div>
        <Chatbot />
        <MailchimpPopup />

      </body>
    </html>
  );
}
