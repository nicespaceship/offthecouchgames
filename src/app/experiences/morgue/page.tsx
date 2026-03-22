import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Morgue | Off The Couch - Escape Rooms",
  description:
    "Face the final confrontation in an abandoned morgue. Chapter 3 of 12 in the Asheville mystery. 2-6 players, 120 minutes.",
};

export default function MorguePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-800/30 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Chapter 3 of 12
            </span>
            <h1 className="text-white mb-6">The Morgue</h1>
            <p className="text-xl text-slate-300 mb-8">
              The man you have been hunting continues to evade you. This time he
              sends you to an abandoned morgue where he wants to play a final
              game. Will you be able to come out alive or join the rest of the
              bodies at this forsaken place?
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
                    You've followed the trail through Occam's apartment and the
                    Norcross Art Gallery. Now you've been lured to an abandoned
                    morgue—a place where secrets are buried and loose ends are
                    eliminated. Your investigation has put you in direct contact
                    with the person responsible for Occam's death. The stakes
                    have never been higher.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">
                    What You'll Do
                  </h3>
                  <p>
                    Survive the final confrontation. Navigate the unsettling
                    corridors of an abandoned morgue where death itself seems to
                    linger. Solve increasingly challenging puzzles, confront the
                    mystery's true architect, and uncover the final truth about
                    William Occam's death—if you can survive the experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">The Setting</h3>
                  <p>
                    The most intense and immersive environment yet. An abandoned
                    morgue is a place of dread and secrecy. Every corner holds
                    potential danger. The atmosphere is deliberately unsettling,
                    designed to make you feel the weight of the mystery pressing
                    down on you.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-white mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Climactic Conclusion
                    </h4>
                    <p className="text-slate-400 text-sm">
                      The story reaches its peak. Revelations, confrontations,
                      and multiple possible endings await.
                    </p>
                  </div>
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Longest Chapter
                    </h4>
                    <p className="text-slate-400 text-sm">
                      At 120 minutes, this is the most ambitious experience. Ample
                      time for exploration and resolution.
                    </p>
                  </div>
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Maximum Intensity
                    </h4>
                    <p className="text-slate-400 text-sm">
                      The highest difficulty level yet. Expert puzzle design and
                      challenging scenarios.
                    </p>
                  </div>
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Multiple Endings
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Your choices matter. Different decisions lead to different
                      resolutions.
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
                  <p className="text-2xl font-bold text-teal-400">120 min</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Per Person Hourly Rate
                  </p>
                  <p className="text-2xl font-bold text-teal-400">$48</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Pricing varies by party size
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-3">Recommended Path</p>
                  <p className="text-sm text-slate-300">
                    For full story impact, complete Chapters 1 & 2 before Chapter
                    3.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-3">Content Warning</p>
                  <p className="text-sm text-slate-300">
                    Horror themes and intense atmosphere. Not suitable for
                    children or those sensitive to dark content.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-3">What to Know</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Climactic story</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Highest difficulty</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Intense atmosphere</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Multiple endings</span>
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

      {/* Full Journey */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <h2 className="text-white mb-8 text-center">The Complete Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/experiences/apartment" className="card group">
              <span className="inline-block text-xs font-semibold text-purple-400 uppercase tracking-wider mb-4">
                Chapter 1
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                Occam's Apartment
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Investigate a mysterious death. Start your journey here.
              </p>
              <span className="text-teal-400 text-sm">Visit →</span>
            </Link>

            <Link href="/experiences/gallery" className="card group">
              <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
                Chapter 2
              </span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                Norcross Art Gallery
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Follow clues into the elite art world. The mystery deepens.
              </p>
              <span className="text-teal-400 text-sm">Visit →</span>
            </Link>

            <div className="card opacity-75">
              <span className="inline-block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Chapter 3
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                The Morgue
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Face the final confrontation. Survive and uncover the truth.
              </p>
              <span className="text-slate-500 text-sm">You are here</span>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-800/50 border border-slate-700 rounded-lg text-center">
            <p className="text-slate-300 mb-4">
              "Asheville brings to life a unique experience where you become the
              main characters in your own live action game. We removed time
              limits to allow you a more realistic investigation experience."
            </p>
            <p className="text-slate-400 text-sm">
              More chapters coming soon. The Asheville saga continues...
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-6">Face the Final Confrontation</h2>
          <p className="text-slate-300 mb-8">
            You've come this far. Now face the truth at the abandoned morgue.
            Book Chapter 3 today.
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
        </div>
      </section>
    </>
  );
}
