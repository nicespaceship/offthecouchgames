import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Norcross Art Gallery | Off The Couch - Escape Rooms",
  description:
    "Follow the clues to an exclusive art gallery. Chapter 2 of 12 in the Asheville mystery. 2-6 players, 90 minutes.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero with Image Placeholder */}
      <section className="relative min-h-[500px] bg-gradient-to-b from-amber-600 via-amber-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 to-slate-900/80" />

        <div className="relative h-full flex flex-col">
          {/* Top content */}
          <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center w-full">
            <AnimatedSection className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-amber-300 uppercase tracking-wider mb-4">
                Chapter 2 of 12
              </span>
              <h1 className="text-white mb-6 text-5xl">Norcross Art Gallery</h1>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl">
                The clues from Occam's Apartment lead you to an exclusive art
                gallery. You've determined that the Norcross Art Gallery is where
                your suspect is likely operating from. The investigation deepens
                with each piece of the puzzle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://offthecouch.io/book/otc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Book Chapter 2
                </a>
                <Link href="/experiences" className="btn btn-secondary btn-lg">
                  View All Chapters
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Image placeholder at bottom */}
          <AnimatedSection delay={0.2} animation="fadeInUp" className="relative w-full h-64 bg-gradient-to-b from-amber-900/40 to-amber-950">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg className="w-16 h-16 text-amber-300/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6 space-y-6 shadow-lg shadow-amber-900/20">
                  <div className="border-b border-slate-700 pb-4">
                    <h3 className="text-lg font-bold text-white mb-4">
                      Experience Details
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Players</span>
                        <span className="text-2xl font-bold text-amber-400">2-6</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Duration</span>
                        <span className="text-2xl font-bold text-amber-400">90 min</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-sm block mb-1">
                          Per Person Hourly Rate
                        </span>
                        <div>
                          <span className="text-3xl font-bold text-amber-400">$54</span>
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
                        Prerequisite
                      </p>
                      <p className="text-sm text-slate-300">
                        Recommend playing Occam's Apartment first for full
                        narrative context, but not required.
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-amber-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Escalating mystery</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-amber-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Larger environment</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-amber-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Team challenges</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-amber-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Plot progression</span>
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
              <AnimatedSection className="mb-12">
                <h2 className="text-white mb-8 text-3xl">Experience Overview</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-amber-300 font-semibold mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-amber-500" />
                      The Story
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Your investigation of Occam's death has led you to the
                      Norcross Art Gallery—an exclusive venue in the city's elite
                      circles. Something is happening behind the scenes here,
                      something your friend was involved with before his death.
                      You need to understand the gallery's secrets to understand
                      what happened to Occam.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-amber-300 font-semibold mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-amber-500" />
                      What You'll Do
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Navigate the sophisticated world of high art and hidden
                      agendas. Explore the gallery, decode its mysteries, and
                      uncover the connection between the art world and Occam's
                      investigation. The answers are here—buried beneath layers of
                      deception.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-amber-300 font-semibold mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-amber-500" />
                      The Setting
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      The Norcross Art Gallery is larger and more complex than
                      Occam's apartment. Multiple rooms, sophisticated security
                      systems, and carefully curated art pieces conceal a darker
                      purpose. Your investigative skills will be tested here.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h2 className="text-white mb-8 text-3xl">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-amber-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400">📚</span>
                      Builds on Chapter 1
                    </h4>
                    <p className="text-slate-400 text-sm">
                      This chapter directly follows Chapter 1. Your progress from
                      Occam's Apartment matters here.
                    </p>
                  </div>
                  <div className="card border-l-4 border-amber-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400">🏛️</span>
                      Expanded Environment
                    </h4>
                    <p className="text-slate-400 text-sm">
                      A larger space with more rooms, more clues, and more
                      opportunities for discovery.
                    </p>
                  </div>
                  <div className="card border-l-4 border-amber-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400">🤝</span>
                      Collaborative Puzzles
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Challenges designed for teams to work together. Your
                      communication skills matter.
                    </p>
                  </div>
                  <div className="card border-l-4 border-amber-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-amber-400">📖</span>
                      Narrative Callbacks
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Events from Chapter 1 influence and enhance the Chapter 2
                      experience.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Navigation */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-white mb-4">The Asheville Chapters</h2>
            <p className="text-slate-400">Navigate through the complete mystery</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    Start your investigation into Detective William Occam's
                    mysterious death.
                  </p>
                  <span className="text-purple-400 text-sm font-semibold">
                    Visit Chapter 1 →
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} animation="fadeInUp">
              <div className="card h-full border-l-4 border-amber-500 opacity-90">
                <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
                  Chapter 2
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  Norcross Art Gallery
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Follow the clues to an exclusive gallery with sinister
                  secrets.
                </p>
                <span className="text-amber-400 text-sm font-semibold">
                  You are here
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} animation="fadeInUp">
              <Link href="/experiences/morgue" className="group">
                <div className="card h-full border-l-4 border-emerald-500/50 hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-900/20">
                  <span className="inline-block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                    Chapter 3
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    The Morgue
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    The final confrontation in an abandoned morgue. Will you
                    survive?
                  </p>
                  <span className="text-emerald-400 text-sm font-semibold">
                    Visit Chapter 3 →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6">Continue Your Investigation</h2>
            <p className="text-slate-300 mb-8 text-lg">
              The mystery deepens at the Norcross Art Gallery. Book your session
              today and uncover the secrets hidden behind the canvas.
            </p>

            <a
              href="https://offthecouch.io/book/otc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Book Chapter 2
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
