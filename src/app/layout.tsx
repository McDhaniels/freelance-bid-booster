import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelance Bid Booster",
  description: "AI-powered gig finder and bid assistant for freelancers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Bar */}
        <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Freelance Bid Booster
            </h1>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-medium hover:scale-105 transition">
              Sign In
            </button>
          </div>
        </nav>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}