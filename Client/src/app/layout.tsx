import { Toaster } from "react-hot-toast";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body suppressHydrationWarning>
        {children}
      </body>
      <Toaster  position="top-right"/>
    </html>
  );
}
