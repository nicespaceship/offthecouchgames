import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Structured Data - LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Off The Couch Games",
          "description": "Immersive escape room experiences in Fremont, CA",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "555 Mowry Avenue",
            "addressLocality": "Fremont",
            "addressRegion": "CA",
            "postalCode": "94536",
            "addressCountry": "US"
          },
          "telephone": "+1-408-478-2341",
          "email": "contact@offthecouchgames.com",
          "sameAs": [
            "https://www.facebook.com/offthecouchgames",
            "https://www.instagram.com/offthecouchgames",
            "https://www.twitter.com/offthecouchgames",
            "https://www.yelp.com/biz/off-the-couch-games-fremont"
          ]
        })}
      </script>

      <footer id="top" className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Brand Section - Full Width on Mobile */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                🛋️
              </div>
              <span className="font-bold text-white text-lg">Off The Couch</span>
            </div>
            <p className="text-slate-400 text-sm">
              Immersive escape room experiences in Fremont, CA.
            </p>
          </div>

          {/* Main Content Grid: 2-column on mobile (Experiences + Company), full width Contact below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Experiences Navigation */}
            <nav>
              <h3 className="font-semibold text-white mb-4 text-sm md:text-base">Experiences</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/experiences/apartment"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    Occam's Apartment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experiences/gallery"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    Norcross Art Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/experiences/morgue"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    The Morgue
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Company Navigation */}
            <nav>
              <h3 className="font-semibold text-white mb-4 text-sm md:text-base">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Section - Full Width on Mobile */}
          <div className="mb-8 md:mb-12">
            <address className="not-italic">
              <h3 className="font-semibold text-white mb-4 text-sm md:text-base">Contact</h3>
              <div className="space-y-3 text-sm text-slate-400 mb-6">
                <div>
                  <a
                    href="tel:+14084782341"
                    className="hover:text-teal-400 transition-colors duration-200"
                  >
                    +1 (408) 478-2341
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:contact@offthecouchgames.com"
                    className="hover:text-teal-400 transition-colors duration-200"
                  >
                    contact@offthecouchgames.com
                  </a>
                </div>
                <div>
                  555 Mowry Avenue
                  <br />
                  Fremont, CA 94536
                </div>
              </div>

              {/* Social Links - Larger Icons with Enhanced Hover Effects */}
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/offthecouchgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  aria-label="Facebook"
                  title="Follow us on Facebook"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.396-.074-2.59-.074-2.833 0-4.815 1.722-4.815 4.89v2.184z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/offthecouchgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  aria-label="Instagram"
                  title="Follow us on Instagram"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com/offthecouchgames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  aria-label="Twitter"
                  title="Follow us on Twitter"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.yelp.com/biz/off-the-couch-games-fremont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-red-500 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  aria-label="Yelp"
                  title="Read reviews on Yelp"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.675 12.889a1.337 1.337 0 0 1 .578-1.774l3.921-2.263a1.334 1.334 0 0 1 1.989.475 1.337 1.337 0 0 1-.479 1.79l-3.92 2.263a1.334 1.334 0 0 1-1.89-.491m-5.295-.978a1.337 1.337 0 0 1-.578-1.774l3.92-2.263a1.334 1.334 0 1 1 1.411 2.265L9.893 12.4a1.334 1.334 0 0 1-1.888-.489m9.137-5.64a1.334 1.334 0 1 1 1.413-2.265l3.92 2.263a1.334 1.334 0 1 1-1.413 2.265m-4.98 9.5a1.337 1.337 0 0 1 .578-1.774l3.921-2.263a1.334 1.334 0 0 1 1.989.475 1.337 1.337 0 0 1-.479 1.79l-3.92 2.263a1.334 1.334 0 0 1-1.89-.491m-5.296-.978a1.337 1.337 0 0 1-.578-1.774l3.92-2.263a1.334 1.334 0 1 1 1.411 2.265l-3.92 2.263a1.334 1.334 0 0 1-1.888-.489m9.137-5.64a1.334 1.334 0 1 1 1.413-2.265l3.92 2.263a1.334 1.334 0 1 1-1.413 2.265" />
                  </svg>
                </a>
              </div>
            </address>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center md:justify-end mb-8 md:mb-12">
            <a
              href="#top"
              className="px-4 py-2 text-sm font-medium text-white bg-slate-800 hover:bg-teal-600 rounded-lg transition-all duration-200 transform hover:scale-105 inline-block"
              title="Back to top"
            >
              ↑ Back to Top
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-4">
              <p className="text-center md:text-left">
                &copy; {currentYear} Off The Couch Games. All rights reserved.
              </p>
              <div className="flex gap-6 flex-wrap justify-center">
                <a
                  href="#"
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
