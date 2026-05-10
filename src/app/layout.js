import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EDAM | Interior Design & Visualization Studio",
  description:
    "EDAM is a professional interior design and architectural visualization studio delivering residential and commercial projects with precision and creativity.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "EDAM | Interior Design Studio",
    description:
      "Professional interior design, 3D visualization, and execution services.",
    images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  // ✅ Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EDAM",
    url: "https://yourwebsite.com",
    logo: "https://yourwebsite.com/logo.png",
    sameAs: [
      "https://instagram.com/yourprofile",
    ],
  };

  // ✅ Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EDAM",
    url: "https://yourwebsite.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourwebsite.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        {children}
        <Footer />

        {/* ✅ Site-wide Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}