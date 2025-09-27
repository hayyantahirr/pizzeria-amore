import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/Components/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pizzeria Amore",
  description:
    "Authentic Italian pizzeria serving wood-fired pizzas, fresh pasta, and classic desserts in a cozy neighborhood atmosphere.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon1.png", sizes: "32x32", type: "image/png" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Pizzeria Amore",
    description:
      "Authentic Italian pizzeria serving wood-fired pizzas, fresh pasta, and classic desserts in a cozy neighborhood atmosphere.",
    // url: "https://pizzeria-amore.com",
    siteName: "Pizzeria Amore",
    // images: [
    //   {
    //     url: "https://pizzeria-amore.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Pizzeria Amore",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
