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
  title: {
    default: "Pizzeria Amore",
    template: "%s | Pizzeria Amore", // lets you have dynamic titles later
  },
  description:
    "Authentic Italian pizzeria serving wood-fired pizzas, fresh pasta, and classic desserts in a cozy neighborhood atmosphere.",

  // Favicon & icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon1.png", sizes: "32x32", type: "image/png" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",

  // Open Graph (Facebook, WhatsApp, LinkedIn previews)
  openGraph: {
    title: "Pizzeria Amore",
    description:
      "Pizzeria Amore brings 100% authentic Italian pizza to Pakistan, Rome, and Italy. Enjoy wood-fired pizzas, homemade pasta, classic Italian desserts, fresh appetizers, and traditional drinks. Serving a huge variety of pizzas in Karachi, Lahore, and Islamabad with fast delivery and a cozy dine-in atmosphere. Your #1 spot for authentic Italian flavor in every bite.",
    url: "https://pizzeria-amore.vercel.app",
    siteName: "Pizzeria Amore",
    images: [
      {
        url: "https://pizzeria-amore.vercel.app/logo.svg", // put an image in /public
        width: 1200,
        height: 630,
        alt: "Wood-fired pizza from Pizzeria Amore",
      },
    ],
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
