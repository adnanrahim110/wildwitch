import Footer from "@/components/site/Footer";
import Navbar from "@/components/site/Navbar";
import "./globals.css";

export const metadata = {
  title: "Wild Witch | Michael J. Dooley",
  description: "Adventure Fantasy Tales by Michael J. Dooley"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black text-neutral-200`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
