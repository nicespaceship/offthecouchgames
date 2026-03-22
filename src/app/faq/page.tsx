"use client";

import type { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

// Metadata won't work in client components, so we'll handle it differently
export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "General",
      items: [
        {
          q: "What is Off The Couch?",
          a: "Off The Couch is an immersive escape room experience in Fremont, CA. We specialize in narrative-driven experiences called Asheville, which spans 12 interconnected chapters. Unlike traditional escape rooms, we remove time limits and allow progress saves.",
        },
        {
          q: "Where is Off The Couch located?",
          a: "We're located at 555 Mowry Avenue, Fremont, CA 94536. We're open 10am-8pm daily. Free parking is available.",
        },
        {
          q: "How many players can participate?",
          a: "Each session is private for 2-6 players. If your group is larger, we can arrange multiple simultaneous sessions.",
        },
      ],
    },
    {
      category: "Experiences",
      items: [
        {
          q: "What is the Asheville mystery?",
          a: "Asheville is a 12-chapter noir mystery. You investigate the death of Detective William Occam. Currently, three chapters are available: Occam's Apartment (105 min), Norcross Art Gallery (90 min), and The Morgue (120 min). More chapters are in development.",
        },
        {
          q: "Which chapter should I start with?",
          a: "We recommend starting with Chapter 1: Occam's Apartment. It introduces the story and world. However, each chapter can be played independently if you prefer.",
        },
        {
          q: "Do I need to finish a chapter in one session?",
          a: "No. Your progress is saved automatically. You can come back anytime to continue where you left off. This is perfect if you want to split chapters across multiple visits.",
        },
        {
          q: "Are there time limits?",
          a: "No. We removed artificial time pressure entirely. You can investigate at your own pace. Spend as much or as little time as you need.",
        },
      ],
    },
    {
      category: "Pricing",
      items: [
        {
          q: "How does pricing work?",
          a: "We charge by time used, not flat rates. The hourly rate per person decreases with larger groups: 2 players ($66/hr), 3 ($54/hr), 4 ($52/hr), 5 ($48/hr), 6 ($45/hr). You pay a small deposit covering estimated time, then only pay for time actually used.",
        },
        {
          q: "What if I finish early?",
          a: "You only pay for the time you use. If you complete a chapter in 80 minutes instead of 105, you'll be charged for 80 minutes.",
        },
        {
          q: "What if I need extra time?",
          a: "No problem. You can use as much time as needed. You'll only pay for the additional time beyond your deposit estimate.",
        },
        {
          q: "Are there group discounts?",
          a: "Yes. Larger groups receive lower per-person hourly rates. Contact us for special corporate packages and multi-chapter pricing.",
        },
      ],
    },
    {
      category: "Booking & Logistics",
      items: [
        {
          q: "How do I book?",
          a: "You can book online at https://offthecouch.io/book/otc or call us at +1 (408) 478-2341. We're open 10am-8pm daily.",
        },
        {
          q: "When can I book?",
          a: "We're open for bookings every day, 10am-8pm. Extended hours may be available for larger group bookings. Contact us to discuss your schedule.",
        },
        {
          q: "What should I bring?",
          a: "Just yourselves. Wear comfortable clothing you don't mind getting dusty. No special equipment or prior experience needed.",
        },
        {
          q: "When should I arrive?",
          a: "Please arrive 10-15 minutes early. We'll brief you on the experience and answer any final questions.",
        },
        {
          q: "What's the waiver process?",
          a: "All participants must complete a waiver. You can sign before arrival at https://offthecouch.io/checkin/otc or on-site.",
        },
      ],
    },
    {
      category: "Content & Suitability",
      items: [
        {
          q: "Is this suitable for children?",
          a: "Occam's Apartment and The Morgue explore themes of death and murder, so they're not recommended for children. Some chapters may be more family-friendly—contact us to discuss what's appropriate for your group.",
        },
        {
          q: "What's the difficulty level?",
          a: "Difficulty increases across the three available chapters. Chapter 1 is intermediate, Chapter 2 is challenging, and Chapter 3 is expert-level. However, there are multiple solution paths, so teams of varying skill levels can succeed.",
        },
        {
          q: "Is this scary?",
          a: "The Morgue has horror elements and an intense atmosphere. Chapters 1 & 2 are more investigative than scary. If you're sensitive to dark themes, contact us to discuss comfort levels.",
        },
        {
          q: "Is this a timed competition?",
          a: "No. This isn't a race. It's an immersive narrative experience where you become the protagonist. The focus is on investigation and storytelling, not speed.",
        },
      ],
    },
    {
      category: "Experience Details",
      items: [
        {
          q: "What if my team gets stuck?",
          a: "We have a hint system. You can request hints at any time without judgment. The experience is designed to be solvable, but hints help if needed.",
        },
        {
          q: "Can we take photos/videos?",
          a: "Personal photos are allowed for memories, but we ask that you not post spoilers publicly. The experience is meant to be surprising for future players.",
        },
        {
          q: "What if someone needs to leave early?",
          a: "You only pay for the time you use, so leaving early is fine. If someone needs to step out temporarily, that works too—just let us know.",
        },
        {
          q: "Can we do multiple chapters in one day?",
          a: "Yes, but we recommend spacing them out. Each chapter is immersive and can be mentally taxing. Back-to-back chapters are possible but not ideal.",
        },
      ],
    },
    {
      category: "Accessibility",
      items: [
        {
          q: "Is the location accessible?",
          a: "We have parking and accessible entrances. If you have specific accessibility needs, please contact us before booking so we can ensure the best experience for you.",
        },
        {
          q: "Can we accommodate wheelchair users?",
          a: "Contact us directly to discuss your specific needs. We're committed to making our experiences accessible to all players.",
        },
        {
          q: "Are service animals allowed?",
          a: "Yes, service animals are welcome. Please mention this when booking so we can accommodate properly.",
        },
      ],
    },
  ];

  return (
    <>
      <head>
        <title>FAQ | Off The Couch - Escape Rooms</title>
        <meta
          name="description"
          content="Frequently asked questions about Off The Couch escape rooms in Fremont."
        />
      </head>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-teal-900/20 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Reach out to us directly.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="section-container max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-teal-500 rounded" />
                  {category.category}
                </h2>

                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => {
                    const globalIdx = faqs
                      .slice(0, catIdx)
                      .reduce((sum, cat) => sum + cat.items.length, 0) + itemIdx;

                    return (
                      <button
                        key={globalIdx}
                        onClick={() => toggleItem(globalIdx)}
                        className="w-full text-left"
                      >
                        <div className="card cursor-pointer hover:border-teal-500 transition-colors">
                          <div className="flex justify-between items-start gap-4">
                            <h3 className="text-lg font-semibold text-white flex-1 pr-4">
                              {item.q}
                            </h3>
                            <span
                              className={`text-2xl text-teal-400 flex-shrink-0 transition-transform ${
                                openItems.includes(globalIdx)
                                  ? "rotate-45"
                                  : "rotate-0"
                              }`}
                            >
                              +
                            </span>
                          </div>

                          {openItems.includes(globalIdx) && (
                            <div className="mt-4 pt-4 border-t border-slate-700 text-slate-300">
                              {item.a}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-6">Still Have Questions?</h2>
          <p className="text-slate-300 mb-8">
            We're here to help. Reach out via phone, email, or visit us in
            person.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <a
              href="tel:+14084782341"
              className="card hover:border-teal-500 transition-colors"
            >
              <div className="text-3xl mb-3">📞</div>
              <p className="text-white font-semibold mb-1">Call</p>
              <p className="text-teal-400 text-sm">+1 (408) 478-2341</p>
            </a>

            <a
              href="mailto:contact@offthecouchgames.com"
              className="card hover:border-teal-500 transition-colors"
            >
              <div className="text-3xl mb-3">✉️</div>
              <p className="text-white font-semibold mb-1">Email</p>
              <p className="text-teal-400 text-sm break-all">
                contact@offthecouchgames.com
              </p>
            </a>

            <Link
              href="/contact"
              className="card hover:border-teal-500 transition-colors"
            >
              <div className="text-3xl mb-3">📍</div>
              <p className="text-white font-semibold mb-1">Visit</p>
              <p className="text-teal-400 text-sm">Fremont, CA</p>
            </Link>
          </div>

          <a
            href="https://offthecouch.io/book/otc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Ready to Book?
          </a>
        </div>
      </section>
    </>
  );
}
