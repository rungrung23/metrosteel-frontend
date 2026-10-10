import Link from "next/link";

export default function PageLayout({ title, description, children }: { title: string; description: string; children?: React.ReactNode }) {
  return <>
    <section className="page-hero"><div className="page-hero-inner">
      <div className="breadcrumb"><Link href="/">Home</Link> / {title}</div>
      <div className="eyebrow">Metro Steel · MIS Corp.</div>
      <h1 className="section-title">{title}</h1>
      <p className="lead">{description}</p>
    </div></section>
    <main className="wrap">{children}</main>
  </>;
}
