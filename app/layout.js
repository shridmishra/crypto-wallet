// app/layout.jsx
import './globals.css'; // Import your global CSS if any

export const metadata = {
  title: 'My Crypto Wallet',
  description: 'A secure crypto wallet generator',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add your meta tags, title, favicon, etc. here */}
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
