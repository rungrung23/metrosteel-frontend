import PageLayout from "@/components/page-layout";
import { site } from "@/lib/site";
export const metadata = { title: "Hotmix | Aspal" };
export default function Page() { return <PageLayout title="Hotmix | Aspal" description="Informasi layanan hotmix dan pekerjaan aspal untuk kebutuhan proyek."><div className="service-card"><h2>Diskusikan kebutuhan pekerjaan aspal</h2><p className="lead">Hubungi tim Metro Steel untuk membahas lokasi, volume pekerjaan, dan kebutuhan penawaran. Konten detail layanan dari WordPress akan dilengkapi saat audit semua halaman.</p><a className="chat-button" href={site.whatsapp} target="_blank" rel="noreferrer">Hubungi via WhatsApp</a></div></PageLayout>; }
