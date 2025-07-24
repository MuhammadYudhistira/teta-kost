import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "TETA KOST | Kost Murah & Nyaman di Kota Padang",
    description:
        "Temukan kost terbaik, eksklusif, dan terjangkau di Kota Padang. Cocok untuk mahasiswa, pekerja, dan semua kalangan.",
    keywords: [
        "kost Padang",
        "sewa kost",
        "kost eksklusif",
        "kost murah Padang",
        "kost TETA",
    ],
    authors: [{ name: "TETA KOST", url: "https://tetakost.com" }],
    creator: "TETA KOST",
    metadataBase: new URL("https://tetakost.com"),
    openGraph: {
        title: "TETA KOST - Kost Nyaman di Padang",
        description:
            "Kost eksklusif dan nyaman di Kota Padang dengan harga terjangkau.",
        url: "https://tetakost.com",
        siteName: "TETA KOST",
        images: [
            {
                url: "https://tetakost.com/main.jpg",
                width: 1200,
                height: 630,
                alt: "TETA KOST",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "TETA KOST - Kost Nyaman di Padang",
        description:
            "Kost eksklusif dan nyaman di Kota Padang dengan harga terjangkau.",
        images: ["https://tetakost.com/main.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-9DRQE7ST78"
                    strategy="afterInteractive"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9DRQE7ST78');
            `,
                    }}
                />
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "TETA KOST",
                            image: "https://tetakost.com/main.jpg",
                            "@id": "https://tetakost.com",
                            url: "https://tetakost.com",
                            telephone: "+62 12-7072-7484",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Jl nerok jembatan lama",
                                addressLocality: "Padang",
                                addressRegion: "Sumatera Barat",
                                postalCode: "25142",
                                addressCountry: "ID",
                            },
                            description:
                                "TETA KOST adalah kost eksklusif dan nyaman di Kota Padang dengan harga terjangkau dan lokasi strategis.",
                            priceRange: "Rp600.000 - Rp1.200.000",
                        }),
                    }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
