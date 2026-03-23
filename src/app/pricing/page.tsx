'use client';

import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

export default function PricingPage() {
  const [selectedPlayers, setSelectedPlayers] = useState(4);

  const pricingTiers = [
    {
      players: 2,
      hourlyRate: "$66",
      perPerson: "$33",
      apartmentCost: "$115",
      galleryCost: "$99",
      morgueCost: "$132",
    },
    {
      players: 3,
      hourlyRate: "$54",
      perPerson: "$18",
      apartmentCost: "$95",
      galleryCost: "$81",
      morgueCost: "$108",
    },
    {
      players: 4,
      hourlyRate: "$52",
      perPerson: "$13",
      apartmentCost: "$91",
      galleryCost: "$78",
      morgueCost: "$104",
      featured: true,
    },
    {
      players: 5,
      hourlyRate: "$48",
      perPerson: "$9.60",
      apartmentCost: "$84",
      galleryCost: "$72",
      morgueCost: "$96",
    },
    {
      players: 6,
      hourlyRate: "$45",
      perPerson: "$7.50",
      apartmentCost: "$79",
      galleryCost: "$68",
      morgueCost: "$90",
    },
  ];

  const chapters = [
    {
      name: "Occam's Apartment",
      chapter: "Chapter 1",
      duration: "105 minutes",
      description: "Start your investigation. Begin with this chapter to experience the full Asheville story.",
      link: "/experiences/apartment",
    },
    {
      name: "Norcross Art Gallery",
      chapter: "Chapter 2",
      duration: "90 minutes",
      description: "Follow the clues from Chapter 1. The investigation deepens here.",
      link: "/experiences/gallery",
    },
    {
      name: "The Morgue",
      chapter: "Chapter 3",
      duration: "120 minutes",
      description: "The final confrontation. Experience the climax of the mystery.",
      link: "/experiences/morgue",
    },
  ];

  const CurrentTier = pricingTiers.find(t => t.players === selectedPlayers);

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-teal-900/20 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-white mb-6 text-4xl md:text-5xl">Transparent Pricing</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              We charge by time used, not flat rates. Pay only for what you play.
              Group rates decrease the more players you bring. Your deposit covers
              your estimated time; you only pay for time actually used.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="section-container max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-white mb-12 text-center text-3xl">How It Works</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <AnimatedSection delay={0.1} animation="fadeInUp">
              <div className="card relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="card relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500/20 mb-4">
                    <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-2 text-lg">Pay by Time</h3>
                  <p className="text-slate-400 text-sm">
                    No flat rates. You're charged per hour per person. The rate decreases as your group gets larger.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} animation="fadeInUp">
              <div className="card relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="card relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500/20 mb-4">
                    <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-2 text-lg">Small Deposit</h3>
                  <p className="text-slate-400 text-sm">
                    Reserve with a deposit based on estimated time. We calculate it fairly based on your group size.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} animation="fadeInUp">
              <div className="card relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="card relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teal-500/20 mb-4">
                    <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-2 text-lg">Only Pay for Time Used</h3>
                  <p className="text-slate-400 text-sm">
                    Finish early? Don't pay the full deposit. Finish late? Only pay for the extra time.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Cards & Table */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="text-white mb-4 text-center text-3xl">Group Pricing</h2>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">Select your group size below to see pricing for all chapters</p>
          </AnimatedSection>

          {/* Mobile: Pricing Cards */}
          <div className="md:hidden mb-10">
            <div className="grid grid-cols-1 gap-4">
              {pricingTiers.map((tier, idx) => (
                <AnimatedSection key={tier.players} delay={idx * 0.1}>
                  <button
                    onClick={() => setSelectedPlayers(tier.players)}
                    className={`w-full text-left transition-all ${
                      selectedPlayers === tier.players
                        ? 'ring-2 ring-teal-400 bg-slate-800'
                        : 'hover:bg-slate-800/50'
                    } ${tier.featured ? 'relative' : ''}`}
                  >
                    <div className="card">
                      {tier.featured && (
                        <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold rounded-full">
                          Most Popular
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-4 pt-2">
                        <div>
                          <h3 className="text-white font-bold text-lg">{tier.players} Players</h3>
                          <p className="text-teal-400 font-bold text-lg">{tier.hourlyRate}/hour</p>
                        </div>
                        <p className="text-slate-400 text-sm">{tier.perPerson} per person</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Apartment (105 min)</span>
                          <span className="text-white font-semibold">{tier.apartmentCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Gallery (90 min)</span>
                          <span className="text-white font-semibold">{tier.galleryCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Morgue (120 min)</span>
                          <span className="text-white font-semibold">{tier.morgueCost}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Desktop: Full Table */}
          <div className="hidden md:block overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Players</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Hourly Rate</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Per Person/Hour</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Apartment (105 min)</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Gallery (90 min)</th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">Morgue (120 min)</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier) => (
                  <tr
                    key={tier.players}
                    className={`border-b border-slate-700 hover:bg-slate-800/30 transition-colors ${
                      tier.featured ? 'bg-teal-500/10 border-teal-500/30' : ''
                    }`}
                  >
                    <td className="py-4 px-4 text-white font-semibold">
                      {tier.players} Players
                      {tier.featured && (
                        <span className="ml-2 inline-block px-2 py-1 bg-teal-500/30 text-teal-300 text-xs font-bold rounded">
                          Most Popular
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-teal-400 font-semibold">{tier.hourlyRate}</td>
                    <td className="py-4 px-4 text-slate-300">{tier.perPerson}</td>
                    <td className="py-4 px-4 text-slate-300">{tier.apartmentCost}</td>
                    <td className="py-4 px-4 text-slate-300">{tier.galleryCost}</td>
                    <td className="py-4 px-4 text-slate-300">{tier.morgueCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <AnimatedSection>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
              <p className="text-slate-400 text-sm">
                <span className="font-semibold text-white">Note:</span> Prices shown are estimated deposits for typical completion times. You only pay for actual time used. If you finish faster, you pay less.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Chapter Breakdown */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="text-white mb-12 text-center text-3xl">Chapter Breakdown</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chapters.map((chapter, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} animation="fadeInUp">
                <div className="card h-full flex flex-col hover:border-teal-400 transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500/20 mb-4">
                    <span className="text-teal-400 font-bold text-lg">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{chapter.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{chapter.chapter}</p>
                  <div className="bg-slate-800/50 rounded p-4 mb-4">
                    <p className="text-slate-300 text-sm">
                      <span className="text-slate-400">Duration:</span>
                      <span className="text-white font-semibold ml-2">{chapter.duration}</span>
                    </p>
                    <p className="text-slate-300 text-sm">
                      <span className="text-slate-400">Players:</span>
                      <span className="text-white font-semibold ml-2">2-6</span>
                    </p>
                  </div>
                  <p className="text-sm text-slate-400 mb-6 flex-grow">{chapter.description}</p>
                  <Link
                    href={chapter.link}
                    className="btn btn-secondary text-sm justify-center w-full mt-auto"
                  >
                    Learn More
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-white mb-10 text-center text-3xl">Pricing FAQs</h2>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatedSection delay={0.1}>
              <div className="card hover:border-teal-400 transition-colors">
                <h3 className="text-white font-semibold mb-2 text-lg">How is the deposit calculated?</h3>
                <p className="text-slate-400 text-sm">
                  We estimate how long your group will take based on party size and chapter chosen. The deposit covers that estimated time. If you finish earlier, you pay less. If you need more time, you only pay for the extra.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="card hover:border-teal-400 transition-colors">
                <h3 className="text-white font-semibold mb-2 text-lg">What if we finish early?</h3>
                <p className="text-slate-400 text-sm">
                  You only pay for the time you actually use. If you complete the chapter in 90 minutes instead of 105, you'll only be charged for 90 minutes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card hover:border-teal-400 transition-colors">
                <h3 className="text-white font-semibold mb-2 text-lg">What if we need more time?</h3>
                <p className="text-slate-400 text-sm">
                  No problem. You can use as much time as you need. You'll only pay for the additional time beyond your deposit estimate.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="card hover:border-teal-400 transition-colors">
                <h3 className="text-white font-semibold mb-2 text-lg">Are there discounts for multiple chapters?</h3>
                <p className="text-slate-400 text-sm">
                  Contact us for corporate group rates and multi-chapter packages. We offer special pricing for team-building and private events.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card hover:border-teal-400 transition-colors">
                <h3 className="text-white font-semibold mb-2 text-lg">Can we split the cost differently?</h3>
                <p className="text-slate-400 text-sm">
                  Absolutely. The total cost is the same, but you can arrange payment however your group prefers. Discuss your needs when booking.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="card hover:border-teal-400 transition-colors">
                <h3 className="text-white font-semibold mb-2 text-lg">What about children or large groups?</h3>
                <p className="text-slate-400 text-sm">
                  Maximum capacity is 6 players per session. Some chapters are not suitable for children. Contact us to discuss your specific group needs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6 text-3xl">Ready to Book?</h2>
            <p className="text-slate-300 mb-8">
              Choose your chapter and reserve your session. Pay only for the time you use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://offthecouch.io/book/otc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Book Now
              </a>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Have Questions?
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
