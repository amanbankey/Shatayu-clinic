import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import DoctorsSection from "../components/DoctorsSection";

export default function About() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <div className="bg-gradient-to-r from-brand-700 to-brand-500 py-14 md:py-20 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
            Who We Are
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">About Us</h1>
          <p className="text-brand-100 text-sm md:text-base max-w-xl mx-auto px-4">
            Learn about Shatayu Clinic's story, mission, and the dedicated team behind your care.
          </p>
        </div>
        <AboutSection />
        <DoctorsSection />
      </div>
      <Footer />
    </div>
  );
}
