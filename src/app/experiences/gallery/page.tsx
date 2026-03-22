import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Norcross Art Gallery | Off The Couch - Escape Rooms",
  description:
    "Follow the clues to an exclusive art gallery. Chapter 2 of 12 in the Asheville mystery. 2-6 players, 90 minutes.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-amber-900/30 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
              Chapter 2 of 12
            </span>
            <h1 className="text-white mb-6">Norcross Art Gallery</h1>
            <p className="text-xl text-slate-300 mb-8">
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
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-white mb-6">Experience Overview</h2>

              <div className="space-y-6 text-slate-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">The Story</h3>
                  <p>
                    Your investigation of Occam's death has led you to the
                    Norcross Art Gallery—an exclusive venue in the city's elite
                    circles. Something is happening behind the scenes here,
                    something your friend was involved with before his death.
                    You need to understand the gallery's secrets to understand
                    what happened to Occam.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">
                    What You'll Do
                  </h3>
                  <p>
                    Navigate the sophisticated world of high art and hidden
                    agendas. Explore the gallery, decode its mysteries, and
                    uncover the connection between the art world and Occam's
                    investigation. The answers are here—buried beneath layers of
                    deception.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">The Setting</h3>
                  <p>
                    The Norcross Art Gallery is larger and more complex than
                    Occam's apartment. Multiple rooms, sophisticated security
                    systems, and carefully curated art pieces conceal a darker
                    purpose. Your investigative skills will be tested here.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-white mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Builds on Chapter 1
                    </h4>
                    <p className="text-slate-400 text-sm">
                      This chapter directly follows Chapter 1. Your progress from
                      Occam's Apartment matters here.
                    </p>
                  </div>
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Expanded Environment
                    </h4>
                    <p className="text-slate-400 text-sm">
                      A larger space with more rooms, more clues, and more
                      opportunities for discovery.
                    </p>
                  </div>
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Collaborative Puzzles
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Challenges designed for teams to work together. Your
                      communication skills matter.
                    </p>
                  </div>
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Narrative Callbacks
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Events from Chapter 1 influence and enhance the Chapter 2
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="card sticky top-24 space-y-6">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Players</p>
                  <p className="text-2xl font-bold text-teal-400">2-6</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Duration</p>
                  <p className="text-2xl font-bold text-teal-400">90 min</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Per Person Hourly Rate
                  </p>
                  <p className="text-2xl font-bold text-teal-400">$54</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Pricing varies by party size
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-3">Prerequisite</p>
                  <p className="text-sm text-slate-300">
                    Recommend playing Occam's Apartment first for full narrative
                    context, but not required.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-3">What to Know</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Escalating mystery</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Larger environment</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Team-focused challenges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Major plot progression</span>
                    </li>
                  </ul>
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
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <h2 className="text-white mb-8 text-center">The Asheville Chapters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/experiences/apartment" className="card group">
              <span className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-wider mb-4">
                Chapter 1
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                Occam's Apartment
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Start your investigation into Detective William Occam's death.
              </p>
              <span className="text-teal-400 text-sm">Learn More →</span>
            </Link>

            <div className="card opacity-75">
              <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
                Chapter 2
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Norcross Art Gallery
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Follow the clues to an exclusive gallery with sinister secrets.
              </p>
              <span className="text-slate-500 text-sm">You are here</span>
            </div>

            <Link href="/experiences/morgue" className="card group">
              <span className="inline-block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Chapter 3
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                The Morgue
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                The final confrontation in an abandoned morgue. Will you survive?
              </p>
              <span className="text-teal-400 text-sm">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-6">Continue Your Investigation</h2>
          <p className="text-slate-300 mb-8">
            The mystery deepens at the Norcross Art Gallery. Book your session
            today.
          </p>

          <a
            href="https://offthecouch.io/book/otc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Book Chapter 2
          </a>
        </div>
      </section>
    </>
  );
}
