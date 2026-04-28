import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

export default function Services() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <div className="bg-gradient-to-r from-brand-700 to-brand-500 py-14 md:py-20 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            What We Offer
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Our Services</h1>
          <p className="text-brand-100 text-sm md:text-base max-w-xl mx-auto px-4">
            Comprehensive healthcare services designed around your needs.
          </p>
        </div>

        <ServicesSection />

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Need a Consultation?</h3>
            <p className="text-gray-500 text-sm mb-6">Our expert doctors are just a call away. Book your appointment today.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md transition-all"
              >
                <FaCalendarCheck />
                Book Appointment
              </Link>
              <a
                href="tel:8208468672"
                className="flex items-center gap-2 border border-brand-300 text-brand-600 hover:bg-brand-50 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                Call: 8208468672
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
