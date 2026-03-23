import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About | Off The Couch - Escape Rooms",
  description:
    "Learn about Jana and Nick Schilbe, founders of Off The Couch. Former cybersecurity professionals with 1000+ escape room experiences.",
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2014",
      title: "Discovery",
      description: "Jana and Nick fell in love with escape rooms. What started as curiosity became an obsession, leading them to explore over 1000 rooms worldwide.",
      icon: "🎮",
    },
    {
      year: "2017",
      title: "Creation",
      description: "Armed with years of research, they opened Off The Couch with a bold vision: experiences that feel real, without artificial time pressure.",
      icon: "💡",
    },
    {
      year: "Today",
      title: "Innovation",
      description: "Building immersive narratives and the offthecouch.io platform used by operators worldwide. The Asheville mystery is their magnum opus.",
      icon: "🚀",
    },
  ];

  const values = [
    {
      icon: "📖",
      title: "Story First",
      description: "Everything we create serves the narrative. Puzzles deepen the story. Players feel part of something real.",
    },
    {
      icon: "⏰",
      title: "No Artificial Pressure",
      description: "We removed time limits entirely. Investigate at your own pace, linger on moments that matter, absorb the atmosphere.",
    },
    {
      icon: "🎭",
      title: "Player Agency",
      description: "You're not solving someone else's puzzle. You're investigating your mystery. Your choices shape the outcome.",
    },
    {
      icon: "💎",
      title: "Quality Over Volume",
      description: "We invest deeply in each experience. Every element is intentional. Every detail serves the vision.",
    },
    {
      icon: "🤝",
      title: "Community",
      description: "We're building a community that values narrative, atmosphere, and immersion. We listen and grow with our players.",
    },
    {
      icon: "🌍",
      title: "Accessibility",
      description: "Everyone should experience immersive gameplay. We're committed to making Off The Couch accessible to all.",
    },
  ];

  const stats = [
    { number: "1000+", label: "Rooms Explored" },
    { number: "12", label: "Chapters Planned" },
    { number: "3", label: "Available Now" },
    { number: "2017", label: "Year Founded" },
  ];

  return (
    <>
      {/* Hero with Story */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-teal-900/20 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h1 className="text-white mb-6 text-4xl md:text-5xl">Our Story</h1>
                <p className="text-lg md:text-xl text-slate-300 mb-6">
                  From obsessed players to designers. We fell in love with escape rooms and decided to create something truly special—experiences that feel real, narratives that matter, and moments that linger.
                </p>
                <p className="text-slate-300 text-lg">
                  Jana and Nick Schilbe spent years exploring, learning, and perfecting their craft. Now, they're inviting you to investigate the Asheville mystery.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} animation="scaleIn">
              <div className="card h-full flex items-center justify-center min-h-[300px] bg-gradient-to-br from-teal-500/10 via-slate-800/50 to-slate-900">
                <div className="text-center">
                  <div className="text-8xl mb-4">🔍</div>
                  <p className="text-slate-400 text-sm">The investigation begins here</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="section-padding bg-slate-950">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} animation="fadeInUp">
                <div className="card text-center hover:border-teal-400 transition-colors group">
                  <div className="text-5xl md:text-6xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <p className="text-slate-400 text-sm md:text-base">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Journey */}
      <section className="section-padding">
        <div className="section-container max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-white mb-14 text-center text-3xl">The Journey</h2>
          </AnimatedSection>

          <div className="space-y-12 md:space-y-20">
            {milestones.map((milestone, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.2} animation="fadeInUp">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${idx % 2 === 1 ? 'md:grid-cols-2 md:[direction:rtl]' : ''}`}>
                  <div className={idx % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                    <div className="flex items-baseline gap-4 mb-4">
                      <div className="text-4xl md:text-5xl font-black text-teal-400">{milestone.year}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="card h-full flex items-center justify-center min-h-[250px] md:min-h-[300px] bg-gradient-to-br from-slate-700/30 to-slate-800/30 hover:border-teal-400 transition-colors">
                    <div className="text-6xl md:text-8xl">{milestone.icon}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-white mb-12 text-center text-3xl">Meet the Founders</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1} animation="fadeInLeft">
              <div className="card h-full hover:border-teal-400 transition-colors">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-500/20 to-slate-700/20 rounded-full flex items-center justify-center mb-4">
                    <div className="text-5xl">👩‍💼</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Jana Schilbe</h3>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-6 border border-slate-700">
                  <p className="text-sm mb-3">
                    <span className="text-slate-300 font-bold block">Background</span>
                    <span className="text-slate-400">Cybersecurity Professional</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-slate-300 font-bold block">Expertise</span>
                    <span className="text-slate-400">Strategic thinking, puzzle design, narrative structure</span>
                  </p>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Jana brings an analytical mindset to experience design. She ensures every puzzle is elegant, every narrative twist earns itself, and every element serves the story. Her background in cybersecurity translates into intricate, logical puzzle design that feels rewarding to solve.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} animation="fadeInRight">
              <div className="card h-full hover:border-teal-400 transition-colors">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-500/20 to-slate-700/20 rounded-full flex items-center justify-center mb-4">
                    <div className="text-5xl">👨‍💻</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Nick Schilbe</h3>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-6 border border-slate-700">
                  <p className="text-sm mb-3">
                    <span className="text-slate-300 font-bold block">Background</span>
                    <span className="text-slate-400">Cybersecurity Professional, Tech Entrepreneur</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-slate-300 font-bold block">Expertise</span>
                    <span className="text-slate-400">Technical systems, user experience, business strategy</span>
                  </p>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Nick brings technical innovation to experience delivery. He designed offthecouch.io, a platform now used by escape room operators worldwide, ensuring our operations support the immersive vision while scaling intelligently.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="text-white mb-12 text-center text-3xl">Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} animation="fadeInUp">
                <div className="card h-full hover:border-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/10">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="card border-2 border-teal-500/30 bg-teal-500/5">
              <h2 className="text-2xl font-bold text-white mb-6">Our Philosophy</h2>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                We believe escape rooms should feel like stepping into another world. Not a game with artificial time pressure, but an immersive narrative where you're the protagonist. Every puzzle serves the story. Every moment matters. Every choice echoes through the experience.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                After exploring 1000+ rooms globally, we realized what was missing: authenticity. Real stakes, narrative depth, and player agency. Off The Couch exists to deliver exactly that.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6 text-3xl">Experience Our Vision</h2>
            <p className="text-slate-300 mb-10 text-lg">
              We've spent years perfecting our craft. Now it's your turn to investigate the Asheville mystery and uncover the truth about Detective Occam.
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
