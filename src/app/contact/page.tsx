"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend or an email service
  };

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-zinc-900 rounded-2xl p-8 shadow-lg flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="bg-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="bg-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="bg-zinc-800 text-white rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <button
          type="submit"
          className="bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-400 text-center mt-2">Thank you for reaching out!</p>
        )}
      </form>
    </main>
  );
}
