'use client';

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="card border-2 border-slate-700 hover:border-teal-400 transition-colors">
      <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

      {submitted && (
        <div className="mb-6 p-4 bg-teal-900 border-2 border-teal-600 rounded-lg">
          <p className="text-teal-300 font-semibold text-sm">
            Thank you! We&apos;ve received your message and will respond within 24 hours.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-slate-300 font-semibold text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-semibold text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-semibold text-sm mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all resize-none"
            placeholder="Tell us about your inquiry..."
          />
        </div>

        <button
          type="submit"
          className="w-full btn btn-primary font-bold py-2.5 text-base"
        >
          Send Message
        </button>
      </form>

      <p className="text-slate-400 text-xs mt-4 text-center">
        We respond to all inquiries within 24 hours.
      </p>
    </div>
  );
}
