import { Link } from "react-router-dom";
import {
  FaStethoscope,
  FaSpa,
  FaLeaf,
  FaShieldAlt,
  FaChild,
  FaAllergies,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: FaStethoscope,
    title: "General Consultation",
    desc: "Comprehensive health check-ups, diagnosis, and treatment plans tailored for every patient.",
    color: "from-blue-500 to-brand-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: FaSpa,
    title: "Skin Care Treatment",
    desc: "Advanced dermatology solutions for acne, pigmentation, eczema, and overall skin health.",
    color: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    icon: FaLeaf,
    title: "Hair Care Treatment",
    desc: "Effective treatments for hair fall, dandruff, scalp issues, and hair regrowth therapies.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: FaAllergies,
    title: "Homeopathy Treatment",
    desc: "Safe, natural homeopathic remedies for chronic and acute conditions with zero side effects.",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: FaShieldAlt,
    title: "Preventive Health Checkups",
    desc: "Routine health screenings and preventive care to detect risks early and stay healthy.",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: FaChild,
    title: "Pediatric Care",
    desc: "Gentle, expert care for infants and children — from vaccinations to developmental checks.",
    color: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
];

export default function ServicesSection({ limit }) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Medical <span className="text-brand-500">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            From general medicine to specialised homeopathy, we offer comprehensive care under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {displayed.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <div
              key={title}
              className={`rounded-2xl border ${border} ${bg} p-6 md:p-7 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="text-white text-xl" />
              </div>
              <h3 className="text-gray-900 font-bold text-base md:text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-7 py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
            >
              View All Services <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
