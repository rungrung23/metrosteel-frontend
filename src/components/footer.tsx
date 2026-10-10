import Link from "next/link";
import { services, site } from "@/lib/site";

export default function Footer() {
  return <footer className="site-footer"><div className="footer-inner">
    <div><div className="logo-mark">MIS<span className="logo-sub">Corp.</span></div><p>{site.tagline}. Informasi awal pada situs staging ini masih perlu dicocokkan dengan konten resmi WordPress sebelum peluncuran.</p></div>
    <div><strong>Halaman</strong>{services.slice(0,4).map(s=><p key={s.href}><Link href={s.href}>{s.title}</Link></p>)}</div>
    <div><strong>Hubungi Kami</strong><p>{site.address}</p><p><a href={site.whatsapp} target="_blank" rel="noreferrer">Chat WhatsApp</a></p></div>
  </div><div style={{borderTop:"1px solid #ffffff22",padding:"16px 24px",textAlign:"center",fontSize:12,color:"#d5dced"}}>© {new Date().getFullYear()} Metro Steel · Staging website</div></footer>;
}
