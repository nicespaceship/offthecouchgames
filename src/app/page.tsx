import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import FloatingIcons from "@/components/FloatingIcons";

export const metadata: Metadata = {
  title: "Off The Couch - Immersive Escape Rooms in Fremont, CA",
  description:
    "Experience immersive escape rooms in Fremont. Play the Asheville chapters with no time limits and progress saves. Private bookings for 2-6 players.",
};

/* ── Themed SVG illustrations ── */

function HeroIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-teal-400" stroke="currentColor" strokeWidth="1">
      {/* Magnifying glass examining a keyhole */}
      <circle cx="90" cy="80" r="45" strokeWidth="2" opacity="0.6" />
      <line x1="125" y1="115" x2="170" y2="160" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Keyhole inside */}
      <circle cx="90" cy="72" r="10" strokeWidth="1.5" opacity="0.4" />
      <path d="M85 82l-4 20h18l-4-20" strokeWidth="1.5" strokeLinejoin="round" opacity="0.4" />
      {/* Sparkle dots */}
      <circle cx="55" cy="45" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="130" cy="55" r="1.5" fill="currentColor" opacity="0.2" />
      <circle cx="70" cy="130" r="2" fill="currentColor" opacity="0.25" />
      <circle cx="150" cy="90" r="1" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

function DoorIllustration() {
  return (
    <svg viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-purple-400" opacity="0.15">
      <rect x="10" y="5" width="60" height="90" rx="3" />
      <circle cx="58" cy="50" r="4" />
      <circle cx="58" cy="50" r="1.5" fill="currentColor" />
      <rect x="20" y="15" width="18" height="25" rx="1" />
      <rect x="42" y="15" width="18" height="25" rx="1" />
    </svg>
  );
}

function FrameIllustration() {
  return (
    <svg viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-amber-400" opacity="0.15">
      <rect x="8" y="10" width="64" height="80" rx="2" />
      <rect x="14" y="16" width="52" height="68" rx="1" />
      <path d="M20 60 L32 40 L44 55 L52 45 L60 60" strokeLinejoin="round" />
      <circle cx="30" cy="32" r="5" />
    </svg>
  );
}

function SkullIllustration() {
  return (
    <svg viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-emerald-400" opacity="0.15">
      <ellipse cx="40" cy="40" rx="25" ry="30" />
      <circle cx="30" cy="35" r="6" />
      <circle cx="50" cy="35" r="6" />
      <path d="M35 55 L40 50 L45 55" strokeLinejoin="round" />
      <path d="M30 70 L30 80 M37 70 L37 82 M43 70 L43 82 M50 70 L50 80" strokeLinecap="round" />
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
      accentColor: "border-purple-500",
      textColor: "text-purple-400",
      Illustration: DoorIllustration,
    },
    {
      id: "gallery",
      title: "Norcross Art Gallery",
      chapter: "Chapter 2",
      players: "2-6 players",
      duration: "90 minutes",
      description:
        "You followed leads left behind at Occam's Apartment and determined that the Norcross Art Gallery is where 'he' likely is operating out of.",
      accentColor: "border-amber-500",
      textColor: "text-amber-400",
      Illustration: FrameIllustration,
    },
    {
      id: "morgue",
      title: "The Morgue",
      chapter: "Chapter 3",
      players: "2-6 players",
      duration: "120 minutes",
      description:
        "The man you have been hunting continues to evade you. This time he sends you to the Morgue where he wants to play a little game.",
      accentColor: "border-emerald-500",
      textColor: "text-emerald-400",
      Illustration: SkullIllustration,
    },
  ];

  const features = [
    {
      title: "No Time Limits",
      description:
        "Investigate at your own pace without pressure. Our rooms remove artificial time constraints for a more immersive experience.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 48 48" strokeWidth="1.5">
          <circle cx="24" cy="24" r="18" />
          <path d="M24 14v10l7 7" strokeLinecap="round" />
          <line x1="12" y1="12" x2="36" y2="36" strokeWidth="2.5" strokeLinecap="round" className="text-red-400" />
        </svg>
      ),
    },
    {
      title: "Progress Saves",
      description:
        "Complete chapters across multiple visits. Your progress is saved, allowing you to continue your investigation anytime.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 48 48" strokeWidth="1.5">
          <path d="M8 6h24l8 8v28H8V6z" strokeLinejoin="round" />
          <path d="M14 6v12h16V6" />
          <path d="M18 30l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Private Bookings",
      description:
        "Your group, your experience. All bookings are private with no strangers. Fully customizable for your team.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 48 48" strokeWidth="1.5">
          <rect x="6" y="10" width="36" height="30" rx="3" />
          <path d="M16 10V8a8 8 0 0 1 16 0v2" />
          <rect x="18" y="22" width="12" height="8" rx="1" />
          <path d="M22 22v-2a2 2 0 0 1 4 0v2" />
        </svg>
      ),
    },
    {
      title: "1000+ Rooms Played",
      description:
        "Our founders have played over 1000 escape rooms worldwide and designed these experiences from that expertise.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 48 48" strokeWidth="1.5">
          <circle cx="24" cy="24" r="18" />
          <ellipse cx="24" cy="24" rx="18" ry="8" />
          <ellipse cx="24" cy="24" rx="8" ry="18" />
          <circle cx="12" cy="16" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="34" cy="30" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="20" cy="36" r="1.5" fill="currentColor" opacity="0.5" />
        </svg>
      ),
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
      {/* ═══ HERO ═══ */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden pt-28 pb-20">
        <FloatingIcons density="dense" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left: text (3 cols) */}
            <div className="lg:col-span-3">
              <p className="text-teal-400 uppercase tracking-[0.2em] text-sm font-semibold mb-6">
                Enter the Asheville Storyline
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
                Immersive Escape{" "}
                <span className="text-teal-400">Rooms in Fremont</span>
              </h1>

              <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
                Step into a cinematic mystery. Investigate, uncover secrets, and
                become the protagonist of your own story. No time limits. Progress
                saves. Private experiences for 2-6 players.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

              {/* Stats — asymmetric */}
              <div className="flex flex-wrap gap-6 border-t-2 border-slate-800 pt-8">
                <div className="pr-6 border-r-2 border-slate-800">
                  <div className="text-5xl font-black text-teal-400">3</div>
                  <p className="text-slate-500 text-sm font-medium mt-1">Chapters</p>
                </div>
                <div className="pr-6 border-r-2 border-slate-800">
                  <div className="text-3xl font-black text-teal-400 mt-1">2-6</div>
                  <p className="text-slate-500 text-sm font-medium mt-1">Players</p>
                </div>
                <div className="pr-6 border-r-2 border-slate-800">
                  <div className="text-3xl font-black text-teal-400 mt-1">90-120</div>
                  <p className="text-slate-500 text-sm font-medium mt-1">Minutes</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-teal-400 mt-1">1000+</div>
                  <p className="text-slate-500 text-sm font-medium mt-1">Rooms Played</p>
                </div>
              </div>
            </div>

            {/* Right: illustration (2 cols) */}
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
              <div className="w-80 h-80 relative" style={{ animation: 'float-drift-1 20s ease-in-out infinite' }}>
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCES ═══ */}
      <SectionDivider variant="wave" color="#111827" />
      <section className="section-padding bg-[#111827] relative">
        <div className="section-container">
          <div className="mb-14">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              The Asheville Chapters
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Unravel a dark mystery across three interconnected escape room
              experiences. Each chapter builds on the last, revealing the truth
              about what happened to Detective William Occam.
            </p>
          </div>

          {/* Staggered cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={exp.id} delay={idx * 0.15} animation="fadeInUp">
                <div className={`${idx === 1 ? 'md:mt-8' : ''} ${idx === 2 ? 'md:mt-16' : ''}`}>
                  <Link href={`/experiences/${exp.id}`} className="group block h-full">
                    <div className={`bg-[#0a0f1a] border-2 border-slate-700 border-l-4 ${exp.accentColor} rounded-lg overflow-hidden h-full transition-all duration-200 group-hover:border-teal-400 group-hover:-translate-y-1 group-hover:rotate-[-0.5deg]`}>
                      {/* Illustration area */}
                      <div className="h-44 bg-[#080d16] relative overflow-hidden flex items-center justify-center">
                        {/* Big background number */}
                        <span className={`absolute text-[6rem] font-black ${exp.textColor} opacity-[0.06] select-none`}>
                          0{idx + 1}
                        </span>
                        <div className="w-24 h-24 relative z-10">
                          <exp.Illustration />
                        </div>
                      </div>

                      <div className="p-6">
                        <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                          {exp.chapter}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-teal-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-slate-500 text-sm mb-6">{exp.description}</p>

                        <div className="flex gap-4 text-sm text-slate-400 mb-6 pt-4 border-t border-slate-800">
                          <span>{exp.players}</span>
                          <span>·</span>
                          <span>{exp.duration}</span>
                        </div>

                        <span className="btn btn-secondary w-full justify-center text-sm">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY OFF THE COUCH ═══ */}
      <SectionDivider variant="zigzag" color="#0a0f1a" />
      <section className="section-padding bg-[#0a0f1a] relative">
        <div className="section-container">
          <div className="mb-14">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Why Off The Couch?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              We designed these experiences from a decade of playing over 1,000
              escape rooms worldwide. No gimmicks. Just immersive, intelligent
              storytelling.
            </p>
          </div>

          {/* Featured first + 3 below */}
          <div className="space-y-6">
            {/* Featured card */}
            <AnimatedSection animation="fadeInUp">
              <div className="bg-[#111827] border-2 border-slate-700 border-l-4 border-l-teal-400 rounded-lg p-8 flex flex-col md:flex-row gap-6 items-start hover:border-teal-400 transition-colors">
                <div className="text-teal-400 flex-shrink-0">{features[0].icon}</div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-2">{features[0].title}</h3>
                  <p className="text-slate-400 leading-relaxed">{features[0].description}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* 3 smaller cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.slice(1).map((feature, idx) => (
                <AnimatedSection key={idx} delay={(idx + 1) * 0.1} animation="fadeInUp">
                  <div className="card h-full group">
                    <div className="text-teal-400 mb-4 group-hover:animate-[wiggle_0.4s_ease]">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-white mb-3 text-lg">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <SectionDivider variant="torn" color="#111827" />
      <section className="section-padding bg-[#111827] relative">
        <div className="section-container">
          <div className="mb-14">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              What Players Say
            </h2>
            <p className="text-lg text-slate-400">
              Join hundreds of teams who&apos;ve experienced the Asheville mystery.
            </p>
          </div>

          {/* Scattered/offset testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15} animation="fadeInUp" className="flex">
                <div className={`card h-full relative ${idx === 1 ? 'md:mt-10' : ''} ${idx === 2 ? 'md:mt-20' : ''}`}>
                  {/* Quote mark */}
                  <svg className="absolute top-4 right-4 w-10 h-10 text-teal-400 opacity-[0.08]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-xl text-teal-400">★</span>
                    ))}
                  </div>

                  <p className="text-slate-300 mb-6 italic leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="pt-4 border-t border-slate-700">
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-slate-500 text-sm mt-1">{t.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section className="bg-teal-600 py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Get updates on new chapters, special events, and team-building
            packages delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all"
              required
            />
            <button
              type="submit"
              className="btn bg-[#0a0f1a] text-white font-bold hover:bg-slate-800 transition-colors px-8"
            >
              Subscribe
            </button>
          </form>
          <p className="text-teal-200/60 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* ═══ CONTACT CTA ═══ */}
      <section className="section-padding bg-[#0a0f1a] relative">
        <div className="section-container max-w-4xl mx-auto">
          <div className="mb-14">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Questions?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Our team is here to help. Reach out for group bookings, corporate
              events, or custom experiences.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
            <a
              href="tel:+14084782341"
              className="group flex items-center gap-4 hover:text-teal-400 transition-colors"
            >
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                +1 (408) 478-2341
              </span>
            </a>

            <a
              href="mailto:contact@offthecouchgames.com"
              className="group flex items-center gap-4 hover:text-teal-400 transition-colors"
            >
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                contact@offthecouchgames.com
              </span>
            </a>
          </div>

          <Link href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
