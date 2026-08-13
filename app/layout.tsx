import "./globals.css";
import Header from "@/components/tools/Header";
import Footer from "@/components/tools/Footer";
import { Montserrat, Inter } from "next/font/google";
import ScrollButton from "@/components/ScrollButton";
import Script from "next/script";
import type {
  Metadata,
  Viewport,
} from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {

  metadataBase: new URL(
    "https://toolscenterhub.com"
  ),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  title: {
    default:
      "ToolsCenterHub - Free Online PDF, Image & Utility Tools",
    template:
      "%s | ToolsCenterHub",
  },

  description:
    "Free online tools for PDF conversion, image editing, compression, QR code generation, developer utilities, and more. Fast, secure, and easy to use.",

  keywords: [
    "online tools",
    "free online tools",
    "pdf tools",
    "image tools",
    "image resizer",
    "image compressor",
    "pdf to word",
    "word to pdf",
    "jpg to pdf",
    "pdf merger",
    "pdf splitter",
    "qr code generator",
    "password generator",
    "json formatter",
    "json validator",
    "base64 encoder",
    "base64 decoder",
  ],

  authors: [
    {
      name: "ToolsCenterHub",
      url: "https://toolscenterhub.com",
    },
  ],

  creator: "ToolsCenterHub",

  publisher: "ToolsCenterHub",

  category: "Technology",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview":
        "large",
      "max-snippet": -1,
      "max-video-preview":
        -1,
    },
  },

  alternates: {
    canonical:
      "https://toolscenterhub.com",
  },

  openGraph: {
    title:
      "ToolsCenterHub - Free Online PDF, Image & Developer Tools",

    description:
      "Free online tools for PDF conversion, image editing, compression, QR code generation, developer utilities, and more.",

    url: "https://toolscenterhub.com",

    siteName: "ToolsCenterHub",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ToolsCenterHub",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "ToolsCenterHub - Free Online PDF, Image & Utility Tools",

    description:
      "Free online tools for PDF conversion, image editing, compression, QR code generation, developer utilities, and more.",

    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context":
      "https://schema.org",

    "@type": "WebSite",

    name: "ToolsCenterHub",

    url:
      "https://toolscenterhub.com",

    potentialAction: {
      "@type":
        "SearchAction",

      target:
        "https://toolscenterhub.com/tools/{search_term_string}",

      "query-input":
        "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "Organization",

    name:
      "ToolsCenterHub",

    url:
      "https://toolscenterhub.com",

    logo:
      "https://toolscenterhub.com/favicon.ico",
  };

  return (
    <html lang="en">
      <head>
        {/* Google AdSense - literal script tag so it's present in raw HTML for verification */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5475195663920811"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} bg-gray-50 text-gray-800`}
      >
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                websiteSchema
              ),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                organizationSchema
              ),
          }}
        />

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        <ScrollButton />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KTXCDXL76Y"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-KTXCDXL76Y');
          `}
        </Script>
      </body>
    </html>
  );
}