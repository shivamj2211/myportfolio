"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

export default function Connect() {
  const { skills, contact, profile } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    shareResume: "yes",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nShare resume: ${formData.shareResume}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [formData, profile.email]);

  function onChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <section className="mt-8 space-y-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-emerald-300/40 bg-[linear-gradient(120deg,rgba(16,35,32,0.95),rgba(22,39,50,0.95),rgba(11,29,43,0.95))] p-6 md:p-10"
      >
        <h2 className="text-3xl font-bold text-emerald-300 md:text-5xl">{skills.title}</h2>
        <div className="mt-8 grid gap-4">
          {skills.groups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-xl border border-emerald-300/25 bg-emerald-50/5 p-4"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">{group.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-50/85 md:text-base">
                {group.items.join(" | ")}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-cyan-300/40 bg-[linear-gradient(120deg,rgba(15,18,28,0.95),rgba(24,29,40,0.95),rgba(11,23,38,0.95))] p-6 md:p-10"
      >
        <h2 className="text-3xl font-bold text-cyan-200 md:text-5xl">{contact.heading}</h2>
        <div className="mt-6 space-y-4 text-cyan-50/85 md:text-lg">
          {contact.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm md:text-base">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-cyan-100 hover:bg-cyan-300/20"
          >
            <FaEnvelope /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-cyan-100 hover:bg-cyan-300/20"
          >
            <FaPhone /> {profile.phone}
          </a>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-xl border border-cyan-300/25 bg-white/5 p-5 md:p-6">
          <label className="grid gap-2 text-sm text-cyan-50/90">
            Full name
            <input
              name="name"
              value={formData.name}
              onChange={onChange}
              required
              className="rounded-md border border-cyan-200/25 bg-slate-900/60 px-3 py-2 text-cyan-50 outline-none ring-cyan-300/50 focus:ring-2"
            />
          </label>

          <label className="grid gap-2 text-sm text-cyan-50/90">
            Email address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
              className="rounded-md border border-cyan-200/25 bg-slate-900/60 px-3 py-2 text-cyan-50 outline-none ring-cyan-300/50 focus:ring-2"
            />
          </label>

          <label className="grid gap-2 text-sm text-cyan-50/90">
            Your message
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={onChange}
              required
              className="rounded-md border border-cyan-200/25 bg-slate-900/60 px-3 py-2 text-cyan-50 outline-none ring-cyan-300/50 focus:ring-2"
            />
          </label>

          <div className="flex flex-wrap items-center gap-6 text-sm text-cyan-100">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="shareResume" value="yes" checked={formData.shareResume === "yes"} onChange={onChange} />
              Share resume
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="shareResume" value="not-sure" checked={formData.shareResume === "not-sure"} onChange={onChange} />
              Not sure
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 rounded-md border border-cyan-300/60 bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-400/30 md:text-base"
          >
            {contact.ctaLabel}
          </button>
        </form>
      </motion.div>

      <footer className="rounded-xl border border-cyan-300/25 bg-slate-950/40 px-4 py-5">
        <div className="flex items-center justify-center gap-5 text-cyan-100">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-cyan-300">
            <FaLinkedin size={20} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-cyan-300">
            <FaGithub size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-cyan-300">
            <FaEnvelope size={20} />
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-cyan-50/70">
          {`© ${new Date().getFullYear()} Shivam Jaiswal. All rights reserved.`}
        </p>
      </footer>
    </section>
  );
}
