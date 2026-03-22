import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Occam's Apartment | Off The Couch - Escape Rooms",
  description:
    "Investigate the death of Detective William Occam in his apartment. Chapter 1 of 12 in the Asheville mystery. 2-6 players, 105 minutes.",
};

export default function ApartmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-purple-900/30 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">
              Chapter 1 of 12
            </span>
            <h1 className="text-white mb-6">Occam's Apartment</h1>
            <p className="text-xl text-slate-300 mb-8">
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
                    Your best friend, Detective William Occam, was found dead.
                    The official ruling: suicide. But you don't believe it. The
                    mysterious letter that arrived shortly after his death
                    confirms your suspicions—something darker happened here.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">
                    What You'll Do
                  </h3>
                  <p>
                    Step into Occam's apartment and begin your investigation.
                    Search for clues, piece together the detective's final days,
                    and uncover what someone wanted hidden. The apartment holds
                    the answers—if you know where to look.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">The Setting</h3>
                  <p>
                    You'll explore a meticulously designed apartment filled with
                    the remnants of Occam's life. Personal effects, case files,
                    and carefully hidden clues paint a picture of a detective
                    who knew too much. Every detail matters.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-white mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      First Chapter
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Start your investigation here. This chapter introduces the
                      core mystery and establishes the Asheville world.
                    </p>
                  </div>
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      No Time Limits
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Investigate at your own pace. No artificial pressure—just
                      pure investigative gameplay.
                    </p>
                  </div>
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Progress Saves
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Don't finish in one session? Your progress is saved. Come
                      back anytime to continue.
                    </p>
                  </div>
                  <div className="card">
                    <h4 className="text-white font-semibold mb-2">
                      Private Booking
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Your group, your experience. No strangers. Fully private
                      and customizable.
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
                  <p className="text-2xl font-bold text-teal-400">105 min</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">
                    Per Person Hourly Rate
                  </p>
                  <p className="text-2xl font-bold text-teal-400">$66</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Pricing varies by party size
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-3">Content Warning</p>
                  <p className="text-sm text-slate-300">
                    This chapter explores themes of death and murder. Not
                    suitable for children.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-3">What to Know</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Immersive narrative experience</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Complex puzzle design</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Authentic detective mystery</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-400">✓</span>
                      <span>Start of 12-chapter saga</span>
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

      {/* Next Chapter Teaser */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <h2 className="text-white mb-8 text-center">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <span className="inline-block text-xs font-semibold text-amber-400 uppercase tracking-wider mb-4">
                Chapter 2
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Norcross Art Gallery
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                The leads from Occam's apartment point to an upscale art gallery
                where something sinister is happening. Your investigation
                continues...
              </p>
              <Link
                href="/experiences/gallery"
                className="btn btn-secondary justify-center w-full"
              >
                Learn About Chapter 2
              </Link>
            </div>

            <div className="card">
              <span className="inline-block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Chapter 3
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                The Morgue
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                The final hunt leads to an abandoned morgue where the true
                architect of this mystery wants to play one last game.
              </p>
              <Link
                href="/experiences/morgue"
                className="btn btn-secondary justify-center w-full"
              >
                Learn About Chapter 3
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-6">Begin Your Investigation</h2>
          <p className="text-slate-300 mb-8">
            Ready to solve the mystery of William Occam's death? Book your
            private session today.
          </p>

          <a
            href="https://offthecouch.io/book/otc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Reserve Your Slot
          </a>
        </div>
      </section>
    </>
  );
}
