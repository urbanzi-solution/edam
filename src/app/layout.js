import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Edam | Transforming spaces,elevating lives",
  description:
    "Edam is a creative architectural visualization studio specializing in high-quality 3D renders, interior visuals, and immersive design experiences for architects and developers.",

  keywords: [
    "Architectural Visualization",
    "3D Rendering Studio",
    "Interior Rendering",
    "Exterior Rendering",
    "Edam Studio",
    "3D Architecture Design",
  ],

  authors: [{ name: "Edam Studio" }],
  creator: "Edam",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-svg",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Edam | Transforming spaces,elevating lives",
    description:
      "High-end architectural visualization and 3D rendering services for modern design projects.",
    url: "https://yourdomain.com",
    siteName: "Edam",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Edam Architectural Visualization",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Edam",
    description:
      "Premium architectural visualization and 3D rendering services.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}