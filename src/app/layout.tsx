import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: "Metro Steel | Toko Besi Bandung", template: "%s | Metro Steel" },
  description: "Informasi produk besi, bahan bangunan, layanan konstruksi, dan kontak Metro Steel Bandung.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><Header />{children}<Footer /><a className="mobile-chat" href={site.whatsapp} target="_blank" rel="noreferrer">Chat / Order via WhatsApp</a></body></html>;
}
