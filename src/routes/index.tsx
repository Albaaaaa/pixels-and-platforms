import { createFileRoute } from "@tanstack/react-router";

const GITHUB = "https://github.com/albasierra";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alba Sierra — Full Stack Developer Senior" },
      { name: "description", content: "Portfolio de Alba Sierra Rodríguez: Full Stack Developer senior. Proyectos, stack y repositorios de GitHub." },
      { property: "og:title", content: "Alba Sierra — Full Stack Developer Senior" },
      { property: "og:description", content: "Producto, arquitectura y código que escala. Mira mis proyectos en GitHub." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "atlas-commerce", desc: "Plataforma e‑commerce headless con pagos, inventario en tiempo real y panel de analítica.", tags: ["Next.js", "Node", "PostgreSQL"], stars: "1.2k" },
  { name: "pulse-realtime", desc: "Motor de colaboración en tiempo real sobre WebSockets y CRDTs.", tags: ["TypeScript", "Redis", "WS"], stars: "860" },
  { name: "nimbus-infra", desc: "Plantillas IaC para desplegar microservicios en minutos.", tags: ["Terraform", "AWS", "Docker"], stars: "540" },
  { name: "lumen-ui", desc: "Sistema de diseño accesible con 60+ componentes.", tags: ["React", "Storybook", "a11y"], stars: "410" },
];

const stack = ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "GraphQL", "Redis", "Docker", "Kubernetes", "AWS", "Terraform"];

const delay = (i: number) => ({ animationDelay: `${i * 80}ms` });

function Index() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      <nav className="mb-10 flex items-center justify-between animate-rise">
        <span className="font-mono text-sm text-muted-foreground">~/alba-sierra</span>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full border px-4 py-2 font-mono text-sm transition hover:border-primary hover:text-primary">
          github ↗
        </a>
      </nav>

      <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 md:grid-cols-6">
        {/* Intro */}
        <section className="bento animate-rise md:col-span-4 md:row-span-2 flex flex-col justify-between" style={delay(0)}>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" /> Disponible para nuevos retos
          </div>
          <div className="mt-10">
            <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">
              Alba Sierra.<br />
              <em className="text-gradient">Full Stack</em> que convierte ideas en producto.
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Desarrolladora senior con +8 años diseñando arquitecturas robustas, interfaces cuidadas y sistemas que escalan de cero a millones de usuarios.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-mint px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105">
              Ver repositorios
            </a>
            <a href="mailto:hola@albasierra.dev" className="rounded-full border px-6 py-3 transition hover:border-primary">
              Contactar
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="bento animate-rise md:col-span-2" style={delay(1)}>
          <p className="font-mono text-xs text-muted-foreground">experiencia</p>
          <p className="font-display text-6xl text-gradient">8+</p>
          <p className="text-sm text-muted-foreground">años en producción</p>
        </section>
        <section className="bento animate-rise md:col-span-2 grid grid-cols-2 gap-2" style={delay(2)}>
          <div><p className="font-display text-4xl">120+</p><p className="text-xs text-muted-foreground">repositorios</p></div>
          <div><p className="font-display text-4xl">3k</p><p className="text-xs text-muted-foreground">estrellas</p></div>
          <div><p className="font-display text-4xl">40+</p><p className="text-xs text-muted-foreground">proyectos</p></div>
          <div><p className="font-display text-4xl">2k</p><p className="text-xs text-muted-foreground">commits/año</p></div>
        </section>

        {/* Code */}
        <section className="bento animate-rise md:col-span-3 font-mono text-sm" style={delay(3)}>
          <div className="mb-4 flex gap-1.5"><span className="h-3 w-3 rounded-full bg-muted" /><span className="h-3 w-3 rounded-full bg-secondary" /><span className="h-3 w-3 rounded-full bg-primary" /></div>
          <pre className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
<span className="text-primary">const</span> alba = {"{"}{"\n"}
{"  "}rol: <span className="text-accent">"Senior Full Stack"</span>,{"\n"}
{"  "}foco: [<span className="text-accent">"arquitectura"</span>, <span className="text-accent">"DX"</span>, <span className="text-accent">"rendimiento"</span>],{"\n"}
{"  "}café: <span className="text-primary">Infinity</span>,{"\n"}
{"}"};
          </pre>
        </section>

        {/* Stack */}
        <section className="bento animate-rise md:col-span-3" style={delay(4)}>
          <p className="mb-4 font-mono text-xs text-muted-foreground">stack</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="rounded-full border bg-muted px-3 py-1 text-sm transition hover:border-primary hover:text-primary">{s}</span>
            ))}
          </div>
        </section>

        {/* Projects */}
        {projects.map((p, i) => (
          <a key={p.name} href={`${GITHUB}/${p.name}`} target="_blank" rel="noreferrer"
            className={`bento animate-rise group flex flex-col justify-between ${i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-3"}`}
            style={delay(5 + i)}>
            <div className="flex items-start justify-between">
              <p className="font-mono text-xs text-muted-foreground">repo / {String(i + 1).padStart(2, "0")}</p>
              <span className="font-mono text-xs text-muted-foreground">★ {p.stars}</span>
            </div>
            <div className="mt-8">
              <h2 className="font-display text-3xl transition group-hover:text-primary">{p.name} <span className="inline-block transition group-hover:translate-x-1">↗</span></h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="font-mono text-xs text-accent">#{t}</span>)}
              </div>
            </div>
          </a>
        ))}

        {/* CTA */}
        <section className="animate-rise md:col-span-6 rounded-[var(--radius-2xl)] bg-gradient-mint p-10 text-primary-foreground" style={delay(9)}>
          <h2 className="font-display text-4xl md:text-6xl">¿Construimos algo <em>increíble</em>?</h2>
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm">
            <a href="mailto:hola@albasierra.dev" className="underline-offset-4 hover:underline">hola@albasierra.dev</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">GitHub ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">LinkedIn ↗</a>
          </div>
        </section>
      </div>

      <footer className="mt-10 text-center font-mono text-xs text-muted-foreground">© 2026 Alba Sierra Rodríguez</footer>
    </main>
  );
}
