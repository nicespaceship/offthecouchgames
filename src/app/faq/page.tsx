'use client';

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("General");

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

  const categories = faqs.map((cat) => cat.category);
  const currentCategory = faqs.find((cat) => cat.category === selectedCategory);
  const currentCategoryIndex = categories.indexOf(selectedCategory);
  const currentItems = currentCategory?.items || [];
  const globalStartIndex = faqs
    .slice(0, currentCategoryIndex)
    .reduce((sum, cat) => sum + cat.items.length, 0);

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
      <section className="py-14 md:py-20 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-white mb-6 text-4xl md:text-5xl">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Can't find the answer you're looking for? Reach out to us directly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="wave" color="#111827" />

      {/* Category Pills */}
      <section className="section-padding bg-[#111827]">
        <div className="section-container">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SectionDivider variant="wave" color="#0a0f1a" />

      {/* FAQs */}
      <section className="section-padding bg-[#0a0f1a]">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-teal-400 rounded" />
              {selectedCategory}
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {currentItems.map((item, itemIdx) => {
              const globalIdx = globalStartIndex + itemIdx;

              return (
                <AnimatedSection key={globalIdx} delay={itemIdx * 0.05} animation="fadeInUp">
                  <button
                    onClick={() => toggleItem(globalIdx)}
                    className="w-full text-left group"
                  >
                    <div className={`bg-[#111827] border-2 rounded-lg p-6 cursor-pointer transition-all ${
                      openItems.includes(globalIdx)
                        ? 'border-teal-400'
                        : 'border-slate-700 hover:border-teal-400'
                    }`}>
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-base md:text-lg font-semibold text-white flex-1 pr-4 group-hover:text-teal-300 transition-colors">
                          {item.q}
                        </h3>
                        <div className="flex-shrink-0 pt-1">
                          <svg
                            className={`w-5 h-5 text-teal-400 transition-transform duration-300 ${
                              openItems.includes(globalIdx) ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        </div>
                      </div>

                      {openItems.includes(globalIdx) && (
                        <div className="mt-4 pt-4 border-t border-slate-700 text-slate-300 text-sm md:text-base leading-relaxed animate-in fade-in duration-300">
                          {item.a}
                        </div>
                      )}
                    </div>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="#111827" />

      {/* Still Have Questions */}
      <section className="section-padding bg-[#111827]">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-white mb-6 text-3xl">Still Have Questions?</h2>
            <p className="text-slate-300 mb-10 text-lg">
              We're here to help. Reach out via phone, email, or visit us in person.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <AnimatedSection delay={0.1}>
              <a
                href="tel:+14084782341"
                className="bg-[#111827] border-2 border-slate-700 rounded-lg p-6 block hover:border-teal-400 hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-3">📞</div>
                <p className="text-white font-semibold mb-1 text-lg">Call</p>
                <p className="text-teal-400 text-sm font-mono">+1 (408) 478-2341</p>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <a
                href="mailto:contact@offthecouchgames.com"
                className="bg-[#111827] border-2 border-slate-700 rounded-lg p-6 block hover:border-teal-400 hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-3">✉️</div>
                <p className="text-white font-semibold mb-1 text-lg">Email</p>
                <p className="text-teal-400 text-sm break-all">contact@offthecouchgames.com</p>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Link
                href="/contact"
                className="bg-[#111827] border-2 border-slate-700 rounded-lg p-6 block hover:border-teal-400 hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-3">📍</div>
                <p className="text-white font-semibold mb-1 text-lg">Visit</p>
                <p className="text-teal-400 text-sm">Fremont, CA</p>
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center">
              <a
                href="https://offthecouch.io/book/otc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Ready to Book?
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
