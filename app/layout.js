import Script from "next/script";
import '../styles/globals.css';


export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E7DF1SB3B4"></Script>
      <Script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-E7DF1SB3B4');
      </Script>
      <body>{children}</body>
    </html>
  );
}
