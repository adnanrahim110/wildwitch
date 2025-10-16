"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

function InputWrap({ label, htmlFor, children }) {
  return (
    <div className="space-y-2">
      {/* <label
        htmlFor={htmlFor}
        className="text-xs uppercase tracking-wide text-white/60"
      >
        {label}
      </label> */}
      {children}
    </div>
  );
}

export default function ContactBlock() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ ok: false, err: "" });

  const inputCls =
    "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30";
  const selectCls =
    "w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none focus:ring-2 focus:ring-white/30";
  const textareaCls =
    "w-full min-h-[160px] rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-white/30";

  const validate = () => {
    const e = {};
    if (!data.name.trim()) e.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Enter a valid email";
    if (data.message.trim().length < 20)
      e.message = "Write at least 20 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    setStatus({ ok: false, err: "" });
    if (!validate()) return;
    setStatus({ ok: true, err: "" });
    setData({ name: "", email: "", message: "" });
  };

  return (
    <section className="font-aria relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(100%_70%_at_100%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute right-[-12%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[#ff4444]/14 blur-3xl" />
      <div className="bg-noise" />
      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur p-6 md:p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-sm text-white/85">Email</div>
                    <a
                      href="mailto:MJDooley001@hotmail.com"
                      className="text-xs text-white/70 hover:text-white transition"
                    >
                      MJDooley001@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-sm text-white/85">Location</div>
                    <div className="text-xs text-white/70">Toronto, Canada</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06]">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className="text-sm text-white/85">Response time</div>
                    <div className="text-xs text-white/70">
                      Usually within 2–3 business days
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs text-white/75">
                Special thanks to eBook Visionary Publishing for support and
                collaboration.
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur p-6 md:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <InputWrap label="Name" htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className={inputCls}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-[#ff9a9a]">{errors.name}</p>
                  )}
                </InputWrap>
                <InputWrap label="Email" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className={inputCls}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-[#ff9a9a]">{errors.email}</p>
                  )}
                </InputWrap>
              </div>

              <div className="mt-4">
                <InputWrap label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                    className={textareaCls}
                    aria-invalid={!!errors.message}
                    placeholder="Write your message..."
                  />
                  {errors.message && (
                    <p className="text-[11px] text-[#ff9a9a]">
                      {errors.message}
                    </p>
                  )}
                </InputWrap>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
                <Button size="md">Send Message</Button>
              </div>

              {status.ok && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-emerald-300 text-sm">
                  <CheckCircle2 size={16} />
                  Message sent. Thanks for reaching out.
                </div>
              )}
              {!!status.err && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-red-300 text-sm">
                  <AlertCircle size={16} />
                  {status.err}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      <div className="section-edge" />
    </section>
  );
}
