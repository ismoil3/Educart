import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/header/header";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Educart",
  description: "courses and  training materials for students...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#6440FB" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeWrapper>
          <Header />
          <main>{children}</main><br/><br/><br/><br/><br/><br/>
        </ThemeWrapper>
      </body>
    </html>
  );
}
