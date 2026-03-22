import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Off The Couch - Immersive Escape Rooms in Fremont, CA",
  description:
    "Experience immersive escape rooms in Fremont. Play the Asheville chapters with no time limits and progress saves. Private bookings for 2-6 players.",
};

export default function Home() {
  const experiences = [
    {
      id: "apartment",
      title: "Occam's Apartment",
      chapter: "Chapter 1",
      players: "2-6 players",
      duration: "105 minutes",
      description:
        "Your friend Detective William Occam recently died. Following his death, you received a mysterious letter that reinforces your belief that something was odd about his death.",
      gradient: "from-purple-900/20 to-blue-900/20",
      accentColor: "from-purple-500 to-blue-500",
    },
    {
      id: "gallery",
      title: "Norcross Art Gallery",
      chapter: "Chapter 2",
      players: "2-6 players",
      duration: "90 minutes",
      description:
        "You followed leads left behind at Occam's Apartment and determined that the Norcross Art Gallery is where 'he' likely is operating out of.",
      gradient: "from-amber-900/20 to-red-900/20",
      accentColor: "from-amber-500 to-red-500",
    },
    {
      id: "morgue",
      title: "The Morgue",
      chapter: "Chapter 3",
      players: "2-6 players",
      duration: "120 minutes",
      description:
        "The man you have been hunting continues to evade you. This time he sends you to the Morgue where he wants to play a little game.",
      gradient: "from-slate-900/20 to-gray-900/20",
      accentColor: "from-slate-500 to-gray-500",
    },
  ];

  const features = [
    {
      icon: "⏸️",
      title: "No Time Limits",
      description:
        "Investigate at your own pace without pressure. Our rooms remove artificial time constraints for a more immersive experience.",
    },
    {
      icon: "💾",
      title: "Progress Saves",
      description:
        "Complete chapters across multiple visits. Your progress is saved, allowing you to continue your investigation anytime.",
    },
    {
      icon: "🔐",
      title: "Private Bookings",
      description:
        "Your group, your experience. All bookings are private with no strangers. Fully customizable for your team.",
    },
    {
      icon: "🌍",
      title: "1000+ Rooms Played",
      description:
        "Our founders have played over 1000 escape rooms worldwide and designed these experiences from that expertise.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "San Jose",
      text: "The best escape room experience we've had. No rushing, incredible story, and the level of detail is mind-blowing.",
      rating: 5,
    },
    {
      name: "James C.",
      location: "Fremont",
      text: "Finally an escape room that doesn't feel gimmicky. The Asheville storyline is genuinely compelling.",
      rating: 5,
    },
    {
      name: "Amanda K.",
      location: "Palo Alto",
      text: "Love being able to come back and continue where we left off. It's like a real investigation rather than a puzzle race.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20 pb-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 via-slate-900 to-slate-950 pointer-events-none" />

        {/* Animated gradient overlay */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-sm font-semibold text-teal-300">
              Enter the Asheville Storyline
            </span>
          </div>

          <h1 className="text-white mb-6">
            Immersive Escape Rooms in Fremont
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Step into a cinematic mystery. Investigate, uncover secrets, and
            become the protagonist of your own story. No time limits. Progress
            saves. Private experiences for 2-6 players.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://offthecouch.io/book/otc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Book Now
            </a>
            <Link href="/experiences" className="btn btn-secondary btn-lg">
              Explore Experiences
            </Link>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-700">
            <div>
              <div className="text-3xl font-bold text-teal-400">3</div>
              <p className="text-slate-400 text-sm mt-1">Chapters</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400">2-6</div>
              <p className="text-slate-400 text-sm mt-1">Players</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400">90-120</div>
              <p className="text-slate-400 text-sm mt-1">Minutes per Chapter</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400">1000+</div>
              <p className="text-slate-400 text-sm mt-1">Rooms Designed By</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">The Asheville Chapters</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Unravel a dark mystery across three interconnected escape room
              experiences. Each chapter builds on the last, revealing the truth
              about what happened to Detective William Occam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <Link
                key={exp.id}
                href={`/experiences/${exp.id}`}
                className="group"
              >
                <div className={`card h-full overflow-hidden relative`}>
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-4">
                      <span className="inline-block text-xs font-semibold text-teal-400 uppercase tracking-wider">
                        {exp.chapter}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-3">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-sm mb-6 flex-1">
                      {exp.description}
                    </p>

                    <div className="space-y-2 mb-6 pt-6 border-t border-slate-700">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-teal-400">👥</span>
                        <span className="text-slate-300">{exp.players}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-teal-400">⏱️</span>
                        <span className="text-slate-300">{exp.duration}</span>
                      </div>
                    </div>

                    <button className="btn btn-secondary w-full justify-center group-hover:bg-teal-500/20">
                      Learn More →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Off The Couch */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Why Off The Couch?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We designed these experiences from a decade of playing over 1,000
              escape rooms worldwide. No gimmicks. Just immersive, intelligent
              storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">What Players Say</h2>
            <p className="text-slate-300">
              Join hundreds of teams who've experienced the Asheville mystery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-teal-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-4">Stay in the Loop</h2>
          <p className="text-slate-300 mb-8">
            Get updates on new chapters, special events, and team-building
            packages delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              required
            />
            <button
              type="submit"
              className="btn btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-slate-400 text-xs mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-6">Questions?</h2>
          <p className="text-slate-300 mb-8">
            Our team is here to help. Reach out for group bookings, corporate
            events, or custom experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card text-center">
              <p className="text-sm text-slate-400 mb-2">Call Us</p>
              <a
                href="tel:+14084782341"
                className="text-xl font-bold text-teal-400 hover:text-teal-300"
              >
                +1 (408) 478-2341
              </a>
            </div>
            <div className="card text-center">
              <p className="text-sm text-slate-400 mb-2">Email Us</p>
              <a
                href="mailto:contact@offthecouchgames.com"
                className="text-xl font-bold text-teal-400 hover:text-teal-300 break-all"
              >
                contact@offthecouchgames.com
              </a>
            </div>
          </div>

          <Link href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
