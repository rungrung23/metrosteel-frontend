import PageLayout from "@/components/page-layout";
import { site } from "@/lib/site";
export const metadata = { title: "Kontak Kami" };
export default function Page() { return <PageLayout title="Kontak Kami" description="Hubungi tim Metro Steel untuk informasi harga, layanan, dan penawaran proyek."><div className="card-grid"><article className="service-card"><h3>WhatsApp</h3><p>Hubungi tim kami untuk konsultasi awal.</p><a className="card-link" href={site.whatsapp} target="_blank" rel="noreferrer">Buka WhatsApp →</a></article><article className="service-card"><h3>Lokasi</h3><p>{site.address}</p><p>Alamat dan detail kontak akan dicocokkan dengan sumber resmi.</p></article></div></PageLayout>; }
