"use client";

import { portfolioData } from "../data/portfolioData";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Hero() {
  const { hero } = portfolioData;
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 160, damping: 20, mass: 0.6 });
  const rotateY = useSpring(tiltY, { stiffness: 160, damping: 20, mass: 0.6 });

  function handleCardMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    tiltY.set((px - 0.5) * 12);
    tiltX.set((0.5 - py) * 12);
  }

  function handleCardLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <section className="pt-12">
      <div className="relative overflow-hidden rounded-3xl border border-emerald-300/45 bg-[radial-gradient(circle_at_10%_10%,rgba(45,212,191,0.24),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.25),transparent_35%),linear-gradient(115deg,#0f172a,#0c2230,#0a1730)]">
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 bottom-2 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-2 flex flex-col justify-between gap-7 md:order-1"
          >
            <div>
              <p className="text-4xl font-semibold leading-tight text-emerald-300 sm:text-5xl md:text-6xl">
                {hero.greeting}
              </p>
              <div className="mt-3 space-y-1.5">
                {hero.roleLines.map((line) => (
                  <p key={line} className="text-4xl font-semibold text-emerald-300 sm:text-5xl md:text-6xl">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="max-w-3xl rounded-xl border border-emerald-300/25 bg-emerald-50/5 p-4">
              <p className="text-base text-emerald-100/85 md:text-xl">{hero.quote}</p>
              <p className="mt-2 text-lg font-semibold text-emerald-300 md:text-2xl">- {hero.quoteAuthor}</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-emerald-300">{hero.name}</p>
              <p className="text-sm text-emerald-100/80 md:text-base">{hero.subtitle}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="order-1 flex items-center justify-center md:order-2"
          >
            <div className="w-full [perspective:1200px]">
              <motion.div
                onMouseMove={handleCardMove}
                onMouseLeave={handleCardLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative mx-auto h-72 w-full max-w-[19rem] sm:h-80 sm:max-w-[22rem] md:h-[26rem] md:max-w-[24rem]"
              >
                <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-br from-cyan-300/45 via-emerald-300/30 to-blue-300/40 blur-md" />
                <div className="relative h-full w-full overflow-hidden border border-cyan-200/55 bg-slate-900/65 p-2 shadow-2xl shadow-cyan-950/50 [clip-path:polygon(14%_0,100%_0,100%_84%,86%_100%,0_100%,0_16%)]">
                  <div className="relative h-full w-full overflow-hidden bg-black/35 [clip-path:polygon(14%_0,100%_0,100%_84%,86%_100%,0_100%,0_16%)]">
                    {hero.profileImage ? (
                      <Image
                        src={hero.profileImage}
                        alt={`${hero.name} profile`}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    ) : null}

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,20,0.18),rgba(4,10,20,0.78))]" />

                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-3 top-3 rounded-full border border-cyan-200/55 bg-slate-900/70 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-cyan-100 md:text-xs"
                    >
                      FRONTEND
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute right-3 top-12 rounded-full border border-emerald-200/55 bg-slate-900/70 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-emerald-100 md:text-xs"
                    >
                      PERFORMANCE
                    </motion.div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md border border-emerald-300/50 bg-emerald-950/70 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-emerald-200 md:text-sm">
                      OPEN TO BUILD
                    </div>
                    {!hero.profileImage ? (
                      <div className="absolute inset-0 grid place-items-center text-7xl font-bold text-emerald-200">
                        {hero.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
