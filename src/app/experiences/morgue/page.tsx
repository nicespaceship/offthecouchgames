import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "The Morgue | Off The Couch - Escape Rooms",
  description:
    "Face the final confrontation in an abandoned morgue. Chapter 3 of 12 in the Asheville mystery. 2-6 players, 120 minutes.",
};

export default function MorguePage() {
  return (
    <>
      {/* Hero with Image Placeholder */}
      <section className="relative min-h-[500px] bg-gradient-to-b from-emerald-700 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-slate-950/80" />

        <div className="relative h-full flex flex-col">
          {/* Top content */}
          <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center w-full">
            <AnimatedSection className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-4">
                Chapter 3 of 12
              </span>
              <h1 className="text-white mb-6 text-5xl">The Morgue</h1>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl">
                The man you have been hunting continues to evade you. This time
                he sends you to an abandoned morgue where he wants to play a
                final game. Will you be able to come out alive or join the rest
                of the bodies at this forsaken place?
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://offthecouch.io/book/otc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Book Chapter 3
                </a>
                <Link href="/experiences" className="btn btn-secondary btn-lg">
                  View All Chapters
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Image placeholder at bottom */}
          <AnimatedSection delay={0.2} animation="fadeInUp" className="relative w-full h-64 bg-gradient-to-b from-emerald-900/40 to-slate-950">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg className="w-16 h-16 text-emerald-300/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-slate-400">Photo Coming Soon</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Details Section */}
      <section className="section-padding">
        <div className="section-container">
          {/* On mobile: sidebar first, then content. On desktop: content left, sidebar right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar - moves above content on mobile */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <AnimatedSection delay={0.1} animation="fadeInRight">
                {/* Sticky booking card with glass effect */}
                <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 space-y-6 shadow-lg shadow-emerald-900/20">
                  <div className="border-b border-slate-700 pb-4">
                    <h3 className="text-lg font-bold text-white mb-4">
                      Experience Details
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Players</span>
                        <span className="text-2xl font-bold text-emerald-400">2-6</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Duration</span>
                        <span className="text-2xl font-bold text-emerald-400">120 min</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-sm block mb-1">
                          Per Person Hourly Rate
                        </span>
                        <div>
                          <span className="text-3xl font-bold text-emerald-400">$48</span>
                          <p className="text-xs text-slate-400 mt-1">
                            Pricing varies by party size
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-2 uppercase tracking-wide">
                        Recommended Path
                      </p>
                      <p className="text-sm text-slate-300">
                        For full story impact, complete Chapters 1 & 2 before
                        Chapter 3.
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-2 uppercase tracking-wide">
                        Content Warning
                      </p>
                      <p className="text-sm text-slate-300">
                        Horror themes and intense atmosphere. Not suitable for
                        children or those sensitive to dark content.
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Climactic story</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Highest difficulty</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Intense atmosphere</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Multiple endings</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a
                    href="https://offthecouch.io/book/otc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full justify-center mt-6"
                  >
                    Book Now
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 order-last lg:order-first">
              <AnimatedSection className="mb-8">
                <h2 className="text-white mb-8 text-3xl">Experience Overview</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-emerald-300 font-semibold mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-emerald-500" />
                      The Story
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      You've followed the trail through Occam's apartment and the
                      Norcross Art Gallery. Now you've been lured to an abandoned
                      morgue—a place where secrets are buried and loose ends are
                      eliminated. Your investigation has put you in direct contact
                      with the person responsible for Occam's death. The stakes
                      have never been higher.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-emerald-300 font-semibold mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-emerald-500" />
                      What You'll Do
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Survive the final confrontation. Navigate the unsettling
                      corridors of an abandoned morgue where death itself seems to
                      linger. Solve increasingly challenging puzzles, confront the
                      mystery's true architect, and uncover the final truth about
                      William Occam's death—if you can survive the experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-emerald-300 font-semibold mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-emerald-500" />
                      The Setting
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      The most intense and immersive environment yet. An abandoned
                      morgue is a place of dread and secrecy. Every corner holds
                      potential danger. The atmosphere is deliberately unsettling,
                      designed to make you feel the weight of the mystery pressing
                      down on you.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h2 className="text-white mb-8 text-3xl">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-emerald-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400">🎭</span>
                      Climactic Conclusion
                    </h4>
                    <p className="text-slate-400 text-sm">
                      The story reaches its peak. Revelations, confrontations,
                      and multiple possible endings await.
                    </p>
                  </div>
                  <div className="card border-l-4 border-emerald-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400">⏳</span>
                      Longest Chapter
                    </h4>
                    <p className="text-slate-400 text-sm">
                      At 120 minutes, this is the most ambitious experience. Ample
                      time for exploration and resolution.
                    </p>
                  </div>
                  <div className="card border-l-4 border-emerald-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400">🔥</span>
                      Maximum Intensity
                    </h4>
                    <p className="text-slate-400 text-sm">
                      The highest difficulty level yet. Expert puzzle design and
                      challenging scenarios.
                    </p>
                  </div>
                  <div className="card border-l-4 border-emerald-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-emerald-400">🎪</span>
                      Multiple Endings
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Your choices matter. Different decisions lead to different
                      resolutions.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Journey */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-white mb-4">The Complete Asheville Journey</h2>
            <p className="text-slate-400">All three chapters available now</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <AnimatedSection delay={0.1} animation="fadeInUp">
              <Link href="/experiences/apartment" className="group">
                <div className="card h-full border-l-4 border-purple-500/50 hover:border-purple-400 transition-all hover:shadow-lg hover:shadow-purple-900/20">
                  <span className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-wider mb-4">
                    Chapter 1
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    Occam's Apartment
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Investigate a mysterious death. Start your journey into the
                    Asheville mystery.
                  </p>
                  <span className="text-purple-400 text-sm font-semibold">
                    Visit Chapter 1 →
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} animation="fadeInUp">
              <Link href="/experiences/gallery" className="group">
                <div className="card h-full border-l-4 border-amber-500/50 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-900/20">
                  <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
                    Chapter 2
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    Norcross Art Gallery
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Follow clues into the elite art world. The mystery deepens
                    further.
                  </p>
                  <span className="text-amber-400 text-sm font-semibold">
                    Visit Chapter 2 →
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.3} animation="fadeInUp">
              <div className="card h-full border-l-4 border-emerald-500 opacity-90">
                <span className="inline-block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                  Chapter 3
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  The Morgue
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Face the final confrontation. Survive and uncover the truth
                  behind it all.
                </p>
                <span className="text-emerald-400 text-sm font-semibold">
                  You are here
                </span>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="p-8 bg-slate-800/50 border border-emerald-500/30 rounded-xl text-center">
            <p className="text-slate-300 mb-4 text-lg italic">
              "Asheville brings to life a unique experience where you become the
              main characters in your own live action game. We removed time
              limits to allow you a more realistic investigation experience."
            </p>
            <p className="text-slate-400 text-sm">
              More chapters coming soon. The Asheville saga continues...
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Face the Final Confrontation</h2>
            <p className="text-slate-300 mb-8 text-lg">
              You've come this far. Now face the truth at the abandoned morgue.
              Book Chapter 3 today and complete the Asheville saga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://offthecouch.io/book/otc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Book Chapter 3
              </a>
              <Link href="/pricing" className="btn btn-secondary btn-lg">
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
