import { projects } from "../data";

function Card({ p }) {
  return (
    <article className="glass p-6 md:p-8 hover:-translate-y-1 transition">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <div className="text-3xl">🧩</div>
      </div>
      <p className="mt-3 text-white/80">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
      <div className="mt-6 flex gap-3">
        {p.link !== "#" && <a className="btn-primary" href={p.link} target="_blank">Live</a>}
        {p.repo !== "#" && <a className="btn-ghost" href={p.repo} target="_blank">Code</a>}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map(p => <Card key={p.title} p={p} />)}
    </div>
  );
}
