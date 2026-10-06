import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Whatsapp from "@/components/layout/Whatsapp";
import { structuredData } from "./schema/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Best Dental Hospital and Implant Center in Raipur (C.G) | Sikarwar Dental Hospital & Implant Center",
  description:
    "Sikarwar Dental Hospital & Implant Center is a trusted Dental Hospital in Raipur offering dental implants, root canal treatment, oral surgery, wisdom tooth removal, and smile makeovers.",
  verification: {
    google: "aGVbXo4KoE_9cN0sbHxMkKwleV_KfgsjwRwU1RshvNs",
  },
  keywords:
    "Dental Hospital in Raipur, Best Dental Hospital in Raipur, Dental Clinic in Raipur, Best Dentist in Raipur, Dental Implants in Raipur, Root Canal Treatment in Raipur, Oral Surgery in Raipur, Wisdom Tooth Removal in Raipur, Smile Makeover in Raipur, Cosmetic Dentistry in Raipur, Oral Cancer Screening in Raipur, Oral Cancer Specialist in Raipur, Maxillofacial Surgery in Raipur, Oral and Maxillofacial Surgeon in Raipur, Dental Implant Specialist in Raipur, Full Mouth Rehabilitation in Raipur, Teeth Whitening in Raipur, Dental Treatment in Raipur, Family Dentist in Raipur,",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
