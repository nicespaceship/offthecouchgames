import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Off The Couch - Immersive Escape Rooms in Fremont, CA",
  description:
    "Experience immersive escape rooms in Fremont. Play the Asheville chapters with no time limits and progress saves. Private bookings for 2-6 players.",
};

// SVG Icon Components
function PauseIcon() {
  return (
    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19.5v-15m4 15v-15" />
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2H3l9-2m0-18v9m0 0l-3-3m3 3l3-3" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-9a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

function ScrollIndicator() {
  return (
    <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );
}

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
      borderColor: "from-purple-500/50 to-transparent",
      imageBg: "from-purple-600/30 to-blue-600/20",
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
      borderColor: "from-amber-500/50 to-transparent",
      imageBg: "from-amber-600/30 to-red-600/20",
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
      borderColor: "from-slate-500/50 to-transparent",
      imageBg: "from-slate-600/30 to-gray-600/20",
    },
  ];

  const features = [
    {
      title: "No Time Limits",
      description:
        "Investigate at your own pace without pressure. Our rooms remove artificial time constraints for a more immersive experience.",
      icon: PauseIcon,
    },
    {
      title: "Progress Saves",
      description:
        "Complete chapters across multiple visits. Your progress is saved, allowing you to continue your investigation anytime.",
      icon: SaveIcon,
    },
    {
      title: "Private Bookings",
      description:
        "Your group, your experience. All bookings are private with no strangers. Fully customizable for your team.",
      icon: LockIcon,
    },
    {
      title: "1000+ Rooms Played",
      description:
        "Our founders have played over 1000 escape rooms worldwide and designed these experiences from that expertise.",
      icon: GlobeIcon,
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
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-24 pb-12">
        {/* Layered Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/40 via-slate-950 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 via-transparent to-cyan-900/10 pointer-events-none" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tagline with shimmer */}
          <div className="mb-8">
            <span className="inline-block px-5 py-3 rounded-full bg-gradient-to-r from-teal-500/25 to-cyan-500/25 border border-teal-400/40 text-sm font-semibold text-teal-200 backdrop-blur-sm relative overflow-hidden">
              <span className="relative">
                Enter the Asheville Storyline
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0" style={{ animationDuration: '3s' }} />
              </span>
            </span>
          </div>

          {/* Split Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1]">
            <span className="block">Immersive Escape</span>
            <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Rooms in Fremont
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Step into a cinematic mystery. Investigate, uncover secrets, and
            become the protagonist of your own story. No time limits. Progress
            saves. Private experiences for 2-6 players.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://offthecouch.io/book/otc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-shadow"
            >
              Book Now
            </a>
            <Link href="/experiences" className="btn btn-secondary btn-lg border border-teal-500/30 hover:border-teal-400/50">
              Explore Experiences
            </Link>
          </div>

          {/* Hero Stats - Frosted Glass Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 pt-8 border-t border-slate-700/50">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">3</div>
              <p className="text-slate-400 text-sm mt-2 font-medium">Chapters</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">2-6</div>
              <p className="text-slate-400 text-sm mt-2 font-medium">Players</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">90-120</div>
              <p className="text-slate-400 text-sm mt-2 font-medium">Minutes</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">1000+</div>
              <p className="text-slate-400 text-sm mt-2 font-medium">Rooms</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-8 flex justify-center text-teal-400/60">
            <ScrollIndicator />
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              The Asheville Chapters
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Unravel a dark mystery across three interconnected escape room
              experiences. Each chapter builds on the last, revealing the truth
              about what happened to Detective William Occam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={exp.id} delay={idx * 0.1} animation="fadeInUp">
                <Link
                  href={`/experiences/${exp.id}`}
                  className="group block h-full"
                >
                  <div className="card h-full overflow-hidden relative border-0 shadow-2xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    {/* Top Border Gradient */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.borderColor}`} />

                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Image Placeholder */}
                      <div className={`h-48 bg-gradient-to-br ${exp.imageBg} rounded-lg mb-6 relative overflow-hidden`}>
                        <div className="absolute inset-0 flex items-center justify-center text-slate-500/20">
                          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>

                      {/* Chapter Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${exp.accentColor} text-white text-sm font-bold`}>
                          {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                          {exp.chapter}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
                        {exp.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-sm mb-6 flex-1">
                        {exp.description}
                      </p>

                      {/* Meta Info */}
                      <div className="space-y-3 mb-6 pt-6 border-t border-slate-700/50">
                        <div className="flex items-center gap-3 text-sm">
                          <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-slate-300">{exp.players}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-slate-300">{exp.duration}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="btn btn-secondary w-full justify-center group-hover:bg-teal-500/20 border-teal-500/30 group-hover:border-teal-400">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Off The Couch */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Why Off The Couch?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We designed these experiences from a decade of playing over 1,000
              escape rooms worldwide. No gimmicks. Just immersive, intelligent
              storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 0.1} animation="fadeInUp">
                  <div className="card h-full border-l-4 border-teal-500/50 hover:border-teal-400 hover:bg-slate-800/50 transition-all group">
                    <div className="flex flex-col items-center text-center">
                      <div className="text-teal-400 group-hover:text-teal-300 transition-colors mb-6">
                        <IconComponent />
                      </div>
                      <h3 className="font-bold text-white mb-3 text-lg">{feature.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              What Players Say
            </h2>
            <p className="text-lg text-slate-300">
              Join hundreds of teams who've experienced the Asheville mystery.
            </p>
          </div>

          {/* Mobile Horizontal Scroll / Desktop Grid */}
          <div className="md:grid md:grid-cols-3 md:gap-6 flex overflow-x-auto gap-4 md:overflow-visible pb-4 md:pb-0">
            {testimonials.map((testimonial, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} animation="fadeInUp" className="flex-shrink-0 md:flex-shrink w-full md:w-auto">
                <div className="card h-full">
                  {/* Review Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-2xl text-amber-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full flex items-center gap-1">
                      <span>★</span> Google
                    </span>
                  </div>

                  <p className="text-slate-300 mb-6 italic text-base leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="pt-6 border-t border-slate-700/50">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm flex items-center gap-2 mt-1">
                      <LocationPinIcon />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-2xl mx-auto">
          <AnimatedSection animation="fadeInUp">
            <div className="backdrop-blur-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-400/30 rounded-3xl p-10 md:p-12 shadow-2xl shadow-teal-500/20">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-center">
                Stay in the Loop
              </h2>
              <p className="text-slate-300 mb-8 text-center text-lg">
                Get updates on new chapters, special events, and team-building
                packages delivered to your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-xl bg-slate-900/50 border border-teal-400/30 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 focus:bg-slate-900 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary whitespace-nowrap px-8 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-shadow"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-slate-400 text-xs mt-4 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-b from-slate-950 to-black">
        <div className="section-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Questions?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our team is here to help. Reach out for group bookings, corporate
              events, or custom experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <AnimatedSection delay={0} animation="fadeInUp">
              <a
                href="tel:+14084782341"
                className="card group border-l-4 border-teal-500/50 hover:border-teal-400 hover:bg-slate-800/50 transition-all cursor-pointer block"
              >
                <div className="flex items-start gap-4">
                  <div className="text-teal-400 group-hover:text-teal-300 transition-colors pt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 font-medium mb-2">Call Us</p>
                    <p className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      +1 (408) 478-2341
                    </p>
                  </div>
                </div>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1} animation="fadeInUp">
              <a
                href="mailto:contact@offthecouchgames.com"
                className="card group border-l-4 border-teal-500/50 hover:border-teal-400 hover:bg-slate-800/50 transition-all cursor-pointer block"
              >
                <div className="flex items-start gap-4">
                  <div className="text-teal-400 group-hover:text-teal-300 transition-colors pt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-slate-400 font-medium mb-2">Email Us</p>
                    <p className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors break-all">
                      contact@offthecouchgames.com
                    </p>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          </div>

          <div className="text-center">
            <Link href="/contact" className="btn btn-primary btn-lg shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-shadow">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
