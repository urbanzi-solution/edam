import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-svg",
    apple: "/apple-touch-icon.png",
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