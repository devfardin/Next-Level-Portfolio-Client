import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: 'Fardin Ahmed | Web Developer & Digital Creator',
  description: 'Welcome to the personal portfolio and blog of Fardin Ahmed, a passionate web developer specializing in WordPress, Next.js, React, and custom web solutions. Explore my projects, insights, and expertise in web development, e-commerce, and digital innovation. Let’s build something amazing together!',
}
 
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body suppressHydrationWarning>
        <Navbar />
        <div className="min-h-screen w-[90%] mx-auto">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
