import Link from "next/link";
export default function NotFound() { return <main className="wrap"><div className="eyebrow">404</div><h1 className="section-title">Halaman tidak ditemukan</h1><p className="lead">URL ini belum tersedia pada versi staging. URL lama akan diverifikasi melalui sitemap WordPress.</p><Link className="card-link" href="/">Kembali ke homepage →</Link></main>; }
