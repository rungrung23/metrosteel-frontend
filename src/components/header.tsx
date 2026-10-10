import Link from "next/link";
import { site } from "@/lib/site";

export default function Header() {
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" aria-label="Metro Steel homepage">
        <div className="logo-mark">MIS<span className="logo-sub">Corp.</span></div>
      </Link>
      <nav className="main-nav" aria-label="Navigasi utama">
        <Link href="/">Home</Link>
        <Link href="/harga-update-besi-dan-bahan-bangunan/">Harga Besi</Link>
        <Link href="/pasang-baja-ringan/">Baja Ringan</Link>
        <Link href="/hotmix-aspal/">Hotmix | Aspal</Link>
        <Link href="/rental-alat-berat/">Rental Alat Berat</Link>
        <Link href="/portofolio/">Portofolio</Link>
        <Link href="/kontak-kami/">Kontak Kami</Link>
      </nav>
      <a className="chat-button" href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
    </div>
  </header>;
}
