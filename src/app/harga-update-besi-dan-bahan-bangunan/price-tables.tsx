"use client";

import { useMemo, useState } from "react";

type TableData = { id?: number | string; name?: string; description?: string; data?: unknown; last_modified?: string };
function rowsOf(data: unknown): string[][] {
  if (!Array.isArray(data)) return [];
  return data.map((row) => {
    if (Array.isArray(row)) return row.map((cell) => String(cell ?? ""));
    if (row && typeof row === "object") return Object.values(row as Record<string, unknown>).map((cell) => String(cell ?? ""));
    return [String(row ?? "")];
  });
}

export default function PriceTables({ tables, error }: { tables: TableData[]; error: string }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("all");
  const normalized = useMemo(() => tables.map(t => ({...t, rows: rowsOf(t.data)})), [tables]);
  const categories = normalized.map(t => ({ id: String(t.id ?? t.name ?? ""), name: t.name || `Tabel ${t.id}` }));
  const filtered = normalized.filter(t => {
    const matchesSelect = selected === "all" || String(t.id ?? t.name ?? "") === selected;
    const content = `${t.name ?? ""} ${t.description ?? ""} ${t.rows.flat().join(" ")}`.toLowerCase();
    return matchesSelect && content.includes(query.toLowerCase());
  });

  return <section>
    <div className="price-toolbar">
      <input className="price-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Cari nama produk atau harga..." aria-label="Cari produk atau harga" />
      <select className="price-select" value={selected} onChange={e=>setSelected(e.target.value)} aria-label="Filter kategori">
        <option value="all">Semua tabel ({tables.length})</option>
        {categories.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
    </div>
    {error && <div className="notice" style={{marginBottom:20}}>{error} Jika endpoint mengembalikan objek dengan struktur berbeda, parser akan kita sesuaikan setelah mengecek respons aslinya.</div>}
    {!tables.length ? <div className="service-card"><h3>Data harga belum tampil</h3><p>UI sudah siap, tetapi respons API belum berhasil dipetakan. Periksa environment variable dan struktur JSON di WordPress API.</p></div> :
      <div style={{display:"grid",gap:28}}>
        {filtered.map((t,i)=><article key={String(t.id ?? i)}>
          <h2 style={{fontSize:22,fontWeight:800,marginBottom:6}}>{t.name || `Tabel ${t.id}`}</h2>
          {t.description && <p className="lead" style={{marginTop:0}}>{t.description}</p>}
          <div className="price-table-wrap"><table className="price-table">
            <tbody>{t.rows.map((row,ri)=><tr key={ri}>{row.map((cell,ci)=><td key={ci}>{cell}</td>)}</tr>)}</tbody>
          </table></div>
          {t.last_modified && <p style={{fontSize:12,color:"#64748b"}}>Terakhir diperbarui: {t.last_modified}</p>}
        </article>)}
        {!filtered.length && <div className="service-card">Tidak ada tabel yang cocok dengan pencarian.</div>}
      </div>}
  </section>;
}
