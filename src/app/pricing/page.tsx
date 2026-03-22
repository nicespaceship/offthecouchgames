import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Off The Couch - Escape Rooms",
  description:
    "Transparent pricing for immersive escape rooms. Pay by time used, not flat rates. Flexible group sizing.",
};

export default function PricingPage() {
  const pricingTiers = [
    {
      players: 2,
      hourlyRate: "$66",
      perPerson: "$33",
      apartmentCost: "$115",
      galleryCost: "$99",
      morgueCost: "$132",
    },
    {
      players: 3,
      hourlyRate: "$54",
      perPerson: "$18",
      apartmentCost: "$95",
      galleryCost: "$81",
      morgueCost: "$108",
    },
    {
      players: 4,
      hourlyRate: "$52",
      perPerson: "$13",
      apartmentCost: "$91",
      galleryCost: "$78",
      morgueCost: "$104",
    },
    {
      players: 5,
      hourlyRate: "$48",
      perPerson: "$9.60",
      apartmentCost: "$84",
      galleryCost: "$72",
      morgueCost: "$96",
    },
    {
      players: 6,
      hourlyRate: "$45",
      perPerson: "$7.50",
      apartmentCost: "$79",
      galleryCost: "$68",
      morgueCost: "$90",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-teal-900/20 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Transparent Pricing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We charge by time used, not flat rates. Pay only for what you play.
            Group rates decrease the more players you bring. Your deposit covers
            your estimated time; you only pay for time actually used.
          </p>
        </div>
      </section>

      {/* Pricing Model Explanation */}
      <section className="section-padding">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="text-white mb-8 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-white font-semibold mb-2">Pay by Time</h3>
              <p className="text-slate-400 text-sm">
                No flat rates. You're charged per hour per person. The rate
                decreases as your group gets larger.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-white font-semibold mb-2">Small Deposit</h3>
              <p className="text-slate-400 text-sm">
                Reserve with a deposit based on estimated time. We calculate it
                fairly based on your group size.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-white font-semibold mb-2">
                Only Pay for Time Used
              </h3>
              <p className="text-slate-400 text-sm">
                Finish early? Don't have to pay the full deposit. Finish late?
                You only pay for the extra time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container">
          <h2 className="text-white mb-8 text-center">Group Pricing</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">
                    Players
                  </th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">
                    Hourly Rate
                  </th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">
                    Per Person/Hour
                  </th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">
                    Apartment (105 min)
                  </th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">
                    Gallery (90 min)
                  </th>
                  <th className="text-left py-4 px-4 text-slate-300 font-semibold">
                    Morgue (120 min)
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier) => (
                  <tr
                    key={tier.players}
                    className="border-b border-slate-700 hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-4 px-4 text-white font-semibold">
                      {tier.players} Players
                    </td>
                    <td className="py-4 px-4 text-teal-400 font-semibold">
                      {tier.hourlyRate}
                    </td>
                    <td className="py-4 px-4 text-slate-300">{tier.perPerson}</td>
                    <td className="py-4 px-4 text-slate-300">{tier.apartmentCost}</td>
                    <td className="py-4 px-4 text-slate-300">{tier.galleryCost}</td>
                    <td className="py-4 px-4 text-slate-300">{tier.morgueCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <p className="text-slate-400 text-sm">
              <span className="font-semibold text-white">Note:</span> Prices shown
              are estimated deposits for typical completion times. You only pay
              for actual time used. If you finish faster, you pay less.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Details */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-white mb-8 text-center">Chapter Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-2">
                Occam's Apartment
              </h3>
              <p className="text-slate-400 text-sm mb-4">Chapter 1</p>
              <div className="bg-slate-800/50 rounded p-4 mb-4">
                <p className="text-slate-300 mb-2">
                  <span className="text-slate-400">Duration:</span>
                  <span className="text-white font-semibold ml-2">105 minutes</span>
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400">Players:</span>
                  <span className="text-white font-semibold ml-2">2-6</span>
                </p>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Start your investigation. Begin with this chapter to experience
                the full Asheville story.
              </p>
              <Link
                href="/experiences/apartment"
                className="btn btn-secondary text-sm justify-center w-full"
              >
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-2">
                Norcross Art Gallery
              </h3>
              <p className="text-slate-400 text-sm mb-4">Chapter 2</p>
              <div className="bg-slate-800/50 rounded p-4 mb-4">
                <p className="text-slate-300 mb-2">
                  <span className="text-slate-400">Duration:</span>
                  <span className="text-white font-semibold ml-2">90 minutes</span>
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400">Players:</span>
                  <span className="text-white font-semibold ml-2">2-6</span>
                </p>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Follow the clues from Chapter 1. The investigation deepens here.
              </p>
              <Link
                href="/experiences/gallery"
                className="btn btn-secondary text-sm justify-center w-full"
              >
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-white mb-2">The Morgue</h3>
              <p className="text-slate-400 text-sm mb-4">Chapter 3</p>
              <div className="bg-slate-800/50 rounded p-4 mb-4">
                <p className="text-slate-300 mb-2">
                  <span className="text-slate-400">Duration:</span>
                  <span className="text-white font-semibold ml-2">120 minutes</span>
                </p>
                <p className="text-slate-300">
                  <span className="text-slate-400">Players:</span>
                  <span className="text-white font-semibold ml-2">2-6</span>
                </p>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                The final confrontation. Experience the climax of the mystery.
              </p>
              <Link
                href="/experiences/morgue"
                className="btn btn-secondary text-sm justify-center w-full"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="section-container max-w-3xl mx-auto">
          <h2 className="text-white mb-8 text-center">Pricing FAQs</h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-white font-semibold mb-2">
                How is the deposit calculated?
              </h3>
              <p className="text-slate-400 text-sm">
                We estimate how long your group will take based on party size
                and chapter chosen. The deposit covers that estimated time. If
                you finish earlier, you pay less. If you need more time, you
                only pay for the extra.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-2">
                What if we finish early?
              </h3>
              <p className="text-slate-400 text-sm">
                You only pay for the time you actually use. If you complete the
                chapter in 90 minutes instead of 105, you'll only be charged for
                90 minutes.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-2">
                What if we need more time?
              </h3>
              <p className="text-slate-400 text-sm">
                No problem. You can use as much time as you need. You'll only
                pay for the additional time beyond your deposit estimate.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-2">
                Are there discounts for multiple chapters?
              </h3>
              <p className="text-slate-400 text-sm">
                Contact us for corporate group rates and multi-chapter packages.
                We offer special pricing for team-building and private events.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-2">
                Can we split the cost differently?
              </h3>
              <p className="text-slate-400 text-sm">
                Absolutely. The total cost is the same, but you can arrange
                payment however your group prefers. Discuss your needs when
                booking.
              </p>
            </div>

            <div className="card">
              <h3 className="text-white font-semibold mb-2">
                What about children or large groups?
              </h3>
              <p className="text-slate-400 text-sm">
                Maximum capacity is 6 players per session. Some chapters are not
                suitable for children. Contact us to discuss your specific group
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-2xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Book?</h2>
          <p className="text-slate-300 mb-8">
            Choose your chapter and reserve your session. Pay only for the time
            you use.
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
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
