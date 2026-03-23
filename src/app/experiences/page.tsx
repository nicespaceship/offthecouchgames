import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

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
      colorAccent: "purple",
      bgGradient: "from-purple-600 to-purple-900",
      textColor: "text-purple-400",
      difficulty: "Moderate",
      mood: "Mystery",
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
      colorAccent: "amber",
      bgGradient: "from-amber-600 to-amber-900",
      textColor: "text-amber-400",
      difficulty: "Challenging",
      mood: "Intrigue",
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
      colorAccent: "emerald",
      bgGradient: "from-emerald-600 to-slate-900",
      textColor: "text-emerald-400",
      difficulty: "Expert",
      mood: "Horror",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-purple-900/20 opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-white mb-6">The Asheville Mystery</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A noir-inspired mystery unfolds across twelve connected chapters.
              Begin your investigation with the first three chapters now
              available.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Header */}
      <section className="section-padding bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="section-container max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-white mb-4">Your Investigation Path</h2>
            <p className="text-slate-400 text-lg">
              Progress through three interconnected chapters, each building on the last
            </p>
          </AnimatedSection>

          {/* Timeline visualization */}
          <div className="hidden md:flex items-center justify-between mb-8">
            {chapters.map((chapter, idx) => (
              <div key={chapter.id} className="flex-1">
                <AnimatedSection delay={idx * 0.15} className="flex flex-col items-center">
                  {/* Chapter marker */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-white mb-4 border-2 ${
                      idx === 0
                        ? "bg-purple-600/40 border-purple-400"
                        : idx === 1
                          ? "bg-amber-600/40 border-amber-400"
                          : "bg-emerald-600/40 border-emerald-400"
                    }`}
                  >
                    Ch {idx + 1}
                  </div>

                  {/* Connection line */}
                  {idx < chapters.length - 1 && (
                    <div className="absolute left-1/2 top-8 w-full h-1 bg-gradient-to-r from-slate-700 to-slate-600 transform -translate-x-1/2" />
                  )}
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chapters.map((chapter, idx) => (
              <AnimatedSection key={chapter.id} delay={idx * 0.15} animation="scaleIn">
                <Link href={`/experiences/${chapter.id}`} className="group h-full">
                  <div className="card h-full flex flex-col overflow-hidden hover:border-teal-400/50 transition-all hover:shadow-lg hover:shadow-teal-900/20">
                    {/* Header with color accent */}
                    <div
                      className={`h-1 w-full bg-gradient-to-r ${chapter.bgGradient}`}
                    />

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <div className="mb-4">
                        <span className={`inline-block text-xs font-semibold ${chapter.textColor} uppercase tracking-wider mb-2`}>
                          {chapter.chapter}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">
                          {chapter.title}
                        </h3>
                      </div>

                      {/* Difficulty and Mood indicators */}
                      <div className="flex gap-3 mb-6">
                        <div className="flex items-center gap-1 text-sm">
                          <span className="w-2 h-2 rounded-full bg-slate-600" />
                          <span className="text-slate-400">{chapter.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <span className="w-2 h-2 rounded-full bg-slate-600" />
                          <span className="text-slate-400">{chapter.mood}</span>
                        </div>
                      </div>

                      {/* Image placeholder */}
                      <div
                        className={`h-40 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative bg-gradient-to-br ${chapter.bgGradient} opacity-20`}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-4xl mb-2">
                            {idx === 0 ? "🔍" : idx === 1 ? "🖼️" : "💀"}
                          </span>
                          <span className="text-xs text-slate-400">Photo Coming Soon</span>
                        </div>
                      </div>

                      <p className="text-slate-300 mb-6 flex-1">
                        {chapter.description}
                      </p>

                      {/* Details grid */}
                      <div className="grid grid-cols-3 gap-3 mb-6 pt-4 border-t border-slate-700/50">
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                            Players
                          </p>
                          <p className={`font-semibold ${chapter.textColor}`}>
                            {chapter.players}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                            Duration
                          </p>
                          <p className={`font-semibold ${chapter.textColor}`}>
                            {chapter.duration}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                            Price
                          </p>
                          <p className={`font-semibold ${chapter.textColor}`}>
                            {chapter.price}
                          </p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-3">
                        <span className="flex-1 btn btn-primary justify-center text-center group-hover:scale-105 transition-transform">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Asheville */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-white mb-4">About The Asheville Mystery</h2>
            <p className="text-slate-400">
              An innovative approach to immersive storytelling and investigation
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="card space-y-8">
              <p className="text-lg text-slate-300 italic border-l-4 border-teal-400 pl-6">
                "Asheville brings to life a unique experience where you as the player
                become the main characters in your own live action game. We removed
                the time limits to allow you the more realistic experience of
                investigating the world of Asheville at your own pace. As a player
                you have the ability to save your progress throughout the game."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">12</div>
                  <p className="text-slate-400 text-sm uppercase tracking-wide">
                    Chapters Total
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">3</div>
                  <p className="text-slate-400 text-sm uppercase tracking-wide">
                    Available Now
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">∞</div>
                  <p className="text-slate-400 text-sm uppercase tracking-wide">
                    No Time Limits
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <AnimatedSection className="mb-8">
            <h2 className="text-white mb-6">Ready to Investigate?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Choose your starting chapter and begin solving the mystery of
              William Occam's death today.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
