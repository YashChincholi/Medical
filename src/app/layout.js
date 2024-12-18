import { Roboto, Barlow } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

const barlow = Barlow({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata = {
  title: "Amrutum",
  description:
    "Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${barlow.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
