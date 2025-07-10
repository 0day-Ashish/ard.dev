"use client";

import { useState } from "react";
import Particles from "../components/bg";

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
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Check your internet or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="fixed inset-0 w-full h-full bg-black text-white flex flex-col items-center justify-center m-0 p-0 overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        <Particles />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-16 text-center">
          Send me a message
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-md bg-black/40 rounded-2xl p-8 shadow-xl backdrop-blur-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="abc@xyz.com"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
            required
          />
          <textarea
            name="message"
            placeholder="Type your message here..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white transition resize-none"
            required
          />
          <button
            type="submit"
            className="mx-auto px-8 py-2 rounded-lg bg-white text-black font-semibold hover:bg-opacity-80 transition w-30"
            disabled={submitted || loading}
          >
            {loading ? "Sending..." : submitted ? "Sent!" : "Send"}
          </button>
        </form>

        {submitted && (
          <p className="mt-6 text-green-400 text-center">
            ✅ Thank you for reaching out! I&apos;ll get back to you soon.
          </p>
        )}

        {error && (
          <p className="mt-6 text-red-400 text-center">❌ {error}</p>
        )}
      </div>
    </main>
  );
}
