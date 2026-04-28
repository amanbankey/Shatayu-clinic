import { Link } from "react-router-dom";
import { FaPhone, FaCalendarCheck, FaShieldAlt, FaUserMd, FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-brand-800/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6 backdrop-blur-sm">
              <FaStar className="text-yellow-400 text-xs" />
              <span>Trusted Healthcare in Pune</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4">
              Your Health,{" "}
              <span className="text-brand-200">Our Priority</span>
            </h1>
            <p className="text-brand-100 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Shatayu Clinic offers expert medical care combining modern medicine and homeopathy. Compassionate doctors, personalised treatment, right in Bibwewadi, Pune.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {/* <a
                href="tel:8208468672"
                className="flex items-center gap-2 bg-white text-brand-700 px-5 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:bg-brand-50 transition-all duration-200"
              >
                <FaPhone />
                Call Now
              </a> */}
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-brand-400/80 border border-brand-300/50 text-white px-5 py-3 rounded-xl font-semibold text-sm backdrop-blur-sm hover:bg-brand-400 transition-all duration-200"
              >
                <FaCalendarCheck />
                Book Appointment
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: FaUserMd, num: "3+", label: "Expert Doctors" },
                { icon: FaShieldAlt, num: "500+", label: "Happy Patients" },
                { icon: FaStar, num: "6+", label: "Services" },
              ].map(({ icon: Icon, num, label }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-2xl px-3 py-4 text-center backdrop-blur-sm">
                  <Icon className="text-brand-200 text-xl mx-auto mb-1" />
                  <p className="text-white font-bold text-lg md:text-xl">{num}</p>
                  <p className="text-brand-200 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80"
                alt="Doctor at Shatayu Clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-brand-700 font-bold text-sm">✅ MBBS + Homeopathy</p>
              <p className="text-gray-500 text-xs">Integrated Care</p>
            </div>
            {/* <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-2xl px-4 py-3 shadow-xl">
              <p className="font-bold text-sm">Open Today</p>
              <p className="text-green-100 text-xs">9 AM – 7 PM</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
