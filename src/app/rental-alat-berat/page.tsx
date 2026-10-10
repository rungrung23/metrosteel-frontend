import PageLayout from "@/components/page-layout";
import { site } from "@/lib/site";
export const metadata = { title: "Rental Alat Berat" };
export default function Page() { return <PageLayout title="Rental Alat Berat" description="Informasi layanan rental alat berat untuk proyek konstruksi."><div className="service-card"><h2>Butuh alat berat untuk proyek?</h2><p className="lead">Sampaikan lokasi proyek, jenis pekerjaan, dan jadwal kebutuhan. Detail armada, ketentuan sewa, serta konten resmi akan diverifikasi sebelum peluncuran.</p><a className="chat-button" href={site.whatsapp} target="_blank" rel="noreferrer">Tanyakan ketersediaan</a></div></PageLayout>; }
