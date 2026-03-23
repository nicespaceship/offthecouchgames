import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Occam's Apartment | Off The Couch - Escape Rooms",
  description:
    "Investigate the death of Detective William Occam in his apartment. Chapter 1 of 12 in the Asheville mystery. 2-6 players, 105 minutes.",
};

export default function ApartmentPage() {
  return (
    <>
      {/* Hero with Image Placeholder */}
      <section className="relative min-h-[500px] bg-gradient-to-b from-purple-600 via-purple-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-slate-900/80" />

        <div className="relative h-full flex flex-col">
          {/* Top content */}
          <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col justify-center w-full">
            <AnimatedSection className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-purple-300 uppercase tracking-wider mb-4">
                Chapter 1 of 12
              </span>
              <h1 className="text-white mb-6 text-5xl">Occam's Apartment</h1>
              <p className="text-xl text-slate-200 mb-8 max-w-2xl">
                Your friend Detective William Occam recently died. Following his
                death, you received a mysterious letter reinforcing your belief
                that something was odd about his death. Now you investigate on
                your own what really happened to William.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://offthecouch.io/book/otc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Book Chapter 1
                </a>
                <Link href="/experiences" className="btn btn-secondary btn-lg">
                  View All Chapters
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Image placeholder at bottom */}
          <AnimatedSection delay={0.2} animation="fadeInUp" className="relative w-full h-64 bg-gradient-to-b from-purple-900/40 to-purple-950">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg className="w-16 h-16 text-purple-300/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 space-y-6 shadow-lg shadow-purple-900/20">
                  <div className="border-b border-slate-700 pb-4">
                    <h3 className="text-lg font-bold text-white mb-4">
                      Experience Details
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Players</span>
                        <span className="text-2xl font-bold text-purple-400">2-6</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-sm">Duration</span>
                        <span className="text-2xl font-bold text-purple-400">105 min</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-sm block mb-1">
                          Per Person Hourly Rate
                        </span>
                        <div>
                          <span className="text-3xl font-bold text-purple-400">$66</span>
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
                        Content Warning
                      </p>
                      <p className="text-sm text-slate-300">
                        This chapter explores themes of death and murder. Not
                        suitable for children.
                      </p>
                    </div>

                    <div>
                      <p className="text-slate-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                        Key Features
                      </p>
                      <ul className="space-y-2">
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Immersive narrative</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Complex puzzles</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Detective mystery</span>
                        </li>
                        <li className="flex gap-3 text-sm text-slate-300">
                          <span className="text-purple-400 flex-shrink-0 mt-0.5">✓</span>
                          <span>Chapter 1 of 12</span>
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
                    <h3 className="text-purple-300 font-semibold mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-purple-500" />
                      The Story
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Your best friend, Detective William Occam, was found dead.
                      The official ruling: suicide. But you don't believe it. The
                      mysterious letter that arrived shortly after his death
                      confirms your suspicions—something darker happened here.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-purple-300 font-semibold mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-purple-500" />
                      What You'll Do
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Step into Occam's apartment and begin your investigation.
                      Search for clues, piece together the detective's final days,
                      and uncover what someone wanted hidden. The apartment holds
                      the answers—if you know where to look.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-purple-300 font-semibold mb-3 text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-purple-500" />
                      The Setting
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      You'll explore a meticulously designed apartment filled with
                      the remnants of Occam's life. Personal effects, case files,
                      and carefully hidden clues paint a picture of a detective
                      who knew too much. Every detail matters.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h2 className="text-white mb-8 text-3xl">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card border-l-4 border-purple-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400">📖</span>
                      First Chapter
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Start your investigation here. This chapter introduces the
                      core mystery and establishes the Asheville world.
                    </p>
                  </div>
                  <div className="card border-l-4 border-purple-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400">⏱️</span>
                      No Time Limits
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Investigate at your own pace. No artificial pressure—just
                      pure investigative gameplay.
                    </p>
                  </div>
                  <div className="card border-l-4 border-purple-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400">💾</span>
                      Progress Saves
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Don't finish in one session? Your progress is saved. Come
                      back anytime to continue.
                    </p>
                  </div>
                  <div className="card border-l-4 border-purple-500/50">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="text-purple-400">🔒</span>
                      Private Booking
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Your group, your experience. No strangers. Fully private
                      and customizable.
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
            <h2 className="text-white mb-4">Continue Your Journey</h2>
            <p className="text-slate-400">Next chapters in the Asheville mystery</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1} animation="fadeInLeft">
              <Link href="/experiences/gallery" className="group">
                <div className="card h-full border-l-4 border-amber-500/50 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-900/20">
                  <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
                    Chapter 2
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    Norcross Art Gallery
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    The leads from Occam's apartment point to an upscale art
                    gallery where something sinister is happening. Your
                    investigation continues deeper into the mystery.
                  </p>
                  <span className="text-amber-400 text-sm font-semibold">
                    Explore Chapter 2 →
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} animation="fadeInRight">
              <Link href="/experiences/morgue" className="group">
                <div className="card h-full border-l-4 border-emerald-500/50 hover:border-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-900/20">
                  <span className="inline-block text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                    Chapter 3
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    The Morgue
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    The final hunt leads to an abandoned morgue where the true
                    architect of this mystery wants to play one last game. Will
                    you survive?
                  </p>
                  <span className="text-emerald-400 text-sm font-semibold">
                    Explore Chapter 3 →
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
            <h2 className="text-white mb-6">Begin Your Investigation</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Ready to solve the mystery of William Occam's death? Book your
              private session today and step into the world of Asheville.
            </p>

            <a
              href="https://offthecouch.io/book/otc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Reserve Your Slot
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
