import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <div className="bg-gradient-to-r from-brand-700 to-brand-500 py-14 md:py-20 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-brand-100 text-sm md:text-base max-w-xl mx-auto px-4">
            Book an appointment or reach out with any questions.
          </p>
        </div>

        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Clinic Information</h2>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: FaMapMarkerAlt,
                      color: "bg-brand-100 text-brand-600",
                      label: "Address",
                      value: "Pokale Vasti, Pushpam Colony, Bibwewadi, Pune, Maharashtra 411037",
                    },
                    {
                      icon: FaPhone,
                      color: "bg-green-100 text-green-600",
                      label: "Phone",
                      value: "8208468672",
                      href: "tel:8208468672",
                    },
                    {
                      icon: FaWhatsapp,
                      color: "bg-green-100 text-green-600",
                      label: "WhatsApp",
                      value: "Chat with us on WhatsApp",
                      href: "https://wa.me/918208468672",
                    },
                    {
                      icon: FaEnvelope,
                      color: "bg-purple-100 text-purple-600",
                      label: "Email",
                      value: "shatayu@clinic.com",
                      href: "mailto:shatayu@clinic.com",
                    },
                  ].map(({ icon: Icon, color, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                        <Icon />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{label}</p>
                        {href ? (
                          <a href={href} className="text-gray-800 text-sm font-medium hover:text-brand-500 transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-gray-800 text-sm font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <FaClock className="text-brand-500" />
                    <h4 className="font-bold text-gray-900">Clinic Hours</h4>
                  </div>
                  <div className="space-y-2">
                    {[
                      { day: "Monday – Friday", time: "9:00 AM – 7:00 PM", open: true },
                      { day: "Saturday", time: "9:00 AM – 5:00 PM", open: true },
                      { day: "Sunday", time: "10:00 AM – 2:00 PM", open: true },
                    ].map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{h.day}</span>
                        <span className={`font-semibold ${h.open ? "text-green-600" : "text-red-500"}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
                <div className="mt-6 rounded-2xl overflow-hidden shadow-md h-52 md:h-64">
                  <iframe
                    title="Shatayu Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1!2d73.857!3d18.477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBibwewadi%2C%20Pune!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
