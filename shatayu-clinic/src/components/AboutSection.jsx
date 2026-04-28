import { FaCheckCircle, FaHeart, FaEye, FaAward } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80"
                alt="Shatayu Clinic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-brand-500 text-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="font-bold text-2xl">10+</p>
              <p className="text-brand-100 text-xs">Years Serving Pune</p>
            </div>
            <div className="absolute -top-5 -left-3 sm:-left-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100">
              <FaAward className="text-brand-500 text-2xl" />
              <p className="text-gray-800 text-xs font-semibold mt-1">Trusted Clinic</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase mb-4">
              About Shatayu Clinic
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Caring for Pune Families{" "}
              <span className="text-brand-500">Since Years</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5">
              Shatayu Clinic is a trusted healthcare centre in Bibwewadi, Pune, combining conventional medicine and homeopathy to deliver holistic, patient-centred care. Our team of qualified doctors brings decades of combined experience to every consultation.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              From general health consultations to specialised skin, hair, and homeopathic treatments, we are committed to providing affordable, compassionate, and effective healthcare to every individual and family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: FaHeart, label: "Mission", text: "Deliver compassionate, quality healthcare for all." },
                { icon: FaEye, label: "Vision", text: "Be Pune's most trusted integrated health clinic." },
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="bg-brand-50 rounded-2xl p-4 border border-brand-100">
                  <Icon className="text-brand-500 text-xl mb-2" />
                  <h4 className="text-gray-800 font-bold text-sm mb-1">Our {label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-2">
              {[
                "MBBS & BHMS qualified doctors",
                "Modern medicine + homeopathy",
                "Affordable, transparent pricing",
                "Patient-first approach",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                  <FaCheckCircle className="text-brand-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
