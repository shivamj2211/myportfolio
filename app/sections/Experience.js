import { portfolioData } from "../data/portfolioData";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

const techIconMap = {
  "React.js": FaReact,
  React: FaReact,
  "Next.js": SiNextdotjs,
  JavaScript: FaJsSquare,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  "Redux Toolkit": SiRedux,
  TypeScript: SiTypescript,
};

const techColorMap = {
  "React.js": "text-cyan-600",
  React: "text-cyan-600",
  "Next.js": "text-zinc-800",
  JavaScript: "text-yellow-500",
  HTML: "text-orange-500",
  CSS: "text-blue-600",
  "Tailwind CSS": "text-sky-500",
  "Redux Toolkit": "text-violet-600",
  TypeScript: "text-blue-700",
};

export default function Experience() {
  const { journey } = portfolioData;

  return (
    <section className="mt-8 rounded-2xl border border-emerald-300/50 bg-[linear-gradient(90deg,rgba(24,34,28,0.9),rgba(23,32,40,0.95),rgba(11,26,40,0.95))] px-6 py-10 md:px-10 md:py-14">
      <h2 className="text-center text-3xl font-bold text-emerald-300 md:text-5xl">{journey.title}</h2>

      <div className="relative mt-12 pb-16">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-emerald-300/40 md:block" />

        <div className="space-y-10 md:space-y-14">
          {journey.items.map((item, index) => {
            const isLeft = item.side ? item.side === "left" : index % 2 === 0;
            const cardTitle = item.cardTitle || item.label || "Milestone";
            const cardTags = Array.isArray(item.cardTags) ? item.cardTags : [];
            const logoTech = Array.isArray(item.watermarkTech)
              ? item.watermarkTech.filter((tech) => techIconMap[tech])
              : [];

            return (
              <div key={item.id} className="relative grid items-center gap-6 md:grid-cols-2 md:gap-12">
                <div className={isLeft ? "order-1" : "order-2"}>
                  {item.period ? (
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/90 md:text-base">
                      {item.period}
                    </p>
                  ) : null}
                  <p className="text-2xl leading-snug text-emerald-50/95 md:text-4xl">{item.text}</p>
                </div>

                <div className={isLeft ? "order-2" : "order-1"}>
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-300/80 bg-neutral-100 p-8 text-center shadow-lg shadow-emerald-950/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/40">
                    {item.backgroundImage ? (
                      <div className="mb-5 rounded-xl bg-neutral-100 p-3">
                        <img
                          src={item.backgroundImage}
                          alt={`${cardTitle} visual`}
                          className="mx-auto h-44 w-full rounded-lg object-contain md:h-48"
                        />
                      </div>
                    ) : null}

                    <div className="relative">
                      <p className="text-3xl font-bold text-neutral-800 md:text-4xl">{cardTitle}</p>
                      {logoTech.length > 0 ? (
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                          {logoTech.map((tech) => {
                            const TechIcon = techIconMap[tech];
                            const iconColor = techColorMap[tech] || "text-emerald-700";

                            return (
                              <span
                                key={`${item.id}-icon-${tech}`}
                                className="inline-flex items-center gap-1 rounded-full border border-emerald-800/15 bg-emerald-100/75 px-3 py-1 text-xs font-semibold text-emerald-900"
                              >
                                <TechIcon className={iconColor} />
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>

                    {cardTags.length > 0 && logoTech.length === 0 ? (
                      <div className="relative mt-4 flex flex-wrap items-center justify-center gap-2">
                        {cardTags.map((tag) => (
                          <span
                            key={`${item.id}-${tag}`}
                            className="rounded-full bg-emerald-900/10 px-3 py-1 text-xs font-semibold text-emerald-900 md:text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-100 bg-emerald-300 md:block" />
              </div>
            );
          })}
        </div>

        <div className="relative mt-8 hidden md:block">
          <div className="pointer-events-none absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-emerald-100 bg-emerald-300" />
          <p className="pt-4 text-center text-5xl font-bold text-emerald-300">
            {journey.inProgressText || "is in Progress..."}
          </p>
        </div>

        <p className="mt-6 text-center text-3xl font-bold text-emerald-300 md:hidden">
          {journey.inProgressText || "is in Progress..."}
        </p>
      </div>
    </section>
  );
}
