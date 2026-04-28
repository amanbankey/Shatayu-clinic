import { FaPhone, FaUserMd, FaStar } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Shashikant Mane",
    qualification: "MBBS",
    speciality: "General Physician & Surgeon",
    phone: "7777777777",
    experience: "10+ Years",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    color: "from-brand-500 to-brand-700",
  },
  {
    name: "Dr. Neha Mane",
    qualification: "BHMS",
    speciality: "Homeopathic Consultant",
    phone: "8208468672",
    experience: "8+ Years",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Dr. Sangeeta Mane",
    qualification: "DHMS",
    speciality: "Acupressure",
    phone: "1111111111",
    experience: "7+ Years",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    color: "from-purple-500 to-violet-600",
  },
];

export default function DoctorsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase mb-3">
            Meet Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Expert <span className="text-brand-500">Doctors</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Experienced, compassionate, and dedicated to your well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100"
            >
              <div className={`relative h-52 md:h-60 bg-gradient-to-br ${doc.color} overflow-hidden`}>
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 flex items-center gap-1">
                  <FaStar className="text-yellow-300 text-xs" />
                  <span className="text-white text-xs font-medium">{doc.experience}</span>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${doc.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <FaUserMd className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-base leading-tight">{doc.name}</h3>
                    <p className="text-brand-500 text-sm font-semibold">{doc.qualification}</p>
                    <p className="text-gray-400 text-xs">{doc.speciality}</p>
                  </div>
                </div>

                <a
                  href={`tel:${doc.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-brand-50 border border-gray-200 hover:border-brand-300 text-gray-700 hover:text-brand-600 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                >
                  <FaPhone className="text-xs" />
                  {doc.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
