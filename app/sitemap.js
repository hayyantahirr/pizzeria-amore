// app/sitemap.js

export default function sitemap() {
  return [
    {
      url: "https://pizzeria-amore.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://pizzeria-amore.vercel.app/menu",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://pizzeria-amore.vercel.app/checkout",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://pizzeria-amore.vercel.app/success",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://pizzeria-amore.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://pizzeria-amore.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
