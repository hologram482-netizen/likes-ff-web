import './globals.css';

export const metadata = {
  title: 'Likes FF - Beli Likes Free Fire',
  description: 'Platform terpercaya untuk membeli likes Free Fire, TikTok, Instagram dan services lainnya',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
