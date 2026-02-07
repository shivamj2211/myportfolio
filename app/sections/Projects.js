"use client";

import { motion } from "framer-motion";
import { FaCss3Alt, FaFlask } from "react-icons/fa";
import {
  SiGraphql,
  SiJest,
  SiNextdotjs,
  SiRadixui,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { portfolioData } from "../data/portfolioData";

const iconMap = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  GraphQL: SiGraphql,
  Jest: SiJest,
  Playwright: FaFlask,
  Vercel: SiVercel,
  Render: SiRender,
  "Radix UI": SiRadixui,
  "REST API": TbApi,
  CSS: FaCss3Alt,
};

const colorMap = {
  React: "text-cyan-300",
  "Next.js": "text-zinc-200",
  "Tailwind CSS": "text-sky-300",
  GraphQL: "text-pink-300",
  Jest: "text-rose-300",
  Playwright: "text-lime-300",
  Vercel: "text-zinc-100",
  Render: "text-violet-300",
  "Radix UI": "text-emerald-300",
  "REST API": "text-amber-300",
  CSS: "text-blue-300",
};

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="relative mt-8 overflow-hidden rounded-2xl border border-cyan-300/40 bg-[radial-gradient(circle_at_15%_10%,rgba(45,212,191,0.24),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.22),transparent_35%),linear-gradient(120deg,#091722,#111827,#0a1a2c)] px-6 py-12 md:px-10 md:py-16">
      <div className="pointer-events-none absolute -left-16 top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-3xl font-bold text-cyan-200 md:text-5xl">{projects.title}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-cyan-50/80 md:text-lg">{projects.subtitle}</p>
      </motion.div>

      <div className="mt-10 grid gap-8">
        {projects.items.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl border border-cyan-200/30 bg-white/5 p-5 backdrop-blur-sm md:p-7"
          >
            {project.image ? (
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative mb-6 overflow-hidden rounded-xl border border-cyan-200/30 bg-slate-900/50"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.2),transparent_45%)]" />
                <img
                  src={project.image}
                  alt={project.imageAlt || `${project.name} preview`}
                  className="relative h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-64"
                  loading="lazy"
                />
              </motion.div>
            ) : null}

            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-3xl font-bold text-white md:text-4xl">{project.name}</h3>
                  <span className="rounded-full border border-cyan-300/50 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    {project.tagline}
                  </span>
                </div>

                <p className="mt-4 text-base leading-relaxed text-slate-100/90 md:text-lg">{project.summary}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-cyan-300 underline decoration-cyan-500/70 underline-offset-4 hover:text-cyan-200"
                >
                  Visit Project
                </a>

                <ul className="mt-6 grid gap-3 text-slate-100/90">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm md:text-base">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-cyan-200/35 bg-slate-950/45 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Tech Stack Used</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {project.stack.map((tech) => {
                    const Icon = iconMap[tech] || TbApi;
                    const iconColor = colorMap[tech] || "text-cyan-200";

                    return (
                      <motion.div
                        key={`${project.id}-${tech}`}
                        whileHover={{ scale: 1.05 }}
                        className="group rounded-lg border border-cyan-200/20 bg-slate-900/60 p-3"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`text-xl ${iconColor}`} />
                          <span className="text-xs font-medium text-cyan-50/90 md:text-sm">{tech}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
