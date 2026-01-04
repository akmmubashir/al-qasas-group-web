import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import InitialLoader from "./components/initialLoader";
import PageTransitionOverlay from "./components/pageTransitionOverlay";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Al Qasas Group - Integrated Business Solutions in Qatar & Saudi Arabia",
  description:
    "Al Qasas Group offers comprehensive business solutions in Qatar and Saudi Arabia, including IT services, corporate support, project assistance, and transportation logistics. Empowering businesses with tailored services for growth and success.",
  alternates: {
    canonical: "https://al-qasas-group-web.vercel.app",
  },
  openGraph: {
    title:
      "Al Qasas Group - Integrated Business Solutions in Qatar & Saudi Arabia",
    description:
      "Al Qasas Group offers comprehensive business solutions in Qatar and Saudi Arabia, including IT services, corporate support, project assistance, and transportation logistics. Empowering businesses with tailored services for growth and success.",
    url: "https://al-qasas-group-web.vercel.app",
    siteName: "Typhon",
    images: [
      {
        url: "/assets/images/corporate.webp",
        width: 1200,
        height: 630,
        alt: "Al Qasas Group - Integrated Business Solutions in Qatar & Saudi Arabia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Al Qasas Group - Integrated Business Solutions in Qatar & Saudi Arabia",
    description:
      "Al Qasas Group offers comprehensive business solutions in Qatar and Saudi Arabia, including IT services, corporate support, project assistance, and transportation logistics. Empowering businesses with tailored services for growth and success.",
    images: ["/assets/images/corporate.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <InitialLoader />
        <PageTransitionOverlay />
        {children}
      </body>
    </html>
  );
}
