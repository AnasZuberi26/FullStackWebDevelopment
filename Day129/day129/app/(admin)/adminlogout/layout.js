import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Logout - Facebook Dashboard",
  description: "Admin dashboard for managing Facebook content and users.",
};

export default function LogoutLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <span>Logout Navbar</span>
        {children}</body>
    </html>
  );
}
