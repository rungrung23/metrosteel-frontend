import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import PriceTables from "./price-tables";

export const metadata: Metadata = {
  title: "Harga Update Besi dan Bahan Bangunan",
  description: "Lihat daftar harga besi dan bahan bangunan Metro Steel.",
};

export const revalidate = 60;

async function getTables() {
  const base = process.env.WORDPRESS_API_URL || "https://metrosteel.co.id/wp-json/metrosteel/v1";
  try {
    const res = await fetch(`${base}/price-tables`, { next: { revalidate: 60 } });
    if (!res.ok) return { tables: [], error: `API WordPress merespons ${res.status}.` };
    const json = await res.json();
    const tables = Array.isArray(json.tables) ? json.tables : Array.isArray(json.data) ? json.data : [];
    return { tables, error: tables.length ? "" : "Format respons API belum dikenali. Perlu menyesuaikan parser dengan respons API aktual." };
  } catch {
    return { tables: [], error: "Belum bisa terhubung ke API harga WordPress." };
  }
}

export default async function PricePage() {
  const { tables, error } = await getTables();
  return <PageLayout title="Harga Update Besi dan Bahan Bangunan" description="Daftar harga dari WordPress TablePress. Perubahan harga tetap dilakukan melalui dashboard WordPress.">
    <div className="notice">Halaman ini adalah versi staging. Cocokkan data, susunan kategori, dan harga dengan halaman produksi sebelum migrasi.</div>
    <PriceTables tables={tables} error={error} />
  </PageLayout>;
}
