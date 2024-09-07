// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css"; // Import your global CSS if any

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Crypto Wallet",
  description: "A secure crypto wallet generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add any meta tags or links here if needed */}
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
