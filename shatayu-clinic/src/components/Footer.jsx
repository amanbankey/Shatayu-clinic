import { Link } from "react-router-dom";
import { FaHeartbeat, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                <FaHeartbeat className="text-white text-lg" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">Shatayu</p>
                <p className="text-brand-400 text-xs font-medium tracking-widest uppercase">Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Dedicated to providing compassionate, high-quality healthcare to every patient. Your health is our priority.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-gray-400 hover:text-brand-400 text-sm transition-colors duration-200"
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-700">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-brand-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Pokale Vasti, Pushpam Colony, Bibwewadi, Pune 411037</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-brand-400 flex-shrink-0" />
                <a href="tel:8208468672" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">8208468672</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-brand-400 flex-shrink-0" />
                <a href="mailto:shatayu@clinic.com" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">shatayu@clinic.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-base mb-4 pb-2 border-b border-gray-700">Clinic Hours</h4>
            <ul className="space-y-2">
              {[
                { day: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
                { day: "Saturday", time: "9:00 AM – 5:00 PM" },
                { day: "Sunday", time: "10:00 AM – 2:00 PM" },
              ].map((h) => (
                <li key={h.day} className="flex items-start gap-2">
                  <FaClock className="text-brand-400 mt-0.5 flex-shrink-0 text-xs" />
                  <div>
                    <p className="text-white text-xs font-medium">{h.day}</p>
                    <p className="text-gray-400 text-xs">{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © 2026 Shatayu Clinic. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">Bibwewadi, Pune, Maharashtra</p>
        </div>
      </div>

      {/* <WhatsAppButton /> */}
    </footer>
  );
}
