import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Off The Couch - Escape Rooms",
  description:
    "Learn about Jana and Nick Schilbe, founders of Off The Couch. Former cybersecurity professionals with 1000+ escape room experiences.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-teal-900/20 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Our Story</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From obsessed players to designers. We fell in love with escape
            rooms and decided to create something truly special.
          </p>
        </div>
      </section>

      {/* The Journey */}
      <section className="section-padding">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-white mb-8 text-center">The Journey</h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  2014: Discovery
                </h3>
                <p className="text-slate-300 mb-4">
                  Jana and Nick Schilbe discovered escape rooms and fell in love
                  immediately. What started as curiosity became an obsession.
                  They began traveling, playing rooms everywhere they could find
                  them.
                </p>
                <p className="text-slate-300">
                  Over the next few years, they played over 1000 different escape
                  rooms across the globe. They studied design, explored
                  storytelling techniques, and learned what made experiences
                  truly immersive.
                </p>
              </div>
              <div className="card h-full flex items-center justify-center min-h-[300px]">
                <div className="text-6xl">🎮</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="card h-full flex items-center justify-center min-h-[300px]">
                <div className="text-6xl">💡</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  2017: Creation
                </h3>
                <p className="text-slate-300 mb-4">
                  Armed with knowledge from thousands of experiences, Jana and
                  Nick opened Off The Couch. They didn't want to replicate what
                  already existed. They wanted to create something better.
                </p>
                <p className="text-slate-300">
                  Off The Couch was designed from the ground up with a
                  philosophy: make experiences that feel real, remove artificial
                  time pressure, and treat players as the heroes of their own
                  story.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Today: Innovation
                </h3>
                <p className="text-slate-300 mb-4">
                  We continue to evolve. Beyond our Fremont location, we've
                  created offthecouch.io—an all-in-one escape room management
                  platform used by operators worldwide.
                </p>
                <p className="text-slate-300">
                  The Asheville mystery represents our vision: immersive,
                  narrative-driven experiences where story is paramount and
                  players feel like they're part of something real.
                </p>
              </div>
              <div className="card h-full flex items-center justify-center min-h-[300px]">
                <div className="text-6xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-white mb-12 text-center">Meet the Founders</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="text-6xl mb-6 text-center">👩‍💼</div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                Jana Schilbe
              </h3>
              <div className="bg-slate-800/50 rounded p-4 mb-4">
                <p className="text-slate-400 text-sm mb-2">
                  <span className="text-slate-300 font-semibold">Background</span>
                  <br />
                  Cybersecurity Professional
                </p>
                <p className="text-slate-400 text-sm">
                  <span className="text-slate-300 font-semibold">
                    Expertise
                  </span>
                  <br />
                  Strategic thinking, puzzle design, narrative structure
                </p>
              </div>
              <p className="text-slate-300 text-sm">
                Jana brings an analytical mindset to experience design. She
                ensures every puzzle is elegant, every narrative twist earns
                itself, and every element serves the story.
              </p>
            </div>

            <div className="card">
              <div className="text-6xl mb-6 text-center">👨‍💻</div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                Nick Schilbe
              </h3>
              <div className="bg-slate-800/50 rounded p-4 mb-4">
                <p className="text-slate-400 text-sm mb-2">
                  <span className="text-slate-300 font-semibold">Background</span>
                  <br />
                  Cybersecurity Professional, Tech Entrepreneur
                </p>
                <p className="text-slate-400 text-sm">
                  <span className="text-slate-300 font-semibold">
                    Expertise
                  </span>
                  <br />
                  Technical systems, user experience, business strategy
                </p>
              </div>
              <p className="text-slate-300 text-sm">
                Nick brings technical innovation to experience delivery. He
                designed offthecouch.io and ensures our operations support the
                immersive vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-white mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">📖</span>
                Story First
              </h3>
              <p className="text-slate-400 text-sm">
                Everything we create serves the narrative. Puzzles aren't an
                end—they're a means of deepening the story. Players should feel
                like they're part of something real.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">⏰</span>
                No Artificial Pressure
              </h3>
              <p className="text-slate-400 text-sm">
                Time limits create artificial stress. We removed them. You can
                investigate at your own pace, lingering on moments that matter,
                absorbing the atmosphere.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🎭</span>
                Player Agency
              </h3>
              <p className="text-slate-400 text-sm">
                You're not solving someone else's puzzle. You're investigating
                your own mystery. Your choices matter. Different decisions lead
                to different outcomes.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">💎</span>
                Quality Over Volume
              </h3>
              <p className="text-slate-400 text-sm">
                We invest deeply in each experience. That means fewer rooms, but
                every element is intentional. Every detail serves the vision.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                Community
              </h3>
              <p className="text-slate-400 text-sm">
                We're building a community of players who value narrative,
                atmosphere, and immersion. We listen to feedback and grow with
                our players.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                Accessibility
              </h3>
              <p className="text-slate-400 text-sm">
                We believe everyone should experience the thrill of immersive
                gameplay. We're committed to making Off The Couch accessible to
                diverse groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <h2 className="text-white mb-8 text-center">By The Numbers</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">1000+</div>
              <p className="text-slate-400">Rooms Played Worldwide</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">12</div>
              <p className="text-slate-400">Chapters in Asheville</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">3</div>
              <p className="text-slate-400">Available Now</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">2017</div>
              <p className="text-slate-400">Year Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-6">Experience Our Vision</h2>
          <p className="text-slate-300 mb-8">
            We've spent years perfecting our craft. Now it's your turn to
            investigate the Asheville mystery.
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
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
