import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    // authors: [{ name: "TETA KOST", url: "https://tetakost.com" }],
    creator: "TETA KOST",
    // metadataBase: new URL("https://tetakost.com"),
    openGraph: {
        title: "TETA KOST - Kost Nyaman di Padang",
        description:
            "Kost eksklusif dan nyaman di Kota Padang dengan harga terjangkau.",
        url: "https://tetakost.com",
        siteName: "TETA KOST",
        images: [
            {
                url: "/main.jpg", // Gambar preview share
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
        images: ["/main.jpg"],
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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
