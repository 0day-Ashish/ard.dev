"use client";

import { useState } from "react";
import Particles from "../components/bg";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { HoverBorderGradient } from "../components/hover-border-gradient";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/send-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Check your internet or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="fixed inset-0 w-full h-full bg-black text-white flex items-center justify-center m-0 p-4 overflow-auto">
      <div className="absolute inset-0 w-full h-full -z-10">
        <Particles />
      </div>

      {/* container: responsive two-column (stack on small screens) */}
      <div className="relative z-10 w-full max-w-5xl bg-black/60 backdrop-blur-sm rounded-lg p-6 md:p-10 flex flex-col md:flex-row gap-6">
        {/* Left: contact form */}
        <section className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="flex flex-col">
              <span className="text-sm text-gray-300 mb-1">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
                aria-label="Name"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-gray-300 mb-1">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                aria-label="Email"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-gray-300 mb-1">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
                placeholder="Write your message..."
                aria-label="Message"
              />
            </label>

            <div className="flex items-center gap-3 mt-2">
              <HoverBorderGradient>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-md px-3 py-2 text-white disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </HoverBorderGradient>

              {submitted && (
                <span className="text-green-400">Message sent. Thank you!</span>
              )}
              {error && <span className="text-rose-400">{error}</span>}
            </div>
          </form>
        </section>

        {/* Right: Lottie animation smaller and right-aligned */}
        <aside className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
          <div className="w-48 h-48 md:w-80 md:h-80">
            <DotLottieReact
              src="https://lottie.host/ba797346-d68c-4808-bf58-82d088acb8ab/Aj7K3Vz4yx.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </aside>
      </div>
    </main>
  );
}