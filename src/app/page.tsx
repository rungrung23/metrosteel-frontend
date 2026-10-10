import Link from "next/link";
import { services, site } from "@/lib/site";

export default function HomePage() {
  return <>
    <main>
      <section className="hero"><div>
        <div className="eyebrow" style={{color:"#fff"}}>Mitra material & konstruksi Anda</div>
        <h1>HARGA BESI &<br />BAHAN BANGUNAN</h1>
        <p>Temukan informasi produk, layanan konstruksi, dan daftar harga Metro Steel. Hubungi tim kami untuk konsultasi kebutuhan proyek.</p>
        <Link className="hero-cta" href="/harga-update-besi-dan-bahan-bangunan/">› &nbsp; CEK HARGA</Link>
      </div></section>
      <section className="wrap"><div className="eyebrow">Produk & layanan</div><h2 className="section-title">Kebutuhan proyek, lebih mudah</h2><p className="lead">Jelajahi halaman produk dan layanan Metro Steel. Konten ini merupakan fondasi staging dan akan dicocokkan dengan halaman WordPress yang aktif.</p>
        <div className="card-grid">{services.map((s,i)=><article className="service-card" key={s.href}><div className="eyebrow">0{i+1} / Layanan</div><h3>{s.title}</h3><p>{s.description}</p><Link className="card-link" href={s.href}>Lihat halaman →</Link></article>)}</div>
      </section>
      <section className="band"><div className="wrap"><div className="eyebrow">Konsultasi proyek</div><h2 className="section-title">Butuh penawaran untuk proyek Anda?</h2><p className="lead">Hubungi tim Metro Steel untuk membicarakan kebutuhan material atau layanan konstruksi.</p><a className="chat-button" href={site.whatsapp} target="_blank" rel="noreferrer">Hubungi via WhatsApp</a></div></section>
    </main>
  </>;
}
