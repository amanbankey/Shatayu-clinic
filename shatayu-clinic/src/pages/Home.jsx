import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import DoctorsSection from "../components/DoctorsSection";
import { Link } from "react-router-dom";
import { FaCalendarCheck, FaPhone, FaHeartbeat, FaShieldAlt, FaUserMd } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />

      <section className="py-10 bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: FaHeartbeat, title: "Integrated Care", desc: "Modern + Homeopathy" },
              { icon: FaShieldAlt, title: "Safe & Trusted", desc: "500+ happy patients" },
              { icon: FaUserMd, title: "Expert Doctors", desc: "MBBS & BHMS qualified" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-4 bg-white/10 rounded-2xl px-5 py-4">
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{title}</p>
                  <p className="text-brand-200 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection limit={6} />
      <DoctorsSection />

      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-700 to-brand-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80')" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Feel Better?
          </h2>
          <p className="text-brand-200 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Don't wait — book your appointment today or call us directly. Our doctors are here to help you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-brand-700 px-7 py-3 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl hover:bg-brand-50 transition-all duration-200"
            >
              <FaCalendarCheck />
              Book Appointment
            </Link>
            <a
              href="tel:8208468672"
              className="flex items-center gap-2 bg-brand-400/50 border border-brand-300/50 text-white px-7 py-3 rounded-xl font-bold text-sm backdrop-blur-sm hover:bg-brand-400/70 transition-all duration-200"
            >
              <FaPhone />
              8208468672
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
