import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Off The Couch - Escape Rooms",
  description:
    "Get in touch with Off The Couch. Call, email, or visit us in Fremont.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-teal-900/20 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions? Need a group booking? Want to discuss a corporate
            event? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="section-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Phone */}
            <div className="card">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Call Us
              </h3>
              <a
                href="tel:+14084782341"
                className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors mb-3 block"
              >
                +1 (408) 478-2341
              </a>
              <p className="text-slate-400 text-sm">
                Mon-Sun 10am-8pm PST. We typically respond within 24 hours.
              </p>
            </div>

            {/* Email */}
            <div className="card">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">✉️</span>
                Email Us
              </h3>
              <a
                href="mailto:contact@offthecouchgames.com"
                className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors mb-3 block break-all"
              >
                contact@offthecouchgames.com
              </a>
              <p className="text-slate-400 text-sm">
                Perfect for detailed inquiries, group bookings, or corporate
                events.
              </p>
            </div>

            {/* Address */}
            <div className="card">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Visit Us
              </h3>
              <div className="text-slate-300 font-semibold mb-3">
                Off The Couch Games
                <br />
                <span className="text-slate-400 font-normal">
                  555 Mowry Avenue
                  <br />
                  Fremont, CA 94536
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Open for bookings 10am-8pm daily. Free parking available.
              </p>
            </div>

            {/* Hours */}
            <div className="card">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🕐</span>
                Hours
              </h3>
              <div className="space-y-1 text-sm text-slate-300">
                <p>
                  <span className="text-slate-400">Monday-Friday:</span> 10am-8pm
                </p>
                <p>
                  <span className="text-slate-400">Saturday-Sunday:</span>{" "}
                  10am-8pm
                </p>
                <p className="text-slate-400 mt-3">
                  Closed major holidays. Extended hours available for group
                  bookings.
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="card h-96 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
              <div className="text-center z-10">
                <div className="text-5xl mb-4">📍</div>
                <h4 className="text-white font-semibold mb-2">
                  555 Mowry Avenue
                </h4>
                <p className="text-slate-400">Fremont, CA 94536</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-white mb-8 text-center">How Can We Help?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-white font-semibold mb-3">
                General Booking
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Ready to reserve a session? You can book directly online or call
                us to discuss your preferences.
              </p>
              <a
                href="https://offthecouch.io/book/otc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 text-sm font-semibold"
              >
                Book Online →
              </a>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-3">Group Events</h3>
              <p className="text-slate-400 text-sm mb-4">
                Planning a corporate team-building event or private group
                experience? We offer custom packages and flexible scheduling.
              </p>
              <a
                href="mailto:contact@offthecouchgames.com"
                className="text-teal-400 hover:text-teal-300 text-sm font-semibold"
              >
                Email Group Inquiries →
              </a>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-3">
                Questions About Experiences
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Not sure which chapter to start with? Want to know more about
                difficulty levels or content? We're here to help.
              </p>
              <a
                href="tel:+14084782341"
                className="text-teal-400 hover:text-teal-300 text-sm font-semibold"
              >
                Call Us →
              </a>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-3">
                Accessibility & Special Needs
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                We want everyone to enjoy Off The Couch. If you have specific
                accessibility needs, please reach out.
              </p>
              <a
                href="mailto:contact@offthecouchgames.com"
                className="text-teal-400 hover:text-teal-300 text-sm font-semibold"
              >
                Email Accessibility Requests →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="text-white mb-8 text-center">What to Expect</h2>

          <div className="space-y-4">
            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">1️⃣</div>
              <div>
                <h4 className="text-white font-semibold mb-1">Contact Us</h4>
                <p className="text-slate-400 text-sm">
                  Reach out via phone, email, or book directly online. We'll
                  confirm availability and answer any questions.
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">2️⃣</div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  Choose Your Experience
                </h4>
                <p className="text-slate-400 text-sm">
                  Select the chapter you'd like to play and confirm your booking
                  date and time.
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">3️⃣</div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  Small Deposit
                </h4>
                <p className="text-slate-400 text-sm">
                  Reserve with a deposit based on estimated time. You only pay
                  for time actually used.
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">4️⃣</div>
              <div>
                <h4 className="text-white font-semibold mb-1">Arrival</h4>
                <p className="text-slate-400 text-sm">
                  Arrive 10-15 minutes early. We'll brief you on the experience
                  and answer any last questions.
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">5️⃣</div>
              <div>
                <h4 className="text-white font-semibold mb-1">Investigate</h4>
                <p className="text-slate-400 text-sm">
                  Begin your investigation. No time limits. Investigate at your
                  own pace.
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <div className="text-3xl flex-shrink-0">6️⃣</div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  Final Payment
                </h4>
                <p className="text-slate-400 text-sm">
                  When you're done, you only pay for the time you used. Any
                  overage from your deposit is charged then.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Start?</h2>
          <p className="text-slate-300 mb-8">
            Book directly online or reach out with any questions. We're excited
            to welcome you to the Asheville mystery.
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
        </div>
      </section>
    </>
  );
}
