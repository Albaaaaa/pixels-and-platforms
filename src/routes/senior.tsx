import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/senior")({
  head: () => ({
    meta: [
      { title: "Alba Sierra — Senior Full Stack & AI Engineer" },
      { name: "description", content: "Ingeniera senior Full Stack especializada en IA: arquitectura, agentes inteligentes y producto a escala." },
      { property: "og:title", content: "Alba Sierra — Senior Full Stack & AI Engineer" },
      { property: "og:description", content: "Arquitectura, IA aplicada y producto a escala. Casos de éxito y servicios." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Senior,
});

const metrics = [
  { n: "10+", l: "años construyendo software" },
  { n: "35", l: "productos lanzados" },
  { n: "4M", l: "usuarios atendidos" },
  { n: "99.98%", l: "disponibilidad media" },
];

const services = [
  { t: "Arquitectura de software", d: "Microservicios, event-driven y sistemas distribuidos diseñados para crecer sin reescribir." },
  { t: "IA aplicada y agentes", d: "Asistentes con LLMs, RAG sobre datos propios, agentes autónomos y evaluación de modelos." },
  { t: "Producto full stack", d: "De la idea al lanzamiento: React, Node, bases de datos y despliegue continuo." },
  { t: "Liderazgo técnico", d: "Mentoring, revisión de código, cultura DevOps y equipos de alto rendimiento." },
];

const cases = [
  { c: "FinTech · Neobanco", t: "Detección de fraude con IA en tiempo real", r: "-62% fraude · 40ms de latencia", tags: ["Python", "Kafka", "ML"] },
  { c: "Salud · HealthTech", t: "Asistente clínico con RAG sobre 2M de documentos", r: "3h ahorradas por médico/semana", tags: ["LLM", "pgvector", "Next.js"] },
  { c: "Retail · E‑commerce", t: "Replataforma headless multi‑país", r: "+38% conversión · x5 rendimiento", tags: ["Node", "GraphQL", "AWS"] },
];

const timeline = [
  { y: "2023 — hoy", r: "Principal AI Engineer", e: "Nova Labs", d: "Lidero la plataforma de agentes de IA y un equipo de 12 ingenieros." },
  { y: "2020 — 2023", r: "Senior Full Stack Engineer", e: "Kairo Systems", d: "Arquitectura de microservicios para 4M de usuarios." },
  { y: "2017 — 2020", r: "Full Stack Developer", e: "Estudio Bitácora", d: "Producto web para startups y migraciones a la nube." },
];

const stack = ["TypeScript", "Python", "React", "Next.js", "Node.js", "PostgreSQL", "pgvector", "LangChain", "OpenAI", "Kafka", "Kubernetes", "AWS", "Terraform"];

const d = (i: number) => ({ animationDelay: `${i * 80}ms` });

function Senior() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      <nav className="mb-14 flex items-center justify-between animate-rise">
        <Link to="/" className="font-mono text-sm text-muted-foreground transition hover:text-primary">← ~/alba-sierra</Link>
        <a href="mailto:albasierod@gmail.com" className="rounded-full bg-gradient-mint px-5 py-2 text-sm font-medium text-primary-foreground">Contratar</a>
      </nav>

      <header className="animate-rise">
        <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" /> Senior Full Stack & AI Engineer</p>
        <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-8xl">
          Software que piensa.<br /><em className="text-gradient">Sistemas que escalan.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Diseño y construyo plataformas con inteligencia artificial de extremo a extremo: desde la arquitectura y los modelos hasta la interfaz que usan millones de personas.
        </p>
      </header>

      <section className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {metrics.map((m, i) => (
          <div key={m.l} className="bento animate-rise" style={d(i)}>
            <p className="font-display text-5xl text-gradient">{m.n}</p>
            <p className="mt-1 text-sm text-muted-foreground">{m.l}</p>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <p className="font-mono text-xs text-muted-foreground">01 / servicios</p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">Qué hago</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.t} className="bento animate-rise" style={d(i)}>
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-4 font-display text-3xl">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <p className="font-mono text-xs text-muted-foreground">02 / casos de éxito</p>
        <h2 className="mt-2 font-display text-4xl md:text-5xl">Resultados medibles</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cases.map((c, i) => (
            <article key={c.t} className="bento animate-rise flex flex-col justify-between" style={d(i)}>
              <div>
                <p className="font-mono text-xs text-muted-foreground">{c.c}</p>
                <h3 className="mt-4 font-display text-2xl">{c.t}</h3>
              </div>
              <div className="mt-8">
                <p className="text-lg text-gradient font-medium">{c.r}</p>
                <div className="mt-3 flex flex-wrap gap-2">{c.tags.map((t) => <span key={t} className="font-mono text-xs text-accent">#{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-4 md:grid-cols-5">
        <div className="bento md:col-span-3">
          <p className="font-mono text-xs text-muted-foreground">03 / trayectoria</p>
          <ol className="mt-6 space-y-8">
            {timeline.map((t) => (
              <li key={t.y} className="border-l pl-5">
                <p className="font-mono text-xs text-accent">{t.y}</p>
                <h3 className="mt-1 font-display text-2xl">{t.r} · <span className="text-muted-foreground">{t.e}</span></h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.d}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="bento md:col-span-2">
          <p className="font-mono text-xs text-muted-foreground">04 / stack</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((s) => <span key={s} className="rounded-full border bg-muted px-3 py-1 text-sm">{s}</span>)}
          </div>
          <blockquote className="mt-10 font-display text-2xl italic">"Alba convirtió un prototipo en una plataforma de IA robusta en tres meses."</blockquote>
          <p className="mt-3 font-mono text-xs text-muted-foreground">— CTO, Nova Labs</p>
        </div>
      </section>

      <section className="mt-20 rounded-[var(--radius-2xl)] bg-gradient-mint p-10 text-primary-foreground md:p-14">
        <h2 className="font-display text-4xl md:text-6xl">Tu próximo producto con IA <em>empieza aquí</em>.</h2>
        <a href="mailto:albasierod@gmail.com" className="mt-8 inline-block font-mono underline-offset-4 hover:underline">albasierod@gmail.com →</a>
      </section>

      <footer className="mt-10 text-center font-mono text-xs text-muted-foreground">© 2026 Alba Sierra Rodríguez</footer>
    </main>
  );
}
