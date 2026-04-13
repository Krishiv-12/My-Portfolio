"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "Krishivrawat712@gmail.com",
    href: "mailto:Krishivrawat712@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 89824 82283",
    href: "tel:+918982482283",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "krishanpal-rawat",
    href: "http://www.linkedin.com/in/krishanpal-rawat",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Krishiv-12",
    href: "https://github.com/Krishiv-12",
  },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_2w7b7bk",
        "template_s1jdpfg",
        form.current!,
        "cTghXkJoSMY0ualGs"
      )
      .then(() => {
        setStatus("success");
        form.current?.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="bg-black py-10 sm:py-10 lg:py-10 px-5 sm:px-8 overflow-hidden border-t-1 border-white/20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14 lg:mb-16">
           <motion.p
                    className="text-white/30 text-sm font-mono mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    05 — Contacts
                  </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's work together
          </motion.h2>
          <motion.p
            style={{ fontFamily: "var(--font-machina)" }}
            className="text-white/40 mt-4 max-w-md text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Have a project in mind or want to chat? Drop a message — I usually
            reply within 24 hours.
          </motion.p>
        </div>

        {/* MAIN GRID */}
        <motion.div
          className="grid lg:grid-cols-[1fr_420px] gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* FORM CARD */}
          <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 sm:p-10">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 h-full">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="name" placeholder="Your name" required />
                <Field name="email" type="email" placeholder="Your email" required />
              </div>
              <Field name="message" placeholder="Tell me about your project..." required textarea rows={7} />

              <div className="flex items-center gap-5 mt-auto pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-emerald-400 text-sm"
                  >
                    Message sent ✓
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-400 text-sm"
                  >
                    Something went wrong. Try again.
                  </motion.p>
                )}
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* CONTACT INFO CARD */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-8 flex-1">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-6">Contact Info</p>
              <div className="flex flex-col gap-5">
                {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-white/25 transition">
                      <Icon size={14} className="text-white/50 group-hover:text-white/80 transition" />
                    </div>
                    <div>
                      <p className="text-white/25 text-xs mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white/70 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AVAILABILITY BADGE CARD */}
            <div className="bg-[#0e0e0e] border border-white/10 rounded-2xl p-7 flex items-center justify-between">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1.5">Status</p>
                <p className="text-white text-sm font-medium">Available for work</p>
                <p className="text-white/35 text-xs mt-0.5">Open to full-time & freelance</p>
              </div>
              <div className="relative w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                <span className="relative block w-3 h-3 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ── Reusable field ── */
function Field({
  name,
  placeholder,
  type = "text",
  required,
  textarea,
  rows,
}: {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
}) {
  const base =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white/80 text-sm placeholder:text-white/25 outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-200 resize-none";

  return textarea ? (
    <textarea name={name} placeholder={placeholder} required={required} rows={rows} className={base} />
  ) : (
    <input name={name} type={type} placeholder={placeholder} required={required} className={base} />
  );
}