import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHeartbeat, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-brand-500 rounded-xl flex items-center justify-center shadow-md group-hover:bg-brand-600 transition-colors">
              <FaHeartbeat className="text-white text-lg md:text-xl" />
            </div>
            <div className="leading-tight">
              <p className="text-brand-700 font-bold text-base md:text-lg leading-none">Shatayu</p>
              <p className="text-brand-400 font-medium text-xs tracking-widest uppercase">Clinic</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive(l.to)
                    ? "bg-brand-500 text-white shadow-md"
                    : "text-gray-600 hover:text-brand-600 hover:bg-brand-50"
                } ${l.label === "Services" && !isActive(l.to) ? "border border-brand-300 text-brand-600" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            {/* <a
              href="tel:8208468672"
              className="ml-3 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2 rounded-xl font-semibold text-sm shadow-md transition-all duration-200 hover:shadow-lg"
            >
              Call Now
            </a> */}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-brand-600 hover:bg-brand-50 transition-colors"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  isActive(l.to)
                    ? "bg-brand-500 text-white"
                    : "text-gray-700 hover:bg-brand-50 hover:text-brand-600"
                }`}
              >
                {l.label}
              </Link>
            ))}
            {/* <a
              href="tel:8208468672"
              className="mt-2 bg-brand-500 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center shadow-md"
            >
              📞 Call: 8208468672
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
}
