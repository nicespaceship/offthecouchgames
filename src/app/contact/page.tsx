import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Off The Couch - Escape Rooms",
  description: "Get in touch with Off The Couch. Call, email, or visit us in Fremont.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      value: "+1 (408) 478-2341",
      description: "Mon-Sun 10am-8pm PST",
      href: "tel:+14084782341",
      type: "phone",
    },
    {
      icon: "✉️",
      title: "Email",
      value: "contact@offthecouchgames.com",
      description: "For detailed inquiries and bookings",
      href: "mailto:contact@offthecouchgames.com",
      type: "email",
    },
    {
      icon: "📍",
      title: "Visit Us",
      value: "555 Mowry Avenue",
      description: "Fremont, CA 94536",
      href: "#location",
      type: "address",
    },
  ];

  const inquiryTypes = [
    {
      icon: "🎫",
      title: "General Booking",
      description: "Ready to reserve a session? Book directly online or discuss preferences.",
      action: "Book Online",
      href: "https://offthecouch.io/book/otc",
    },
    {
      icon: "👥",
      title: "Group Events",
      description: "Planning a corporate team-building or private group experience.",
      action: "Email Inquiry",
      href: "mailto:contact@offthecouchgames.com",
    },
    {
      icon: "❓",
      title: "Experience Questions",
      description: "Unsure about chapters, difficulty levels, or content? We can help.",
      action: "Call Us",
      href: "tel:+14084782341",
    },
    {
      icon: "♿",
      title: "Accessibility Needs",
      description: "We want everyone to enjoy Off The Couch. Tell us your needs.",
      action: "Email Us",
      href: "mailto:contact@offthecouchgames.com",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Contact Us",
      description: "Reach out via phone, email, or book directly online.",
    },
    {
      number: "2",
      title: "Choose Your Experience",
      description: "Select the chapter and confirm your booking date and time.",
    },
    {
      number: "3",
      title: "Small Deposit",
      description: "Reserve with a deposit based on estimated time.",
    },
    {
      number: "4",
      title: "Arrive Early",
      description: "Arrive 10-15 minutes early for a brief orientation.",
    },
    {
      number: "5",
      title: "Investigate",
      description: "Begin your investigation at your own pace, no time limits.",
    },
    {
      number: "6",
      title: "Final Payment",
      description: "Pay only for the time you actually used.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-teal-900/20 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-white mb-6 text-4xl md:text-5xl">Get in Touch</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Have questions? Need a group booking? Want to discuss a corporate event? We're here to help and excited to welcome you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="section-container max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-white mb-8 text-center text-3xl">Contact Methods</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} animation="fadeInUp">
                <a
                  href={method.href}
                  className="card h-full hover:border-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/10 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{method.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-teal-400 font-semibold mb-2 break-all">
                    {method.value}
                  </p>
                  <p className="text-slate-400 text-sm">{method.description}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>

          {/* Map Placeholder */}
          <AnimatedSection animation="scaleIn">
            <div className="card h-80 md:h-96 flex items-center justify-center overflow-hidden hover:border-teal-400 transition-colors">
              <div className="w-full h-full bg-gradient-to-br from-teal-900/20 via-slate-800/50 to-slate-900 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="150" r="80" stroke="currentColor" strokeWidth="1" className="text-teal-500" />
                    <path d="M200 70 L230 150 Q200 190 170 150 Z" fill="currentColor" className="text-teal-500/30" />
                  </svg>
                </div>
                <div className="text-center z-10 relative">
                  <div className="text-6xl mb-4">📍</div>
                  <h4 className="text-white font-bold text-lg mb-1">555 Mowry Avenue</h4>
                  <p className="text-slate-300 font-semibold mb-2">Fremont, CA 94536</p>
                  <p className="text-slate-400 text-sm">Free parking available</p>
                  <p className="text-slate-400 text-sm">Open 10am-8pm Daily</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hours & Business Info */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card h-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  Hours of Operation
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300 font-semibold">Monday - Friday</span>
                    <span className="text-teal-400 font-bold">10am - 8pm</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700">
                    <span className="text-slate-300 font-semibold">Saturday</span>
                    <span className="text-teal-400 font-bold">10am - 8pm</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-300 font-semibold">Sunday</span>
                    <span className="text-teal-400 font-bold">10am - 8pm</span>
                  </div>
                  <div className="pt-4 border-t border-slate-700 mt-4">
                    <p className="text-slate-400 text-sm">
                      Closed major holidays. Extended hours available for group bookings.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.08-2.54-1.41 1.15 3.49 4.23L13.6 8.96z" />
                  </svg>
                  Quick Response Times
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full" />
                      Phone
                    </h4>
                    <p className="text-slate-400 text-sm ml-4">
                      Call during business hours for immediate assistance. We typically respond within 24 hours.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full" />
                      Email
                    </h4>
                    <p className="text-slate-400 text-sm ml-4">
                      Perfect for detailed inquiries and group bookings. We respond within 24 hours.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-400 rounded-full" />
                      In Person
                    </h4>
                    <p className="text-slate-400 text-sm ml-4">
                      Visit our Fremont location during business hours. Free parking available.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="section-padding">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="text-white mb-8 text-center text-3xl">How Can We Help?</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inquiryTypes.map((inquiry, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} animation="fadeInUp">
                <a
                  href={inquiry.href}
                  target={inquiry.href.startsWith("http") ? "_blank" : undefined}
                  rel={inquiry.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card h-full hover:border-teal-400 transition-all hover:shadow-lg hover:shadow-teal-500/10 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {inquiry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {inquiry.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 flex-grow">
                    {inquiry.description}
                  </p>
                  <span className="text-teal-400 font-semibold text-sm flex items-center gap-2">
                    {inquiry.action}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Process */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <AnimatedSection delay={0.1}>
              <ContactForm />
            </AnimatedSection>

            {/* Process Steps */}
            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">The Process</h3>

                <div className="space-y-6">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-teal-500/20 border border-teal-500/50">
                          <span className="text-teal-400 font-bold">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                        <p className="text-slate-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-teal-500/10 border border-teal-500/30 rounded-lg">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="text-teal-300 font-semibold block mb-2">Pro Tip:</span>
                    Book online for instant availability or call us during business hours to discuss your group's specific needs.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-white mb-6 text-3xl">Ready to Begin?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Whether you're booking your first session or planning a corporate event, we're excited to welcome you to the Asheville mystery.
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
              <a
                href="tel:+14084782341"
                className="btn btn-secondary btn-lg"
              >
                Call Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
