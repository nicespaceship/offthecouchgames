import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experiences | Off The Couch - Escape Rooms in Fremont",
  description:
    "Explore the Asheville mystery. Three connected escape room chapters with no time limits and progress saves.",
};

export default function ExperiencesPage() {
  const chapters = [
    {
      id: "apartment",
      title: "Occam's Apartment",
      chapter: "Chapter 1 of 12",
      players: "2-6 players",
      duration: "105 minutes",
      price: "From $66/hour per person",
      description:
        "Your friend Detective William Occam recently died. Following his death, you received a mysterious letter that reinforces your belief that something was odd about his death. You decide to investigate on your own what really happened to William.",
      story:
        "The first chapter in the Asheville saga sets the stage for an unfolding mystery. Enter Occam's apartment and begin your investigation. What secrets did your friend hold? Why did someone want you to find out?",
      features: [
        "First of twelve chapters in the Asheville storyline",
        "Private booking only",
        "Not suitable for children",
        "Progress saves - continue your investigation later",
        "Complex narrative with multiple endings",
      ],
      highlights:
        "Atmospheric environment design, deep storytelling, immersive props and puzzles that integrate seamlessly into the narrative.",
    },
    {
      id: "gallery",
      title: "Norcross Art Gallery",
      chapter: "Chapter 2 of 12",
      players: "2-6 players",
      duration: "90 minutes",
      price: "From $54/hour per person",
      description:
        "You followed leads that were left behind at Occam's Apartment and determined that the Norcross Art Gallery is where 'he' likely is operating out of.",
      story:
        "The investigation deepens. Your clues point to an upscale art gallery where something sinister is happening behind the scenes. Who is running this operation? What is their connection to Occam's death?",
      features: [
        "Second chapter in the Asheville storyline",
        "Builds directly on Chapter 1 events",
        "Progress saves from Chapter 1 matter",
        "New environment with fresh challenges",
        "Escalating mystery complexity",
      ],
      highlights:
        "Larger environment, collaborative puzzles, narrative callbacks to Chapter 1, multiple paths to progression.",
    },
    {
      id: "morgue",
      title: "The Morgue",
      chapter: "Chapter 3 of 12",
      players: "2-6 players",
      duration: "120 minutes",
      price: "From $48/hour per person",
      description:
        "The man you have been hunting continues to evade you and this time he sends you to the Morgue where he wants to play a little game. Will you be able to come out alive or join the rest of the bodies at this abandoned Morgue?",
      story:
        "The stakes are personal now. You've been drawn into a dangerous game. The morgue is where loose ends go to rest. Do you have what it takes to survive this encounter?",
      features: [
        "Third chapter in the Asheville storyline",
        "Climactic confrontation with mystery's architect",
        "Longest chapter yet with highest stakes",
        "Uncover major plot revelations",
        "Multiple possible resolutions based on your choices",
      ],
      highlights:
        "Intense atmosphere, high-impact narrative moments, challenging puzzles, immersive horror elements.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-teal-900/20 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">The Asheville Mystery</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A noir-inspired mystery unfolds across twelve connected chapters.
            Begin your investigation with the first three chapters now
            available.
          </p>
        </div>
      </section>

      {/* Chapters */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-12">
            {chapters.map((chapter, idx) => (
              <div
                key={chapter.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              >
                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6">
                    <span className="inline-block text-xs font-semibold text-teal-400 uppercase tracking-wider">
                      {chapter.chapter}
                    </span>
                    <h2 className="text-3xl font-bold text-white mt-3">
                      {chapter.title}
                    </h2>
                  </div>

                  <p className="text-lg text-slate-300 mb-4">
                    {chapter.description}
                  </p>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-6">
                    <p className="text-slate-300 mb-4">{chapter.story}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-3">
                      Chapter Features:
                    </h4>
                    <ul className="space-y-2">
                      {chapter.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-slate-300 text-sm"
                        >
                          <span className="text-teal-400 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-6 mb-8 border border-slate-700">
                    <p className="text-slate-400 text-sm mb-1">Experience</p>
                    <p className="text-white font-semibold mb-4">
                      {chapter.highlights}
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-slate-400">Players</p>
                        <p className="text-teal-400 font-semibold">
                          {chapter.players}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400">Duration</p>
                        <p className="text-teal-400 font-semibold">
                          {chapter.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400">Pricing</p>
                        <p className="text-teal-400 font-semibold">
                          {chapter.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/experiences/${chapter.id}`}
                      className="btn btn-primary"
                    >
                      Learn More
                    </Link>
                    <a
                      href="https://offthecouch.io/book/otc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Book Chapter
                    </a>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="card h-full min-h-[400px] flex items-center justify-center overflow-hidden relative">
                    {/* Atmospheric gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        idx === 0
                          ? "from-purple-900/40 to-blue-900/40"
                          : idx === 1
                            ? "from-amber-900/40 to-red-900/40"
                            : "from-slate-800/40 to-gray-900/40"
                      }`}
                    />

                    {/* Decorative elements */}
                    <div className="relative z-10 text-center">
                      <div
                        className={`text-8xl mb-4 ${
                          idx === 0
                            ? "text-purple-400"
                            : idx === 1
                              ? "text-amber-400"
                              : "text-slate-400"
                        }`}
                      >
                        {idx === 0 ? "🔍" : idx === 1 ? "🖼️" : "💀"}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {chapter.title}
                      </h3>
                      <p className="text-slate-400">Chapter {idx + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asheville Overview */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">About Asheville</h2>
          </div>

          <div className="card text-center">
            <p className="text-lg text-slate-300 mb-6">
              "Asheville brings to life a unique experience where you as the
              player become the main characters in your own live action game.
              We removed the time limits to allow you the more realistic
              experience of investigating the world of Asheville at your own
              pace. As a player you have the ability to save your progress
              throughout the game."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-700 text-left">
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">12</div>
                <p className="text-slate-400 text-sm">Chapters Total</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">3</div>
                <p className="text-slate-400 text-sm">Available Now</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-400 mb-2">∞</div>
                <p className="text-slate-400 text-sm">No Time Limits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Investigate?</h2>
          <p className="text-slate-300 mb-8">
            Choose your starting chapter or contact us for group bookings and
            corporate events.
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
            <Link href="/pricing" className="btn btn-secondary btn-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
