import { createFileRoute } from "@tanstack/react-router";

const GITHUB = "https://github.com/Albaaaaa";

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
  { name: "serprofes", desc: "Plataforma web educativa publicada en serprofes.es.", tags: ["HTML", "CSS", "PHP"], link: "https://serprofes.es" },
  { name: "my-repo", desc: "App de citas: gestión de reservas y agenda.", tags: ["JavaScript", "PHP", "MySQL"] },
  { name: "Base-de-datos", desc: "Diseño y gestión de bases de datos relacionales.", tags: ["MySQL", "HTML"] },
  { name: "Albaaaaa.github.io", desc: "Mi portfolio profesional publicado en GitHub Pages.", tags: ["HTML", "CSS"] },
];

const stack = ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Git", "GitHub Pages", "Diseño responsive"];

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
              Desarrollo web de principio a fin: interfaces cuidadas con HTML, CSS y JavaScript, y lógica sólida con PHP y MySQL. Certificado de Profesionalidad en Desarrollo Web.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-mint px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105">
              Ver repositorios
            </a>
            <a href="https://serprofes.es" target="_blank" rel="noreferrer" className="rounded-full border px-6 py-3 transition hover:border-primary">
              serprofes.es
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="bento animate-rise md:col-span-2" style={delay(1)}>
          <p className="font-mono text-xs text-muted-foreground">github</p>
          <p className="font-display text-6xl text-gradient">6</p>
          <p className="text-sm text-muted-foreground">repositorios públicos</p>
        </section>
        <section className="bento animate-rise md:col-span-2" style={delay(2)}>
          <p className="font-mono text-xs text-muted-foreground">formación</p>
          <p className="font-display text-3xl">Certificado de Profesionalidad</p>
          <p className="text-sm text-muted-foreground">Desarrollo Web</p>
        </section>

        {/* Code */}
        <section className="bento animate-rise md:col-span-3 font-mono text-sm" style={delay(3)}>
          <div className="mb-4 flex gap-1.5"><span className="h-3 w-3 rounded-full bg-muted" /><span className="h-3 w-3 rounded-full bg-secondary" /><span className="h-3 w-3 rounded-full bg-primary" /></div>
          <pre className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
<span className="text-primary">const</span> alba = {"{"}{"\n"}
{"  "}rol: <span className="text-accent">"Full Stack Developer"</span>,{"\n"}
{"  "}foco: [<span className="text-accent">"PHP"</span>, <span className="text-accent">"MySQL"</span>, <span className="text-accent">"JavaScript"</span>],{"\n"}
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
            <a href="https://serprofes.es" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">serprofes.es ↗</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">GitHub ↗</a>
          </div>
        </section>
      </div>

      <footer className="mt-10 text-center font-mono text-xs text-muted-foreground">© 2026 Alba Sierra Rodríguez</footer>
    </main>
  );
}
